import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import {
	collection,
	deleteDoc,
	doc,
	getDocs,
	orderBy,
	query,
	serverTimestamp,
	setDoc,
	where,
} from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Button from '../../../components/bootstrap/Button';
import Page from '../../../layout/Page/Page';
import Card, {
	CardBody,
	CardFooter,
	CardFooterLeft,
	CardFooterRight,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Avatar from '../../../components/Avatar';
import Input from '../../../components/bootstrap/forms/Input';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Icon from '../../../components/icon/Icon';
import validate from './helper/editStudentValidate';
import Select from '../../../components/bootstrap/forms/Select';
import showNotification from '../../../components/extras/showNotification';
import { dmsMenu, dmsMenu2, dmsStudentMenu } from '../../../menu';
import { db, secondaryAuth, storage } from '../../../firebase-config';
import Spinner from '../../../components/bootstrap/Spinner';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from '../../../components/bootstrap/Modal';
import { setStudents } from '../../../studentsSlice';

const EditFluidPage = () => {
	const { id } = useParams();

	const user = useSelector((state) => state.user);
	const students = useSelector((state) => state.students);
	const dispatch = useDispatch();

	const data = students.data?.filter((student) => student.id === id)[0];

	const formik = useFormik({
		initialValues: {
			img: '',
			name: data?.name,
			myKidNo: data?.myKidNo,
			gender: data?.gender,
			email: data?.email,

			year: data?.year,
			className: data?.className,
			studentNo: data?.studentNo,

			phoneNo: data?.phoneNo,
			parentGuardianName: data?.parentGuardianName,
			parentGuardianPhoneNo: data?.parentGuardianPhoneNo,

			addressLineOne: data?.addressLineOne,
			addressLineTwo: data?.addressLineTwo,
			postalCode: data?.postalCode,
			city: data?.city,
			state: data?.state,
		},
		validate,
		onSubmit: () => {
			editStudent();
		},
	});

	const [selectedFile, setSelectedFile] = useState();
	const [preview, setPreview] = useState();
	const [isLoading, setIsloading] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		if (!selectedFile) {
			setPreview(undefined);
			return;
		}

		const objectUrl = URL.createObjectURL(selectedFile);
		setPreview(objectUrl);

		// free memory when ever this component is unmounted
		return () => URL.revokeObjectURL(objectUrl); // eslint-disable-line consistent-return
	}, [selectedFile]);

	const editStudent = async () => {
		setIsloading(true);

		try {
			const imageRef = ref(storage, `user_image/${id}`);

			let url = data.imageUrl;

			if (selectedFile) {
				await uploadBytes(imageRef, selectedFile).then((snapshot) => {
					getDownloadURL(snapshot.ref).then((newUrl) => {
						url = newUrl;
					});
				});
			}

			const studentDoc = doc(db, 'students', id);

			setDoc(studentDoc, {
				name: formik.values.name,
				myKidNo: formik.values.myKidNo,
				gender: formik.values.gender,
				email: formik.values.email,

				year: formik.values.year,
				className: formik.values.className,
				studentNo: formik.values.studentNo,

				phoneNo: formik.values.phoneNo,
				parentGuardianName: formik.values.parentGuardianName,
				parentGuardianPhoneNo: formik.values.parentGuardianPhoneNo,

				addressLineOne: formik.values.addressLineOne,
				addressLineTwo: formik.values.addressLineTwo,
				postalCode: formik.values.postalCode,
				city: formik.values.city,
				state: formik.values.state,

				createdAt: serverTimestamp(),
				imageUrl: url,
				level: data.level,
			});

			// eslint-disable-next-line no-promise-executor-return
			const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 3000));
			await resolveAfter3Sec;

			showNotification(
				<span className='d-flex align-items-center'>
					<Icon icon='Info' size='lg' className='me-1' />
					<span>Updated Successfully</span>
				</span>,
				"Student's details have been successfully updated.",
			);

			await getStudents();

			if (user.data.role === 'admin') {
				navigate(`/${dmsMenu2.studentDetails.path}/${id}`);
			} else {
				navigate(`/${dmsStudentMenu.studentDetails.path}`);
			}
		} catch (error) {
			showNotification(
				'Notice', // String, HTML or Component
				error.message, // String, HTML or Component
				'danger', // 'default' || 'info' || 'warning' || 'success' || 'danger',
			);
		}

		setIsloading(false);
	};

	const getStudents = async () => {
		const docs = await getDocs(query(collection(db, 'students'), orderBy('createdAt', 'desc')));
		dispatch(setStudents(docs.docs.map((item) => ({ ...item.data(), id: item.id }))));
	};

	useEffect(() => {
		if (students.data.length === 0) {
			navigate(`../${dmsMenu.studentList.path}`);
		}
	}, [students.data, navigate]);

	const [studentPassword, setStudentPassword] = useState('');

	const deleteStudent = async () => {
		if (studentPassword === '') {
			return;
		}

		setIsDeleting(true);

		try {
			await signInWithEmailAndPassword(secondaryAuth, data.email, studentPassword);

			// eslint-disable-next-line no-promise-executor-return
			const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 3000));
			await resolveAfter3Sec;

			const studentDoc = doc(db, 'students', id);

			secondaryAuth.currentUser.delete().then(() => {
				deleteDoc(studentDoc);

				const imageRef = ref(storage, `user_image/${id}`);
				deleteObject(imageRef);
			});

			const docs = await getDocs(
				query(collection(db, 'marks'), where('studentId', '==', id)),
			);

			docs.forEach((item) => {
				deleteDoc(item.ref);
			});

			// eslint-disable-next-line no-promise-executor-return
			const resolveAfter4Sec = new Promise((resolve) => setTimeout(resolve, 4000));
			await resolveAfter4Sec;

			showNotification(
				<span className='d-flex align-items-center'>
					<Icon icon='Info' size='lg' className='me-1' />
					<span>Student Deleted Successfully</span>
				</span>,
				"Student's account details have been successfully deleted.",
			);

			navigate(`/${dmsMenu.studentList.path}`);
		} catch (error) {
			showNotification(
				'Notice', // String, HTML or Component
				error.message, // String, HTML or Component
				'danger', // 'default' || 'info' || 'warning' || 'success' || 'danger',
			);
		}

		setIsDeleting(false);
	};

	return (
		<PageWrapper title={dmsMenu2.editStudent.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Button
						color='info'
						isLink
						icon='ArrowBack'
						tag='a'
						to={`../${dmsMenu2.studentDetails.path}/${id}`}>
						Back to Details
					</Button>
				</SubHeaderLeft>
				{user.data.role === 'admin' && (
					<SubHeaderRight>
						<Button
							icon='Delete'
							color='danger'
							isLight
							tag='a'
							onClick={() => setIsOpen(true)}>
							Delete Student
						</Button>
					</SubHeaderRight>
				)}
			</SubHeader>
			<Page container='fluid'>
				<div className='row h-100'>
					<div className='col-12'>
						<Card stretch tag='form' noValidate onSubmit={formik.handleSubmit}>
							<CardHeader>
								<CardLabel icon='Contacts' iconColor='info'>
									<CardTitle>Student Details</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody isScrollable>
								<Card>
									<CardBody>
										<div className='row g-4 align-items-center'>
											{data && (
												<div className='col-xl-auto'>
													{preview ? (
														<Avatar src={preview} />
													) : (
														<Avatar src={data.imageUrl} />
													)}
												</div>
											)}
											<div className='col-xl'>
												<div className='row g-4'>
													<div className='col-auto'>
														<FormGroup id='img'>
															<Input
																type='file'
																autoComplete='photo'
																onChange={(e) => {
																	formik.handleChange(e);
																	setSelectedFile(
																		e.target.files[0],
																	);
																	// console.log(e.target.files[0].size);
																}}
																value={formik.values.img}
															/>
														</FormGroup>
													</div>
												</div>
											</div>
										</div>
									</CardBody>
								</Card>
								<Card>
									<CardHeader>
										<CardLabel icon='Edit' iconColor='primary'>
											<CardTitle>Personal Information</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<div className='row g-4'>
											<div className='col-lg-6'>
												<FormGroup id='name' label='Full Name' isFloating>
													<Input value={formik.values.name} disabled />
												</FormGroup>
											</div>
											<div className='col-lg-6'>
												<FormGroup
													id='myKidNo'
													label='My Kid No.'
													isFloating>
													<Input
														placeholder='My Kid No.'
														autoComplete='myKidNo'
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.myKidNo}
														isValid={formik.isValid}
														isTouched={formik.touched.myKidNo}
														invalidFeedback={formik.errors.myKidNo}
														validFeedback='Looks good!'
													/>
												</FormGroup>
											</div>
											<div className='col-lg-6'>
												<FormGroup id='gender' label='Gender' isFloating>
													<Select
														ariaLabel='Gender'
														placeholder='Choose...'
														list={[
															{ value: 'Male', text: 'Male' },
															{ value: 'Female', text: 'Female' },
														]}
														autoComplete='gender'
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.gender}
														isValid={formik.isValid}
														isTouched={formik.touched.gender}
														invalidFeedback={formik.errors.gender}
														validFeedback='Looks good!'
													/>
												</FormGroup>
											</div>
											<div className='col-lg-6'>
												<FormGroup
													id='email'
													label='Email Address'
													isFloating>
													<Input
														type='email'
														placeholder='Email Address'
														autoComplete='email'
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.email}
														isValid={formik.isValid}
														isTouched={formik.touched.email}
														invalidFeedback={formik.errors.email}
														validFeedback='Looks good!'
													/>
												</FormGroup>
											</div>
										</div>
									</CardBody>
								</Card>
								<Card>
									<CardHeader>
										<CardLabel icon='School' iconColor='secondary'>
											<CardTitle>School Information</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<div className='row g-4'>
											<div className='col-lg-6'>
												<FormGroup
													id='className'
													label='Class Name'
													isFloating>
													<Input
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.className}
														isValid={formik.isValid}
														isTouched={formik.touched.className}
														invalidFeedback={formik.errors.className}
														validFeedback='Looks good!'
													/>
												</FormGroup>
											</div>
											<div className='col-lg-3'>
												<FormGroup id='year' label='Year' isFloating>
													<Input
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.year}
														isValid={formik.isValid}
														isTouched={formik.touched.year}
														invalidFeedback={formik.errors.year}
														validFeedback='Looks good!'
													/>
												</FormGroup>
											</div>
											<div className='col-lg-3'>
												<FormGroup
													id='studentNo'
													label='Student No.'
													isFloating>
													<Input
														value={formik.values.studentNo}
														disabled
													/>
												</FormGroup>
											</div>
										</div>
									</CardBody>
								</Card>
								<Card>
									<CardHeader>
										<CardLabel icon='Phone' iconColor='warning'>
											<CardTitle>Contact Information</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<div className='row g-4'>
											<div className='col-lg-6'>
												<FormGroup
													id='parentGuardianName'
													label="Parent's / Guardian's Name"
													isFloating>
													<Input
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.parentGuardianName}
														isValid={formik.isValid}
														isTouched={
															formik.touched.parentGuardianName
														}
														invalidFeedback={
															formik.errors.parentGuardianName
														}
														validFeedback='Looks good!'
													/>
												</FormGroup>
											</div>
											<div className='col-lg-3'>
												<FormGroup
													id='parentGuardianPhoneNo'
													label="Parent's / Guardian's Phone No."
													isFloating>
													<Input
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.parentGuardianPhoneNo}
														isValid={formik.isValid}
														isTouched={
															formik.touched.parentGuardianPhoneNo
														}
														invalidFeedback={
															formik.errors.parentGuardianPhoneNo
														}
														validFeedback='Looks good!'
													/>
												</FormGroup>
											</div>
											<div className='col-lg-3'>
												<FormGroup
													id='phoneNo'
													label="Student's Phone No."
													isFloating>
													<Input
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.phoneNo}
														isValid={formik.isValid}
														isTouched={formik.touched.phoneNo}
														invalidFeedback={formik.errors.phoneNo}
														validFeedback='Looks good!'
													/>
												</FormGroup>
											</div>
										</div>
									</CardBody>
								</Card>
								<Card>
									<CardHeader>
										<CardLabel icon='Place' iconColor='info'>
											<CardTitle>Address Information</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<div className='row g-4'>
											<div className='col-lg-12'>
												<FormGroup
													id='addressLineOne'
													label='Address Line'
													isFloating>
													<Input
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.addressLineOne}
														isValid={formik.isValid}
														isTouched={formik.touched.addressLineOne}
														invalidFeedback={
															formik.errors.addressLineOne
														}
														validFeedback='Looks good!'
													/>
												</FormGroup>
											</div>
											<div className='col-lg-12'>
												<FormGroup
													id='addressLineTwo'
													label='Address Line 2'
													isFloating>
													<Input
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.addressLineTwo}
														isValid={formik.isValid}
														isTouched={formik.touched.addressLineTwo}
														invalidFeedback={
															formik.errors.addressLineTwo
														}
														validFeedback='Looks good!'
													/>
												</FormGroup>
											</div>
											<div className='col-md-3'>
												<FormGroup
													id='postalCode'
													label='Postal Code'
													isFloating>
													<Input
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.postalCode}
														isValid={formik.isValid}
														isTouched={formik.touched.postalCode}
														invalidFeedback={formik.errors.postalCode}
													/>
												</FormGroup>
											</div>
											<div className='col-lg-6'>
												<FormGroup id='city' label='City' isFloating>
													<Input
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.city}
														isValid={formik.isValid}
														isTouched={formik.touched.city}
														invalidFeedback={formik.errors.city}
														validFeedback='Looks good!'
													/>
												</FormGroup>
											</div>
											<div className='col-md-3'>
												<FormGroup id='state' label='State' isFloating>
													<Input
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.state}
														isValid={formik.isValid}
														isTouched={formik.touched.state}
														invalidFeedback={formik.errors.state}
														validFeedback='Looks good!'
													/>
												</FormGroup>
											</div>
										</div>
									</CardBody>
								</Card>
							</CardBody>
							<CardFooter>
								<CardFooterLeft>
									<Button
										color='info'
										isLink
										type='reset'
										onClick={formik.resetForm}>
										Reset
									</Button>
								</CardFooterLeft>
								<CardFooterRight>
									<Button
										type='submit'
										icon='Save'
										color='info'
										isOutline
										isDisable={
											(!formik.isValid && !!formik.submitCount) || isLoading
										}>
										{!isLoading ? 'Save' : <Spinner isSmall />}
									</Button>
								</CardFooterRight>
							</CardFooter>
						</Card>
					</div>
				</div>
			</Page>
			<Modal isOpen={isOpen} setIsOpen={setIsOpen} isCentered isAnimation isStaticBackdrop>
				<ModalHeader setIsOpen={setIsOpen}>
					<ModalTitle id='deleteStudent'>
						Are you sure want to delete this student?
					</ModalTitle>
				</ModalHeader>
				<ModalBody>
					<p className='text-info'>
						Student's password are required for deleting the account.
					</p>
					<FormGroup id='studentPassword' label="Student's Password" isFloating>
						<Input
							type='password'
							placeholder="Student's Password"
							onChange={(e) => setStudentPassword(e.target.value)}
							value={studentPassword}
						/>
					</FormGroup>
				</ModalBody>
				<ModalFooter>
					<Button color='danger' onClick={() => deleteStudent()} isDisable={isDeleting}>
						{!isDeleting ? 'Delete' : <Spinner isSmall />}
					</Button>
				</ModalFooter>
			</Modal>
		</PageWrapper>
	);
};

export default EditFluidPage;
