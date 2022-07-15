import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';
import generateDayWiseTimeSeries from '../../../../common/function/generateDayWiseTimeSeries';

const ScatterDateTime = () => {
	const [state] = useState({
		series: [
			{
				name: 'TEAM 1',
				data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
					min: 10,
					max: 60,
				}),
			},
			{
				name: 'TEAM 2',
				data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
					min: 10,
					max: 60,
				}),
			},
			{
				name: 'TEAM 3',
				data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
					min: 10,
					max: 60,
				}),
			},
			{
				name: 'TEAM 4',
				data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
					min: 10,
					max: 60,
				}),
			},
			{
				name: 'TEAM 5',
				data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
					min: 10,
					max: 60,
				}),
			},
		],
		options: {
			chart: {
				height: 350,
				type: 'scatter',
				zoom: {
					type: 'xy',
				},
			},
			dataLabels: {
				enabled: false,
			},
			grid: {
				xaxis: {
					lines: {
						show: true,
					},
				},
				yaxis: {
					lines: {
						show: true,
					},
				},
			},
			xaxis: {
				type: 'datetime',
			},
			yaxis: {
				max: 70,
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='ScatterPlot'>
						<CardTitle>
							type <small>scatter</small>
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

export default ScatterDateTime;
