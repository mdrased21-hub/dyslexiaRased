import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const ColumnWithNegativeValues = () => {
	const [columnWithNegativeValues] = useState({
		series: [
			{
				name: 'Cash Flow',
				data: [
					1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88,
					13.07, 5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3,
					-18.6, -48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4,
				],
			},
		],
		options: {
			chart: {
				type: 'bar',
				height: 350,
			},
			plotOptions: {
				bar: {
					colors: {
						ranges: [
							{
								from: -100,
								to: -46,
								color: process.env.REACT_APP_DANGER_COLOR,
							},
							{
								from: -45,
								to: 0,
								color: process.env.REACT_APP_WARNING_COLOR,
							},
						],
					},
					columnWidth: '80%',
					dataLabels: {
						orientation: 'vertical',
						position: 'top', // top, center, bottom
					},
				},
			},
			dataLabels: {
				enabled: true,
				style: {
					fontSize: '12px',
					colors: ['#000000'],
				},
			},
			yaxis: {
				title: {
					text: 'Growth',
				},
				labels: {
					formatter(y) {
						return `${y.toFixed(0)}%`;
					},
				},
			},
			xaxis: {
				type: 'category',
				categories: [
					'2011-01-01',
					'2011-02-01',
					'2011-03-01',
					'2011-04-01',
					'2011-05-01',
					'2011-06-01',
					'2011-07-01',
					'2011-08-01',
					'2011-09-01',
					'2011-10-01',
					'2011-11-01',
					'2011-12-01',
					'2012-01-01',
					'2012-02-01',
					'2012-03-01',
					'2012-04-01',
					'2012-05-01',
					'2012-06-01',
					'2012-07-01',
					'2012-08-01',
					'2012-09-01',
					'2012-10-01',
					'2012-11-01',
					'2012-12-01',
					'2013-01-01',
					'2013-02-01',
					'2013-03-01',
					'2013-04-01',
					'2013-05-01',
					'2013-06-01',
					'2013-07-01',
					'2013-08-01',
					'2013-09-01',
				],
				labels: {
					rotate: -90,
				},
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
					<CardLabel icon='BarChart'>
						<CardTitle>
							type <small>bar</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					<Chart
						series={columnWithNegativeValues.series}
						options={columnWithNegativeValues.options}
						type='bar'
						height={350}
					/>
				</CardBody>
			</Card>
		</div>
	);
};

export default ColumnWithNegativeValues;
