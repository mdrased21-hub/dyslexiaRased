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

const ColumnBasic = () => {
	const [columnBasic] = useState({
		series: [
			{
				name: 'Net Profit',
				data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
			},
			{
				name: 'Revenue',
				data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
			},
			{
				name: 'Free Cash Flow',
				data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
			},
		],
		options: {
			chart: {
				type: 'bar',
				height: 350,
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '55%',
					endingShape: 'rounded',
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent'],
			},
			xaxis: {
				categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
			},
			yaxis: {
				title: {
					text: '$ (thousands)',
				},
			},
			fill: {
				opacity: 1,
			},
			tooltip: {
				y: {
					formatter(val) {
						return `$ ${val} thousands`;
					},
				},
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='BarChart'>
						<CardTitle>
							type <small>bar</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
					<CardActions>
						<CommonStoryBtn to='/story/extra-chart-column--column-basic' />
					</CardActions>
				</CardHeader>
				<CardBody>
					<Chart
						series={columnBasic.series}
						options={columnBasic.options}
						type='bar'
						height={350}
					/>
				</CardBody>
			</Card>
		</div>
	);
};

export default ColumnBasic;
