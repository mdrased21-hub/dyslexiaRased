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

const CommonApprovedAppointmentChart = () => {
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
	const approvedAppointments = {
		series: [
			{
				name: 'Approved',
				data: [44, 55, 43, 54, 65, 44, 12],
			},
		],
		options: {
			colors: [process.env.REACT_APP_SUCCESS_COLOR],
			chart: {
				type: 'bar',
				height: 200,
				dropShadow: {
					enabled: false,
					color: process.env.REACT_APP_SUCCESS_COLOR,
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
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '35%',
					borderRadius: 5,
				},
			},
			stroke: {
				show: true,
				width: 12,
				colors: ['transparent'],
			},
			...chartOptions,
		},
	};
	return (
		<Card
			className={classNames('shadow-3d-success', {
				'text-dark': darkModeStatus,
				'bg-lo50-success': darkModeStatus,
				'bg-l25-success': !darkModeStatus,
			})}
			isCompact>
			<CardHeader className='bg-transparent'>
				<CardLabel>
					<CardTitle>Approved Appointments</CardTitle>
					<CardSubTitle>
						<span className='text-danger fw-bold'>
							-68% <Icon icon='ArrowDownward' />
						</span>
					</CardSubTitle>
				</CardLabel>
				<CardActions>
					<Button
						color='success'
						tag='a'
						to={`../${demoPages.appointment.subMenu.appointmentList.path}`}>
						View Appointments
					</Button>
				</CardActions>
			</CardHeader>
			<CardBody>
				<div className='position-absolute'>
					<span className='display-3 me-3'>12</span>
				</div>
				<Chart
					series={approvedAppointments.series}
					options={approvedAppointments.options}
					type={approvedAppointments.options.chart.type}
					height={approvedAppointments.options.chart.height}
				/>
			</CardBody>
		</Card>
	);
};

export default CommonApprovedAppointmentChart;
