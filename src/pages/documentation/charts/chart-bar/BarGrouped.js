import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const BarGrouped = () => {
	const [state] = useState({
		series: [
			{
				data: [44, 55, 41, 64, 22, 43, 21],
			},
			{
				data: [53, 32, 33, 52, 13, 44, 32],
			},
		],
		options: {
			chart: {
				type: 'bar',
				height: 430,
			},
			plotOptions: {
				bar: {
					horizontal: true,
					dataLabels: {
						position: 'top',
					},
				},
			},
			dataLabels: {
				enabled: true,
				offsetX: -6,
				style: {
					fontSize: '12px',
					colors: ['#fff'],
				},
			},
			stroke: {
				show: true,
				width: 1,
				colors: ['#fff'],
			},
			xaxis: {
				categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='StackedBarChart'>
						<CardTitle>
							type <small>bar</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					<Chart series={state.series} options={state.options} type='bar' height={460} />
				</CardBody>
			</Card>
		</div>
	);
};

export default BarGrouped;
