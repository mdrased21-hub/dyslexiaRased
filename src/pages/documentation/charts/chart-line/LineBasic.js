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

const LineBasic = () => {
	const [state] = useState({
		series: [
			{
				name: 'Desktops',
				data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
			},
		],
		options: {
			chart: {
				height: 350,
				type: 'line',
				zoom: {
					enabled: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: 'straight',
			},
			title: {
				text: 'Product Trends by Month',
				align: 'left',
			},
			grid: {
				row: {
					colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
					opacity: 0.5,
				},
			},
			xaxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='ShowChart'>
						<CardTitle>
							type <small>line</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
					<CardActions>
						<CommonStoryBtn to='/story/extra-chart-line--line-basic' />
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

export default LineBasic;
