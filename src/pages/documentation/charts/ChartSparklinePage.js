import React, { useState } from 'react';
import SubHeader, { SubHeaderLeft } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Chart from '../../../components/extras/Chart';
import { componentsMenu } from '../../../menu';

const ChartSparklinePage = () => {
	const randomizeArray = (arg) => {
		const array = arg.slice();
		let currentIndex = array.length;
		let temporaryValue;
		let randomIndex;

		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	};

	// data for the sparklines that appear below header area
	const sparklineData = [
		47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19,
		46,
	];

	const [state] = useState({
		series: [
			{
				data: randomizeArray(sparklineData),
			},
		],
		options: {
			chart: {
				type: 'area',
				height: 200,
				sparkline: {
					enabled: true,
				},
			},
			stroke: {
				curve: 'straight',
			},
			fill: {
				opacity: 0.3,
			},
			yaxis: {
				min: 0,
			},
			colors: ['#DCE6EC'],
			title: {
				text: '$424,652',
				offsetX: 15,
				offsetY: 20,
				style: {
					fontSize: '24px',
				},
			},
			subtitle: {
				text: 'Sales',
				offsetX: 15,
				offsetY: 50,
				style: {
					fontSize: '14px',
				},
			},
		},

		seriesSpark2: [
			{
				data: randomizeArray(sparklineData),
			},
		],
		optionsSpark2: {
			chart: {
				type: 'area',
				height: 200,
				sparkline: {
					enabled: true,
				},
			},
			stroke: {
				curve: 'straight',
			},
			fill: {
				opacity: 0.3,
			},
			yaxis: {
				min: 0,
			},
			colors: ['#DCE6EC'],
			title: {
				text: '$235,312',
				offsetX: 15,
				offsetY: 20,
				style: {
					fontSize: '24px',
				},
			},
			subtitle: {
				text: 'Expenses',
				offsetX: 15,
				offsetY: 50,
				style: {
					fontSize: '14px',
				},
			},
		},

		seriesSpark3: [
			{
				data: randomizeArray(sparklineData),
			},
		],
		optionsSpark3: {
			chart: {
				type: 'area',
				height: 200,
				sparkline: {
					enabled: true,
				},
			},
			stroke: {
				curve: 'straight',
			},
			fill: {
				opacity: 0.3,
			},
			xaxis: {
				crosshairs: {
					width: 1,
				},
			},
			yaxis: {
				min: 0,
			},
			title: {
				text: '$135,965',
				offsetX: 15,
				offsetY: 20,
				style: {
					fontSize: '24px',
				},
			},
			subtitle: {
				text: 'Profits',
				offsetX: 15,
				offsetY: 50,
				style: {
					fontSize: '14px',
				},
			},
		},

		series1: [
			{
				data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
			},
		],
		options1: {
			chart: {
				type: 'line',
				width: 100,
				height: 35,
				sparkline: {
					enabled: true,
				},
			},
			tooltip: {
				fixed: {
					enabled: false,
				},
				x: {
					show: false,
				},
				y: {
					title: {
						// eslint-disable-next-line no-unused-vars
						formatter(seriesName) {
							return '';
						},
					},
				},
				marker: {
					show: false,
				},
			},
		},

		series2: [
			{
				data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
			},
		],
		options2: {
			chart: {
				type: 'line',
				width: 100,
				height: 35,
				sparkline: {
					enabled: true,
				},
			},
			tooltip: {
				fixed: {
					enabled: false,
				},
				x: {
					show: false,
				},
				y: {
					title: {
						// eslint-disable-next-line no-unused-vars
						formatter(seriesName) {
							return '';
						},
					},
				},
				marker: {
					show: false,
				},
			},
		},

		series3: [43, 32, 12, 9],
		options3: {
			chart: {
				type: 'pie',
				width: 40,
				height: 40,
				sparkline: {
					enabled: true,
				},
			},
			stroke: {
				width: 1,
			},
			tooltip: {
				fixed: {
					enabled: false,
				},
			},
		},

		series4: [43, 32, 12, 9],
		options4: {
			chart: {
				type: 'donut',
				width: 40,
				height: 40,
				sparkline: {
					enabled: true,
				},
			},
			stroke: {
				width: 1,
			},
			tooltip: {
				fixed: {
					enabled: false,
				},
			},
		},

		series5: [
			{
				data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
			},
		],
		options5: {
			chart: {
				type: 'bar',
				width: 100,
				height: 35,
				sparkline: {
					enabled: true,
				},
			},
			plotOptions: {
				bar: {
					columnWidth: '80%',
				},
			},
			labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
			xaxis: {
				crosshairs: {
					width: 1,
				},
			},
			tooltip: {
				fixed: {
					enabled: false,
				},
				x: {
					show: false,
				},
				y: {
					title: {
						// eslint-disable-next-line no-unused-vars
						formatter(seriesName) {
							return '';
						},
					},
				},
				marker: {
					show: false,
				},
			},
		},

		series6: [
			{
				data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
			},
		],
		options6: {
			chart: {
				type: 'bar',
				width: 100,
				height: 35,
				sparkline: {
					enabled: true,
				},
			},
			plotOptions: {
				bar: {
					columnWidth: '80%',
				},
			},
			labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
			xaxis: {
				crosshairs: {
					width: 1,
				},
			},
			tooltip: {
				fixed: {
					enabled: false,
				},
				x: {
					show: false,
				},
				y: {
					title: {
						// eslint-disable-next-line no-unused-vars
						formatter(seriesName) {
							return '';
						},
					},
				},
				marker: {
					show: false,
				},
			},
		},

		series7: [45],
		options7: {
			chart: {
				type: 'radialBar',
				width: 50,
				height: 50,
				sparkline: {
					enabled: true,
				},
			},
			dataLabels: {
				enabled: false,
			},
			plotOptions: {
				radialBar: {
					hollow: {
						margin: 0,
						size: '50%',
					},
					track: {
						margin: 0,
					},
					dataLabels: {
						show: false,
					},
				},
			},
		},

		series8: [53, 67],
		options8: {
			chart: {
				type: 'radialBar',
				width: 40,
				height: 40,
				sparkline: {
					enabled: true,
				},
			},
			dataLabels: {
				enabled: false,
			},
			plotOptions: {
				radialBar: {
					hollow: {
						margin: 0,
						size: '50%',
					},
					track: {
						margin: 1,
					},
					dataLabels: {
						show: false,
					},
				},
			},
		},
	});
	return (
		<PageWrapper title={componentsMenu.charts.subMenu.chartsSparkline.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Charts', to: '/charts' },
							{ title: 'Sparkline', to: '/charts/sparkline' },
						]}
					/>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-md-4'>
						<Card className='overflow-hidden'>
							<CardBody className='p-0'>
								<Chart
									series={state.series}
									options={state.options}
									type={state.options.chart.type}
									height={state.options.chart.height}
								/>
							</CardBody>
						</Card>
					</div>
					<div className='col-md-4'>
						<Card className='overflow-hidden'>
							<CardBody className='p-0'>
								<Chart
									series={state.seriesSpark2}
									options={state.optionsSpark2}
									type={state.optionsSpark2.chart.type}
									height={state.optionsSpark2.chart.height}
								/>
							</CardBody>
						</Card>
					</div>
					<div className='col-md-4'>
						<Card className='overflow-hidden'>
							<CardBody className='p-0'>
								<Chart
									series={state.seriesSpark3}
									options={state.optionsSpark3}
									type={state.optionsSpark3.chart.type}
									height={state.optionsSpark3.chart.height}
								/>
							</CardBody>
						</Card>
					</div>
				</div>
				<Card>
					<CardBody>
						<div className='row'>
							<div className='col-12'>
								<div className='table-responsive'>
									<table className='table table-modern'>
										<thead>
											<tr>
												<th>Total Value</th>
												<th>Percentage of Portfolio</th>
												<th>Last 10 days</th>
												<th>Volume</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>$32,554</td>
												<td>15%</td>
												<td>
													<Chart
														series={state.series1}
														options={state.options1}
														type={state.options1.chart.type}
														height={state.options1.chart.height}
														width={state.options1.chart.width}
													/>
												</td>
												<td>
													<Chart
														series={state.series5}
														options={state.options5}
														type={state.options5.chart.type}
														height={state.options5.chart.height}
														width={state.options5.chart.width}
													/>
												</td>
											</tr>
											<tr>
												<td>$23,533</td>
												<td>7%</td>
												<td>
													<Chart
														series={state.series2}
														options={state.options2}
														type={state.options2.chart.type}
														height={state.options2.chart.height}
														width={state.options2.chart.width}
													/>
												</td>
												<td>
													<Chart
														series={state.series6}
														options={state.options6}
														type={state.options6.chart.type}
														height={state.options6.chart.height}
														width={state.options6.chart.width}
													/>
												</td>
											</tr>
											<tr>
												<td>$54,276</td>
												<td>9%</td>
												<td>
													<Chart
														series={state.series3}
														options={state.options3}
														type={state.options3.chart.type}
														height={state.options3.chart.height}
														width={state.options3.chart.width}
													/>
												</td>
												<td>
													<Chart
														series={state.series7}
														options={state.options7}
														type={state.options7.chart.type}
														height={state.options7.chart.height}
														width={state.options7.chart.width}
													/>
												</td>
											</tr>
											<tr>
												<td>$11,533</td>
												<td>2%</td>
												<td>
													<Chart
														series={state.series4}
														options={state.options4}
														type={state.options4.chart.type}
														height={state.options4.chart.height}
														width={state.options4.chart.width}
													/>
												</td>
												<td>
													<Chart
														series={state.series8}
														options={state.options8}
														type={state.options8.chart.type}
														height={state.options8.chart.height}
														width={state.options8.chart.width}
													/>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</CardBody>
				</Card>
			</Page>
		</PageWrapper>
	);
};

export default ChartSparklinePage;
