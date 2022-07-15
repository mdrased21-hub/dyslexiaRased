import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const HeatMapRounded = () => {
	function generateData(count, yrange) {
		let i = 0;
		const series = [];
		while (i < count) {
			const x = (i + 1).toString();
			const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

			series.push({
				x,
				y,
			});
			i += 1;
		}
		return series;
	}
	const [state] = useState({
		series: [
			{
				name: 'Metric1',
				data: generateData(20, {
					min: 0,
					max: 90,
				}),
			},
			{
				name: 'Metric2',
				data: generateData(20, {
					min: 0,
					max: 90,
				}),
			},
			{
				name: 'Metric3',
				data: generateData(20, {
					min: 0,
					max: 90,
				}),
			},
			{
				name: 'Metric4',
				data: generateData(20, {
					min: 0,
					max: 90,
				}),
			},
			{
				name: 'Metric5',
				data: generateData(20, {
					min: 0,
					max: 90,
				}),
			},
			{
				name: 'Metric6',
				data: generateData(20, {
					min: 0,
					max: 90,
				}),
			},
			{
				name: 'Metric7',
				data: generateData(20, {
					min: 0,
					max: 90,
				}),
			},
			{
				name: 'Metric8',
				data: generateData(20, {
					min: 0,
					max: 90,
				}),
			},
			{
				name: 'Metric8',
				data: generateData(20, {
					min: 0,
					max: 90,
				}),
			},
		],
		options: {
			chart: {
				height: 350,
				type: 'heatmap',
			},
			stroke: {
				width: 0,
			},
			plotOptions: {
				heatmap: {
					radius: 30,
					enableShades: false,
					colorScale: {
						ranges: [
							{
								from: 0,
								to: 50,
								color: '#008FFB',
							},
							{
								from: 51,
								to: 100,
								color: '#00E396',
							},
						],
					},
				},
			},
			dataLabels: {
				enabled: true,
				style: {
					colors: ['#fff'],
				},
			},
			xaxis: {
				type: 'category',
			},
			title: {
				text: 'Rounded (Range without Shades)',
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='GridOn'>
						<CardTitle>
							type <small>heatmap</small>
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

export default HeatMapRounded;
