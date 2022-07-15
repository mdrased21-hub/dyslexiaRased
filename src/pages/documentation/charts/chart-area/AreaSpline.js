import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const AreaSpline = () => {
	const [state] = useState({
		series: [
			{
				name: 'series1',
				data: [31, 40, 28, 51, 42, 109, 100],
			},
			{
				name: 'series2',
				data: [11, 32, 45, 32, 34, 52, 41],
			},
		],
		options: {
			chart: {
				height: 350,
				type: 'area',
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: 'smooth',
			},
			xaxis: {
				type: 'datetime',
				categories: [
					'2018-09-19T00:00:00.000Z',
					'2018-09-19T01:30:00.000Z',
					'2018-09-19T02:30:00.000Z',
					'2018-09-19T03:30:00.000Z',
					'2018-09-19T04:30:00.000Z',
					'2018-09-19T05:30:00.000Z',
					'2018-09-19T06:30:00.000Z',
				],
			},
			tooltip: {
				x: {
					format: 'dd/MM/yy HH:mm',
				},
				theme: 'dark',
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='AreaChart'>
						<CardTitle>
							type <small>area</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					<Chart series={state.series} options={state.options} type='area' height={350} />
				</CardBody>
			</Card>
		</div>
	);
};

export default AreaSpline;
