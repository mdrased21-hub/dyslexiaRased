import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const TreeMapMultipleSeries = () => {
	const [state] = useState({
		series: [
			{
				name: 'Desktops',
				data: [
					{
						x: 'ABC',
						y: 10,
					},
					{
						x: 'DEF',
						y: 60,
					},
					{
						x: 'XYZ',
						y: 41,
					},
				],
			},
			{
				name: 'Mobile',
				data: [
					{
						x: 'ABCD',
						y: 10,
					},
					{
						x: 'DEFG',
						y: 20,
					},
					{
						x: 'WXYZ',
						y: 51,
					},
					{
						x: 'PQR',
						y: 30,
					},
					{
						x: 'MNO',
						y: 20,
					},
					{
						x: 'CDE',
						y: 30,
					},
				],
			},
		],
		options: {
			legend: {
				show: false,
			},
			chart: {
				height: 350,
				type: 'treemap',
			},
			title: {
				text: 'Multi-dimensional Treemap',
				align: 'center',
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='AccountTree'>
						<CardTitle>
							type <small>treemap</small>
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

export default TreeMapMultipleSeries;
