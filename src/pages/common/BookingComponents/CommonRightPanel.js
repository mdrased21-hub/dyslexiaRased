import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import OffCanvas, { OffCanvasBody } from '../../../components/bootstrap/OffCanvas';
import Avatar, { AvatarGroup } from '../../../components/Avatar';
import USERS from '../../../common/data/userDummyData';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import Button from '../../../components/bootstrap/Button';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Icon from '../../../components/icon/Icon';
import Chart from '../../../components/extras/Chart';
import { sales } from '../../../common/data/chartDummyData';
import SERVICES from '../../../common/data/serviceDummyData';
import useDarkMode from '../../../hooks/useDarkMode';

const CommonRightPanel = ({ setOpen, isOpen }) => {
	const { themeStatus, darkModeStatus } = useDarkMode();

	const USER_APPOINTMENT = {
		APPROVED: 'Approved',
		PENDING: 'Pending',
		CANCELED: 'Canceled',
	};
	const [activeUserAppointmentTab, setActiveUserAppointmentTab] = useState(
		USER_APPOINTMENT.APPROVED,
	);
	const handleActiveUserAppointmentTab = (tabName) => {
		setActiveUserAppointmentTab(tabName);
	};

	const dataJohnAppointments = [
		{
			id: 1,
			time: '1h 30m',
			person: 2,
			...SERVICES.KAYAKING,
			status: USER_APPOINTMENT.APPROVED,
		},
		{
			id: 2,
			time: '1h 30m',
			person: 2,
			...SERVICES.TENNIS,
			status: USER_APPOINTMENT.APPROVED,
		},
		{
			id: 3,
			time: '45m',
			person: 1,
			...SERVICES.SURFING,
			status: USER_APPOINTMENT.APPROVED,
		},
		{
			id: 4,
			time: '1h',
			person: 1,
			...SERVICES.HANDBALL,
			status: USER_APPOINTMENT.PENDING,
		},
		{
			id: 5,
			time: '1h',
			person: 4,
			...SERVICES.FOOTBALL,
			status: USER_APPOINTMENT.PENDING,
		},
		{
			id: 6,
			time: '2h',
			person: 1,
			...SERVICES.KITE_SURFING,
			status: USER_APPOINTMENT.PENDING,
		},
		{
			id: 7,
			time: '30m',
			person: 1,
			...SERVICES.YOGA,
			status: USER_APPOINTMENT.PENDING,
		},
		{
			id: 8,
			time: '1h',
			person: 1,
			...SERVICES.ICE_SKATING,
			status: USER_APPOINTMENT.PENDING,
		},
		{
			id: 9,
			time: '1h',
			person: 1,
			...SERVICES.SURFING,
			status: USER_APPOINTMENT.CANCELED,
		},
	];
	return (
		<OffCanvas setOpen={setOpen} isOpen={isOpen} isRightPanel>
			<OffCanvasBody className='p-4'>
				<div className='row mb-5'>
					<div className='col'>
						<div className='d-flex align-items-center'>
							<AvatarGroup className='me-3'>
								{Object.keys(USERS).map((u) => (
									<Avatar
										key={USERS[u].username}
										srcSet={USERS[u].srcSet}
										src={USERS[u].src}
										userName={`${USERS[u].name} ${USERS[u].surname}`}
										color={USERS[u].color}
									/>
								))}
							</AvatarGroup>
							<div className='h5 mb-0 text-muted'>
								<strong>Gym</strong> Team
							</div>
						</div>
					</div>
					<div className='col-auto'>
						<Dropdown>
							<DropdownToggle hasIcon={false}>
								<Button
									icon='MoreHoriz'
									color={themeStatus}
									hoverShadow='default'
									isLight={darkModeStatus}
								/>
							</DropdownToggle>
							<DropdownMenu isAlignmentEnd>
								<DropdownItem>
									<Button
										color='link'
										icon='Close'
										onClick={() => {
											setOpen(false);
										}}>
										Close
									</Button>
								</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>
				</div>
				<div className='d-flex justify-content-center mb-3'>
					<Avatar
						srcSet={USERS.JOHN.srcSet}
						src={USERS.JOHN.src}
						color={USERS.JOHN.color}
						shadow='default'
					/>
				</div>
				<div className='d-flex flex-column align-items-center mb-5'>
					<div className='h2 fw-bold'>{`${USERS.JOHN.name} ${USERS.JOHN.surname}`}</div>
					<div className='h5 text-muted text-lowercase opacity-50'>{`@${USERS.JOHN.name}${USERS.JOHN.surname}`}</div>
				</div>
				<div
					className={classNames('rounded-3', {
						'shadow-3d-dark': !darkModeStatus,
						'shadow-3d-light': darkModeStatus,
						'bg-l10-dark': !darkModeStatus,
						'bg-lo50-info': darkModeStatus,
					})}>
					<div className='row row-cols-3 g-3 pb-3 px-3 mt-0'>
						{Object.keys(USER_APPOINTMENT).map((key) => (
							<div
								key={USER_APPOINTMENT[key]}
								className='col d-flex flex-column align-items-center'>
								<Button
									color={
										(darkModeStatus &&
											activeUserAppointmentTab === USER_APPOINTMENT[key]) ||
										!darkModeStatus
											? 'dark'
											: null
									}
									className='w-100 text-capitalize'
									rounded={1}
									onClick={() =>
										handleActiveUserAppointmentTab(USER_APPOINTMENT[key])
									}
									isLight={activeUserAppointmentTab !== USER_APPOINTMENT[key]}>
									<div className='h6 mb-3 text-muted opacity-80'>
										{USER_APPOINTMENT[key]}
									</div>
									<div
										className={classNames('h2', {
											'text-light': darkModeStatus,
										})}>
										{
											dataJohnAppointments.filter(
												(f) => f.status === USER_APPOINTMENT[key],
											).length
										}
									</div>
								</Button>
							</div>
						))}
					</div>
				</div>
				{dataJohnAppointments
					.filter((f) => f.status === activeUserAppointmentTab)
					.map((item) => (
						<Card key={item.id}>
							<CardBody>
								<div className='row g-3 align-items-center'>
									<div className='col d-flex align-items-center'>
										<div className='flex-shrink-0'>
											<div className='ratio ratio-1x1' style={{ width: 72 }}>
												<div
													className={classNames(
														'rounded-2 d-flex align-items-center justify-content-center',
														{
															'bg-l10-info': !darkModeStatus,
															'bg-lo25-info': darkModeStatus,
														},
													)}>
													<span className='text-info fs-1 fw-bold'>
														<Icon icon={item.icon} />
													</span>
												</div>
											</div>
										</div>
										<div className='flex-grow-1 ms-3 d-flex justify-content-between align-items-center'>
											<div>
												<div className='fw-bold fs-6 mb-0'>{item.name}</div>
												<div className='text-muted'>
													<small>
														Time:{' '}
														<span className='text-info fw-bold'>
															{item.time}
														</span>
													</small>
												</div>
											</div>
										</div>
									</div>
									<div className='col-auto'>
										<div
											className={classNames(
												`text-info fw-bold px-3 py-2 rounded-pill`,
												{
													'bg-l10-info': !darkModeStatus,
													'bg-lo25-info': darkModeStatus,
												},
											)}>
											{`${item.person} ${
												item.person > 1 ? 'People' : 'Person'
											}`}
										</div>
									</div>
								</div>
							</CardBody>
						</Card>
					))}
				<Card
					className={classNames('mb-0', {
						'text-dark': darkModeStatus,
						'bg-l25-info': !darkModeStatus,
						'bg-lo50-info': darkModeStatus,
					})}
					isCompact>
					<CardHeader className='bg-transparent'>
						<CardLabel>
							<CardTitle tag='h4' className='h5'>
								Occupancy
							</CardTitle>
						</CardLabel>
					</CardHeader>
					<CardBody>
						<Chart
							className='mx-n4'
							series={sales.series}
							options={sales.options}
							type={sales.options.chart.type}
							height={sales.options.chart.height}
							width={sales.options.chart.width}
						/>
						<div className='d-flex align-items-center pb-3'>
							<div className='flex-shrink-0'>
								<Icon icon='Speed' size='4x' color='info' />
							</div>
							<div className='flex-grow-1 ms-3'>
								<div className='fw-bold fs-3 mb-0'>
									50%
									<span className='text-success fs-5 fw-bold ms-3'>
										+12%
										<Icon icon='ArrowUpward' />
									</span>
								</div>
								<div
									className={classNames({
										'text-muted': !darkModeStatus,
										'text-light': darkModeStatus,
									})}>
									Compared to (45% last week)
								</div>
							</div>
						</div>
					</CardBody>
				</Card>
			</OffCanvasBody>
		</OffCanvas>
	);
};
CommonRightPanel.propTypes = {
	setOpen: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
};

export default CommonRightPanel;
