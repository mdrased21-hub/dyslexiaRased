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

const PolarBasic = () => {
	const [state] = useState({
		series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
		options: {
			chart: {
				type: 'polarArea',
			},
			stroke: {
				colors: ['#fff'],
			},
			fill: {
				opacity: 0.8,
			},
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200,
						},
						legend: {
							position: 'bottom',
						},
					},
				},
			],
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='TrackChanges'>
						<CardTitle>
							type <small>polarArea</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
					<CardActions>
						<CommonStoryBtn to='/story/extra-chart-polar--polar-basic' />
					</CardActions>
				</CardHeader>
				<CardBody>
					<Chart
						series={state.series}
						options={state.options}
						type={state.options.chart.type}
						width={state.options.chart.width}
					/>
				</CardBody>
			</Card>
		</div>
	);
};

export default PolarBasic;
