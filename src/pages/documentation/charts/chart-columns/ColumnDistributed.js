import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const ColumnDistributed = () => {
	const colors = [
		process.env.REACT_APP_PRIMARY_COLOR,
		process.env.REACT_APP_SECONDARY_COLOR,
		process.env.REACT_APP_SUCCESS_COLOR,
		process.env.REACT_APP_INFO_COLOR,
		process.env.REACT_APP_WARNING_COLOR,
		process.env.REACT_APP_DANGER_COLOR,
		'#26a69a',
		'#D10CE8',
	];
	const [columnDistributed] = useState({
		series: [
			{
				data: [21, 22, 10, 28, 16, 21, 13, 30],
			},
		],
		options: {
			tooltip: { theme: 'dark' },
			chart: {
				height: 350,
				type: 'bar',
				events: {
					// eslint-disable-next-line no-unused-vars
					click(chart, w, e) {
						// console.log(chart, w, e);
					},
				},
			},
			colors,
			plotOptions: {
				bar: {
					columnWidth: '45%',
					distributed: true,
				},
			},
			dataLabels: {
				enabled: false,
			},
			legend: {
				show: false,
			},
			xaxis: {
				categories: [
					['John', 'Doe'],
					['Joe', 'Smith'],
					['Jake', 'Williams'],
					'Amber',
					['Peter', 'Brown'],
					['Mary', 'Evans'],
					['David', 'Wilson'],
					['Lily', 'Roberts'],
				],
				labels: {
					style: {
						colors,
						fontSize: '12px',
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
				</CardHeader>
				<CardBody>
					<Chart
						series={columnDistributed.series}
						options={columnDistributed.options}
						type='bar'
						height={350}
					/>
				</CardBody>
			</Card>
		</div>
	);
};

export default ColumnDistributed;
