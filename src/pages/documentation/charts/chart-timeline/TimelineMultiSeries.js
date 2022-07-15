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

const TimelineMultiSeries = () => {
	const [state] = useState({
		series: [
			{
				name: 'Bob',
				data: [
					{
						x: 'Design',
						y: [new Date('2019-03-05').getTime(), new Date('2019-03-08').getTime()],
					},
					{
						x: 'Code',
						y: [new Date('2019-03-08').getTime(), new Date('2019-03-11').getTime()],
					},
					{
						x: 'Test',
						y: [new Date('2019-03-11').getTime(), new Date('2019-03-16').getTime()],
					},
				],
			},
			{
				name: 'Joe',
				data: [
					{
						x: 'Design',
						y: [new Date('2019-03-02').getTime(), new Date('2019-03-05').getTime()],
					},
					{
						x: 'Code',
						y: [new Date('2019-03-06').getTime(), new Date('2019-03-09').getTime()],
					},
					{
						x: 'Test',
						y: [new Date('2019-03-10').getTime(), new Date('2019-03-19').getTime()],
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
				},
			},
			dataLabels: {
				enabled: true,
				formatter(val) {
					const a = moment(val[0]);
					const b = moment(val[1]);
					const diff = b.diff(a, 'days');
					return diff + (diff > 1 ? ' days' : ' day');
				},
			},
			fill: {
				type: 'gradient',
				gradient: {
					shade: 'light',
					type: 'vertical',
					shadeIntensity: 0.25,
					gradientToColors: undefined,
					inverseColors: true,
					opacityFrom: 1,
					opacityTo: 1,
					stops: [50, 0, 100, 100],
				},
			},
			xaxis: {
				type: 'datetime',
			},
			legend: {
				position: 'top',
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

export default TimelineMultiSeries;
