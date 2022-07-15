import React, { useState } from 'react';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Button from '../../../components/bootstrap/Button';
import Chart from '../../../components/extras/Chart';

const CommonIncome = () => {
	const chartOptions = {
		chart: {
			type: 'donut',
			height: 350,
		},
		stroke: {
			width: 0,
		},
		labels: ['Template', 'UI Kit', 'Design'],
		dataLabels: {
			enabled: false,
		},
		plotOptions: {
			pie: {
				expandOnClick: true,
				donut: {
					labels: {
						show: true,
						name: {
							show: true,
							fontSize: '24px',
							fontFamily: 'Poppins',
							fontWeight: 900,
							offsetY: 0,
							formatter(val) {
								return val;
							},
						},
						value: {
							show: true,
							fontSize: '16px',
							fontFamily: 'Poppins',
							fontWeight: 900,
							offsetY: 16,
							formatter(val) {
								return val;
							},
						},
					},
				},
			},
		},
		legend: {
			show: true,
			position: 'bottom',
		},
	};

	const DUMMY_DATA = {
		DAY: {
			series: [8, 3, 1],
			options: {
				...chartOptions,
			},
		},
		WEEK: {
			series: [42, 18, 9],
			options: {
				...chartOptions,
			},
		},
		MONTH: {
			series: [150, 55, 41],
			options: {
				...chartOptions,
			},
		},
	};

	const [state, setState] = useState({
		series: DUMMY_DATA.MONTH.series,
		options: chartOptions,
	});

	const SALE_PER_TAB = {
		DAY: 'Day',
		WEEK: 'Week',
		MONTH: 'Month',
	};
	const [activeSalePerTab, setActiveSalePerTab] = useState(SALE_PER_TAB.MONTH);
	return (
		<Card stretch>
			<CardHeader>
				<CardLabel>
					<CardTitle>Income Breakdown</CardTitle>
				</CardLabel>
				<CardActions>
					<Button
						color='info'
						onClick={() => {
							setActiveSalePerTab(SALE_PER_TAB.DAY);
							setState({
								series: DUMMY_DATA.DAY.series,
								options: DUMMY_DATA.DAY.options,
							});
						}}
						isLink={activeSalePerTab !== SALE_PER_TAB.DAY}
						isLight={activeSalePerTab === SALE_PER_TAB.DAY}>
						Day
					</Button>
					<Button
						color='info'
						onClick={() => {
							setActiveSalePerTab(SALE_PER_TAB.WEEK);
							setState({
								series: DUMMY_DATA.WEEK.series,
								options: DUMMY_DATA.WEEK.options,
							});
						}}
						isLink={activeSalePerTab !== SALE_PER_TAB.WEEK}
						isLight={activeSalePerTab === SALE_PER_TAB.WEEK}>
						Week
					</Button>
					<Button
						color='info'
						onClick={() => {
							setActiveSalePerTab(SALE_PER_TAB.MONTH);
							setState({
								series: DUMMY_DATA.MONTH.series,
								options: DUMMY_DATA.MONTH.options,
							});
						}}
						isLink={activeSalePerTab !== SALE_PER_TAB.MONTH}
						isLight={activeSalePerTab === SALE_PER_TAB.MONTH}>
						Month
					</Button>
				</CardActions>
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
	);
};

export default CommonIncome;
