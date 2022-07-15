import React, { useState } from 'react';
import moment from 'moment';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Button from '../../../components/bootstrap/Button';
import Chart from '../../../components/extras/Chart';

const CommonSalePerformance = () => {
	const chartOptions = {
		chart: {
			height: 400,
			type: 'area',
			toolbar: {
				show: false,
			},
		},
		colors: [process.env.REACT_APP_SUCCESS_COLOR, process.env.REACT_APP_INFO_COLOR],
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: 'smooth',
		},
		tooltip: {
			x: {
				format: 'dd/MM/yy HH:mm',
			},
			theme: 'dark',
		},
		fill: {
			type: 'gradient',
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.5,
				opacityTo: 0,
				stops: [0, 100],
			},
		},
	};

	function getDate(day) {
		const arr = [];
		for (let i = 0; i < day; i += 1) {
			arr.push(
				moment()
					.add(-1 * i, 'day')
					.format('ll'),
			);
		}
		return arr.reverse();
	}
	function getHours(day) {
		const arr = [];
		for (let i = 0; i < day; i += 1) {
			arr.push(i);
		}
		return arr;
	}

	const DUMMY_DATA = {
		DAY: {
			series: [
				{
					name: 'Last Day',
					data: [
						4, 5, 2, 4, 3, 5, 5, 8, 14, 35, 43, 12, 4, 5, 2, 4, 3, 5, 5, 8, 12, 45, 56,
						9,
					],
				},
				{
					name: 'This Day',
					data: [
						4, 2, 2, 7, 3, 6, 5, 4, 12, 23, 35, 10, 4, 5, 2, 9, 3, 5, 14, 8, 14, 35, 43,
						12,
					],
				},
			],
			options: {
				...chartOptions,
				xaxis: {
					categories: getHours(24),
				},
			},
		},
		WEEK: {
			series: [
				{
					name: 'Last Week',
					data: [31, 40, 28, 51, 42, 109, 100],
				},
				{
					name: 'This Week',
					data: [11, 32, 45, 32, 34, 52, 41],
				},
			],
			options: {
				...chartOptions,
				xaxis: {
					categories: getDate(7),
				},
			},
		},
		MONTH: {
			series: [
				{
					name: 'Last Month',
					data: [
						31, 40, 28, 51, 42, 109, 100, 70, 30, 56, 21, 43, 12, 45, 67, 32, 46, 21,
						56, 87, 64, 42, 56, 108, 76, 41, 54,
					],
				},
				{
					name: 'This Month',
					data: [
						11, 32, 45, 32, 34, 52, 41, 24, 32, 45, 32, 43, 52, 41, 28, 32, 45, 67, 34,
						52, 41, 11, 32, 89, 32, 34, 52, 41,
					],
				},
			],
			options: {
				...chartOptions,
				xaxis: {
					categories: getDate(28),
				},
			},
		},
	};
	const [state, setState] = useState({
		series: DUMMY_DATA.WEEK.series,
		options: DUMMY_DATA.WEEK.options,
	});

	const SALE_PER_TAB = {
		DAY: 'Day',
		WEEK: 'Week',
		MONTH: 'Month',
	};
	const [activeSalePerTab, setActiveSalePerTab] = useState(SALE_PER_TAB.WEEK);

	return (
		<Card stretch>
			<CardHeader>
				<CardLabel>
					<CardTitle>Sale Performance</CardTitle>
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

export default CommonSalePerformance;
