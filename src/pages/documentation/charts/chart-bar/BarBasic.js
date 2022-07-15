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

const BarBasic = () => {
	const [state] = useState({
		series: [
			{
				data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
			},
		],
		options: {
			chart: {
				type: 'bar',
				height: 350,
			},
			plotOptions: {
				bar: {
					horizontal: true,
				},
			},
			dataLabels: {
				enabled: false,
			},
			xaxis: {
				categories: [
					'South Korea',
					'Canada',
					'United Kingdom',
					'Netherlands',
					'Italy',
					'France',
					'Japan',
					'United States',
					'China',
					'Germany',
				],
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
					<CardActions>
						<CommonStoryBtn to='/story/extra-chart-bar--bar-basic' />
					</CardActions>
				</CardHeader>
				<CardBody>
					<Chart series={state.series} options={state.options} type='bar' height={350} />
				</CardBody>
			</Card>
		</div>
	);
};

export default BarBasic;
