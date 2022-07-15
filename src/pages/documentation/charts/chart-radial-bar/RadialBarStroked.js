import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const RadialBarStroked = () => {
	const [state] = useState({
		series: [67],
		options: {
			chart: {
				height: 350,
				type: 'radialBar',
				offsetY: -10,
			},
			plotOptions: {
				radialBar: {
					startAngle: -135,
					endAngle: 135,
					dataLabels: {
						name: {
							fontSize: '16px',
							color: undefined,
							offsetY: 120,
						},
						value: {
							offsetY: 76,
							fontSize: '22px',
							color: undefined,
							formatter(val) {
								return `${val}%`;
							},
						},
					},
				},
			},
			fill: {
				type: 'gradient',
				gradient: {
					shade: 'dark',
					shadeIntensity: 0.15,
					inverseColors: false,
					opacityFrom: 1,
					opacityTo: 1,
					stops: [0, 50, 65, 91],
				},
			},
			stroke: {
				dashArray: 4,
			},
			labels: ['Median Ratio'],
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

export default RadialBarStroked;
