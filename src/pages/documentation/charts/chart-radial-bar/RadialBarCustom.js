import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const RadialBarCustom = () => {
	const [state] = useState({
		series: [76, 67, 61, 90],
		options: {
			chart: {
				height: 390,
				type: 'radialBar',
			},
			plotOptions: {
				radialBar: {
					offsetY: 0,
					startAngle: 0,
					endAngle: 270,
					hollow: {
						margin: 5,
						size: '30%',
						background: 'transparent',
						image: undefined,
					},
					dataLabels: {
						name: {
							show: false,
						},
						value: {
							show: false,
						},
					},
				},
			},
			colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
			labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
			legend: {
				show: true,
				floating: true,
				fontSize: '12px',
				position: 'left',
				offsetX: 120,
				offsetY: 12,
				labels: {
					useSeriesColors: true,
				},
				markers: {
					size: 0,
				},
				formatter(seriesName, opts) {
					return `${seriesName}:  ${opts.w.globals.series[opts.seriesIndex]}`;
				},
				itemMargin: {
					vertical: 3,
				},
			},
			responsive: [
				{
					breakpoint: 480,
					options: {
						legend: {
							show: false,
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
					<CardLabel icon='DonutLarge'>
						<CardTitle>
							type <small>radialBar</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
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

export default RadialBarCustom;
