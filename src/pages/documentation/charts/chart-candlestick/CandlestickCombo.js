import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';
import { seriesData, seriesDataLinear } from '../../../../common/data/chartDummyData';

const CandlestickCombo = () => {
	const [state] = useState({
		series: [
			{
				data: seriesData,
			},
		],
		options: {
			chart: {
				type: 'candlestick',
				height: 290,
				id: 'candles',
				toolbar: {
					autoSelected: 'pan',
					show: false,
				},
				zoom: {
					enabled: false,
				},
			},
			plotOptions: {
				candlestick: {
					colors: {
						upward: '#3C90EB',
						downward: '#DF7D46',
					},
				},
			},
			xaxis: {
				type: 'datetime',
			},
		},

		seriesBar: [
			{
				name: 'volume',
				data: seriesDataLinear,
			},
		],
		optionsBar: {
			chart: {
				height: 160,
				type: 'bar',
				brush: {
					enabled: true,
					target: 'candles',
				},
				selection: {
					enabled: true,
					xaxis: {
						min: new Date('20 Jan 2017').getTime(),
						max: new Date('10 Dec 2017').getTime(),
					},
					fill: {
						color: '#ccc',
						opacity: 0.4,
					},
					stroke: {
						color: '#0D47A1',
					},
				},
			},
			dataLabels: {
				enabled: false,
			},
			plotOptions: {
				bar: {
					columnWidth: '80%',
					colors: {
						ranges: [
							{
								from: -1000,
								to: 0,
								color: '#F15B46',
							},
							{
								from: 1,
								to: 10000,
								color: '#FEB019',
							},
						],
					},
				},
			},
			stroke: {
				width: 0,
			},
			xaxis: {
				type: 'datetime',
				axisBorder: {
					offsetX: 13,
				},
			},
			yaxis: {
				labels: {
					show: false,
				},
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='Cake'>
						<CardTitle>
							type <small>candlestick & bar</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					<Chart
						series={state.series}
						options={state.options}
						type='candlestick'
						height={290}
					/>
					<Chart
						series={state.seriesBar}
						options={state.optionsBar}
						type='bar'
						height={160}
					/>
				</CardBody>
			</Card>
		</div>
	);
};

export default CandlestickCombo;
