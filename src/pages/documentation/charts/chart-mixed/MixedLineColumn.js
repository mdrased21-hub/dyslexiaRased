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

const MixedLineColumn = () => {
	const [state] = useState({
		series: [
			{
				name: 'Website Blog',
				type: 'column',
				data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
			},
			{
				name: 'Social Media',
				type: 'line',
				data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
			},
		],
		options: {
			chart: {
				height: 350,
				type: 'line',
			},
			stroke: {
				width: [0, 4],
			},
			title: {
				text: 'Traffic Sources',
			},
			dataLabels: {
				enabled: true,
				enabledOnSeries: [1],
			},
			labels: [
				'01 Jan 2001',
				'02 Jan 2001',
				'03 Jan 2001',
				'04 Jan 2001',
				'05 Jan 2001',
				'06 Jan 2001',
				'07 Jan 2001',
				'08 Jan 2001',
				'09 Jan 2001',
				'10 Jan 2001',
				'11 Jan 2001',
				'12 Jan 2001',
			],
			xaxis: {
				type: 'datetime',
			},
			yaxis: [
				{
					title: {
						text: 'Website Blog',
					},
				},
				{
					opposite: true,
					title: {
						text: 'Social Media',
					},
				},
			],
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='MultilineChart'>
						<CardTitle>
							type <small>line, column</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
					<CardActions>
						<CommonStoryBtn to='/story/extra-chart-mixed--mixed-line-column' />
					</CardActions>
				</CardHeader>
				<CardBody>
					<Chart series={state.series} options={state.options} type='line' height={350} />
				</CardBody>
			</Card>
		</div>
	);
};

export default MixedLineColumn;
