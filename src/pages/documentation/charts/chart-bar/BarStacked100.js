import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const BarStacked100 = () => {
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
			{
				name: 'Reborn Kid',
				data: [25, 12, 19, 32, 25, 24, 10],
			},
		],
		options: {
			chart: {
				type: 'bar',
				height: 350,
				stacked: true,
				stackType: '100%',
			},
			plotOptions: {
				bar: {
					horizontal: true,
				},
			},
			stroke: {
				width: 1,
				colors: ['#fff'],
			},
			title: {
				text: '100% Stacked Bar',
			},
			xaxis: {
				categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
			},
			tooltip: {
				y: {
					formatter(val) {
						return `${val}K`;
					},
				},
			},
			fill: {
				opacity: 1,
			},
			legend: {
				position: 'top',
				horizontalAlign: 'left',
				offsetX: 40,
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
					<Chart series={state.series} options={state.options} type='bar' height={460} />
				</CardBody>
			</Card>
		</div>
	);
};

export default BarStacked100;
