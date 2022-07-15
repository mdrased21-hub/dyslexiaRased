import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from 'firebase/auth';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/bootstrap/Button';
import Card, {
	CardBody,
	CardFooter,
	CardFooterLeft,
	CardFooterRight,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Spinner from '../../../components/bootstrap/Spinner';
import showNotification from '../../../components/extras/showNotification';
import Icon from '../../../components/icon/Icon';
import { auth } from '../../../firebase-config';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import { demoPages, dmsMenu } from '../../../menu';

const ChangePasswordPage = () => {
	const navigate = useNavigate();

	const [isLoading, setIsloading] = useState(false);

	const formik = useFormik({
		initialValues: {
			currentPassword: '',
			newPassword: '',
			confirmPassword: '',
		},
		validate: (values) => {
			const errors = {};

			if (!values.currentPassword) {
				errors.currentPassword = 'Required';
			}

			if (!values.newPassword) {
				errors.newPassword = 'Please provide a valid password.';
			} else {
				errors.newPassword = '';
				let case1 = false;
				let case2 = false;
				let case3 = false;
				let case4 = false;
				let case5 = false;

				if (values.newPassword.length < 8 || values.newPassword.length > 32) {
					case1 = true;
					errors.newPassword +=
						'The password must be at least 8 characters long, but no more than 32. ';
				}
				if (!/[0-9]/g.test(values.newPassword)) {
					case2 = true;
					errors.newPassword +=
						'Require that at least one digit appear anywhere in the string. ';
				}
				if (!/[a-z]/g.test(values.newPassword)) {
					case3 = true;
					errors.newPassword +=
						'Require that at least one lowercase letter appear anywhere in the string. ';
				}
				if (!/[A-Z]/g.test(values.newPassword)) {
					case4 = true;
					errors.newPassword +=
						'Require that at least one uppercase letter appear anywhere in the string. ';
				}
				if (!/[!@#$%^&*)(+=._-]+$/g.test(values.newPassword)) {
					case5 = true;
					errors.newPassword +=
						'Require that at least one special character appear anywhere in the string. ';
				}

				if (!case1 && !case2 && !case3 && !case4 && !case5) {
					delete errors.newPassword;
				}
			}

			if (!values.confirmPassword) {
				errors.confirmPassword = 'Please provide a valid password.';
			} else if (values.newPassword !== values.confirmPassword) {
				errors.confirmPassword = 'Passwords do not match.';
			}

			return errors;
		},
		onSubmit: () => {
			changePassword();
		},
	});

	const changePassword = async () => {
		setIsloading(true);

		const emailCred = EmailAuthProvider.credential(
			auth.currentUser.email,
			formik.values.currentPassword,
		);

		try {
			await reauthenticateWithCredential(auth.currentUser, emailCred);
			await updatePassword(auth.currentUser, formik.values.newPassword);

			showNotification(
				<span className='d-flex align-items-center'>
					<Icon icon='Info' size='lg' className='me-1' />
					<span>Password Changed Successfully</span>
				</span>,
				'Your password have been successfully changed. Please login using your new password.',
			);

			auth.signOut();
			navigate(`./${demoPages.login.path}`);
		} catch (error) {
			showNotification(
				'Notice', // String, HTML or Component
				error.message, // String, HTML or Component
				'danger', // 'default' || 'info' || 'warning' || 'success' || 'danger',
			);
		}

		setIsloading(false);
	};

	return (
		<PageWrapper title={dmsMenu.changePassword.text}>
			<Page container='fluid'>
				<div className='row'>
					<div className='col'>
						<Card stretch tag='form' noValidate onSubmit={formik.handleSubmit}>
							<CardHeader>
								<CardLabel icon='Lock' iconColor='success'>
									<CardTitle>Password Change</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-xl-4'>
										<FormGroup
											id='currentPassword'
											label='Current password'
											isFloating>
											<Input
												type='password'
												placeholder='Current password'
												autoComplete='current-password'
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.currentPassword}
												isValid={formik.isValid}
												isTouched={formik.touched.currentPassword}
												invalidFeedback={formik.errors.currentPassword}
												validFeedback='Looks good!'
											/>
										</FormGroup>
									</div>
									<div className='col-xl-4'>
										<FormGroup id='newPassword' label='New password' isFloating>
											<Input
												type='password'
												placeholder='New password'
												autoComplete='new-password'
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.newPassword}
												isValid={formik.isValid}
												isTouched={formik.touched.newPassword}
												invalidFeedback={formik.errors.newPassword}
												validFeedback='Looks good!'
											/>
										</FormGroup>
									</div>
									<div className='col-xl-4'>
										<FormGroup
											id='confirmPassword'
											label='Confirm new password'
											isFloating>
											<Input
												type='password'
												placeholder='Confirm new password'
												autoComplete='new-password'
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.confirmPassword}
												isValid={formik.isValid}
												isTouched={formik.touched.confirmPassword}
												invalidFeedback={formik.errors.confirmPassword}
												validFeedback='Looks good!'
											/>
										</FormGroup>
									</div>
								</div>
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
		</PageWrapper>
	);
};

export default ChangePasswordPage;
