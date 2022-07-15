import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const RadialBarMultiple = () => {
	const [state] = useState({
		series: [44, 55, 67, 83],
		options: {
			chart: {
				height: 350,
				type: 'radialBar',
			},
			plotOptions: {
				radialBar: {
					dataLabels: {
						name: {
							fontSize: '22px',
						},
						value: {
							fontSize: '16px',
						},
						total: {
							show: true,
							label: 'Total',
							formatter(w) {
								// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
								return w.globals.series.reduce((a, b) => a + b, 0);
							},
						},
					},
				},
			},
			labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
			stroke: {
				lineCap: 'round',
			},
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

export default RadialBarMultiple;
