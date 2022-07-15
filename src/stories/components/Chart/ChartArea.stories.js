import React from 'react';

import Chart from '../../../components/extras/Chart';
import { series } from '../../../common/data/chartDummyData';
import * as ChartLineStories from './ChartLine.stories';

export default {
	title: 'Extra/<Chart>/Area',
	component: Chart,
	argTypes: { ...ChartLineStories.default.argTypes },
};

const Template = (args) => {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <Chart {...args} />;
};

export const AreaBasic = Template.bind({});
AreaBasic.args = {
	series: [
		{
			name: 'STOCK ABC',
			data: series.monthDataSeries1.prices,
		},
	],
	options: {
		chart: {
			type: 'area',
			height: 350,
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
			text: 'Fundamental Analysis of Stocks',
			align: 'left',
		},
		subtitle: {
			text: 'Price Movements',
			align: 'left',
		},
		labels: series.monthDataSeries1.dates,
		xaxis: {
			type: 'datetime',
		},
		yaxis: {
			opposite: true,
		},
		legend: {
			horizontalAlign: 'left',
		},
		tooltip: {
			theme: 'dark',
		},
	},
	type: 'area',
	height: 350,
};
