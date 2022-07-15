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

const RadarBasic = () => {
	const [state] = useState({
		series: [
			{
				name: 'Series 1',
				data: [80, 50, 30, 40, 100, 20],
			},
		],
		options: {
			chart: {
				height: 350,
				type: 'radar',
			},
			title: {
				text: 'Basic Radar Chart',
			},
			xaxis: {
				categories: ['January', 'February', 'March', 'April', 'May', 'June'],
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='BrightnessLow'>
						<CardTitle>
							type <small>radar</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
					<CardActions>
						<CommonStoryBtn to='/story/extra-chart-radar--radar-basic' />
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

export default RadarBasic;
