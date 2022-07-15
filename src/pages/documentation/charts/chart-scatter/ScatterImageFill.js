import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';
import Instagram from '../../../../assets/img/instagram.svg';
import Messenger from '../../../../assets/img/messenger.svg';

const ScatterImageFill = () => {
	const [state] = useState({
		series: [
			{
				name: 'Messenger',
				data: [
					[16.4, 5.4],
					[21.7, 4],
					[25.4, 3],
					[19, 2],
					[10.9, 1],
					[13.6, 3.2],
					[10.9, 7],
					[10.9, 8.2],
					[16.4, 4],
					[13.6, 4.3],
					[13.6, 12],
					[29.9, 3],
					[10.9, 5.2],
					[16.4, 6.5],
					[10.9, 8],
					[24.5, 7.1],
					[10.9, 7],
					[8.1, 4.7],
					[19, 10],
					[27.1, 10],
					[24.5, 8],
					[27.1, 3],
					[29.9, 11.5],
					[27.1, 0.8],
					[22.1, 2],
				],
			},
			{
				name: 'Instagram',
				data: [
					[6.4, 5.4],
					[11.7, 4],
					[15.4, 3],
					[9, 2],
					[10.9, 11],
					[20.9, 7],
					[12.9, 8.2],
					[6.4, 14],
					[11.6, 12],
				],
			},
		],
		options: {
			chart: {
				height: 350,
				type: 'scatter',
				animations: {
					enabled: false,
				},
				zoom: {
					enabled: false,
				},
				toolbar: {
					show: false,
				},
			},
			colors: ['#056BF6', '#D2376A'],
			xaxis: {
				tickAmount: 10,
				min: 0,
				max: 40,
			},
			yaxis: {
				tickAmount: 7,
			},
			markers: {
				size: 12,
			},
			fill: {
				type: 'image',
				opacity: 1,
				image: {
					src: [Messenger, Instagram],
					width: 24,
					height: 24,
				},
			},
			legend: {
				labels: {
					useSeriesColors: true,
				},
				markers: {
					customHTML: [
						() => {
							return '';
						},
						() => {
							return '';
						},
					],
				},
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

export default ScatterImageFill;
