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

const TreeMapBasic = () => {
	const [state] = useState({
		series: [
			{
				data: [
					{
						x: 'New Delhi',
						y: 218,
					},
					{
						x: 'Kolkata',
						y: 149,
					},
					{
						x: 'Mumbai',
						y: 184,
					},
					{
						x: 'Ahmedabad',
						y: 55,
					},
					{
						x: 'Bangaluru',
						y: 84,
					},
					{
						x: 'Pune',
						y: 31,
					},
					{
						x: 'Chennai',
						y: 70,
					},
					{
						x: 'Jaipur',
						y: 30,
					},
					{
						x: 'Surat',
						y: 44,
					},
					{
						x: 'Hyderabad',
						y: 68,
					},
					{
						x: 'Lucknow',
						y: 28,
					},
					{
						x: 'Indore',
						y: 19,
					},
					{
						x: 'Kanpur',
						y: 29,
					},
				],
			},
		],
		options: {
			legend: {
				show: false,
			},
			chart: {
				height: 350,
				type: 'treemap',
			},
			title: {
				text: 'Basic Treemap',
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='AccountTree'>
						<CardTitle>
							type <small>treemap</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
					<CardActions>
						<CommonStoryBtn to='/story/extra-chart-treemap--tree-map-basic' />
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

export default TreeMapBasic;
