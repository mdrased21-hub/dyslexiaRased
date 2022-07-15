import React from 'react';

import Chart from '../../../components/extras/Chart';
import * as ChartLineStories from './ChartLine.stories';
import generateDataHeatMap from '../../../common/function/generateDataHeatMap';

export default {
	title: 'Extra/<Chart>/Heatmap',
	component: Chart,
	argTypes: { ...ChartLineStories.default.argTypes },
};

const Template = (args) => {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <Chart {...args} />;
};

export const HeatMapBasic = Template.bind({});
HeatMapBasic.args = {
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
	type: 'heatmap',
	height: 350,
};
