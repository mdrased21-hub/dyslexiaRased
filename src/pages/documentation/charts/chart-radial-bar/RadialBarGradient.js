import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const RadialBarGradient = () => {
	const [state] = useState({
		series: [75],
		options: {
			chart: {
				height: 350,
				type: 'radialBar',
				toolbar: {
					show: true,
				},
			},
			plotOptions: {
				radialBar: {
					startAngle: -135,
					endAngle: 225,
					hollow: {
						margin: 0,
						size: '70%',
						background: '#fff',
						image: undefined,
						imageOffsetX: 0,
						imageOffsetY: 0,
						position: 'front',
						dropShadow: {
							enabled: true,
							top: 3,
							left: 0,
							blur: 4,
							opacity: 0.24,
						},
					},
					track: {
						background: '#fff',
						strokeWidth: '67%',
						margin: 0, // margin is in pixels
						dropShadow: {
							enabled: true,
							top: -3,
							left: 0,
							blur: 4,
							opacity: 0.35,
						},
					},

					dataLabels: {
						show: true,
						name: {
							offsetY: -10,
							show: true,
							color: '#888',
							fontSize: '17px',
						},
						value: {
							formatter(val) {
								return parseInt(val, 10);
							},
							color: '#111',
							fontSize: '36px',
							show: true,
						},
					},
				},
			},
			fill: {
				type: 'gradient',
				gradient: {
					shade: 'dark',
					type: 'horizontal',
					shadeIntensity: 0.5,
					gradientToColors: [process.env.REACT_APP_SECONDARY_COLOR],
					inverseColors: true,
					opacityFrom: 1,
					opacityTo: 1,
					stops: [0, 100],
				},
			},
			stroke: {
				lineCap: 'round',
			},
			labels: ['Percent'],
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

export default RadialBarGradient;
