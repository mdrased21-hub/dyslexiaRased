import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const RadarMultipleSeries = () => {
	const [state] = useState({
		series: [
			{
				name: 'Series 1',
				data: [80, 50, 30, 40, 100, 20],
			},
			{
				name: 'Series 2',
				data: [20, 30, 40, 80, 20, 80],
			},
			{
				name: 'Series 3',
				data: [44, 76, 78, 13, 43, 10],
			},
		],
		options: {
			chart: {
				height: 350,
				type: 'radar',
				dropShadow: {
					enabled: true,
					blur: 1,
					left: 1,
					top: 1,
				},
			},
			title: {
				text: 'Radar Chart - Multi Series',
			},
			stroke: {
				width: 2,
			},
			fill: {
				opacity: 0.1,
			},
			markers: {
				size: 0,
			},
			xaxis: {
				categories: ['2011', '2012', '2013', '2014', '2015', '2016'],
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='BrightnessLow'>
						<CardTitle>
							type <small>radar</small>
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

export default RadarMultipleSeries;
