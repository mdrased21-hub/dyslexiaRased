import React from 'react';

import Chart from '../../../components/extras/Chart';
import * as ChartLineStories from './ChartLine.stories';

export default {
	title: 'Extra/<Chart>/Timeline',
	component: Chart,
	argTypes: { ...ChartLineStories.default.argTypes },
};

const Template = (args) => {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <Chart {...args} />;
};

export const TimelineBasic = Template.bind({});
TimelineBasic.args = {
	series: [
		{
			data: [
				{
					x: 'Code',
					y: [new Date('2019-03-02').getTime(), new Date('2019-03-04').getTime()],
				},
				{
					x: 'Test',
					y: [new Date('2019-03-04').getTime(), new Date('2019-03-08').getTime()],
				},
				{
					x: 'Validation',
					y: [new Date('2019-03-08').getTime(), new Date('2019-03-12').getTime()],
				},
				{
					x: 'Deployment',
					y: [new Date('2019-03-12').getTime(), new Date('2019-03-18').getTime()],
				},
			],
		},
	],
	options: {
		chart: {
			height: 350,
			type: 'rangeBar',
		},
		plotOptions: {
			bar: {
				horizontal: true,
			},
		},
		xaxis: {
			type: 'datetime',
		},
		tooltip: {
			theme: 'dark',
		},
	},
	type: 'rangeBar',
	height: 350,
};
