import React from 'react';

import Chart from '../../../components/extras/Chart';
import * as ChartLineStories from './ChartLine.stories';

export default {
	title: 'Extra/<Chart>/Radial Bar',
	component: Chart,
	argTypes: { ...ChartLineStories.default.argTypes },
};

const Template = (args) => {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <Chart {...args} />;
};

export const RadialBarBasic = Template.bind({});
RadialBarBasic.args = {
	series: [70],
	options: {
		chart: {
			height: 350,
			type: 'radialBar',
		},
		plotOptions: {
			radialBar: {
				hollow: {
					size: '70%',
				},
			},
		},
		labels: ['Cricket'],
		stroke: {
			lineCap: 'round',
		},
	},
	type: 'radialBar',
	height: 350,
};
