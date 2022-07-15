import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';
import generateData from '../../../../common/function/generateData';

const Bubble3D = () => {
	const [state] = useState({
		series: [
			{
				name: 'Product1',
				data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
					min: 10,
					max: 60,
				}),
			},
			{
				name: 'Product2',
				data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
					min: 10,
					max: 60,
				}),
			},
			{
				name: 'Product3',
				data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
					min: 10,
					max: 60,
				}),
			},
			{
				name: 'Product4',
				data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
					min: 10,
					max: 60,
				}),
			},
		],
		options: {
			chart: {
				height: 350,
				type: 'bubble',
			},
			dataLabels: {
				enabled: false,
			},
			fill: {
				type: 'gradient',
			},
			title: {
				text: '3D Bubble Chart',
			},
			xaxis: {
				tickAmount: 12,
				type: 'datetime',
				labels: {
					rotate: 0,
				},
			},
			yaxis: {
				max: 70,
			},
			theme: {
				palette: 'palette2',
			},
		},
	});
	return (
		<div className='col-12'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='BubbleChart'>
						<CardTitle>
							type <small>bubble</small>
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

export default Bubble3D;
