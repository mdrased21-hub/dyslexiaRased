import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const DonutGradient = () => {
	const [state] = useState({
		series: [44, 55, 41, 17, 15],
		options: {
			chart: {
				width: 380,
				type: 'donut',
			},
			plotOptions: {
				pie: {
					startAngle: -90,
					endAngle: 270,
				},
			},
			dataLabels: {
				enabled: false,
			},
			fill: {
				type: 'gradient',
			},
			legend: {
				formatter(val, opts) {
					return `${val} - ${opts.w.globals.series[opts.seriesIndex]}`;
				},
			},
			title: {
				text: 'Gradient Donut with custom Start-angle',
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

export default DonutGradient;
