import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const ColumnStacked = () => {
	const [stackedColumn] = useState({
		series: [
			{
				name: 'PRODUCT A',
				data: [44, 55, 41, 67, 22, 43],
			},
			{
				name: 'PRODUCT B',
				data: [13, 23, 20, 8, 13, 27],
			},
			{
				name: 'PRODUCT C',
				data: [11, 17, 15, 15, 21, 14],
			},
			{
				name: 'PRODUCT D',
				data: [21, 7, 25, 13, 22, 8],
			},
		],
		options: {
			chart: {
				type: 'bar',
				height: 350,
				stacked: true,
				toolbar: {
					show: true,
				},
				zoom: {
					enabled: true,
				},
			},
			responsive: [
				{
					breakpoint: 480,
					options: {
						legend: {
							position: 'bottom',
							offsetX: -10,
							offsetY: 0,
						},
					},
				},
			],
			plotOptions: {
				bar: {
					horizontal: false,
				},
			},
			xaxis: {
				type: 'datetime',
				categories: [
					'01/01/2011 GMT',
					'01/02/2011 GMT',
					'01/03/2011 GMT',
					'01/04/2011 GMT',
					'01/05/2011 GMT',
					'01/06/2011 GMT',
				],
			},
			legend: {
				position: 'right',
				offsetY: 40,
			},
			fill: {
				opacity: 1,
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='BarChart'>
						<CardTitle>
							type <small>bar</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					<Chart
						series={stackedColumn.series}
						options={stackedColumn.options}
						type='bar'
						height={350}
					/>
				</CardBody>
			</Card>
		</div>
	);
};

export default ColumnStacked;
