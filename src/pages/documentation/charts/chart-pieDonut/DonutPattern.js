import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const DonutPattern = () => {
	const [state] = useState({
		series: [44, 55, 41, 17, 15],
		options: {
			chart: {
				width: 380,
				type: 'donut',
				dropShadow: {
					enabled: true,
					color: '#111',
					top: -1,
					left: 3,
					blur: 3,
					opacity: 0.2,
				},
			},
			stroke: {
				width: 0,
			},
			plotOptions: {
				pie: {
					donut: {
						labels: {
							show: true,
							total: {
								showAlways: true,
								show: true,
							},
						},
					},
				},
			},
			labels: ['Comedy', 'Action', 'SciFi', 'Drama', 'Horror'],
			dataLabels: {
				dropShadow: {
					blur: 3,
					opacity: 0.8,
				},
			},
			fill: {
				type: 'pattern',
				opacity: 1,
				pattern: {
					enabled: true,
					style: [
						'verticalLines',
						'squares',
						'horizontalLines',
						'circles',
						'slantedLines',
					],
				},
			},
			states: {
				hover: {
					filter: 'none',
				},
			},
			title: {
				text: 'Favourite Movie Type',
			},
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200,
						},
						legend: {
							position: 'bottom',
						},
					},
				},
			],
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='PieChart'>
						<CardTitle>
							type <small>donut</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					<Chart
						series={state.series}
						options={state.options}
						type={state.options.chart.type}
						width={state.options.chart.width}
					/>
				</CardBody>
			</Card>
		</div>
	);
};

export default DonutPattern;
