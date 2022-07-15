import React from 'react';

import Chart from '../../../components/extras/Chart';
import * as ChartLineStories from './ChartLine.stories';

export default {
	title: 'Extra/<Chart>/Radar',
	component: Chart,
	argTypes: { ...ChartLineStories.default.argTypes },
};

const Template = (args) => {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <Chart {...args} />;
};

export const RadarBasic = Template.bind({});
RadarBasic.args = {
	series: [
		{
			name: 'Series 1',
			data: [80, 50, 30, 40, 100, 20],
		},
	],
	options: {
		chart: {
			height: 350,
			type: 'radar',
		},
		title: {
			text: 'Basic Radar Chart',
		},
		xaxis: {
			categories: ['January', 'February', 'March', 'April', 'May', 'June'],
		},
	},
	type: 'radar',
	height: 350,
};
