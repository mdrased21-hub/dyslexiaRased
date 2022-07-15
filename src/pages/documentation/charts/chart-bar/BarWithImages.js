import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';
import Image from '../../../../assets/img/coins.jpeg';

const BarWithImages = () => {
	const [state] = useState({
		series: [
			{
				name: 'coins',
				data: [
					2, 4, 3, 4, 3, 5, 5, 6.5, 6, 5, 4, 5, 8, 7, 7, 8, 8, 10, 9, 9, 12, 12, 11, 12,
					13, 14, 16, 14, 15, 17, 19, 21,
				],
			},
		],
		options: {
			chart: {
				type: 'bar',
				height: 410,
				animations: {
					enabled: false,
				},
			},
			plotOptions: {
				bar: {
					horizontal: true,
					barHeight: '100%',
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				colors: ['#fff'],
				width: 0.2,
			},
			// eslint-disable-next-line prefer-spread
			labels: Array.apply(null, { length: 39 }).map((el, index) => {
				return index + 1;
			}),
			yaxis: {
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				},
				labels: {
					show: false,
				},
				title: {
					text: 'Weight',
				},
			},
			grid: {
				position: 'back',
			},
			title: {
				text: 'Paths filled by clipped image',
				align: 'right',
				offsetY: 30,
			},
			fill: {
				type: 'image',
				opacity: 0.87,
				image: {
					src: [Image],
					width: 855,
					height: 570,
				},
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='StackedBarChart'>
						<CardTitle>
							type <small>bar</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					<Chart series={state.series} options={state.options} type='bar' height={410} />
				</CardBody>
			</Card>
		</div>
	);
};

export default BarWithImages;
