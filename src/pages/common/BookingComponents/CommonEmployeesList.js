import React, { useState } from 'react';
import classNames from 'classnames';
import { CardBody } from '../../../components/bootstrap/Card';
import Icon from '../../../components/icon/Icon';
import PaginationButtons, {
	dataPagination,
	PER_COUNT,
} from '../../../components/PaginationButtons';
import { priceFormat } from '../../../helpers/helpers';
import Progress from '../../../components/bootstrap/Progress';
import useSortableData from '../../../hooks/useSortableData';
import USERS from '../../../common/data/userDummyData';

const CommonEmployeesList = () => {
	const dataEmployees = [
		{
			id: 1,
			name: `${USERS.GRACE.name} ${USERS.GRACE.surname}`,
			ofAppointments: 3,
			sumOfPayments: 48,
			ofHoursInAppointment: 4,
			ofLoad: 34,
			color: USERS.GRACE.color,
			img: USERS.GRACE.src,
			imgWebp: USERS.GRACE.srcSet,
		},
		{
			id: 2,
			name: `${USERS.JANE.name} ${USERS.JANE.surname}`,
			ofAppointments: 3,
			sumOfPayments: 32,
			ofHoursInAppointment: 3,
			ofLoad: 23,
			color: USERS.JANE.color,
			img: USERS.JANE.src,
			imgWebp: USERS.JANE.srcSet,
		},
		{
			id: 3,
			name: `${USERS.RYAN.name} ${USERS.RYAN.surname}`,
			ofAppointments: 3,
			sumOfPayments: 56,
			ofHoursInAppointment: 5,
			ofLoad: 78,
			color: USERS.RYAN.color,
			img: USERS.RYAN.src,
			imgWebp: USERS.RYAN.srcSet,
		},
		{
			id: 4,
			name: `${USERS.ELLA.name} ${USERS.ELLA.surname}`,
			ofAppointments: 3,
			sumOfPayments: 72,
			ofHoursInAppointment: 3,
			ofLoad: 56,
			color: USERS.ELLA.color,
			img: USERS.ELLA.src,
			imgWebp: USERS.ELLA.srcSet,
		},
		{
			id: 5,
			name: `${USERS.CHLOE.name} ${USERS.CHLOE.surname}`,
			ofAppointments: 3,
			sumOfPayments: 60,
			ofHoursInAppointment: 3,
			ofLoad: 44,
			color: USERS.CHLOE.color,
			img: USERS.CHLOE.src,
			imgWebp: USERS.CHLOE.srcSet,
		},
	];

	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(PER_COUNT['3']);
	const { items, requestSort, getClassNamesFor } = useSortableData(dataEmployees);
	return (
		<>
			<CardBody className='table-responsive'>
				<table className='table table-modern table-hover'>
					<thead>
						<tr>
							<th
								onClick={() => requestSort('name')}
								className='cursor-pointer text-decoration-underline'>
								Employee{' '}
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
											<img
												srcSet={item.imgWebp}
												src={item.img}
												alt={item.name}
												width='54'
												height='54'
												className={classNames(
													`bg-l25-${item.color}`,
													'rounded-circle',
												)}
											/>
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
										<div className='flex-shrink-0 me-3'>
											{`${item.ofLoad}%`}
										</div>
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

export default CommonEmployeesList;
