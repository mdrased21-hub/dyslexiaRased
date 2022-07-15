import React from 'react';

import Chart from '../../../components/extras/Chart';
import * as ChartLineStories from './ChartLine.stories';
import generateData from '../../../common/function/generateData';

export default {
	title: 'Extra/<Chart>/Bubble',
	component: Chart,
	argTypes: { ...ChartLineStories.default.argTypes },
};

const Template = (args) => {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <Chart {...args} />;
};

export const BubbleBasic = Template.bind({});
BubbleBasic.args = {
	series: [
		{
			name: 'Bubble1',
			data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
				min: 10,
				max: 60,
			}),
		},
		{
			name: 'Bubble2',
			data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
				min: 10,
				max: 60,
			}),
		},
		{
			name: 'Bubble3',
			data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
				min: 10,
				max: 60,
			}),
		},
		{
			name: 'Bubble4',
			data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
				min: 10,
				max: 60,
			}),
		},
	],
	options: {
		chart: {
			height: 350,
			type: 'bubble',
		},
		dataLabels: {
			enabled: false,
		},
		fill: {
			opacity: 0.8,
		},
		title: {
			text: 'Simple Bubble Chart',
		},
		xaxis: {
			tickAmount: 12,
			type: 'category',
		},
		yaxis: {
			max: 70,
		},
	},
	type: 'bubble',
	height: 350,
};
