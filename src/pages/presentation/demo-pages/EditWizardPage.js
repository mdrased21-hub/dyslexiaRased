import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Card, {
	CardBody,
	CardFooter,
	CardFooterLeft,
	CardFooterRight,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Button from '../../../components/bootstrap/Button';
import Wizard, { WizardItem } from '../../../components/Wizard';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Select from '../../../components/bootstrap/forms/Select';
import Label from '../../../components/bootstrap/forms/Label';
import Checks, { ChecksGroup } from '../../../components/bootstrap/forms/Checks';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../../layout/SubHeader/SubHeader';
import Avatar from '../../../components/Avatar';
import User1Webp from '../../../assets/img/wanna/wanna2.webp';
import User1Img from '../../../assets/img/wanna/wanna2.png';
import validate from './helper/editPagesValidate';
import CommonMyWallet from '../../common/CommonMyWallet';
import editPasswordValidate from './helper/editPasswordValidate';
import showNotification from '../../../components/extras/showNotification';
import Icon from '../../../components/icon/Icon';
import { demoPages } from '../../../menu';

// eslint-disable-next-line react/prop-types
const PreviewItem = ({ title, value }) => {
	return (
		<>
			<div className='col-3 text-end'>{title}</div>
			<div className='col-9 fw-bold'>{value || '-'}</div>
		</>
	);
};

const EditWizardPage = () => {
	const navigate = useNavigate();

	const TABS = {
		ACCOUNT_DETAIL: 'Account Details',
		PASSWORD: 'Password',
		MY_WALLET: 'My Wallet',
	};
	const [activeTab, setActiveTab] = useState(TABS.ACCOUNT_DETAIL);

	const notificationTypes = [
		{ id: 1, name: 'New Order' },
		{ id: 2, name: 'New Customer' },
		{ id: 3, name: 'Order Status' },
	];

	const formik = useFormik({
		initialValues: {
			firstName: 'John',
			lastName: 'Doe',
			displayName: 'johndoe',
			emailAddress: 'johndoe@site.com',
			phoneNumber: '',
			addressLine: '',
			addressLine2: '',
			city: '',
			state: '',
			zip: '',
			emailNotification: ['2'],
			pushNotification: ['1', '2', '3'],
		},
		validate,
		onSubmit: () => {
			showNotification(
				<span className='d-flex align-items-center'>
					<Icon icon='Info' size='lg' className='me-1' />
					<span>Updated Successfully</span>
				</span>,
				"The user's account details have been successfully updated.",
			);
		},
	});

	const formikPassword = useFormik({
		initialValues: {
			currentPassword: '',
			newPassword: '',
			confirmPassword: '',
		},
		validate: editPasswordValidate,
		onSubmit: () => {
			showNotification(
				<span className='d-flex align-items-center'>
					<Icon icon='Info' size='lg' className='me-1' />
					<span>Updated Successfully</span>
				</span>,
				"The user's password have been successfully updated.",
			);
		},
	});

	return (
		<PageWrapper title={demoPages.editPages.subMenu.editWizard.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Button color='info' isLink icon='ArrowBack' onClick={() => navigate(-1)}>
						Back to List
					</Button>
					<SubheaderSeparator />
					<Avatar srcSet={User1Webp} src={User1Img} size={32} />
					<span>
						<strong>Timothy J. Doe</strong>
					</span>
					<span className='text-muted'>Edit User</span>
				</SubHeaderLeft>
				<SubHeaderRight>
					<Button
						color='dark'
						isLight
						icon='Add'
						onClick={() => {
							setActiveTab(TABS.ACCOUNT_DETAIL);
							formik.setValues({
								firstName: '',
								lastName: '',
								displayName: '',
								emailAddress: '',
								phoneNumber: '',
								addressLine: '',
								addressLine2: '',
								city: '',
								state: '',
								zip: '',
								emailNotification: [],
								pushNotification: [],
							});
						}}>
						Add New
					</Button>
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row h-100 pb-3'>
					<div className='col-lg-4 col-md-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='AccountCircle'>
									<CardTitle>User Information</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody isScrollable>
								<div className='row g-3'>
									<div className='col-12'>
										<Button
											icon='Contacts'
											color='info'
											className='w-100 p-3'
											isLight={TABS.ACCOUNT_DETAIL !== activeTab}
											onClick={() => setActiveTab(TABS.ACCOUNT_DETAIL)}>
											{TABS.ACCOUNT_DETAIL}
										</Button>
									</div>
									<div className='col-12'>
										<Button
											icon='LocalPolice'
											color='info'
											className='w-100 p-3'
											isLight={TABS.PASSWORD !== activeTab}
											onClick={() => setActiveTab(TABS.PASSWORD)}>
											{TABS.PASSWORD}
										</Button>
									</div>
									<div className='col-12'>
										<Button
											icon='Style'
											color='info'
											className='w-100 p-3'
											isLight={TABS.MY_WALLET !== activeTab}
											onClick={() => setActiveTab(TABS.MY_WALLET)}>
											{TABS.MY_WALLET}
										</Button>
									</div>
								</div>
							</CardBody>
							<CardFooter>
								<CardFooterLeft className='w-100'>
									<Button
										icon='Delete'
										color='danger'
										isLight
										className='w-100 p-3'>
										Delete User
									</Button>
								</CardFooterLeft>
							</CardFooter>
						</Card>
					</div>
					<div className='col-lg-8 col-md-6'>
						{TABS.ACCOUNT_DETAIL === activeTab && (
							<Wizard
								isHeader
								stretch
								color='info'
								noValidate
								onSubmit={formik.handleSubmit}
								className='shadow-3d-info'>
								<WizardItem id='step1' title='Account Detail'>
									<Card>
										<CardBody>
											<div className='row g-4 align-items-center'>
												<div className='col-xl-auto'>
													<Avatar srcSet={User1Webp} src={User1Img} />
												</div>
												<div className='col-xl'>
													<div className='row g-4'>
														<div className='col-auto'>
															<Input
																type='file'
																autoComplete='photo'
															/>
														</div>
														<div className='col-auto'>
															<Button
																color='dark'
																isLight
																icon='Delete'>
																Delete Avatar
															</Button>
														</div>
														<div className='col-12'>
															<p className='lead text-muted'>
																Avatar helps your teammates get to
																know you.
															</p>
														</div>
													</div>
												</div>
											</div>
										</CardBody>
									</Card>

									<Card>
										<CardHeader>
											<CardLabel icon='Edit' iconColor='warning'>
												<CardTitle>Personal Information</CardTitle>
											</CardLabel>
										</CardHeader>
										<CardBody className='pt-0'>
											<div className='row g-4'>
												<div className='col-md-6'>
													<FormGroup
														id='firstName'
														label='First Name'
														isFloating>
														<Input
															placeholder='First Name'
															autoComplete='additional-name'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.firstName}
															isValid={formik.isValid}
															isTouched={formik.touched.firstName}
															invalidFeedback={
																formik.errors.firstName
															}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>
												<div className='col-md-6'>
													<FormGroup
														id='lastName'
														label='Last Name'
														isFloating>
														<Input
															placeholder='Last Name'
															autoComplete='family-name'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.lastName}
															isValid={formik.isValid}
															isTouched={formik.touched.lastName}
															invalidFeedback={formik.errors.lastName}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>
												<div className='col-12'>
													<FormGroup
														id='displayName'
														label='Display Name'
														isFloating
														formText='This will be how your name will be displayed in the account section and in reviews'>
														<Input
															placeholder='Display Name'
															autoComplete='username'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.displayName}
															isValid={formik.isValid}
															isTouched={formik.touched.displayName}
															invalidFeedback={
																formik.errors.displayName
															}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>
											</div>
										</CardBody>
									</Card>

									<Card className='mb-0'>
										<CardHeader>
											<CardLabel icon='MarkunreadMailbox' iconColor='success'>
												<CardTitle>Contact Information</CardTitle>
											</CardLabel>
										</CardHeader>
										<CardBody className='pt-0'>
											<div className='row g-4'>
												<div className='col-12'>
													<FormGroup
														id='phoneNumber'
														label='Phone Number'
														isFloating>
														<Input
															placeholder='Phone Number'
															type='tel'
															autoComplete='tel'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.phoneNumber}
															isValid={formik.isValid}
															isTouched={formik.touched.phoneNumber}
															invalidFeedback={
																formik.errors.phoneNumber
															}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>
												<div className='col-12'>
													<FormGroup
														id='emailAddress'
														label='Email address'
														isFloating>
														<Input
															type='email'
															placeholder='Email address'
															autoComplete='email'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.emailAddress}
															isValid={formik.isValid}
															isTouched={formik.touched.emailAddress}
															invalidFeedback={
																formik.errors.emailAddress
															}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>
											</div>
										</CardBody>
									</Card>
								</WizardItem>
								<WizardItem id='step2' title='Address'>
									<div className='row g-4'>
										<div className='col-lg-12'>
											<FormGroup
												id='addressLine'
												label='Address Line'
												isFloating>
												<Input
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													value={formik.values.addressLine}
													isValid={formik.isValid}
													isTouched={formik.touched.addressLine}
													invalidFeedback={formik.errors.addressLine}
													validFeedback='Looks good!'
												/>
											</FormGroup>
										</div>
										<div className='col-lg-12'>
											<FormGroup
												id='addressLine2'
												label='Address Line 2'
												isFloating>
												<Input
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													value={formik.values.addressLine2}
													isValid={formik.isValid}
													isTouched={formik.touched.addressLine2}
													invalidFeedback={formik.errors.addressLine2}
													validFeedback='Looks good!'
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
												<Select
													ariaLabel='State'
													placeholder='Choose...'
													list={[
														{ value: 'usa', text: 'USA' },
														{ value: 'ca', text: 'Canada' },
													]}
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													value={formik.values.state}
													isValid={formik.isValid}
													isTouched={formik.touched.state}
													invalidFeedback={formik.errors.state}
												/>
											</FormGroup>
										</div>
										<div className='col-md-3'>
											<FormGroup id='zip' label='Zip' isFloating>
												<Input
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													value={formik.values.zip}
													isValid={formik.isValid}
													isTouched={formik.touched.zip}
													invalidFeedback={formik.errors.zip}
												/>
											</FormGroup>
										</div>
									</div>
								</WizardItem>
								<WizardItem id='step3' title='Notifications'>
									<div className='row g-4'>
										<div className='col-12'>
											<FormGroup>
												<Label>Email Notifications</Label>
												<ChecksGroup>
													{notificationTypes.map((cat) => (
														<Checks
															type='switch'
															key={cat.id}
															id={cat.id.toString()}
															name='emailNotification'
															label={cat.name}
															value={cat.id}
															onChange={formik.handleChange}
															checked={formik.values.emailNotification.includes(
																cat.id.toString(),
															)}
														/>
													))}
												</ChecksGroup>
											</FormGroup>
										</div>
										<div className='col-12'>
											<FormGroup>
												<Label>Push Notifications</Label>
												<ChecksGroup>
													{notificationTypes.map((cat) => (
														<Checks
															type='switch'
															key={cat.id}
															id={cat.id.toString()}
															name='pushNotification'
															label={cat.name}
															value={cat.id}
															onChange={formik.handleChange}
															checked={formik.values.pushNotification.includes(
																cat.id.toString(),
															)}
														/>
													))}
												</ChecksGroup>
											</FormGroup>
										</div>
									</div>
								</WizardItem>
								<WizardItem id='step4' title='Preview'>
									<div className='row g-3'>
										<div className='col-9 offset-3'>
											<h3 className='mt-4'>Account Detail</h3>
											<h4 className='mt-4'>Personal Information</h4>
										</div>
										<PreviewItem
											title='First Name'
											value={formik.values.firstName}
										/>
										<PreviewItem
											title='Last Name'
											value={formik.values.lastName}
										/>
										<PreviewItem
											title='Display Name'
											value={formik.values.displayName}
										/>
										<div className='col-9 offset-3'>
											<h4 className='mt-4'>Contact Information</h4>
										</div>
										<PreviewItem
											title='Phone Number'
											value={formik.values.phoneNumber}
										/>
										<PreviewItem
											title='Email Address'
											value={formik.values.emailAddress}
										/>
										<div className='col-9 offset-3'>
											<h3 className='mt-4'>Address</h3>
										</div>
										<PreviewItem
											title='Address Line'
											value={formik.values.addressLine}
										/>
										<PreviewItem
											title='Address Line 2'
											value={formik.values.addressLine2}
										/>
										<PreviewItem title='City' value={formik.values.city} />
										<PreviewItem title='State' value={formik.values.state} />
										<PreviewItem title='ZIP' value={formik.values.zip} />
										<div className='col-9 offset-3'>
											<h4 className='mt-4'>Notification</h4>
										</div>
										<PreviewItem
											title='Email Notifications'
											value={notificationTypes.map(
												(cat) =>
													formik.values.emailNotification.includes(
														cat.id.toString(),
													) && `${cat.name}, `,
											)}
										/>
										<PreviewItem
											title='Push Notifications'
											value={notificationTypes.map(
												(cat) =>
													formik.values.pushNotification.includes(
														cat.id.toString(),
													) && `${cat.name}, `,
											)}
										/>
									</div>
								</WizardItem>
							</Wizard>
						)}
						{TABS.PASSWORD === activeTab && (
							<Card
								stretch
								tag='form'
								noValidate
								onSubmit={formikPassword.handleSubmit}>
								<CardHeader>
									<CardLabel icon='LocalPolice' iconColor='info'>
										<CardTitle>{TABS.PASSWORD}</CardTitle>
									</CardLabel>
								</CardHeader>
								<CardBody className='pb-0' isScrollable>
									<div className='row g-4'>
										<div className='col-12'>
											<FormGroup
												id='currentPassword'
												label='Current password'
												isFloating>
												<Input
													type='password'
													placeholder='Current password'
													autoComplete='current-password'
													onChange={formikPassword.handleChange}
													value={formikPassword.values.currentPassword}
												/>
											</FormGroup>
										</div>
										<div className='col-12'>
											<FormGroup
												id='newPassword'
												label='New password'
												isFloating>
												<Input
													type='password'
													placeholder='New password'
													autoComplete='new-password'
													onChange={formikPassword.handleChange}
													onBlur={formikPassword.handleBlur}
													value={formikPassword.values.newPassword}
													isValid={formikPassword.isValid}
													isTouched={formikPassword.touched.newPassword}
													invalidFeedback={
														formikPassword.errors.newPassword
													}
													validFeedback='Looks good!'
												/>
											</FormGroup>
										</div>
										<div className='col-12'>
											<FormGroup
												id='confirmPassword'
												label='Confirm new password'
												isFloating>
												<Input
													type='password'
													placeholder='Confirm new password'
													autoComplete='new-password'
													onChange={formikPassword.handleChange}
													onBlur={formikPassword.handleBlur}
													value={formikPassword.values.confirmPassword}
													isValid={formikPassword.isValid}
													isTouched={
														formikPassword.touched.confirmPassword
													}
													invalidFeedback={
														formikPassword.errors.confirmPassword
													}
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
											onClick={formikPassword.resetForm}>
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
												!formikPassword.isValid &&
												!!formikPassword.submitCount
											}>
											Save
										</Button>
									</CardFooterRight>
								</CardFooter>
							</Card>
						)}
						{TABS.MY_WALLET === activeTab && <CommonMyWallet />}
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default EditWizardPage;
