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

const LineSyncingOptions = () => {
	const syncingChartsOptions = {
		chart: {
			height: 160,
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: 'straight',
		},
		toolbar: {
			tools: {
				selection: false,
			},
		},
		markers: {
			size: 6,
			hover: {
				size: 10,
			},
		},
		tooltip: {
			followCursor: false,
			theme: 'dark',
		},
		grid: {
			clipMarkers: false,
		},
		yaxis: {
			tickAmount: 2,
		},
		xaxis: {
			type: 'datetime',
		},
	};
	const [state] = useState({
		series: [
			{
				data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
					min: 10,
					max: 60,
				}),
			},
		],
		options: {
			...syncingChartsOptions,
			chart: {
				id: 'fb',
				group: 'social',
				type: 'line',
				height: 160,
			},
			colors: ['#008FFB'],
			yaxis: {
				labels: {
					minWidth: 40,
				},
			},
		},

		seriesLine2: [
			{
				data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
					min: 10,
					max: 30,
				}),
			},
		],
		optionsLine2: {
			...syncingChartsOptions,
			chart: {
				id: 'tw',
				group: 'social',
				type: 'line',
				height: 160,
			},
			colors: [process.env.REACT_APP_WARNING_COLOR],
			yaxis: {
				labels: {
					minWidth: 40,
				},
			},
		},

		seriesArea: [
			{
				data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
					min: 10,
					max: 60,
				}),
			},
		],
		optionsArea: {
			...syncingChartsOptions,
			chart: {
				id: 'yt',
				group: 'social',
				type: 'area',
				height: 160,
			},
			colors: [process.env.REACT_APP_SUCCESS_COLOR],
			yaxis: {
				labels: {
					minWidth: 40,
				},
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='ShowChart' iconColor='info'>
						<CardTitle>
							type <small>line & area</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					<Chart options={state.options} series={state.series} type='line' height={160} />
					<Chart
						options={state.optionsLine2}
						series={state.seriesLine2}
						type='line'
						height={160}
					/>
					<Chart
						options={state.optionsArea}
						series={state.seriesArea}
						type='area'
						height={160}
					/>
				</CardBody>
			</Card>
		</div>
	);
};

export default LineSyncingOptions;
