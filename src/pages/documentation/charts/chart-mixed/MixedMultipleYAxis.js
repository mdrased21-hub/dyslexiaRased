import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const MixedMultipleYAxis = () => {
	const [state] = useState({
		series: [
			{
				name: 'Income',
				type: 'column',
				data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
			},
			{
				name: 'Cashflow',
				type: 'column',
				data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
			},
			{
				name: 'Revenue',
				type: 'line',
				data: [20, 29, 37, 36, 44, 45, 50, 58],
			},
		],
		options: {
			chart: {
				height: 350,
				type: 'line',
				stacked: false,
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				width: [1, 1, 4],
			},
			title: {
				text: 'XYZ - Stock Analysis (2009 - 2016)',
				align: 'left',
				offsetX: 110,
			},
			xaxis: {
				categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
			},
			yaxis: [
				{
					axisTicks: {
						show: true,
					},
					axisBorder: {
						show: true,
						color: process.env.REACT_APP_INFO_COLOR,
					},
					labels: {
						style: {
							colors: process.env.REACT_APP_INFO_COLOR,
						},
					},
					title: {
						text: 'Income (thousand cores)',
						style: {
							color: process.env.REACT_APP_INFO_COLOR,
						},
					},
					tooltip: {
						enabled: true,
					},
				},
				{
					seriesName: 'Income',
					opposite: true,
					axisTicks: {
						show: true,
					},
					axisBorder: {
						show: true,
						color: process.env.REACT_APP_SUCCESS_COLOR,
					},
					labels: {
						style: {
							colors: process.env.REACT_APP_SUCCESS_COLOR,
						},
					},
					title: {
						text: 'Operating Cashflow (thousand cores)',
						style: {
							color: process.env.REACT_APP_SUCCESS_COLOR,
						},
					},
				},
				{
					seriesName: 'Revenue',
					opposite: true,
					axisTicks: {
						show: true,
					},
					axisBorder: {
						show: true,
						color: process.env.REACT_APP_WARNING_COLOR,
					},
					labels: {
						style: {
							colors: process.env.REACT_APP_WARNING_COLOR,
						},
					},
					title: {
						text: 'Revenue (thousand cores)',
						style: {
							color: process.env.REACT_APP_WARNING_COLOR,
						},
					},
				},
			],
			tooltip: {
				theme: 'dark',
				fixed: {
					enabled: true,
					position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
					offsetY: 30,
					offsetX: 60,
				},
			},
			legend: {
				horizontalAlign: 'left',
				offsetX: 40,
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='MultilineChart'>
						<CardTitle>
							type <small>line</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					<Chart series={state.series} options={state.options} type='line' height={350} />
				</CardBody>
			</Card>
		</div>
	);
};

export default MixedMultipleYAxis;
