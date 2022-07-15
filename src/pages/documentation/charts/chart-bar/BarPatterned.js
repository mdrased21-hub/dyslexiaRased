import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const BarPatterned = () => {
	const [state] = useState({
		series: [
			{
				name: 'Marine Sprite',
				data: [44, 55, 41, 37, 22, 43, 21],
			},
			{
				name: 'Striking Calf',
				data: [53, 32, 33, 52, 13, 43, 32],
			},
			{
				name: 'Tank Picture',
				data: [12, 17, 11, 9, 15, 11, 20],
			},
			{
				name: 'Bucket Slope',
				data: [9, 7, 5, 8, 6, 9, 4],
			},
		],
		options: {
			chart: {
				type: 'bar',
				height: 350,
				stacked: true,
				dropShadow: {
					enabled: true,
					blur: 1,
					opacity: 0.25,
				},
			},
			plotOptions: {
				bar: {
					horizontal: true,
					barHeight: '60%',
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				width: 2,
			},
			title: {
				text: 'Compare Sales Strategy',
			},
			xaxis: {
				categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
			},
			yaxis: {
				title: {
					text: undefined,
				},
			},
			tooltip: {
				shared: false,
				y: {
					formatter(val) {
						return `${val}K`;
					},
				},
			},
			fill: {
				type: 'pattern',
				opacity: 1,
				pattern: {
					style: ['circles', 'slantedLines', 'verticalLines', 'horizontalLines'], // string or array of strings
				},
			},
			states: {
				hover: {
					filter: 'none',
				},
			},
			legend: {
				position: 'right',
				offsetY: 40,
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='StackedBarChart'>
						<CardTitle>
							type <small>bar</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					<Chart series={state.series} options={state.options} type='bar' height={350} />
				</CardBody>
			</Card>
		</div>
	);
};

export default BarPatterned;
