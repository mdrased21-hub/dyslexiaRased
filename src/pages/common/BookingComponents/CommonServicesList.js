import React, { useState } from 'react';
import classNames from 'classnames';
import Icon from '../../../components/icon/Icon';
import { priceFormat } from '../../../helpers/helpers';
import Progress from '../../../components/bootstrap/Progress';
import { CardBody } from '../../../components/bootstrap/Card';
import SERVICES from '../../../common/data/serviceDummyData';
import PaginationButtons, {
	dataPagination,
	PER_COUNT,
} from '../../../components/PaginationButtons';
import useSortableData from '../../../hooks/useSortableData';

const CommonServicesList = () => {
	const dataServices = [
		{
			id: 1,
			name: SERVICES.TENNIS.name,
			ofAppointments: 6,
			sumOfPayments: 590,
			ofHoursInAppointment: 8,
			ofLoad: 76,
			color: SERVICES.TENNIS.color,
			icon: SERVICES.TENNIS.icon,
		},
		{
			id: 2,
			name: SERVICES.SURFING.name,
			ofAppointments: 2,
			sumOfPayments: 120,
			ofHoursInAppointment: 6,
			ofLoad: 40,
			color: SERVICES.SURFING.color,
			icon: SERVICES.SURFING.icon,
		},
		{
			id: 3,
			name: SERVICES.KITE_SURFING.name,
			ofAppointments: 5,
			sumOfPayments: 480,
			ofHoursInAppointment: 9,
			ofLoad: 20,
			color: SERVICES.KITE_SURFING.color,
			icon: SERVICES.KITE_SURFING.icon,
		},
		{
			id: 4,
			name: SERVICES.KAYAKING.name,
			ofAppointments: 4,
			sumOfPayments: 300,
			ofHoursInAppointment: 4,
			ofLoad: 100,
			color: SERVICES.KAYAKING.color,
			icon: SERVICES.KAYAKING.icon,
		},
		{
			id: 5,
			name: SERVICES.CRICKET.name,
			ofAppointments: 3,
			sumOfPayments: 90,
			ofHoursInAppointment: 5,
			ofLoad: 60,
			color: SERVICES.CRICKET.color,
			icon: SERVICES.CRICKET.icon,
		},
		{
			id: 6,
			name: SERVICES.ICE_SKATING.name,
			ofAppointments: 5,
			sumOfPayments: 800,
			ofHoursInAppointment: 4,
			ofLoad: 82,
			color: SERVICES.ICE_SKATING.color,
			icon: SERVICES.ICE_SKATING.icon,
		},
		{
			id: 7,
			name: SERVICES.YOGA.name,
			ofAppointments: 5,
			sumOfPayments: 300,
			ofHoursInAppointment: 5,
			ofLoad: 74,
			color: SERVICES.YOGA.color,
			icon: SERVICES.YOGA.icon,
		},
		{
			id: 8,
			name: SERVICES.VOLLEYBALL.name,
			ofAppointments: 12,
			sumOfPayments: 600,
			ofHoursInAppointment: 10,
			ofLoad: 85,
			color: SERVICES.VOLLEYBALL.color,
			icon: SERVICES.VOLLEYBALL.icon,
		},
		{
			id: 9,
			name: SERVICES.HIKING.name,
			ofAppointments: 2,
			sumOfPayments: 1200,
			ofHoursInAppointment: 1,
			ofLoad: 50,
			color: SERVICES.HIKING.color,
			icon: SERVICES.HIKING.icon,
		},
		{
			id: 10,
			name: SERVICES.FOOTBALL.name,
			ofAppointments: 22,
			sumOfPayments: 440,
			ofHoursInAppointment: 15,
			ofLoad: 67,
			color: SERVICES.FOOTBALL.color,
			icon: SERVICES.FOOTBALL.icon,
		},
	];

	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(PER_COUNT['3']);
	const { items, requestSort, getClassNamesFor } = useSortableData(dataServices);
	return (
		<>
			<CardBody className='table-responsive'>
				<table className='table table-modern table-hover'>
					<thead>
						<tr>
							<th
								onClick={() => requestSort('name')}
								className='cursor-pointer text-decoration-underline'>
								Service{' '}
								<Icon
									size='lg'
									className={getClassNamesFor('name')}
									icon='FilterList'
								/>
							</th>
							<th
								onClick={() => requestSort('ofAppointments')}
								className='cursor-pointer text-decoration-underline'>
								# of appointments{' '}
								<Icon
									size='lg'
									className={getClassNamesFor('ofAppointments')}
									icon='FilterList'
								/>
							</th>
							<th
								onClick={() => requestSort('sumOfPayments')}
								className='cursor-pointer text-decoration-underline'>
								Sum of payments{' '}
								<Icon
									size='lg'
									className={getClassNamesFor('sumOfPayments')}
									icon='FilterList'
								/>
							</th>
							<th
								onClick={() => requestSort('ofHoursInAppointment')}
								className='cursor-pointer text-decoration-underline'>
								# of Hours in appointment{' '}
								<Icon
									size='lg'
									className={getClassNamesFor('ofHoursInAppointment')}
									icon='FilterList'
								/>
							</th>
							<th
								onClick={() => requestSort('ofLoad')}
								style={{
									minWidth: 100,
								}}
								className='cursor-pointer text-decoration-underline'>
								% of load{' '}
								<Icon
									size='lg'
									className={getClassNamesFor('ofLoad')}
									icon='FilterList'
								/>
							</th>
						</tr>
					</thead>
					<tbody>
						{dataPagination(items, currentPage, perPage).map((item) => (
							<tr key={item.id}>
								<td>
									<div className='d-flex'>
										<div className='flex-shrink-0'>
											<div className='ratio ratio-1x1' style={{ width: 54 }}>
												<div
													className={classNames(
														`bg-l25-${item.color}`,
														'rounded-1',
														'd-flex align-items-center justify-content-center',
														'overflow-hidden',
														'shadow-sm',
													)}>
													<Icon
														icon={item.icon}
														color={item.color}
														size='2x'
													/>
												</div>
											</div>
										</div>
										<div className='flex-grow-1 ms-3 d-flex align-items-center'>
											{item.name}
										</div>
									</div>
								</td>
								<td>{item.ofAppointments}</td>
								<td>{priceFormat(item.sumOfPayments)}</td>
								<td>{item.ofHoursInAppointment}</td>
								<td>
									<div className='d-flex align-items-center'>
										<div className='flex-shrink-0 me-3'>{`${item.ofLoad}%`}</div>
										<Progress
											className='flex-grow-1'
											isAutoColor
											value={item.ofLoad}
											style={{
												height: 5,
											}}
										/>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</CardBody>
			<PaginationButtons
				data={items}
				label='items'
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
				perPage={perPage}
				setPerPage={setPerPage}
			/>
		</>
	);
};

export default CommonServicesList;
