import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import classNames from 'classnames';
import { Calendar as DatePicker } from 'react-date-range';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../../layout/SubHeader/SubHeader';
import Button, { ButtonGroup } from '../../../components/bootstrap/Button';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Card, {
	CardActions,
	CardBody,
	CardFooter,
	CardFooterLeft,
	CardFooterRight,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../components/bootstrap/Card';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import CommonDesc from '../../../components/common/CommonDesc';
import Avatar from '../../../components/Avatar';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Select from '../../../components/bootstrap/forms/Select';
import validate from './helper/editPagesValidate';
import validateAddress from './helper/editPageAddressValidate';
import CommonMyWallet from '../../common/CommonMyWallet';
import USERS from '../../../common/data/userDummyData';
import {
	CalendarTodayButton,
	CalendarViewModeButtons,
	getLabel,
	getUnitType,
	getViews,
} from '../../../components/extras/calendarHelper';
import eventList from '../../../common/data/events';
import Icon from '../../../components/icon/Icon';
import OffCanvas, {
	OffCanvasBody,
	OffCanvasHeader,
	OffCanvasTitle,
} from '../../../components/bootstrap/OffCanvas';
import Checks from '../../../components/bootstrap/forms/Checks';
import Popovers from '../../../components/bootstrap/Popovers';
import { demoPages } from '../../../menu';
import showNotification from '../../../components/extras/showNotification';

const localizer = momentLocalizer(moment);
const now = new Date();

const MyEvent = (data) => {
	const { event } = data;
	return (
		<div className='row g-2'>
			<div className='col text-truncate'>
				{event.icon && <Icon icon={event.icon} size='lg' className='me-2' />}
				{event.name}
			</div>
		</div>
	);
};

const MyWeekEvent = (data) => {
	const { event } = data;
	return (
		<div className='row g-2'>
			<div className='col-12 text-truncate'>
				{event.icon && <Icon icon={event.icon} size='lg' className='me-2' />}
				{event.name}
			</div>
		</div>
	);
};

const EditBoxedPage = () => {
	const TABS = {
		ACCOUNT_DETAIL: 'Account Details',
		ADDRESS: 'Address',
		MY_WALLET: 'My Wallet',
		APPOINTMENT: 'Appointment',
	};
	const [activeTab, setActiveTab] = useState(TABS.ACCOUNT_DETAIL);

	const formik = useFormik({
		initialValues: {
			firstName: 'John',
			lastName: 'Doe',
			displayName: 'johndoe',
			emailAddress: 'johndoe@site.com',
			currentPassword: '',
			newPassword: '',
			confirmPassword: '',
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

	const formikAddress = useFormik({
		initialValues: {
			addressLine: '259 Street',
			addressLine2: '',
			city: 'New York',
			state: 'usa',
			zip: '35535',
		},
		validate: validateAddress,
		onSubmit: () => {
			showNotification(
				<span className='d-flex align-items-center'>
					<Icon icon='Info' size='lg' className='me-1' />
					<span>Updated Successfully</span>
				</span>,
				"The user's address have been successfully updated.",
			);
		},
	});

	//
	// Events
	const [events, setEvents] = useState(eventList);
	// Selected Event
	const [eventItem, setEventItem] = useState(null);
	// Calendar View Mode
	const [viewMode, setViewMode] = useState(Views.MONTH);
	// Calendar Date
	const [date, setDate] = useState(new Date());
	// Item edit panel status
	const [toggleInfoEventCanvas, setToggleInfoEventCanvas] = useState(false);
	const setInfoEvent = () => setToggleInfoEventCanvas(!toggleInfoEventCanvas);
	// Calendar Unit Type
	const unitType = getUnitType(viewMode);
	// Calendar Date Label
	const calendarDateLabel = getLabel(date, viewMode);

	// eslint-disable-next-line no-unused-vars
	const eventStyleGetter = (event, start, end, isSelected) => {
		const isActiveEvent = start <= now && end >= now;
		const isPastEvent = end < now;
		const color = isActiveEvent ? 'success' : event.color;

		return {
			className: classNames({
				[`bg-l10-${color} text-${color}`]: color,
				'border border-success': isActiveEvent,
				'opacity-50': isPastEvent,
			}),
		};
	};

	const handleViewMode = (e) => {
		setDate(moment(e)._d);
		setViewMode(Views.DAY);
	};

	// View modes; Month, Week, Work Week, Day and Agenda
	const views = getViews();

	// New Event
	const handleSelect = ({ start, end }) => {
		// eslint-disable-next-line no-alert
		const title = window.prompt('New Event name');
		if (title)
			setEvents([
				...events,
				{
					start,
					end,
					title,
				},
			]);
	};

	useEffect(() => {
		if (eventItem)
			formik.setValues({
				...formik.values,
				eventId: eventItem.id || null,
				eventName: eventItem.name,
				eventStart: moment(eventItem.start)._d,
				eventEnd: moment(eventItem.end)._d,
				eventAllDay: eventItem.allDay,
				eventEmployee: `${eventItem?.user?.name} ${eventItem?.user?.surname}`,
			});
		return () => {};
		//	eslint-disable-next-line react-hooks/exhaustive-deps
	}, [eventItem]);

	const formikEvent = useFormik({
		initialValues: {
			eventName: '',
			eventStart: '',
			eventEnd: '',
			eventAllDay: false,
			eventRecurring: false,
			eventRepeat: '',
			eventUntilWhen: '',
			eventEmployee: '',
		},
		// eslint-disable-next-line no-unused-vars
		onSubmit: (values) => {
			// console.log(JSON.stringify(values, null, 2));
			setToggleInfoEventCanvas(false);
			setEventItem(null);
		},
	});

	return (
		<PageWrapper title={demoPages.editPages.subMenu.editBoxed.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Users', to: '/' },
							{ title: 'Edit User', to: '/' },
						]}
					/>
					<SubheaderSeparator />
					<span className='text-muted'>John Doe</span>
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
								currentPassword: '',
								newPassword: '',
								confirmPassword: '',
							});
							formikAddress.setValues({
								addressLine: '',
								addressLine2: '',
								city: '',
								state: '',
								zip: '',
							});
						}}>
						Add New
					</Button>
					{TABS.ACCOUNT_DETAIL === activeTab && (
						<Button color='info' isOutline icon='Save' onClick={formik.handleSubmit}>
							Save
						</Button>
					)}
					{TABS.ADDRESS === activeTab && (
						<Button
							color='info'
							isOutline
							icon='Save'
							onClick={formikAddress.handleSubmit}>
							Save
						</Button>
					)}
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row h-100'>
					<div className='col-xl-3 col-lg-4 col-md-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Person' iconColor='info'>
									<CardTitle>Account Settings</CardTitle>
									<CardSubTitle>Personal Information</CardSubTitle>
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
											icon='Place'
											color='info'
											className='w-100 p-3'
											isLight={TABS.ADDRESS !== activeTab}
											onClick={() => setActiveTab(TABS.ADDRESS)}>
											{TABS.ADDRESS}
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
									<div className='col-12 border-bottom' />
									<div className='col-12'>
										<Button
											icon='Notifications'
											color='success'
											className='w-100 p-3'
											isLight={TABS.APPOINTMENT !== activeTab}
											onClick={() => setActiveTab(TABS.APPOINTMENT)}>
											{TABS.APPOINTMENT}
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
					<div className='col-xl-9 col-lg-8 col-md-6'>
						{TABS.ACCOUNT_DETAIL === activeTab && (
							<Card stretch tag='form' noValidate onSubmit={formik.handleSubmit}>
								<CardHeader>
									<CardLabel icon='Contacts' iconColor='info'>
										<CardTitle>Account Details</CardTitle>
									</CardLabel>
								</CardHeader>
								<CardBody className='pb-0' isScrollable>
									<div className='row g-4'>
										<div className='col-12'>
											<div className='row g-4 align-items-center'>
												<div className='col-lg-auto'>
													<Avatar
														srcSet={USERS.JOHN.srcSet}
														src={USERS.JOHN.src}
														color={USERS.JOHN.color}
													/>
												</div>
												<div className='col-lg'>
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
										</div>
										<div className='col-12 border-bottom' />
										<div className='col-md-6'>
											<FormGroup id='firstName' label='First Name' isFloating>
												<Input
													placeholder='First Name'
													autoComplete='additional-name'
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													value={formik.values.firstName}
													isValid={formik.isValid}
													isTouched={formik.touched.firstName}
													invalidFeedback={formik.errors.firstName}
													validFeedback='Looks good!'
												/>
											</FormGroup>
										</div>
										<div className='col-md-6'>
											<FormGroup id='lastName' label='Last Name' isFloating>
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
													invalidFeedback={formik.errors.displayName}
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
													invalidFeedback={formik.errors.emailAddress}
													validFeedback='Looks good!'
												/>
											</FormGroup>
										</div>
										<div className='col-12'>
											<Card>
												<CardHeader>
													<CardLabel
														icon='LocalPolice'
														iconColor='success'>
														<CardTitle>Password Change</CardTitle>
													</CardLabel>
												</CardHeader>
												<CardBody>
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
																	onChange={formik.handleChange}
																	value={
																		formik.values
																			.currentPassword
																	}
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
																	onChange={formik.handleChange}
																	onBlur={formik.handleBlur}
																	value={
																		formik.values.newPassword
																	}
																	isValid={formik.isValid}
																	isTouched={
																		formik.touched.newPassword
																	}
																	invalidFeedback={
																		formik.errors.newPassword
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
																	onChange={formik.handleChange}
																	onBlur={formik.handleBlur}
																	value={
																		formik.values
																			.confirmPassword
																	}
																	isValid={formik.isValid}
																	isTouched={
																		formik.touched
																			.confirmPassword
																	}
																	invalidFeedback={
																		formik.errors
																			.confirmPassword
																	}
																	validFeedback='Looks good!'
																/>
															</FormGroup>
														</div>
													</div>
												</CardBody>
												<CardFooter>
													<CommonDesc>
														Leave blank to leave unchanged.
													</CommonDesc>
												</CardFooter>
											</Card>
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
											isDisable={!formik.isValid && !!formik.submitCount}>
											Save
										</Button>
									</CardFooterRight>
								</CardFooter>
							</Card>
						)}
						{TABS.ADDRESS === activeTab && (
							<Card
								stretch
								tag='form'
								noValidate
								onSubmit={formikAddress.handleSubmit}>
								<CardHeader>
									<CardLabel icon='Place' iconColor='info'>
										<CardTitle>{TABS.ADDRESS}</CardTitle>
									</CardLabel>
								</CardHeader>
								<CardBody className='pb-0' isScrollable>
									<div className='row g-4'>
										<div className='col-lg-12'>
											<FormGroup
												id='addressLine'
												label='Address Line'
												isFloating>
												<Input
													onChange={formikAddress.handleChange}
													onBlur={formikAddress.handleBlur}
													value={formikAddress.values.addressLine}
													isValid={formikAddress.isValid}
													isTouched={formikAddress.touched.addressLine}
													invalidFeedback={
														formikAddress.errors.addressLine
													}
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
													onChange={formikAddress.handleChange}
													value={formikAddress.values.addressLine2}
												/>
											</FormGroup>
										</div>

										<div className='col-lg-6'>
											<FormGroup id='city' label='City' isFloating>
												<Input
													onChange={formikAddress.handleChange}
													onBlur={formikAddress.handleBlur}
													value={formikAddress.values.city}
													isValid={formikAddress.isValid}
													isTouched={formikAddress.touched.city}
													invalidFeedback={formikAddress.errors.city}
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
													onChange={formikAddress.handleChange}
													onBlur={formikAddress.handleBlur}
													value={formikAddress.values.state}
													isValid={formikAddress.isValid}
													isTouched={formikAddress.touched.state}
													invalidFeedback={formikAddress.errors.state}
												/>
											</FormGroup>
										</div>
										<div className='col-md-3'>
											<FormGroup id='zip' label='Zip' isFloating>
												<Input
													onChange={formikAddress.handleChange}
													onBlur={formikAddress.handleBlur}
													value={formikAddress.values.zip}
													isValid={formikAddress.isValid}
													isTouched={formikAddress.touched.zip}
													invalidFeedback={formikAddress.errors.zip}
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
											onClick={formikAddress.resetForm}>
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
												!formikAddress.isValid &&
												!!formikAddress.submitCount
											}>
											Save
										</Button>
									</CardFooterRight>
								</CardFooter>
							</Card>
						)}
						{TABS.MY_WALLET === activeTab && <CommonMyWallet />}
						{TABS.APPOINTMENT === activeTab && (
							<Card stretch style={{ minHeight: 600 }}>
								<CardHeader>
									<CardActions>
										<Popovers
											desc={
												<DatePicker
													onChange={(item) => setDate(item)}
													date={date}
													color={process.env.REACT_APP_PRIMARY_COLOR}
												/>
											}
											placement='bottom-start'
											className='mw-100'
											trigger='click'>
											<Button color='light'>{calendarDateLabel}</Button>
										</Popovers>
									</CardActions>
									<CardActions>
										<ButtonGroup isToolbar>
											<CalendarTodayButton
												unitType={unitType}
												date={date}
												setDate={setDate}
												viewMode={viewMode}
											/>
											<CalendarViewModeButtons
												setViewMode={setViewMode}
												viewMode={viewMode}
											/>
										</ButtonGroup>
									</CardActions>
								</CardHeader>
								<CardBody isScrollable>
									<Calendar
										selectable
										toolbar={false}
										localizer={localizer}
										events={events.filter((i) => i.user === USERS.JOHN)}
										defaultView={Views.WEEK}
										views={views}
										view={viewMode}
										date={date}
										onNavigate={(_date) => setDate(_date)}
										scrollToTime={new Date(1970, 1, 1, 6)}
										defaultDate={new Date()}
										onSelectEvent={(event) => {
											setInfoEvent();
											setEventItem(event);
										}}
										onSelectSlot={handleSelect}
										onView={handleViewMode}
										onDrillDown={handleViewMode}
										components={{
											event: MyEvent, // used by each view (Month, Day, Week)
											week: {
												event: MyWeekEvent,
											},
											work_week: {
												event: MyWeekEvent,
											},
										}}
										eventPropGetter={eventStyleGetter}
									/>
								</CardBody>

								<OffCanvas
									setOpen={setToggleInfoEventCanvas}
									isOpen={toggleInfoEventCanvas}
									titleId='canvas-title'>
									<OffCanvasHeader
										setOpen={setToggleInfoEventCanvas}
										className='p-4'>
										<OffCanvasTitle id='canvas-title'>
											Edit Event
										</OffCanvasTitle>
									</OffCanvasHeader>
									<OffCanvasBody
										tag='form'
										onSubmit={formikEvent.handleSubmit}
										className='p-4'>
										<div className='row g-4'>
											<div className='col-12'>
												<FormGroup id='eventName' label='Name'>
													<Input
														size='lg'
														value={formikEvent.values.eventName}
														onChange={formikEvent.handleChange}
													/>
												</FormGroup>
											</div>
											<div className='col-12'>
												<Card className='mb-0 bg-l10-info' shadow='sm'>
													<CardHeader className='bg-l25-info'>
														<CardLabel
															icon='DateRange'
															iconColor='info'>
															<CardTitle className='text-info'>
																Date Options
															</CardTitle>
														</CardLabel>
													</CardHeader>
													<CardBody>
														<div className='row g-3'>
															<div className='col-12'>
																<FormGroup id='eventAllDay'>
																	<Checks
																		type='switch'
																		value='true'
																		label='All day event'
																		checked={
																			formikEvent.values
																				.eventAllDay
																		}
																		onChange={
																			formikEvent.handleChange
																		}
																	/>
																</FormGroup>
															</div>
															<div className='col-12'>
																<FormGroup
																	id='eventStart'
																	label={
																		formikEvent.values
																			.eventAllDay
																			? 'Date'
																			: 'Start Date'
																	}>
																	<Input
																		type='date'
																		value={moment(
																			formikEvent.values
																				.eventStart,
																		).format('YYYY-MM-DD')}
																		onChange={
																			formikEvent.handleChange
																		}
																	/>
																</FormGroup>
															</div>

															{!formikEvent.values.eventAllDay && (
																<div className='col-12'>
																	<FormGroup
																		id='eventEnd'
																		label='End Date'>
																		<Input
																			type='date'
																			value={moment(
																				formikEvent.values
																					.eventEnd,
																			).format('YYYY-MM-DD')}
																			onChange={
																				formikEvent.handleChange
																			}
																		/>
																	</FormGroup>
																</div>
															)}
														</div>
													</CardBody>
												</Card>
											</div>
											<div className='col-12'>
												<Card
													className={classNames('bg-l10-success', {
														'mb-4 shadow-3d-success':
															!formikEvent.values.eventRecurring,
														'mb-0': formikEvent.values.eventRecurring,
													})}
													shadow='sm'>
													<CardHeader className='bg-l25-success'>
														<CardLabel
															icon='DateRange'
															iconColor='success'>
															<CardTitle className='text-success'>
																Date Options
															</CardTitle>
														</CardLabel>
													</CardHeader>
													<CardBody>
														<div className='row g-3'>
															<div className='col-12'>
																<FormGroup id='eventRecurring'>
																	<Checks
																		type='switch'
																		value='true'
																		label='This is a recurring event'
																		checked={
																			formikEvent.values
																				.eventRecurring
																		}
																		onChange={
																			formikEvent.handleChange
																		}
																	/>
																</FormGroup>
															</div>
															{formikEvent.values.eventRecurring && (
																<>
																	<div className='col-12'>
																		<FormGroup
																			id='eventRepeat'
																			label='Repeat Event'>
																			<Select
																				value={
																					formikEvent
																						.values
																						.eventRepeat
																				}
																				onChange={
																					formikEvent.handleChange
																				}
																				ariaLabel='Repeat event'
																				list={[
																					{
																						value: 'daily',
																						text: 'Daily',
																					},
																					{
																						value: 'weekly',
																						text: 'Weekly',
																					},
																					{
																						value: 'monthly',
																						text: 'Monthly',
																					},
																				]}
																			/>
																		</FormGroup>
																	</div>
																	<div className='col-12'>
																		<FormGroup
																			id='eventUntilWhen'
																			label='Until when?'>
																			<Input
																				type='date'
																				value={
																					formikEvent
																						.values
																						.eventUntilWhen
																				}
																				onChange={
																					formikEvent.handleChange
																				}
																			/>
																		</FormGroup>
																	</div>
																</>
															)}
														</div>
													</CardBody>
												</Card>
											</div>
											{eventItem?.user && (
												<div className='col-12'>
													<Card className='mb-0 bg-l10-dark' shadow='sm'>
														<CardHeader className='bg-l25-dark'>
															<CardLabel
																icon='Person Add'
																iconColor='dark'>
																<CardTitle>
																	Employee Options
																</CardTitle>
															</CardLabel>
														</CardHeader>
														<CardBody>
															<FormGroup
																id='eventEmployee'
																label='Employee'>
																<Input
																	value={
																		formikEvent.values
																			.eventEmployee
																	}
																	onChange={
																		formikEvent.handleChange
																	}
																	list={Object.keys(USERS).map(
																		(u) =>
																			`${USERS[u].name} ${USERS[u].surname}`,
																	)}
																/>
															</FormGroup>
														</CardBody>
													</Card>
												</div>
											)}
											<div className='col'>
												<Button color='info' type='submit'>
													Save
												</Button>
											</div>
										</div>
									</OffCanvasBody>
								</OffCanvas>
							</Card>
						)}
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default EditBoxedPage;
