import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const ColumnWithRotatedLabel = () => {
	const [columnWithRotatedLabel] = useState({
		series: [
			{
				name: 'Servings',
				data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35],
			},
		],
		options: {
			annotations: {
				points: [
					{
						x: 'Bananas',
						seriesIndex: 0,
						label: {
							borderColor: process.env.REACT_APP_WARNING_COLOR,
							offsetY: 0,
							style: {
								color: '#323232',
								background: process.env.REACT_APP_WARNING_COLOR,
							},
							text: 'Bananas are good',
						},
					},
				],
			},
			chart: {
				height: 350,
				type: 'bar',
			},
			plotOptions: {
				bar: {
					columnWidth: '50%',
					endingShape: 'rounded',
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				width: 2,
			},

			grid: {
				row: {
					colors: ['#fff', '#f2f2f2'],
				},
			},
			xaxis: {
				labels: {
					rotate: -45,
				},
				categories: [
					'Apples',
					'Oranges',
					'Strawberries',
					'Pineapples',
					'Mangoes',
					'Bananas',
					'Blackberries',
					'Pears',
					'Watermelons',
					'Cherries',
					'Pomegranates',
					'Tangerines',
					'Papayas',
				],
				tickPlacement: 'on',
			},
			yaxis: {
				title: {
					text: 'Servings',
				},
			},
			fill: {
				type: 'gradient',
				gradient: {
					shade: 'light',
					type: 'horizontal',
					shadeIntensity: 0.25,
					gradientToColors: undefined,
					inverseColors: true,
					opacityFrom: 0.85,
					opacityTo: 0.85,
					stops: [50, 0, 100],
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
				</CardHeader>
				<CardBody>
					<Chart
						series={columnWithRotatedLabel.series}
						options={columnWithRotatedLabel.options}
						type='bar'
						height={350}
					/>
				</CardBody>
			</Card>
		</div>
	);
};

export default ColumnWithRotatedLabel;
