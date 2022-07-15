import React from 'react';

import Chart from '../../../components/extras/Chart';

export default {
	title: 'Extra/<Chart>/Line',
	component: Chart,
	argTypes: {
		series: {},
		options: {},
		type: { control: false },
	},
};

const Template = (args) => {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <Chart {...args} />;
};

export const LineBasic = Template.bind({});
LineBasic.args = {
	series: [
		{
			name: 'Desktops',
			data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
		},
	],
	options: {
		chart: {
			height: 350,
			type: 'line',
			zoom: {
				enabled: false,
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: 'straight',
		},
		title: {
			text: 'Product Trends by Month',
			align: 'left',
		},
		grid: {
			row: {
				colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
				opacity: 0.5,
			},
		},
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
		},
	},
	type: 'line',
	height: 350,
};
