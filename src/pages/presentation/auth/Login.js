import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Button from '../../../components/bootstrap/Button';
import Logo from '../../../components/Logo';
import Select from '../../../components/bootstrap/forms/Select';
import showNotification from '../../../components/extras/showNotification';
import { auth, db } from '../../../firebase-config';
import Spinner from '../../../components/bootstrap/Spinner';
import { dmsMenu, dmsStudentMenu } from '../../../menu';
import { setUser } from '../../../userSlice';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from '../../../components/bootstrap/Modal';

// eslint-disable-next-line react/prop-types
const LoginHeader = () => {
	return (
		<>
			<div className='text-center h1 fw-bold mt-5'>Dyslexia Monitoring System</div>
			<div className='text-center h4 text-muted mb-5'>Login To Continue!</div>
		</>
	);
};

const Login = () => {
	// const [isNewUser] = useState(isSignUp);

	const navigate = useNavigate(); // const ni type utk make sure variable tu takkan boleh ditukar
	const dispatch = useDispatch();

	const handleOnClick = async () => {
		if (email === '' || password === '' || selectedRole === '') {
			showNotification(
				'Notice', // String, HTML or Component
				'Please fill in all the required credentials.', // String, HTML or Component
				'warning', // 'default' || 'info' || 'warning' || 'success' || 'danger',
			);
			return;
		}

		setIsloading(true);

		try {
			const response = await signInWithEmailAndPassword(auth, email, password);

			const userUid = response.user.uid; // kalau bukak kat firebase, di authentication dia amik value kat user uid

			if (selectedRole === 'Admin') {
				const data = await getDocs(collection(db, 'admin')); // amik value under collection admin
				const docs = data.docs; // eslint-disable-line prefer-destructuring

				const isExist = docs.filter((doc) => doc.id === userUid)[0]; // compare username uid dekat authentication dengan document di dalam collection admin di database
				if (isExist) {
					const userData = isExist.data();
					dispatch(
						setUser({
							id: isExist.id,
							name: userData.name,
							subName: userData.schoolName,
							imageUrl: userData.imageUrl,
							role: 'admin',
						}),
					);
					navigate(`/${dmsMenu.studentList.path}`);
				} else {
					await auth.signOut(); // error handling utk kalau username uid ada dalam authentication tapi takde dalam collection
					showNotification(
						'Notice', // String, HTML or Component
						'User not found in database for role Admin', // String, HTML or Component
						'danger', // 'default' || 'info' || 'warning' || 'success' || 'danger',
					);
					setIsloading(false);
					return;
				}
			} else {
				// utk student
				const data = await getDocs(collection(db, 'students'));
				const docs = data.docs; // eslint-disable-line prefer-destructuring

				const isExist = docs.filter((doc) => doc.id === userUid)[0];
				if (isExist) {
					const userData = isExist.data();
					dispatch(
						setUser({
							id: isExist.id,
							name: userData.name,
							subName: userData.studentNo,
							imageUrl: userData.imageUrl,
							role: 'student',
						}),
					);
					navigate(`/${dmsStudentMenu.quizList.path}`);
				} else {
					await auth.signOut(); // error handling utk kalau username uid ada dalam authentication tapi takde dalam collection
					showNotification(
						'Notice', // String, HTML or Component
						'User not found in database for role Student', // String, HTML or Component
						'danger', // 'default' || 'info' || 'warning' || 'success' || 'danger',
					);
					setIsloading(false);
					return;
				}
			}

			showNotification(
				'Notice', // String, HTML or Component
				'Login success.', // String, HTML or Component
				'success', // 'default' || 'info' || 'warning' || 'success' || 'danger',
			);
		} catch (error) {
			showNotification(
				'Notice', // String, HTML or Component
				error.message, // String, HTML or Component
				'danger', // 'default' || 'info' || 'warning' || 'success' || 'danger',
			);
		}

		setIsloading(false);
	};

	const [selectedRole, setSelectedRole] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsloading] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (selectedRole === 'Student') {
			setIsOpen(true);
		}
	}, [selectedRole]);

	return (
		<PageWrapper title='Login' className='bg-primary'>
			<Page className='p-0'>
				<div className='row h-100 align-items-center justify-content-center'>
					<div className='col-xl-4 col-lg-6 col-md-8 shadow-3d-container'>
						<Card className='shadow-3d-dark' data-tour='login-page'>
							<CardBody>
								<div className='text-center my-5'>
									<Logo width='200px' height='auto' />
								</div>

								<LoginHeader />

								<form className='row g-4'>
									<div className='col-12'>
										<Select
											ariaLabel='Select Role'
											placeholder='Select Role'
											list={[
												{ value: 'Student', text: 'Student' },
												{ value: 'Admin', text: 'Admin' },
											]}
											value={selectedRole}
											onChange={(e) => setSelectedRole(e.target.value)}
										/>
										<FormGroup
											className='mt-3'
											id='login-email'
											isFloating
											label='Your email'>
											<Input
												autoComplete='email'
												onChange={(e) => setEmail(e.target.value)}
												value={email}
											/>
										</FormGroup>
										<FormGroup
											className='mt-3'
											id='login-password'
											isFloating
											label='Password'>
											<Input
												type='password'
												autoComplete='password'
												onChange={(e) => setPassword(e.target.value)}
												value={password}
											/>
										</FormGroup>
									</div>
									<div className='col-12'>
										<Button
											color='primary'
											className='w-100 py-3'
											onClick={handleOnClick}
											isDisable={isLoading}>
											{!isLoading ? 'Login' : <Spinner isSmall />}
										</Button>
									</div>
								</form>
							</CardBody>
						</Card>
					</div>
				</div>
				<Modal
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					isStaticBackdrop
					isCentered
					isAnimation>
					<ModalHeader
						setIsOpen={setIsOpen} // Example: setState
					>
						<ModalTitle id='notice'>Attention</ModalTitle>
					</ModalHeader>
					<ModalBody>
						For student, please have a teacher or parent to supervise the activity.
					</ModalBody>
					<ModalFooter>
						<Button color='info' onClick={() => setIsOpen(false)}>
							Okay
						</Button>
					</ModalFooter>
				</Modal>
			</Page>
		</PageWrapper>
	);
};
// Login.propTypes = {
// 	isSignUp: PropTypes.bool,
// };
// Login.defaultProps = {
// 	isSignUp: false,
// };

export default Login;
