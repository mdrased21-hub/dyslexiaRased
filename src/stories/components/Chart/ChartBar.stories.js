import React from 'react';

import Chart from '../../../components/extras/Chart';
import * as ChartLineStories from './ChartLine.stories';

export default {
	title: 'Extra/<Chart>/Bar',
	component: Chart,
	argTypes: { ...ChartLineStories.default.argTypes },
};

const Template = (args) => {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <Chart {...args} />;
};

export const BarBasic = Template.bind({});
BarBasic.args = {
	series: [
		{
			data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
		},
	],
	options: {
		chart: {
			type: 'bar',
			height: 350,
		},
		plotOptions: {
			bar: {
				horizontal: true,
			},
		},
		dataLabels: {
			enabled: false,
		},
		xaxis: {
			categories: [
				'South Korea',
				'Canada',
				'United Kingdom',
				'Netherlands',
				'Italy',
				'France',
				'Japan',
				'United States',
				'China',
				'Germany',
			],
		},
	},
	type: 'bar',
	height: 350,
};
