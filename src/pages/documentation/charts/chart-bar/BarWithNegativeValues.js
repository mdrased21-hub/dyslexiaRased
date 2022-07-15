import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const BarWithNegativeValues = () => {
	const [state] = useState({
		series: [
			{
				name: 'Females',
				data: [
					-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
					-4.1, -4, -4.1, -3.4, -3.1, -2.8,
				],
			},
			{
				name: 'Males',
				data: [
					0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5, 3.9,
					3.5, 3,
				],
			},
		],
		options: {
			chart: {
				type: 'bar',
				height: 440,
				stacked: true,
			},
			colors: [process.env.REACT_APP_DANGER_COLOR, process.env.REACT_APP_INFO_COLOR],
			plotOptions: {
				bar: {
					horizontal: true,
					barHeight: '80%',
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				width: 1,
				colors: ['#fff'],
			},

			grid: {
				xaxis: {
					lines: {
						show: false,
					},
				},
			},
			yaxis: {
				min: -5,
				max: 5,
				title: {
					text: 'Age',
				},
			},
			tooltip: {
				shared: false,
				x: {
					formatter(val) {
						return val;
					},
				},
				y: {
					formatter(val) {
						return `${Math.abs(val)}%`;
					},
				},
			},
			title: {
				text: 'Mauritius population pyramid 2011',
			},
			xaxis: {
				categories: [
					'85+',
					'80-84',
					'75-79',
					'70-74',
					'65-69',
					'60-64',
					'55-59',
					'50-54',
					'45-49',
					'40-44',
					'35-39',
					'30-34',
					'25-29',
					'20-24',
					'15-19',
					'10-14',
					'5-9',
					'0-4',
				],
				title: {
					text: 'Percent',
				},
				labels: {
					formatter(val) {
						return `${Math.abs(Math.round(val))}%`;
					},
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
					<Chart series={state.series} options={state.options} type='bar' height={460} />
				</CardBody>
			</Card>
		</div>
	);
};

export default BarWithNegativeValues;
