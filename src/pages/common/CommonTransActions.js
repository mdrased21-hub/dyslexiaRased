import React, { useEffect, useRef, useState } from 'react';
import { useHoverDirty } from 'react-use';
import classNames from 'classnames';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../components/bootstrap/Card';
import Button from '../../components/bootstrap/Button';
import Chart from '../../components/extras/Chart';
import Bank1 from '../../assets/logos/logo1.png';
import Bank2 from '../../assets/logos/logo2.png';
import Bank3 from '../../assets/logos/logo3.png';
import Avatar, { AvatarGroup } from '../../components/Avatar';
import UserImageWebp from '../../assets/img/wanna/wanna1.webp';
import UserImage from '../../assets/img/wanna/wanna1.png';
import UserImageWebp2 from '../../assets/img/wanna/wanna2.webp';
import UserImage2 from '../../assets/img/wanna/wanna2.png';
import UserImageWebp3 from '../../assets/img/wanna/wanna3.webp';
import UserImage3 from '../../assets/img/wanna/wanna3.png';
import UserImageWebp4 from '../../assets/img/wanna/wanna4.webp';
import UserImage4 from '../../assets/img/wanna/wanna4.png';
import TransferAction from '../../components/TransferAction';
import Spinner from '../../components/bootstrap/Spinner';
import showNotification from '../../components/extras/showNotification';
import Icon from '../../components/icon/Icon';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../components/bootstrap/Dropdown';
import useDarkMode from '../../hooks/useDarkMode';

