import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const LineGradient = () => {
	const [state] = useState({
		series: [
			{
				name: 'Likes',
				data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
			},
		],
		options: {
			chart: {
				height: 350,
				type: 'line',
			},
			tooltip: {
				theme: 'dark',
			},
			stroke: {
				width: 7,
				curve: 'smooth',
			},
			xaxis: {
				type: 'datetime',
				categories: [
					'1/11/2000',
					'2/11/2000',
					'3/11/2000',
					'4/11/2000',
					'5/11/2000',
					'6/11/2000',
					'7/11/2000',
					'8/11/2000',
					'9/11/2000',
					'10/11/2000',
					'11/11/2000',
					'12/11/2000',
					'1/11/2001',
					'2/11/2001',
					'3/11/2001',
					'4/11/2001',
					'5/11/2001',
					'6/11/2001',
				],
				tickAmount: 10,
				labels: {
					formatter(value, timestamp, opts) {
						return opts.dateFormatter(new Date(timestamp), 'dd MMM');
					},
				},
			},
			title: {
				text: 'Social Media',
				align: 'left',
				style: {
					fontSize: '16px',
					color: '#666',
				},
			},
			fill: {
				type: 'gradient',
				gradient: {
					shade: 'dark',
					gradientToColors: [process.env.REACT_APP_SECONDARY_COLOR],
					shadeIntensity: 1,
					type: 'horizontal',
					opacityFrom: 1,
					opacityTo: 1,
					stops: [0, 100, 100, 100],
				},
			},
			markers: {
				size: 4,
				colors: ['#FFA41B'],
				strokeColors: '#fff',
				strokeWidth: 2,
				hover: {
					size: 7,
				},
			},
			yaxis: {
				min: -10,
				max: 40,
				title: {
					text: 'Engagement',
				},
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='ShowChart' iconColor='secondary'>
						<CardTitle>
							type <small>line</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					<Chart options={state.options} series={state.series} type='line' height={350} />
				</CardBody>
			</Card>
		</div>
	);
};

export default LineGradient;
