import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const RadarPolygonFill = () => {
	const [state] = useState({
		series: [
			{
				name: 'Series 1',
				data: [20, 100, 40, 30, 50, 80, 33],
			},
		],
		options: {
			chart: {
				height: 350,
				type: 'radar',
			},
			dataLabels: {
				enabled: true,
			},
			plotOptions: {
				radar: {
					size: 140,
					polygons: {
						strokeColors: '#e9e9e9',
						fill: {
							colors: ['#f8f8f8', '#fff'],
						},
					},
				},
			},
			title: {
				text: 'Radar with Polygon Fill',
			},
			colors: [process.env.REACT_APP_DANGER_COLOR],
			markers: {
				size: 4,
				colors: ['#fff'],
				strokeColor: process.env.REACT_APP_DANGER_COLOR,
				strokeWidth: 2,
			},
			tooltip: {
				y: {
					formatter(val) {
						return val;
					},
				},
			},
			xaxis: {
				categories: [
					'Sunday',
					'Monday',
					'Tuesday',
					'Wednesday',
					'Thursday',
					'Friday',
					'Saturday',
				],
			},
			yaxis: {
				tickAmount: 7,
				labels: {
					formatter(val, i) {
						if (i % 2 === 0) {
							return val;
						}
						return '';
					},
				},
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

export default RadarPolygonFill;