const CommonTransActions = () => {
	const { themeStatus, darkModeStatus } = useDarkMode();

	const ref = useRef(null);
	const isHovering = useHoverDirty(ref);
	const [isLoading, setIsLoading] = useState(false);
	const [demoStatus, setDemoStatus] = useState('Processing');

	const [sales] = useState({
		series: [
			{
				name: 'Sales',
				data: [12, 28, 16, 43, 28],
			},
		],
		options: {
			chart: {
				type: 'area',
				height: '138',
				sparkline: {
					enabled: true,
				},
			},
			stroke: {
				curve: 'smooth',
			},
			fill: {
				type: 'gradient',
				gradient: {
					shadeIntensity: 1,
					opacityFrom: 0.7,
					opacityTo: 0,
					stops: [0, 100],
				},
			},
			xaxis: {
				crosshairs: {
					width: 1,
				},
				categories: [
					'Jan',
					'Feb',
					'Mar',
					'Apr',
					'May',
					'Jun',
					'Jul',
					'Aug',
					'Sep',
					'Oct',
					'Nov',
					'Dec',
				],
			},
			yaxis: {
				min: 0,
			},
			tooltip: {
				theme: 'dark',
			},
			title: {
				offsetX: 0,
				offsetY: 15,
				style: {
					fontSize: '1.25rem',
					color: 'var(--bs-body-color)',
				},
				text: '$986',
			},
			subtitle: {
				offsetX: 0,
				offsetY: 35,
				style: {
					fontSize: '0.9rem',
					color: 'var(--bs-gray)',
				},
				text: 'All Earning',
			},
			colors: [process.env.REACT_APP_INFO_COLOR],
		},
	});
	const [stackedColumn] = useState({
		series: [
			{
				name: 'John Doe',
				data: [23, 32, 12, 13],
			},
			{
				name: 'Grace Buckland',
				data: [13, 23, 20, 24],
			},
			{
				name: 'Jane Lee',
				data: [11, 17, 15, 15],
			},
			{
				name: 'Ryan McGrath',
				data: [21, 15, 25, 13],
			},
		],
		options: {
			chart: {
				type: 'bar',
				height: 100,
				stacked: true,
				sparkline: {
					enabled: true,
				},
			},
			tooltip: {
				theme: 'dark',
			},
			plotOptions: {
				bar: {
					borderRadius: 7,
					columnWidth: '25%',
				},
			},
			xaxis: {
				type: 'category',
				categories: ['12th week', '13th week', '14th week', '15th week'],
			},
			fill: {
				opacity: 1,
			},
		},
	});
	const [fee] = useState({
		series: [
			{
				name: 'Sales',
				data: [12, 18, 14, 10],
			},
		],
		options: {
			chart: {
				type: 'area',
				height: '165',
				sparkline: {
					enabled: true,
				},
			},
			stroke: {
				curve: 'smooth',
			},
			fill: {
				type: 'gradient',
				gradient: {
					shadeIntensity: 1,
					opacityFrom: 0.7,
					opacityTo: 0,
					stops: [0, 100],
				},
			},

			tooltip: {
				theme: 'dark',
			},
			colors: [process.env.REACT_APP_DANGER_COLOR],
		},
	});

	useEffect(() => {
		const timer = isLoading
			? setTimeout(() => {
					setIsLoading(false);
					setDemoStatus('Completed');
					showNotification(
						<span className='d-flex align-items-center'>
							<Icon icon='Info' size='lg' className='me-1' />
							<span>Updated Successfully</span>
						</span>,
						'Transfer list has been updated successfully',
					);
			  }, 1500)
			: null;
		return () => clearTimeout(timer);
	}, [isLoading]);

	return (
		<>
			<div className='row mb-5'>
				<div className='col-lg-4'>
					<CardHeader className='px-0 bg-transparent'>
						<CardLabel>
							<CardTitle>My Earnings</CardTitle>
						</CardLabel>
					</CardHeader>
					<Card>
						<CardBody>
							<div className='row'>
								<div className='col-3'>
									<div className='ratio ratio-1x1'>
										<div
											className={classNames(
												'rounded-2',
												'd-flex align-items-center justify-content-center',
												{
													'bg-l10-success': !darkModeStatus,
													'bg-lo25-success': darkModeStatus,
												},
											)}>
											<div>
												<span className='text-success fs-5 fw-bold align-text-bottom'>
													$
												</span>
												<span className='text-success fs-3 fw-bold'>
													389
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className='col-3'>
									<div className='ratio ratio-1x1'>
										<div
											className={classNames(
												'rounded-2',
												'd-flex align-items-center justify-content-center',
												{
													'bg-l10-info': !darkModeStatus,
													'bg-lo25-info': darkModeStatus,
												},
											)}>
											<div>
												<span className='text-info fs-5 fw-bold align-text-bottom'>
													€
												</span>
												<span className='text-info fs-3 fw-bold'>472</span>
											</div>
										</div>
									</div>
								</div>
								<div className='col-auto ms-auto'>
									<Dropdown>
										<DropdownToggle hasIcon={false}>
											<Button
												icon='MoreHoriz'
												color={themeStatus}
												shadow='default'
												hoverShadow='none'
											/>
										</DropdownToggle>
										<DropdownMenu isAlignmentEnd>
											<DropdownItem>
												<button
													type='button'
													onClick={() => {
														showNotification(
															<span className='d-flex align-items-center'>
																<Icon
																	icon='Info'
																	size='lg'
																	className='me-1'
																/>
																<span>Updated Successfully</span>
															</span>,
															'My earnings has been updated successfully',
														);
													}}>
													<Icon icon='Refresh' /> Refresh
												</button>
											</DropdownItem>
											<DropdownItem isDivider />
											<DropdownItem>
												<a href='mailto:info@example.com?subject=My Earning&body=Dollar - 389, Euro - 472'>
													<Icon icon='Email' /> Share by email
												</a>
											</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
				<div className='col-lg-4'>
					<CardHeader className='px-0 bg-transparent'>
						<CardLabel>
							<CardTitle>Fee</CardTitle>
						</CardLabel>
					</CardHeader>
					<Card>
						<CardBody>
							<div className='row'>
								<div className='col-3'>
									<div className='ratio ratio-1x1'>
										<div
											className={classNames(
												'rounded-2',
												'd-flex align-items-center justify-content-center',
												{
													'bg-l10-danger': !darkModeStatus,
													'bg-lo25-danger': darkModeStatus,
												},
											)}>
											<div>
												<span className='text-danger fs-5 fw-bold align-text-bottom'>
													$
												</span>
												<span className='text-danger fs-3 fw-bold'>64</span>
											</div>
										</div>
									</div>
								</div>
								<div className='col-auto ms-auto'>
									<Dropdown>
										<DropdownToggle hasIcon={false}>
											<Button
												icon='MoreHoriz'
												color={themeStatus}
												shadow='default'
												hoverShadow='none'
											/>
										</DropdownToggle>
										<DropdownMenu isAlignmentEnd>
											<DropdownItem>
												<button
													type='button'
													onClick={() => {
														showNotification(
															<span className='d-flex align-items-center'>
																<Icon
																	icon='Info'
																	size='lg'
																	className='me-1'
																/>
																<span>Updated Successfully</span>
															</span>,
															'My fee has been updated successfully',
														);
													}}>
													<Icon icon='Refresh' /> Refresh
												</button>
											</DropdownItem>
											<DropdownItem isDivider />
											<DropdownItem>
												<a href='mailto:info@example.com?subject=My Fee&body=Dollar - 64'>
													<Icon icon='Email' /> Share by email
												</a>
											</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
				<div className='col-lg-4'>
					<Card>
						<CardBody className='h-100'>
							<Chart
								series={sales.series}
								options={sales.options}
								type={sales.options.chart.type}
								height={sales.options.chart.height}
								className='h-100'
							/>
						</CardBody>
					</Card>
				</div>
			</div>
			<div className='row'>
				<div className='col-lg-8'>
					<CardHeader className='px-0 bg-transparent'>
						<CardLabel>
							<CardTitle>Recent Transfer</CardTitle>
						</CardLabel>
						<CardActions>
							<Button
								ref={ref}
								color='info'
								isLight
								icon={isLoading ? null : 'PublishedWithChanges'}
								onClick={() => {
									ref.current.blur();
									setIsLoading(true);
								}}>
								{isLoading && (
									<Spinner color={isHovering ? 'light' : 'info'} inButton isSmall>
										Loading...
									</Spinner>
								)}
								Refresh
							</Button>
						</CardActions>
					</CardHeader>
					<TransferAction currency='$' amount={200} status={demoStatus} img={Bank1} />
					<TransferAction currency='$' amount={80} status='Completed' img={Bank2} />
					<TransferAction currency='€' amount={70} status='Completed' img={Bank2} />
					<TransferAction
						currency='€'
						amount={120}
						status='Failed'
						img={Bank3}
						className='shadow-3d-info'
					/>
				</div>
				<div className='col-lg-4'>
					<Card>
						<CardHeader>
							<CardLabel>
								<CardTitle>Team Earning</CardTitle>
							</CardLabel>
							<CardActions>
								<AvatarGroup>
									<Avatar
										srcSet={UserImageWebp}
										src={UserImage}
										size={32}
										border={2}
										userName='John Doe'
									/>
									<Avatar
										srcSet={UserImageWebp2}
										src={UserImage2}
										size={32}
										border={2}
										userName='Grace Buckland'
									/>
									<Avatar
										srcSet={UserImageWebp3}
										src={UserImage3}
										size={32}
										border={2}
										userName='Jane Lee'
									/>
									<Avatar
										srcSet={UserImageWebp4}
										src={UserImage4}
										size={32}
										border={2}
										userName='Ryan McGrath'
									/>
								</AvatarGroup>
							</CardActions>
						</CardHeader>
						<CardBody>
							<div className='row align-items-end'>
								<div className='col-lg-6'>
									<div className='h4 mb-3'>Total Earning</div>
									<span className='display-6 fw-bold text-success'>$1342</span>
									<span className='text-muted ms-3'>(Incl. Tax)</span>
								</div>
								<div className='col-lg-6'>
									<Chart
										series={stackedColumn.series}
										options={stackedColumn.options}
										type='bar'
										height={165}
									/>
								</div>
							</div>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardLabel>
								<CardTitle>Team Fee</CardTitle>
							</CardLabel>
							<CardActions>
								<AvatarGroup>
									<Avatar
										srcSet={UserImageWebp}
										src={UserImage}
										size={32}
										border={2}
										userName='John Doe'
									/>
									<Avatar
										srcSet={UserImageWebp2}
										src={UserImage2}
										size={32}
										border={2}
										userName='Grace Buckland'
									/>
									<Avatar
										srcSet={UserImageWebp3}
										src={UserImage3}
										size={32}
										border={2}
										userName='Jane Lee'
									/>
									<Avatar
										srcSet={UserImageWebp4}
										src={UserImage4}
										size={32}
										border={2}
										userName='Ryan McGrath'
									/>
								</AvatarGroup>
							</CardActions>
						</CardHeader>
						<CardBody>
							<div className='row align-items-end'>
								<div className='col-lg-6'>
									<div className='h4 mb-3'>Total Fee</div>
									<span className='display-6 fw-bold text-danger'>$216</span>
								</div>
								<div className='col-lg-6'>
									<Chart
										series={fee.series}
										options={fee.options}
										type='area'
										height={165}
									/>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			</div>
		</>
	);
};

export default CommonTransActions;
