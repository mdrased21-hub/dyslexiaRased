import React, { useState } from 'react';
import { useFormik } from 'formik';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import useMinimizeAside from '../../../hooks/useMinimizeAside';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Button from '../../../components/bootstrap/Button';
import CommonTransActions from '../../common/CommonTransActions';
import Modal, { ModalBody, ModalHeader, ModalTitle } from '../../../components/bootstrap/Modal';
import Input from '../../../components/bootstrap/forms/Input';
import Wizard, { WizardItem } from '../../../components/Wizard';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Label from '../../../components/bootstrap/forms/Label';
import Checks, { ChecksGroup } from '../../../components/bootstrap/forms/Checks';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Select from '../../../components/bootstrap/forms/Select';
import showNotification from '../../../components/extras/showNotification';
import Icon from '../../../components/icon/Icon';
import { demoPages } from '../../../menu';
import useDarkMode from '../../../hooks/useDarkMode';

// eslint-disable-next-line react/prop-types
const PreviewItem = ({ title, value }) => {
	return (
		<>
			<div className='col-3 text-end'>{title}</div>
			<div className='col-9 fw-bold'>{value || '-'}</div>
		</>
	);
};

const SingleBoxedPage = () => {
	useMinimizeAside();
	const { darkModeStatus } = useDarkMode();

	const [newTransferModal, setNewTransferModal] = useState(false);

	const bankTypes = [
		{ id: 1, name: 'Fast Bank' },
		{ id: 2, name: 'Bank of World' },
		{ id: 3, name: 'OS Bank' },
	];
	const formik = useFormik({
		initialValues: {
			firstName: 'John',
			lastName: 'Doe',
			emailAddress: 'johndoe@site.com',
			phoneNumber: '',
			addressLine: '',
			addressLine2: '',
			city: '',
			state: '',
			zip: '',
			selectedBank: '',
			youSend: '',
			iban: '',
		},
		// eslint-disable-next-line no-unused-vars
		onSubmit: (values) => {
			setNewTransferModal(false);
			showNotification(
				<span className='d-flex align-items-center'>
					<Icon icon='Info' size='lg' className='me-1' />
					<span>Transaction queued</span>
				</span>,
				'The operation is queued, when it is successful, a notification will come again.',
			);
		},
	});

	return (
		<PageWrapper title={demoPages.singlePages.subMenu.boxedSingle.text}>
			<SubHeader>
				<SubHeaderLeft>
					<strong>Last Transfer</strong>
					<div
						className={`bg-l${
							darkModeStatus ? 'o25' : '10'
						}-warning text-warning fw-bold px-3 py-2 rounded-pill`}>
						Processing
					</div>
					<div className='text-muted'>
						<small>
							SWIFT: <span className='text-info fw-bold'>$200</span>
						</small>
					</div>
				</SubHeaderLeft>
				<SubHeaderRight>
					<Button
						color='info'
						isLight
						icon='PublishedWithChanges'
						onClick={() => {
							setNewTransferModal(true);
						}}>
						New Transfer
					</Button>
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<CommonTransActions />
			</Page>

			<Modal
				setIsOpen={setNewTransferModal}
				isOpen={newTransferModal}
				fullScreen
				titleId='transfer-modal'>
				<ModalHeader setIsOpen={setNewTransferModal}>
					<ModalTitle id='transfer-modal'>New Transfer</ModalTitle>
				</ModalHeader>
				<ModalBody className='h-100 d-flex align-items-center'>
					<div className='row w-100'>
						<div className='col-3 mx-auto shadow-3d-container'>
							<Wizard
								isHeader
								color='info'
								onSubmit={formik.handleSubmit}
								className='shadow-3d-info'>
								<WizardItem id='step1' title='Account Detail'>
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
															value={formik.values.firstName}
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
															value={formik.values.lastName}
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
															value={formik.values.phoneNumber}
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
															value={formik.values.emailAddress}
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
													value={formik.values.addressLine}
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
													value={formik.values.addressLine2}
												/>
											</FormGroup>
										</div>

										<div className='col-lg-6'>
											<FormGroup id='city' label='City' isFloating>
												<Input
													onChange={formik.handleChange}
													value={formik.values.city}
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
													value={formik.values.state}
												/>
											</FormGroup>
										</div>
										<div className='col-md-3'>
											<FormGroup id='zip' label='Zip' isFloating>
												<Input
													onChange={formik.handleChange}
													value={formik.values.zip}
												/>
											</FormGroup>
										</div>
									</div>
								</WizardItem>
								<WizardItem id='step3' title='Bank Information'>
									<Card>
										<CardHeader>
											<CardLabel icon='AccountBalance' iconColor='warning'>
												<CardTitle>Bank Information</CardTitle>
											</CardLabel>
										</CardHeader>
										<CardBody>
											<FormGroup>
												<Label>Bank Name</Label>
												<ChecksGroup>
													{bankTypes.map((b) => (
														<Checks
															key={b.id}
															type='radio'
															id={b.id.toString()}
															label={b.name}
															name='selectedBank'
															value={b.id.toString()}
															onChange={formik.handleChange}
															checked={formik.values.selectedBank}
														/>
													))}
												</ChecksGroup>
											</FormGroup>
										</CardBody>
									</Card>

									<Card className='mb-0'>
										<CardHeader>
											<CardLabel icon='Paid' iconColor='success'>
												<CardTitle>Price Information</CardTitle>
											</CardLabel>
										</CardHeader>
										<CardBody className='pt-0'>
											<div className='row g-4'>
												<div className='col-12'>
													<FormGroup
														id='youSend'
														label='Price'
														isFloating>
														<Input
															placeholder='Price'
															onChange={formik.handleChange}
															value={formik.values.youSend}
														/>
													</FormGroup>
												</div>
												<div className='col-12'>
													<FormGroup id='iban' label='IBAN' isFloating>
														<Input
															placeholder='IBAN'
															onChange={formik.handleChange}
															value={formik.values.iban}
														/>
													</FormGroup>
												</div>
											</div>
										</CardBody>
									</Card>
								</WizardItem>
								<WizardItem id='step4' title='Preview'>
									<div className='row g-3'>
										<div className='col-9 offset-3'>
											<h3 className='mt-4'>Summary</h3>
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
											<h4 className='mt-4'>Bank & Money</h4>
										</div>
										<PreviewItem
											title='Bank Name'
											value={formik.values.selectedBank}
										/>
										<PreviewItem title='IBAN' value={formik.values.iban} />
										<PreviewItem
											title='You Send'
											value={formik.values.youSend}
										/>
									</div>
								</WizardItem>
							</Wizard>
						</div>
					</div>
				</ModalBody>
			</Modal>
		</PageWrapper>
	);
};

export default SingleBoxedPage;
