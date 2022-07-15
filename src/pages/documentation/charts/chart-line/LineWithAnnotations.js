import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';
import { series } from '../../../../common/data/chartDummyData';
import Instagram from '../../../../assets/img/instagram.svg';

const LineWithAnnotations = () => {
	const [state] = useState({
		series: [
			{
				data: series.monthDataSeries1.prices,
			},
		],
		options: {
			annotations: {
				yaxis: [
					{
						y: 8200,
						borderColor: process.env.REACT_APP_SUCCESS_COLOR,
						label: {
							borderColor: process.env.REACT_APP_SUCCESS_COLOR,
							style: {
								color: '#fff',
								background: process.env.REACT_APP_SUCCESS_COLOR,
							},
							text: 'Support',
						},
					},
					{
						y: 8600,
						y2: 9000,
						borderColor: '#000',
						fillColor: process.env.REACT_APP_WARNING_COLOR,
						opacity: 0.2,
						label: {
							borderColor: process.env.REACT_APP_WARNING_COLOR,
							style: {
								fontSize: '10px',
								color: '#333',
								background: process.env.REACT_APP_WARNING_COLOR,
							},
							text: 'Y-axis range',
						},
					},
				],
				xaxis: [
					{
						x: new Date('23 Nov 2017').getTime(),
						strokeDashArray: 0,
						borderColor: process.env.REACT_APP_PRIMARY_COLOR,
						label: {
							borderColor: process.env.REACT_APP_PRIMARY_COLOR,
							style: {
								color: '#fff',
								background: process.env.REACT_APP_PRIMARY_COLOR,
							},
							text: 'Anno Test',
						},
					},
					{
						x: new Date('26 Nov 2017').getTime(),
						x2: new Date('28 Nov 2017').getTime(),
						fillColor: process.env.REACT_APP_SUCCESS_COLOR,
						opacity: 0.4,
						label: {
							borderColor: process.env.REACT_APP_SUCCESS_COLOR,
							style: {
								fontSize: '10px',
								color: '#fff',
								background: process.env.REACT_APP_SUCCESS_COLOR,
							},
							offsetY: -10,
							text: 'X-axis range',
						},
					},
				],
				points: [
					{
						x: new Date('01 Dec 2017').getTime(),
						y: 8607.55,
						marker: {
							size: 8,
							fillColor: '#fff',
							strokeColor: 'red',
							radius: 2,
							cssClass: 'apexcharts-custom-class',
						},
						label: {
							borderColor: process.env.REACT_APP_DANGER_COLOR,
							offsetY: 0,
							style: {
								color: '#fff',
								background: process.env.REACT_APP_DANGER_COLOR,
							},
							text: 'Point Annotation',
						},
					},
					{
						x: new Date('08 Dec 2017').getTime(),
						y: 9340.85,
						marker: {
							size: 0,
						},
						image: {
							path: Instagram,
						},
					},
				],
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: 'straight',
			},
			grid: {
				padding: {
					right: 30,
					left: 20,
				},
			},
			title: {
				text: 'Line with Annotations',
				align: 'left',
			},
			labels: series.monthDataSeries1.dates,
			xaxis: {
				type: 'datetime',
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='ShowChart' iconColor='success'>
						<CardTitle>
							type <small>line</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					<Chart series={state.series} options={state.options} type='line' height={350} />
				</CardBody>
			</Card>
		</div>
	);
};

export default LineWithAnnotations;
