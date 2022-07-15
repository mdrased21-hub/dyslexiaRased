import React, { useState } from 'react';
import moment from 'moment';
import { useFormik } from 'formik';
import classNames from 'classnames';
import { Calendar as DatePicker } from 'react-date-range';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Icon from '../../../components/icon/Icon';
import Button from '../../../components/bootstrap/Button';
import Page from '../../../layout/Page/Page';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import { priceFormat } from '../../../helpers/helpers';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../../../components/bootstrap/Modal';
import OffCanvas, {
	OffCanvasBody,
	OffCanvasHeader,
	OffCanvasTitle,
} from '../../../components/bootstrap/OffCanvas';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Textarea from '../../../components/bootstrap/forms/Textarea';
import Checks from '../../../components/bootstrap/forms/Checks';
import Popovers from '../../../components/bootstrap/Popovers';
import data from '../../../common/data/dummyEventsData';
import USERS from '../../../common/data/userDummyData';
import { demoPages } from '../../../menu';
import useDarkMode from '../../../hooks/useDarkMode';

const EditInModalPage = () => {
	const { themeStatus, darkModeStatus } = useDarkMode();
	const [date, setDate] = useState(new Date());

	// BEGIN :: Upcoming Events
	const [upcomingEventsInfoOffcanvas, setUpcomingEventsInfoOffcanvas] = useState(false);
	const handleUpcomingDetails = () => {
		setUpcomingEventsInfoOffcanvas(!upcomingEventsInfoOffcanvas);
	};

	const [upcomingEventsEditOffcanvas, setUpcomingEventsEditOffcanvas] = useState(false);
	const handleUpcomingEdit = () => {
		setUpcomingEventsEditOffcanvas(!upcomingEventsEditOffcanvas);
	};
	// END :: Upcoming Events

	const formik = useFormik({
		initialValues: {
			customerName: 'Alison Berry',
			service: 'Exercise Bike',
			employee: `${USERS.GRACE.name} ${USERS.GRACE.surname}`,
			location: 'Maryland',
			date: moment().add(1, 'days').format('YYYY-MM-DD'),
			time: '10:30',
			note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut nisi odio. Nam sit amet pharetra enim. Nulla facilisi. Nunc dictum felis id massa mattis pretium. Mauris at blandit orci. Nunc vulputate vulputate turpis vitae cursus. In sit amet turpis tincidunt, interdum ex vitae, sollicitudin massa. Maecenas eget dui molestie, ullamcorper ante vel, tincidunt nisi. Donec vitae pulvinar risus. In ultricies nisl ac massa malesuada, vel tempus neque placerat.',
			notify: true,
		},
	});
	return (
		<PageWrapper title={demoPages.editPages.subMenu.editInModal.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Icon icon='Info' className='me-2' size='2x' />
					<span className='text-muted'>
						You have <Icon icon='TaskAlt' color='success' className='mx-1' size='lg' />{' '}
						3 approved appointments and{' '}
						<Icon icon='Alarm' color='warning' className='mx-1' size='lg' /> 4 pending
						appointments for today.
					</span>
				</SubHeaderLeft>
				<SubHeaderRight>
					<Popovers
						desc={
							<DatePicker
								onChange={(item) => setDate(item)}
								date={date}
								color={process.env.REACT_APP_PRIMARY_COLOR}
							/>
						}
						placement='bottom-end'
						className='mw-100'
						trigger='click'>
						<Button color={themeStatus}>
							{`${moment(date).startOf('weeks').format('MMM Do')} - ${moment(date)
								.endOf('weeks')
								.format('MMM Do')}`}
						</Button>
					</Popovers>
				</SubHeaderRight>
			</SubHeader>
			<Page container='fluid'>
				<div className='row'>
					<div className='col-12'>
						<Card>
							<CardHeader borderSize={1}>
								<CardLabel icon='Alarm' iconColor='info'>
									<CardTitle>Upcoming Appointments</CardTitle>
								</CardLabel>
								<CardActions>
									<Button
										color='info'
										icon='CloudDownload'
										isLight
										tag='a'
										to='/somefile.txt'
										target='_blank'
										download>
										Export
									</Button>
								</CardActions>
							</CardHeader>
							<CardBody className='table-responsive'>
								<table className='table table-modern'>
									<thead>
										<tr>
											<td style={{ width: 60 }} />
											<th>Assigned to</th>
											<th>Date / Time</th>
											<th>Customer</th>
											<th>Service</th>
											<th>Duration</th>
											<th>Payment</th>
											<td />
										</tr>
									</thead>
									<tbody>
										{data.map((item) => (
											<tr key={item.id}>
												<td>
													<Button
														isLight
														color={item.status.color}
														icon='Info'
														onClick={handleUpcomingDetails}
													/>
												</td>
												<td>
													<div className='d-flex'>
														<div className='flex-shrink-0'>
															<img
																srcSet={item.assigned.srcSet}
																src={item.assigned.src}
																alt={item.assigned.name}
																width='36'
																height='36'
																className={classNames(
																	`bg-l${
																		darkModeStatus ? 'o' : ''
																	}25-${item.assigned.color}`,
																	'rounded-circle',
																)}
															/>
														</div>
														<div className='flex-grow-1 ms-3 d-flex align-items-center'>
															{item.assigned.name}
														</div>
													</div>
												</td>
												<td>
													<span className='text-nowrap'>
														{moment(`${item.date} ${item.time}`).format(
															'MMM Do YYYY, h:mm a',
														)}
													</span>
												</td>
												<td>
													<div>
														<div>{item.customer.name}</div>
														<div className='small text-muted'>
															{item.customer.email}
														</div>
													</div>
												</td>
												<td>{item.service.name}</td>
												<td>{item.duration}</td>
												<td>{item.payment && priceFormat(item.payment)}</td>
												<td>
													<Button
														isOutline={!darkModeStatus}
														color='dark'
														isLight={darkModeStatus}
														className={classNames('text-nowrap', {
															'border-light': !darkModeStatus,
														})}
														icon='Edit'
														onClick={handleUpcomingEdit}>
														Edit
													</Button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</CardBody>
						</Card>

						<OffCanvas
							setOpen={setUpcomingEventsInfoOffcanvas}
							isOpen={upcomingEventsInfoOffcanvas}
							titleId='upcomingDetails'
							isModalStyle
							isBackdrop={false}>
							<OffCanvasHeader setOpen={setUpcomingEventsInfoOffcanvas}>
								<OffCanvasTitle id='upcomingDetails'>
									Customer: Alison Berry
								</OffCanvasTitle>
							</OffCanvasHeader>
							<OffCanvasBody>
								<Card>
									<CardBody>
										<div className='row g-4'>
											<div className='col-12'>
												<FormGroup
													id='dateInfo'
													name='date'
													label='Date/Time'>
													<Input
														value={moment(
															`${data.find((e) => e.id === 1).date} ${
																data.find((e) => e.id === 1).time
															}`,
														).format('MMM Do YYYY, h:mm a')}
														readOnly
														disabled
													/>
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup id='noteInfo' name='note' label='Note'>
													<Textarea
														value={formik.values.note}
														readOnly
														disabled
													/>
												</FormGroup>
											</div>
										</div>
									</CardBody>
								</Card>
							</OffCanvasBody>
						</OffCanvas>

						<Modal
							setIsOpen={setUpcomingEventsEditOffcanvas}
							isOpen={upcomingEventsEditOffcanvas}
							titleId='upcomingEdit'
							isCentered
							isScrollable
							size='lg'>
							<ModalHeader setIsOpen={setUpcomingEventsEditOffcanvas}>
								<OffCanvasTitle id='upcomingEdit'>Edit Appointments</OffCanvasTitle>
							</ModalHeader>
							<ModalBody>
								<div className='row g-4'>
									<div className='col-12'>
										<FormGroup id='customerName' label='Customer' isFloating>
											<Input
												placeholder='Customer'
												onChange={formik.handleChange}
												value={formik.values.customerName}
											/>
										</FormGroup>
									</div>
									<div className='col-12'>
										<FormGroup id='service' label='Service' isFloating>
											<Input
												placeholder='Service'
												onChange={formik.handleChange}
												value={formik.values.service}
											/>
										</FormGroup>
									</div>
									<div className='col-12'>
										<FormGroup id='employee' label='Employee' isFloating>
											<Input
												placeholder='Employee'
												onChange={formik.handleChange}
												value={formik.values.employee}
											/>
										</FormGroup>
									</div>
									<div className='col-12'>
										<FormGroup id='location' label='Location' isFloating>
											<Input
												placeholder='Location'
												onChange={formik.handleChange}
												value={formik.values.location}
											/>
										</FormGroup>
									</div>
									<div className='col-6'>
										<FormGroup id='date' label='Date' isFloating>
											<Input
												placeholder='Date'
												onChange={formik.handleChange}
												value={formik.values.date}
												type='date'
											/>
										</FormGroup>
									</div>
									<div className='col-6'>
										<FormGroup id='time' label='Time' isFloating>
											<Input
												placeholder='Time'
												onChange={formik.handleChange}
												value={formik.values.time}
												type='time'
											/>
										</FormGroup>
									</div>
									<div className='col-12'>
										<Card isCompact className='mb-0'>
											<CardHeader>
												<CardLabel>
													<CardTitle>Extras</CardTitle>
												</CardLabel>
											</CardHeader>
											<CardBody>
												<FormGroup id='note' label='Note' isFloating>
													<Textarea
														rows={8}
														placeholder='note'
														onChange={formik.handleChange}
														value={formik.values.note}
													/>
												</FormGroup>
											</CardBody>
										</Card>
									</div>
									<div className='col-12'>
										<Card isCompact className='mb-0'>
											<CardHeader>
												<CardLabel>
													<CardTitle>Notification</CardTitle>
												</CardLabel>
											</CardHeader>
											<CardBody>
												<FormGroup>
													<Checks
														id='notify'
														type='switch'
														label={
															<>
																Notify the Customer
																<Popovers
																	trigger='hover'
																	desc='Check this checkbox if you want your customer to receive an email about the scheduled appointment'>
																	<Icon
																		icon='Help'
																		size='lg'
																		className='ms-1 cursor-help'
																	/>
																</Popovers>
															</>
														}
														onChange={formik.handleChange}
														checked={formik.values.notify}
													/>
												</FormGroup>
											</CardBody>
										</Card>
									</div>
								</div>
							</ModalBody>
							<ModalFooter className='bg-transparent'>
								<Button
									color='info'
									className='w-100'
									onClick={() => setUpcomingEventsEditOffcanvas(false)}>
									Save
								</Button>
							</ModalFooter>
						</Modal>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default EditInModalPage;
