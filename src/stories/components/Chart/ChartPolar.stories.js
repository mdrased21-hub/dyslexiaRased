import React from 'react';

import Chart from '../../../components/extras/Chart';
import * as ChartLineStories from './ChartLine.stories';

export default {
	title: 'Extra/<Chart>/Polar',
	component: Chart,
	argTypes: { ...ChartLineStories.default.argTypes },
};

const Template = (args) => {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <Chart {...args} />;
};

export const PolarBasic = Template.bind({});
PolarBasic.args = {
	series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
	options: {
		chart: {
			type: 'polarArea',
		},
		stroke: {
			colors: ['#fff'],
		},
		fill: {
			opacity: 0.8,
		},
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
	type: 'polarArea',
	height: 350,
};
