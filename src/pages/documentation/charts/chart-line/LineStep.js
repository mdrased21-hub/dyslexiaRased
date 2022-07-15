import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const LineStep = () => {
	const [state] = useState({
		series: [
			{
				data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
			},
		],
		options: {
			chart: {
				type: 'line',
				height: 350,
			},
			stroke: {
				curve: 'stepline',
			},
			dataLabels: {
				enabled: false,
			},
			title: {
				text: 'Stepline Chart',
				align: 'left',
			},
			markers: {
				hover: {
					sizeOffset: 4,
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

export default LineStep;
