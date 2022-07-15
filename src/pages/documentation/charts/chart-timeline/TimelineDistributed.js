import React, { useState } from 'react';
import moment from 'moment';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const TimelineDistributed = () => {
	const [state] = useState({
		series: [
			{
				data: [
					{
						x: 'Analysis',
						y: [new Date('2019-02-27').getTime(), new Date('2019-03-04').getTime()],
						fillColor: process.env.REACT_APP_INFO_COLOR,
					},
					{
						x: 'Design',
						y: [new Date('2019-03-04').getTime(), new Date('2019-03-08').getTime()],
						fillColor: process.env.REACT_APP_SUCCESS_COLOR,
					},
					{
						x: 'Coding',
						y: [new Date('2019-03-07').getTime(), new Date('2019-03-10').getTime()],
						fillColor: process.env.REACT_APP_PRIMARY_COLOR,
					},
					{
						x: 'Testing',
						y: [new Date('2019-03-08').getTime(), new Date('2019-03-12').getTime()],
						fillColor: process.env.REACT_APP_WARNING_COLOR,
					},
					{
						x: 'Deployment',
						y: [new Date('2019-03-12').getTime(), new Date('2019-03-17').getTime()],
						fillColor: process.env.REACT_APP_DANGER_COLOR,
					},
				],
			},
		],
		options: {
			chart: {
				height: 350,
				type: 'rangeBar',
			},
			plotOptions: {
				bar: {
					horizontal: true,
					distributed: true,
					dataLabels: {
						hideOverflowingLabels: false,
					},
				},
			},
			dataLabels: {
				enabled: true,
				formatter(val, opts) {
					const label = opts.w.globals.labels[opts.dataPointIndex];
					const a = moment(val[0]);
					const b = moment(val[1]);
					const diff = b.diff(a, 'days');
					return `${label}: ${diff}${diff > 1 ? ' days' : ' day'}`;
				},
				style: {
					colors: ['#f3f4f5', '#fff'],
				},
			},
			xaxis: {
				type: 'datetime',
			},
			yaxis: {
				show: false,
			},
			grid: {
				row: {
					colors: ['#f3f4f5', '#fff'],
					opacity: 1,
				},
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='WaterfallChart'>
						<CardTitle>
							type <small>rangeBar</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					<Chart
						series={state.series}
						options={state.options}
						type='rangeBar'
						height={350}
					/>
				</CardBody>
			</Card>
		</div>
	);
};

export default TimelineDistributed;
