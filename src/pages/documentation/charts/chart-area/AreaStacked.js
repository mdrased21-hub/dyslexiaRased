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

const AreaStacked = () => {
	const [state] = useState({
		series: [
			{
				name: 'South',
				data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
					min: 10,
					max: 60,
				}),
			},
			{
				name: 'North',
				data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
					min: 10,
					max: 20,
				}),
			},
			{
				name: 'Central',
				data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
					min: 10,
					max: 15,
				}),
			},
		],
		options: {
			chart: {
				type: 'area',
				height: 350,
				stacked: true,
				events: {
					// eslint-disable-next-line no-unused-vars
					selection(chart, e) {
						// console.log(new Date(e.xaxis.min));
					},
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: 'smooth',
			},
			fill: {
				type: 'gradient',
				gradient: {
					opacityFrom: 0.6,
					opacityTo: 0.8,
				},
			},
			legend: {
				position: 'top',
				horizontalAlign: 'left',
			},
			xaxis: {
				type: 'datetime',
			},
			tooltip: {
				theme: 'dark',
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='AreaChart'>
						<CardTitle>
							type <small>area</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					<Chart series={state.series} options={state.options} type='area' height={350} />
				</CardBody>
			</Card>
		</div>
	);
};

export default AreaStacked;
