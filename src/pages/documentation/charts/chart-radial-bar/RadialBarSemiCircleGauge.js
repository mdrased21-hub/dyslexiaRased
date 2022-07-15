import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const RadialBarSemiCircleGauge = () => {
	const [state] = useState({
		series: [76],
		options: {
			chart: {
				type: 'radialBar',
				offsetY: -20,
				sparkline: {
					enabled: true,
				},
			},
			plotOptions: {
				radialBar: {
					startAngle: -90,
					endAngle: 90,
					track: {
						background: '#e7e7e7',
						strokeWidth: '97%',
						margin: 5, // margin is in pixels
						dropShadow: {
							enabled: true,
							top: 2,
							left: 0,
							color: '#999',
							opacity: 1,
							blur: 2,
						},
					},
					dataLabels: {
						name: {
							show: false,
						},
						value: {
							offsetY: -2,
							fontSize: '22px',
						},
					},
				},
			},
			grid: {
				padding: {
					top: -10,
				},
			},
			fill: {
				type: 'gradient',
				gradient: {
					shade: 'light',
					shadeIntensity: 0.4,
					inverseColors: false,
					opacityFrom: 1,
					opacityTo: 1,
					stops: [0, 50, 53, 91],
				},
			},
			labels: ['Average Results'],
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='DonutLarge'>
						<CardTitle>
							type <small>radialBar</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					<Chart
						series={state.series}
						options={state.options}
						type={state.options.chart.type}
						height={state.options.chart.height}
					/>
				</CardBody>
			</Card>
		</div>
	);
};

export default RadialBarSemiCircleGauge;
