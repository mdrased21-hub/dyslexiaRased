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
import { dataSeries } from '../../../../common/data/chartDummyData';

const AreaIrregular = () => {
	let ts1 = 1388534400000;
	let ts2 = 1388620800000;
	let ts3 = 1389052800000;

	const dataSet = [[], [], []];

	for (let i = 0; i < 12; i += 1) {
		ts1 += 86400000;
		const innerArr = [ts1, dataSeries[2][i].value];
		dataSet[0].push(innerArr);
	}
	for (let i = 0; i < 18; i += 1) {
		ts2 += 86400000;
		const innerArr = [ts2, dataSeries[1][i].value];
		dataSet[1].push(innerArr);
	}
	for (let i = 0; i < 12; i += 1) {
		ts3 += 86400000;
		const innerArr = [ts3, dataSeries[0][i].value];
		dataSet[2].push(innerArr);
	}
	const [state] = useState({
		series: [
			{
				name: 'PRODUCT A',
				data: dataSet[0],
			},
			{
				name: 'PRODUCT B',
				data: dataSet[1],
			},
			{
				name: 'PRODUCT C',
				data: dataSet[2],
			},
		],
		options: {
			chart: {
				type: 'area',
				stacked: false,
				height: 350,
				zoom: {
					enabled: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			markers: {
				size: 0,
			},
			fill: {
				type: 'gradient',
				gradient: {
					shadeIntensity: 1,
					inverseColors: false,
					opacityFrom: 0.45,
					opacityTo: 0.05,
					stops: [20, 100, 100, 100],
				},
			},
			yaxis: {
				labels: {
					style: {
						colors: '#8e8da4',
					},
					offsetX: 0,
					formatter(val) {
						return (val / 1000000).toFixed(2);
					},
				},
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				},
			},
			xaxis: {
				type: 'datetime',
				tickAmount: 8,
				min: new Date('01/01/2014').getTime(),
				max: new Date('01/20/2014').getTime(),
				labels: {
					rotate: -15,
					rotateAlways: true,
					formatter(val, timestamp) {
						return moment(new Date(timestamp)).format('DD MMM YYYY');
					},
				},
			},
			title: {
				text: 'Irregular Data in Time Series',
				align: 'left',
				offsetX: 14,
			},
			tooltip: {
				shared: true,
			},
			legend: {
				position: 'top',
				horizontalAlign: 'right',
				offsetX: -10,
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

export default AreaIrregular;
