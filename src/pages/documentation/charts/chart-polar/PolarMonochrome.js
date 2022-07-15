import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const PolarMonochrome = () => {
	const [state] = useState({
		series: [42, 47, 52, 58, 65],
		options: {
			chart: {
				width: '100%',
				type: 'polarArea',
			},
			labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
			fill: {
				opacity: 1,
			},
			stroke: {
				width: 1,
				colors: undefined,
			},
			yaxis: {
				show: false,
			},
			legend: {
				position: 'bottom',
			},
			plotOptions: {
				polarArea: {
					rings: {
						strokeWidth: 0,
					},
				},
			},
			theme: {
				monochrome: {
					enabled: true,
					color: process.env.REACT_APP_PRIMARY_COLOR,
					shadeTo: 'light',
					shadeIntensity: 0.6,
				},
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='TrackChanges'>
						<CardTitle>
							type <small>polarArea</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					<Chart
						series={state.series}
						options={state.options}
						type={state.options.chart.type}
						width={state.options.chart.width}
					/>
				</CardBody>
			</Card>
		</div>
	);
};

export default PolarMonochrome;
