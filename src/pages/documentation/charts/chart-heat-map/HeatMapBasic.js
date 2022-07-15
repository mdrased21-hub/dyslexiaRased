import React, { useState } from 'react';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';
import generateDataHeatMap from '../../../../common/function/generateDataHeatMap';
import CommonStoryBtn from '../../../../components/common/CommonStoryBtn';

const HeatMapBasic = () => {
	const [state] = useState({
		series: [
			{
				name: 'Metric1',
				data: generateDataHeatMap(18, {
					min: 0,
					max: 90,
				}),
			},
			{
				name: 'Metric2',
				data: generateDataHeatMap(18, {
					min: 0,
					max: 90,
				}),
			},
			{
				name: 'Metric3',
				data: generateDataHeatMap(18, {
					min: 0,
					max: 90,
				}),
			},
			{
				name: 'Metric4',
				data: generateDataHeatMap(18, {
					min: 0,
					max: 90,
				}),
			},
			{
				name: 'Metric5',
				data: generateDataHeatMap(18, {
					min: 0,
					max: 90,
				}),
			},
			{
				name: 'Metric6',
				data: generateDataHeatMap(18, {
					min: 0,
					max: 90,
				}),
			},
			{
				name: 'Metric7',
				data: generateDataHeatMap(18, {
					min: 0,
					max: 90,
				}),
			},
			{
				name: 'Metric8',
				data: generateDataHeatMap(18, {
					min: 0,
					max: 90,
				}),
			},
			{
				name: 'Metric9',
				data: generateDataHeatMap(18, {
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
			dataLabels: {
				enabled: false,
			},
			colors: ['#008FFB'],
			title: {
				text: 'HeatMap Chart (Single color)',
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
					<CardActions>
						<CommonStoryBtn to='/story/extra-chart-heatmap--heat-map-basic' />
					</CardActions>
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

export default HeatMapBasic;
