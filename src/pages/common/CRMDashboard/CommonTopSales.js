import React from 'react';
import classNames from 'classnames';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Button from '../../../components/bootstrap/Button';
import topSalesData from '../../../common/data/dummySalesData';
import { getFirstLetter, priceFormat } from '../../../helpers/helpers';
import useDarkMode from '../../../hooks/useDarkMode';
import { demoPages } from '../../../menu';

// eslint-disable-next-line react/prop-types
const TopSalesItem = ({ name, type, price, count }) => {
	const { darkModeStatus } = useDarkMode();

	return (
		<div className='col-12'>
			<div className='row'>
				<div className='col d-flex align-items-center'>
					<div className='flex-shrink-0'>
						<div className='ratio ratio-1x1 me-3' style={{ width: 48 }}>
							<div
								className={classNames(
									'rounded-2',
									'd-flex align-items-center justify-content-center',
									{
										'bg-l10-dark': !darkModeStatus,
										'bg-l90-dark': darkModeStatus,
									},
								)}>
								<span className='fw-bold'>{getFirstLetter(name)}</span>
							</div>
						</div>
					</div>
					<div className='flex-grow-1'>
						<div className='fs-6'>{name}</div>
						<div className='text-muted'>
							<small>{type}</small>
						</div>
					</div>
				</div>
				<div className='col-auto text-end'>
					<div>
						<strong>{priceFormat(price)}</strong>
					</div>
					<div className='text-muted'>
						<small>{count}</small>
					</div>
				</div>
			</div>
		</div>
	);
};

const CommonTopSales = () => {
	return (
		<Card stretch>
			<CardHeader>
				<CardLabel>
					<CardTitle>Top Sales</CardTitle>
				</CardLabel>
				<CardActions>
					<Button
						color='info'
						isLink
						icon='Summarize'
						tag='a'
						to={`../${demoPages.sales.subMenu.salesList.path}`}>
						Detailed Report
					</Button>
				</CardActions>
			</CardHeader>
			<CardBody isScrollable>
				<div className='row g-3'>
					{topSalesData.map((i) => (
						// eslint-disable-next-line react/jsx-props-no-spreading
						<TopSalesItem key={i.id} {...i} />
					))}
				</div>
			</CardBody>
		</Card>
	);
};

export default CommonTopSales;
