import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';
import generateDataHeatMap from '../../../../common/function/generateDataHeatMap';

const HeatMapMultipleColors = () => {
	const data = [
		{
			name: 'W1',
			data: generateDataHeatMap(8, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: 'W2',
			data: generateDataHeatMap(8, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: 'W3',
			data: generateDataHeatMap(8, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: 'W4',
			data: generateDataHeatMap(8, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: 'W5',
			data: generateDataHeatMap(8, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: 'W6',
			data: generateDataHeatMap(8, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: 'W7',
			data: generateDataHeatMap(8, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: 'W8',
			data: generateDataHeatMap(8, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: 'W9',
			data: generateDataHeatMap(8, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: 'W10',
			data: generateDataHeatMap(8, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: 'W11',
			data: generateDataHeatMap(8, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: 'W12',
			data: generateDataHeatMap(8, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: 'W13',
			data: generateDataHeatMap(8, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: 'W14',
			data: generateDataHeatMap(8, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: 'W15',
			data: generateDataHeatMap(8, {
				min: 0,
				max: 90,
			}),
		},
	];
	data.reverse();

	const colors = [
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
	];

	colors.reverse();

	const [state] = useState({
		series: data,
		options: {
			chart: {
				height: 450,
				type: 'heatmap',
			},
			dataLabels: {
				enabled: false,
			},
			colors,
			xaxis: {
				type: 'category',
				categories: [
					'10:00',
					'10:30',
					'11:00',
					'11:30',
					'12:00',
					'12:30',
					'01:00',
					'01:30',
				],
			},
			title: {
				text: 'HeatMap Chart (Different color shades for each series)',
			},
			grid: {
				padding: {
					right: 20,
				},
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

export default HeatMapMultipleColors;
