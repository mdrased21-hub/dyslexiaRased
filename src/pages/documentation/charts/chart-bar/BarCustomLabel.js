import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const BarCustomLabel = () => {
	const [state] = useState({
		series: [
			{
				data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
			},
		],
		options: {
			chart: {
				type: 'bar',
				height: 380,
			},
			plotOptions: {
				bar: {
					barHeight: '100%',
					distributed: true,
					horizontal: true,
					dataLabels: {
						position: 'bottom',
					},
				},
			},
			colors: [
				'#c72c38',
				'#f80003',
				'#012169',
				'#f39508',
				'#048d44',
				'#032395',
				'#b6032a',
				'#ad2231',
				'#f7d709',
				'#f69432',
			],
			dataLabels: {
				enabled: true,
				textAnchor: 'start',
				style: {
					colors: ['#fff'],
				},
				formatter(val, opt) {
					return `${opt.w.globals.labels[opt.dataPointIndex]}:  ${val}`;
				},
				offsetX: 0,
				dropShadow: {
					enabled: true,
				},
			},
			stroke: {
				width: 1,
				colors: ['#fff'],
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
					'India',
				],
			},
			yaxis: {
				labels: {
					show: false,
				},
			},
			title: {
				text: 'Custom DataLabels',
				align: 'center',
				floating: true,
			},
			subtitle: {
				text: 'Category Names as DataLabels inside bars',
				align: 'center',
			},
			tooltip: {
				theme: 'dark',
				x: {
					show: false,
				},
				y: {
					title: {
						formatter() {
							return '';
						},
					},
				},
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
				</CardHeader>
				<CardBody>
					<Chart series={state.series} options={state.options} type='bar' height={400} />
				</CardBody>
			</Card>
		</div>
	);
};

export default BarCustomLabel;
