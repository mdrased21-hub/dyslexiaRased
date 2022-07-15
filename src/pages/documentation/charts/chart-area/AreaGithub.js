import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';
import { githubData } from '../../../../common/data/chartDummyData';

const AreaGithub = () => {
	const [github] = useState({
		series: [
			{
				name: 'commits',
				data: githubData.series,
			},
		],
		options: {
			chart: {
				id: 'chartyear',
				type: 'area',
				height: 160,
				background: '#F6F8FA',
				toolbar: {
					show: false,
					autoSelected: 'pan',
				},
				events: {
					mounted(chart) {
						const commitsEl = document.querySelector('.cmeta span.commits');
						const commits = chart.getSeriesTotalXRange(
							chart.w.globals.minX,
							chart.w.globals.maxX,
						);

						commitsEl.innerHTML = commits;
					},
					updated(chart) {
						const commitsEl = document.querySelector('.cmeta span.commits');
						const commits = chart.getSeriesTotalXRange(
							chart.w.globals.minX,
							chart.w.globals.maxX,
						);

						commitsEl.innerHTML = commits;
					},
				},
			},
			colors: ['#FF7F00'],
			stroke: {
				width: 0,
				curve: 'smooth',
			},
			dataLabels: {
				enabled: false,
			},
			fill: {
				opacity: 1,
				type: 'solid',
			},
			yaxis: {
				show: false,
				tickAmount: 3,
			},
			xaxis: {
				type: 'datetime',
			},
		},

		seriesYears: [
			{
				name: 'commits',
				data: githubData.series,
			},
		],
		optionsYears: {
			chart: {
				height: 200,
				type: 'area',
				background: '#F6F8FA',
				toolbar: {
					autoSelected: 'selection',
				},
				brush: {
					enabled: true,
					target: 'chartyear',
				},
				selection: {
					enabled: true,
					xaxis: {
						min: new Date('26 Jan 2014').getTime(),
						max: new Date('29 Mar 2015').getTime(),
					},
				},
			},
			colors: ['#7BD39A'],
			dataLabels: {
				enabled: false,
			},
			stroke: {
				width: 0,
				curve: 'smooth',
			},
			fill: {
				opacity: 1,
				type: 'solid',
			},
			legend: {
				position: 'top',
				horizontalAlign: 'left',
			},
			xaxis: {
				type: 'datetime',
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='AreaChart'>
						<CardTitle>
							type <small>area</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					<Chart
						series={github.series}
						options={github.options}
						type='area'
						height={160}
					/>
					<h5 className='row'>
						<div className='col-auto'>
							<img
								className='rounded-1'
								src='https://avatars.githubusercontent.com/u/29544960'
								alt='semihraifgurel'
								width='38'
								height='38'
							/>
						</div>
						<div className='col d-flex flex-column justify-content-end'>
							{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
							<a className=''>semihraifgurel</a>
							<span className='cmeta text-muted fs-6'>
								<span className='commits' /> commits
							</span>
						</div>
					</h5>
					<Chart
						series={github.seriesYears}
						options={github.optionsYears}
						type='area'
						height={200}
					/>
				</CardBody>
			</Card>
		</div>
	);
};

export default AreaGithub;
