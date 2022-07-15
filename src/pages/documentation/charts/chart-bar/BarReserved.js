import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const BarReserved = () => {
	const [state] = useState({
		series: [
			{
				data: [400, 430, 448, 470, 540, 580, 690],
			},
		],
		options: {
			chart: {
				type: 'bar',
				height: 350,
			},
			tooltip: {
				theme: 'dark',
			},
			annotations: {
				xaxis: [
					{
						x: 500,
						borderColor: process.env.REACT_APP_SUCCESS_COLOR,
						label: {
							borderColor: process.env.REACT_APP_SUCCESS_COLOR,
							style: {
								color: '#fff',
								background: process.env.REACT_APP_SUCCESS_COLOR,
							},
							text: 'X annotation',
						},
					},
				],
				yaxis: [
					{
						y: 'July',
						y2: 'September',
						label: {
							text: 'Y annotation',
						},
					},
				],
			},
			plotOptions: {
				bar: {
					horizontal: true,
				},
			},
			dataLabels: {
				enabled: true,
			},
			xaxis: {
				categories: [
					'June',
					'July',
					'August',
					'September',
					'October',
					'November',
					'December',
				],
			},
			grid: {
				xaxis: {
					lines: {
						show: true,
					},
				},
			},
			yaxis: {
				reversed: true,
				axisTicks: {
					show: true,
				},
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
					<Chart series={state.series} options={state.options} type='bar' height={350} />
				</CardBody>
			</Card>
		</div>
	);
};

export default BarReserved;
