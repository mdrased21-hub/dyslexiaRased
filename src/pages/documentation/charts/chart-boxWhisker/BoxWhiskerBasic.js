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

const BoxWhiskerBasic = () => {
	const [state] = useState({
		series: [
			{
				type: 'boxPlot',
				data: [
					{
						x: 'Jan 2015',
						y: [54, 66, 69, 75, 88],
					},
					{
						x: 'Jan 2016',
						y: [43, 65, 69, 76, 81],
					},
					{
						x: 'Jan 2017',
						y: [31, 39, 45, 51, 59],
					},
					{
						x: 'Jan 2018',
						y: [39, 46, 55, 65, 71],
					},
					{
						x: 'Jan 2019',
						y: [29, 31, 35, 39, 44],
					},
					{
						x: 'Jan 2020',
						y: [41, 49, 58, 61, 67],
					},
					{
						x: 'Jan 2021',
						y: [54, 59, 66, 71, 88],
					},
				],
			},
		],
		options: {
			chart: {
				type: 'boxPlot',
				height: 350,
			},
			title: {
				text: 'Basic BoxPlot Chart',
				align: 'left',
			},
			plotOptions: {
				boxPlot: {
					colors: {
						upper: '#5C4742',
						lower: '#A5978B',
					},
				},
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='SportsMma'>
						<CardTitle>
							type <small>boxPlot</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
					<CardActions>
						<CommonStoryBtn to='/story/extra-chart-box-whisker--box-whisker-basic' />
					</CardActions>
				</CardHeader>
				<CardBody>
					<Chart
						series={state.series}
						options={state.options}
						type='boxPlot'
						height={350}
					/>
				</CardBody>
			</Card>
		</div>
	);
};

export default BoxWhiskerBasic;
