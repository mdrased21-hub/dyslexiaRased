import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';
import Clock from '../../../../assets/img/clock.jpeg';
import AlarmClock from '../../../../assets/img/Alarm Clock.svg';

const RadialBarWithImage = () => {
	const [state] = useState({
		series: [67],
		options: {
			chart: {
				height: 350,
				type: 'radialBar',
			},
			plotOptions: {
				radialBar: {
					hollow: {
						margin: 15,
						size: '70%',
						image: AlarmClock,
						imageWidth: 64,
						imageHeight: 64,
						imageClipped: false,
					},
					dataLabels: {
						name: {
							show: false,
							color: '#fff',
						},
						value: {
							show: true,
							color: '#333',
							offsetY: 70,
							fontSize: '22px',
						},
					},
				},
			},
			fill: {
				type: 'image',
				image: {
					src: [Clock],
				},
			},
			stroke: {
				lineCap: 'round',
			},
			labels: ['Volatility'],
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

export default RadialBarWithImage;
