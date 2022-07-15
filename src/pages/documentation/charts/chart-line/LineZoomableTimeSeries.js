import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';
import { dataSeries } from '../../../../common/data/chartDummyData';

const LineZoomableTimeSeries = () => {
	let ts2 = 1484418600000;
	const dates = [];
	for (let i = 0; i < 120; i += 1) {
		ts2 += 86400000;
		const innerArr = [ts2, dataSeries[1][i].value];
		dates.push(innerArr);
	}
	const [state] = useState({
		series: [
			{
				name: 'XYZ MOTORS',
				data: dates,
			},
		],
		options: {
			chart: {
				type: 'area',
				stacked: false,
				height: 350,
				zoom: {
					type: 'x',
					enabled: true,
					autoScaleYaxis: true,
				},
				toolbar: {
					autoSelected: 'zoom',
				},
			},
			dataLabels: {
				enabled: false,
			},
			markers: {
				size: 0,
			},
			title: {
				text: 'Stock Price Movement',
				align: 'left',
			},
			fill: {
				type: 'gradient',
				gradient: {
					shadeIntensity: 1,
					inverseColors: false,
					opacityFrom: 0.5,
					opacityTo: 0,
					stops: [0, 90, 100],
				},
			},
			yaxis: {
				labels: {
					formatter(val) {
						return (val / 1000000).toFixed(0);
					},
				},
				title: {
					text: 'Price',
				},
			},
			xaxis: {
				type: 'datetime',
			},
			tooltip: {
				shared: false,
				y: {
					formatter(val) {
						return (val / 1000000).toFixed(0);
					},
				},
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='ShowChart' iconColor='danger'>
						<CardTitle>
							type <small>area</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					<Chart
						series={state.series}
						options={state.options}
						type={state.options.chart.type}
						height={state.options.chart.height}
					/>
				</CardBody>
			</Card>
		</div>
	);
};

export default LineZoomableTimeSeries;
