import React, { useState } from 'react';
import classNames from 'classnames';
import Icon from '../../../components/icon/Icon';
import { priceFormat } from '../../../helpers/helpers';
import { CardBody } from '../../../components/bootstrap/Card';
import SERVICES from '../../../common/data/serviceDummyData';
import PaginationButtons, {
	dataPagination,
	PER_COUNT,
} from '../../../components/PaginationButtons';
import useSortableData from '../../../hooks/useSortableData';

const CommonPackagesList = () => {
	const dataPackages = [
		{
			id: 1,
			name: `${SERVICES.SURFING.name} (Package)`,
			buy: 8,
			sumOfPayments: 120,
			ofHoursInAppointment: 6,
			color: SERVICES.SURFING.color,
			icon: SERVICES.SURFING.icon,
		},
		{
			id: 2,
			name: `${SERVICES.KITE_SURFING.name} (Package)`,
			buy: 12,
			sumOfPayments: 480,
			ofHoursInAppointment: 9,
			color: SERVICES.KITE_SURFING.color,
			icon: SERVICES.KITE_SURFING.icon,
		},
		{
			id: 3,
			name: `${SERVICES.KAYAKING.name} (Package)`,
			buy: 4,
			sumOfPayments: 300,
			ofHoursInAppointment: 4,
			color: SERVICES.KAYAKING.color,
			icon: SERVICES.KAYAKING.icon,
		},
		{
			id: 4,
			name: `${SERVICES.ICE_SKATING.name} (Package)`,
			buy: 9,
			sumOfPayments: 800,
			ofHoursInAppointment: 4,
			color: SERVICES.ICE_SKATING.color,
			icon: SERVICES.ICE_SKATING.icon,
		},
		{
			id: 5,
			name: `${SERVICES.YOGA.name} (Package)`,
			buy: 3,
			sumOfPayments: 300,
			ofHoursInAppointment: 5,
			color: SERVICES.YOGA.color,
			icon: SERVICES.YOGA.icon,
		},
	];

	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(PER_COUNT['3']);
	const { items, requestSort, getClassNamesFor } = useSortableData(dataPackages);
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
								onClick={() => requestSort('buy')}
								className='cursor-pointer text-decoration-underline'>
								Times Bought{' '}
								<Icon
									size='lg'
									className={getClassNamesFor('buy')}
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
								<td>{item.buy}</td>
								<td>{priceFormat(item.sumOfPayments)}</td>
								<td>{item.ofHoursInAppointment}</td>
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

export default CommonPackagesList;
