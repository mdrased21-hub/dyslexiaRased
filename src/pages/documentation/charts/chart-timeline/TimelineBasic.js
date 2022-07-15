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
import CommonStoryBtn from '../../../../components/common/CommonStoryBtn';

const TimelineBasic = () => {
	const [state] = useState({
		series: [
			{
				data: [
					{
						x: 'Code',
						y: [new Date('2019-03-02').getTime(), new Date('2019-03-04').getTime()],
					},
					{
						x: 'Test',
						y: [new Date('2019-03-04').getTime(), new Date('2019-03-08').getTime()],
					},
					{
						x: 'Validation',
						y: [new Date('2019-03-08').getTime(), new Date('2019-03-12').getTime()],
					},
					{
						x: 'Deployment',
						y: [new Date('2019-03-12').getTime(), new Date('2019-03-18').getTime()],
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
					<CardLabel icon='WaterfallChart'>
						<CardTitle>
							type <small>rangeBar</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
					<CardActions>
						<CommonStoryBtn to='/story/extra-chart-timeline--timeline-basic' />
					</CardActions>
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

export default TimelineBasic;
