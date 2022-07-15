import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const LineDashed = () => {
	const [state] = useState({
		series: [
			{
				name: 'Session Duration',
				data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
			},
			{
				name: 'Page Views',
				data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
			},
			{
				name: 'Total Visits',
				data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
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
				width: [5, 7, 5],
				curve: 'straight',
				dashArray: [0, 8, 5],
			},
			title: {
				text: 'Page Statistics',
				align: 'left',
			},
			legend: {
				tooltipHoverFormatter(val, opts) {
					return `${val} - <strong>${
						opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex]
					}</strong>`;
				},
			},
			markers: {
				size: 0,
				hover: {
					sizeOffset: 6,
				},
			},
			xaxis: {
				categories: [
					'01 Jan',
					'02 Jan',
					'03 Jan',
					'04 Jan',
					'05 Jan',
					'06 Jan',
					'07 Jan',
					'08 Jan',
					'09 Jan',
					'10 Jan',
					'11 Jan',
					'12 Jan',
				],
			},
			tooltip: {
				y: [
					{
						title: {
							formatter(val) {
								return `${val} (mins)`;
							},
						},
					},
					{
						title: {
							formatter(val) {
								return `${val} per session`;
							},
						},
					},
					{
						title: {
							formatter(val) {
								return val;
							},
						},
					},
				],
			},
			grid: {
				borderColor: '#f1f1f1',
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='ShowChart' iconColor='secondary'>
						<CardTitle>
							type <small>line</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					<Chart options={state.options} series={state.series} type='line' height={350} />
				</CardBody>
			</Card>
		</div>
	);
};

export default LineDashed;
