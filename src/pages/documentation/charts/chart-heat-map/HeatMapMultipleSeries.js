import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const HeatMapMultipleSeries = () => {
	function generateData(count, yrange) {
		let i = 0;
		const series = [];
		while (i < count) {
			const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

			series.push(y);
			i += 1;
		}
		return series;
	}

	const data = [
		{
			name: '10:00',
			data: generateData(15, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: '10:30',
			data: generateData(15, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: '11:00',
			data: generateData(15, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: '11:30',
			data: generateData(15, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: '12:00',
			data: generateData(15, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: '12:30',
			data: generateData(15, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: '13:00',
			data: generateData(15, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: '13:30',
			data: generateData(15, {
				min: 0,
				max: 90,
			}),
		},
	];
	data.reverse();

	const [state] = useState({
		series: data,
		options: {
			chart: {
				height: 350,
				type: 'heatmap',
			},
			dataLabels: {
				enabled: false,
			},
			plotOptions: {
				heatmap: {
					colorScale: {
						inverse: true,
					},
				},
			},
			colors: [
				'#F3B415',
				'#F27036',
				'#663F59',
				'#6A6E94',
				'#4E88B4',
				'#00A7C6',
				'#18D8D8',
				'#A9D794',
				'#46AF78',
				'#A93F55',
				'#8C5E58',
				'#2176FF',
				'#33A1FD',
				'#7A918D',
				'#BAFF29',
			],
			xaxis: {
				type: 'category',
				categories: [
					'W1',
					'W2',
					'W3',
					'W4',
					'W5',
					'W6',
					'W7',
					'W8',
					'W9',
					'W10',
					'W11',
					'W12',
					'W13',
					'W14',
					'W15',
				],
			},
			title: {
				text: 'Color Scales flipped Vertically',
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

export default HeatMapMultipleSeries;
