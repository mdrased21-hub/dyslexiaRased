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
import { series } from '../../../../common/data/chartDummyData';
import CommonStoryBtn from '../../../../components/common/CommonStoryBtn';

const AreaBasic = () => {
	const [state] = useState({
		series: [
			{
				name: 'STOCK ABC',
				data: series.monthDataSeries1.prices,
			},
		],
		options: {
			chart: {
				type: 'area',
				height: 350,
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
				text: 'Fundamental Analysis of Stocks',
				align: 'left',
			},
			subtitle: {
				text: 'Price Movements',
				align: 'left',
			},
			labels: series.monthDataSeries1.dates,
			xaxis: {
				type: 'datetime',
			},
			yaxis: {
				opposite: true,
			},
			legend: {
				horizontalAlign: 'left',
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
					<CardLabel icon='AreaChart'>
						<CardTitle>
							type <small>area</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
					<CardActions>
						<CommonStoryBtn to='/story/extra-chart-area--area-basic' />
					</CardActions>
				</CardHeader>
				<CardBody>
					<Chart series={state.series} options={state.options} type='area' height={350} />
				</CardBody>
			</Card>
		</div>
	);
};

export default AreaBasic;
