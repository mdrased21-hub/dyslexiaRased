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

const HeatMapColorRange = () => {
	const [state] = useState({
		series: [
			{
				name: 'Jan',
				data: generateDataHeatMap(20, {
					min: -30,
					max: 55,
				}),
			},
			{
				name: 'Feb',
				data: generateDataHeatMap(20, {
					min: -30,
					max: 55,
				}),
			},
			{
				name: 'Mar',
				data: generateDataHeatMap(20, {
					min: -30,
					max: 55,
				}),
			},
			{
				name: 'Apr',
				data: generateDataHeatMap(20, {
					min: -30,
					max: 55,
				}),
			},
			{
				name: 'May',
				data: generateDataHeatMap(20, {
					min: -30,
					max: 55,
				}),
			},
			{
				name: 'Jun',
				data: generateDataHeatMap(20, {
					min: -30,
					max: 55,
				}),
			},
			{
				name: 'Jul',
				data: generateDataHeatMap(20, {
					min: -30,
					max: 55,
				}),
			},
			{
				name: 'Aug',
				data: generateDataHeatMap(20, {
					min: -30,
					max: 55,
				}),
			},
			{
				name: 'Sep',
				data: generateDataHeatMap(20, {
					min: -30,
					max: 55,
				}),
			},
		],
		options: {
			chart: {
				height: 350,
				type: 'heatmap',
			},
			plotOptions: {
				heatmap: {
					shadeIntensity: 0.5,
					radius: 0,
					useFillColorAsStroke: true,
					colorScale: {
						ranges: [
							{
								from: -30,
								to: 5,
								name: 'low',
								color: '#00A100',
							},
							{
								from: 6,
								to: 20,
								name: 'medium',
								color: '#128FD9',
							},
							{
								from: 21,
								to: 45,
								name: 'high',
								color: '#FFB200',
							},
							{
								from: 46,
								to: 55,
								name: 'extreme',
								color: '#FF0000',
							},
						],
					},
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				width: 1,
			},
			title: {
				text: 'HeatMap Chart with Color Range',
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

export default HeatMapColorRange;
