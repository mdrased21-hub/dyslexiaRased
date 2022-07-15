import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';
import generateDayWiseTimeSeries from '../../../../common/function/generateDayWiseTimeSeries';

const LineBrush = () => {
	const brushData = generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 185, {
		min: 30,
		max: 90,
	});
	const [state] = useState({
		series: [
			{
				data: brushData,
			},
		],
		options: {
			chart: {
				id: 'chart2',
				type: 'line',
				height: 230,
				toolbar: {
					autoSelected: 'pan',
					show: false,
				},
			},
			colors: [process.env.REACT_APP_PRIMARY_COLOR],
			stroke: {
				width: 3,
			},
			dataLabels: {
				enabled: false,
			},
			fill: {
				opacity: 1,
			},
			markers: {
				size: 0,
			},
			xaxis: {
				type: 'datetime',
			},
		},

		seriesLine: [
			{
				data: brushData,
			},
		],
		optionsLine: {
			chart: {
				id: 'chart1',
				height: 130,
				type: 'area',
				brush: {
					target: 'chart2',
					enabled: true,
				},
				selection: {
					enabled: true,
					xaxis: {
						min: new Date('19 Jun 2017').getTime(),
						max: new Date('14 Aug 2017').getTime(),
					},
				},
			},
			colors: [process.env.REACT_APP_INFO_COLOR],
			fill: {
				type: 'gradient',
				gradient: {
					opacityFrom: 0.91,
					opacityTo: 0.1,
				},
			},
			xaxis: {
				type: 'datetime',
				tooltip: {
					enabled: false,
				},
			},
			yaxis: {
				tickAmount: 2,
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='ShowChart' iconColor='secondary'>
						<CardTitle>
							type <small>line & area</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					<Chart options={state.options} series={state.series} type='line' height={230} />
					<Chart
						options={state.optionsLine}
						series={state.seriesLine}
						type='area'
						height={130}
						style={{
							position: 'relative',
							marginTop: -40,
						}}
					/>
				</CardBody>
			</Card>
		</div>
	);
};

export default LineBrush;
