import React, { useState } from 'react';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';
import generateData from '../../../../common/function/generateData';
import CommonStoryBtn from '../../../../components/common/CommonStoryBtn';

const BubbleBasic = () => {
	const [state] = useState({
		series: [
			{
				name: 'Bubble1',
				data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
					min: 10,
					max: 60,
				}),
			},
			{
				name: 'Bubble2',
				data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
					min: 10,
					max: 60,
				}),
			},
			{
				name: 'Bubble3',
				data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
					min: 10,
					max: 60,
				}),
			},
			{
				name: 'Bubble4',
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
				opacity: 0.8,
			},
			title: {
				text: 'Simple Bubble Chart',
			},
			xaxis: {
				tickAmount: 12,
				type: 'category',
			},
			yaxis: {
				max: 70,
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
					<CardActions>
						<CommonStoryBtn to='/story/extra-chart-bubble--bubble-basic' />
					</CardActions>
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

export default BubbleBasic;
