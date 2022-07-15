import React from 'react';

import Chart from '../../../components/extras/Chart';
import * as ChartLineStories from './ChartLine.stories';

export default {
	title: 'Extra/<Chart>/Pie & Donut',
	component: Chart,
	argTypes: { ...ChartLineStories.default.argTypes },
};

const Template = (args) => {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <Chart {...args} />;
};

export const PieBasic = Template.bind({});
PieBasic.args = {
	series: [44, 55, 13, 43, 22],
	options: {
		chart: {
			width: 380,
			type: 'pie',
		},
		labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200,
					},
					legend: {
						position: 'bottom',
					},
				},
			},
		],
	},
	type: 'pie',
	height: 380,
};
