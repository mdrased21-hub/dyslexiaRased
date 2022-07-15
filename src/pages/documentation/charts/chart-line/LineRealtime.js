import React, { useEffect, useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const LineRealtime = () => {
	let lastDate = 0;
	const data = [];
	const TICK_INTERVAL = 86400000;
	const X_AXIS_RANGE = 777600000;
	const getDayWiseTimeSeries = (baseval, count, yrange) => {
		let i = 0;
		while (i < count) {
			const x = baseval;
			const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

			data.push({
				x,
				y,
			});
			lastDate = baseval;
			baseval += TICK_INTERVAL;
			i += 1;
		}
	};
	getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
		min: 10,
		max: 90,
	});
	const getNewSeries = (baseval, yrange) => {
		const newDate = baseval + TICK_INTERVAL;
		lastDate = newDate;

		for (let i = 0; i < data.length - 10; i += 1) {
			// IMPORTANT
			// we reset the x and y of the data which is out of drawing area
			// to prevent memory leaks
			data[i].x = newDate - X_AXIS_RANGE - TICK_INTERVAL;
			data[i].y = 0;
		}

		data.push({
			x: newDate,
			y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min,
		});
	};
	const [state, setState] = useState({
		series: [
			{
				data: data.slice(),
			},
		],
		options: {
			chart: {
				id: 'realtime',
				height: 350,
				type: 'line',
				animations: {
					enabled: true,
					easing: 'linear',
					dynamicAnimation: {
						speed: 1000,
					},
				},
				toolbar: {
					show: false,
				},
				zoom: {
					enabled: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: 'smooth',
			},
			title: {
				text: 'Dynamic Updating Chart',
				align: 'left',
			},
			markers: {
				size: 0,
			},
			xaxis: {
				type: 'datetime',
				range: X_AXIS_RANGE,
			},
			yaxis: {
				max: 100,
			},
			legend: {
				show: false,
			},
		},
	});
	useEffect(() => {
		window.setInterval(() => {
			getNewSeries(lastDate, {
				min: 10,
				max: 90,
			});
			setState({
				series: [
					{
						data: data.slice(),
					},
				],
				options: {
					...state.options,
				},
			});

			// eslint-disable-next-line no-undef
			// ApexCharts.exec('realtime', 'updateSeries', [
			// 	{
			// 		data,
			// 	},
			// ]);
		}, 1000);
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
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

export default LineRealtime;
