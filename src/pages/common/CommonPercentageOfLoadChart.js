import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../components/bootstrap/Card';
import Icon from '../../components/icon/Icon';
import Button from '../../components/bootstrap/Button';
import { demoPages } from '../../menu';
import Chart from '../../components/extras/Chart';
import useDarkMode from '../../hooks/useDarkMode';

const CommonPercentageOfLoadChart = () => {
	const { darkModeStatus } = useDarkMode();
	const chartOptions = {
		dataLabels: {
			enabled: false,
		},
		xaxis: {
			type: 'datetime',
			categories: [
				moment().format(),
				moment().add(1, 'days').format(),
				moment().add(2, 'days').format(),
				moment().add(3, 'days').format(),
				moment().add(4, 'days').format(),
				moment().add(5, 'days').format(),
				moment().add(6, 'days').format(),
			],
			labels: {
				rotate: -15,
				rotateAlways: true,
			},
		},
		yaxis: {
			labels: {
				show: false,
			},
		},
		tooltip: {
			theme: 'dark',
			y: {
				formatter(val) {
					return `${val} Appointments`;
				},
			},
		},
		grid: {
			show: false,
		},
	};
	const percentageOfLoad = {
		series: [
			{
				name: 'Approved',
				data: [44, 55, 43, 54, 65, 44, 12],
			},
		],
		options: {
			colors: [process.env.REACT_APP_PRIMARY_COLOR],
			chart: {
				type: 'line',
				height: 200,
				dropShadow: {
					enabled: false,
					color: process.env.REACT_APP_PRIMARY_COLOR,
					top: 0,
					left: 0,
					blur: 10,
					opacity: 0.5,
				},
				toolbar: {
					show: false,
				},
				redrawOnParentResize: true,
				redrawOnWindowResize: true,
			},
			...chartOptions,
		},
	};
	return (
		<Card
			className={classNames('shadow-3d-primary', {
				'text-dark': darkModeStatus,
				'bg-lo50-primary': darkModeStatus,
				'bg-l25-primary': !darkModeStatus,
			})}
			isCompact>
			<CardHeader className='bg-transparent'>
				<CardLabel>
					<CardTitle>Percentage of Load</CardTitle>
					<CardSubTitle>
						<span className='text-danger fw-bold'>
							-68% <Icon icon='ArrowDownward' />
						</span>
					</CardSubTitle>
				</CardLabel>
				<CardActions>
					<Button
						color='primary'
						tag='a'
						to={`../${demoPages.appointment.subMenu.employeeList.path}`}>
						View Employees
					</Button>
				</CardActions>
			</CardHeader>
			<CardBody>
				<div className='position-absolute'>
					<span className='display-3 me-3'>18%</span>
				</div>
				<Chart
					series={percentageOfLoad.series}
					options={percentageOfLoad.options}
					type={percentageOfLoad.options.chart.type}
					height={percentageOfLoad.options.chart.height}
				/>
			</CardBody>
		</Card>
	);
};

export default CommonPercentageOfLoadChart;
