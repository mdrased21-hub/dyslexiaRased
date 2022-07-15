import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
	collection,
	doc,
	getDocs,
	orderBy,
	query,
	serverTimestamp,
	setDoc,
} from 'firebase/firestore';
import moment from 'moment';
import ApexCharts from 'apexcharts';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Button, { ButtonGroup } from '../../../components/bootstrap/Button';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Avatar from '../../../components/Avatar';
import Icon from '../../../components/icon/Icon';
import { dmsMenu, dmsMenu2 } from '../../../menu';
import useDarkMode from '../../../hooks/useDarkMode';
import useTourStep from '../../../hooks/useTourStep';
import { setStudents } from '../../../studentsSlice';
import { db } from '../../../firebase-config';
import Chart from '../../../components/extras/Chart';
import Alert from '../../../components/bootstrap/Alert';
import PaginationButtons, {
	dataPagination,
	PER_COUNT,
} from '../../../components/PaginationButtons';
import showNotification from '../../../components/extras/showNotification';

const EmployeePage = () => {
	useTourStep(19);
	const { darkModeStatus } = useDarkMode();

	const param = useParams();

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const students = useSelector((state) => state.students);

	const [id, setId] = useState('');
	const [marks, setMarks] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(PER_COUNT['5']);

	useEffect(() => {
		if (!param.id) {
			setId(user.data.id);
		} else {
			setId(param.id);
		}
	}, [param.id, user.data.id]);

	const data = students.data?.filter((student) => student.id === id)[0];

	useEffect(() => {
		const getStudents = async () => {
			const docs = await getDocs(
				query(collection(db, 'students'), orderBy('createdAt', 'desc')),
			);
			dispatch(setStudents(docs.docs.map((item) => ({ ...item.data(), id: item.id }))));
		};
		if (students.data.length === 0) {
			getStudents();
		}
	}, [students.data, navigate, dispatch]);

	useEffect(() => {
		const getGraph = async () => {
			const docs = await getDocs(
				query(collection(db, 'marks'), orderBy('createdAt', 'desc')),
			);

			const newArr = [];

			docs.docs.forEach((item) => {
				if (item.data().studentId === id) {
					newArr.push({ ...item.data(), id: item.id });
				}
			});

			setMarks(newArr);

			let readingTotMarks = 0;
			let listeningTotMarks = 0;

			newArr.forEach((item) => {
				if (item.category === 'Reading') {
					readingTotMarks += item.marks;
				} else {
					listeningTotMarks += item.marks;
				}
			});

			const readingLength = newArr.filter((item) => item.category === 'Reading').length;
			const readingPercent = readingLength
				? (readingTotMarks / (readingLength * 10)) * 100
				: 0;

			const listeningLength = newArr.filter((item) => item.category === 'Listening').length;
			const listeningPercent = listeningLength
				? (listeningTotMarks / (listeningLength * 10)) * 100
				: 0;

			setReadingState({
				...readingState,
				series: [readingPercent],
			});
			setListeningState({
				...listeningState,
				series: [listeningPercent],
			});

			// last week level of improvement
			const curr = new Date(); // get current date
			const firstLastWeek = curr.getDate() - curr.getDay() - 7 + 1; // First day is the day of the month - the day of the week
			const lastLastWeek = firstLastWeek + 6; // last day is the first day + 6

			const lastWeekReading = [];
			const lastWeekListening = [];
			let lastWeekReadingTotMarks = 0;
			let lastWeekListeningTotMarks = 0;

			newArr.forEach((item) => {
				const itemDate = item.createdAt?.toDate().getDate();
				if (itemDate >= firstLastWeek && itemDate <= lastLastWeek) {
					if (item.category === 'Reading') {
						lastWeekReading.push(item);
						lastWeekReadingTotMarks += item.marks;
					} else {
						lastWeekListening.push(item);
						lastWeekListeningTotMarks += item.marks;
					}
				}
			});

			const lastWeekReadingLength = lastWeekReading.length;
			const lastWeekReadingPercent = lastWeekReadingLength
				? (lastWeekReadingTotMarks / (lastWeekReadingLength * 10)) * 100
				: 0;

			const lastWeekListeningPercent = lastWeekListening.length
				? (lastWeekListeningTotMarks / (lastWeekListening.length * 10)) * 100
				: 0;

			// this week level of improvement
			const firstThisWeek = curr.getDate() - curr.getDay() + 1; // First day is the day of the month - the day of the week
			const lastThisWeek = firstThisWeek + 6; // last day is the first day + 6

			const thisWeekReading = [];
			const thisWeekListening = [];
			let thisWeekReadingTotMarks = 0;
			let thisWeekListeningTotMarks = 0;

			newArr.forEach((item) => {
				const itemDate = item.createdAt?.toDate().getDate();
				if (itemDate >= firstThisWeek && itemDate <= lastThisWeek) {
					if (item.category === 'Reading') {
						thisWeekReading.push(item);
						thisWeekReadingTotMarks += item.marks;
					} else {
						thisWeekListening.push(item);
						thisWeekListeningTotMarks += item.marks;
					}
				}
			});

			const thisWeekReadingLength = thisWeekReading.length;
			const thisWeekReadingPercent = thisWeekReadingLength
				? (thisWeekReadingTotMarks / (thisWeekReadingLength * 10)) * 100
				: 0;

			const thisWeekListeningPercent = thisWeekListening.length
				? (thisWeekListeningTotMarks / (thisWeekListening.length * 10)) * 100
				: 0;

			setLevelState({
				...levelState,
				series: [
					{
						name: 'Reading',
						data: [lastWeekReadingPercent, thisWeekReadingPercent],
					},
					{
						name: 'Listening',
						data: [lastWeekListeningPercent, thisWeekListeningPercent],
					},
				],
			});

			const lastWeekArr = [];
			let lastWeekTotMarks = 0;

			newArr.forEach((item) => {
				const itemDate = item.createdAt?.toDate().getDate();
				if (itemDate >= firstLastWeek && itemDate <= lastLastWeek) {
					lastWeekArr.push(item);
					lastWeekTotMarks += item.marks;
				}
			});

			if (data) {
				checkLevel(lastWeekArr, lastWeekTotMarks);
			}

			// marks
			const readingArr = [];
			const listeningArr = [];

			newArr.forEach((item) => {
				const itemDate = item.createdAt?.toDate();
				if (itemDate?.getMonth() === curr.getMonth()) {
					if (item.category === 'Reading') {
						readingArr.push([itemDate.getTime() + 3600000 * 8, item.marks]);
					} else {
						listeningArr.push([itemDate.getTime() + 3600000 * 8, item.marks]);
					}
				}
			});

			setMarksState({
				...marksState,
				series: [
					{
						name: 'Reading',
						data: [...readingArr],
					},
					{
						name: 'Listening',
						data: [...listeningArr],
					},
				],
			});
		};

		const checkLevel = async (arr, lastWeekTotMarks) => {
			const percent = arr.length ? (lastWeekTotMarks / (arr.length * 10)) * 100 : 0;
			let level = data.level; // eslint-disable-line prefer-destructuring

			if (percent <= 40) {
				level = 'Beginner';
			} else if (percent <= 80) {
				level = 'Intermediate';
			} else if (percent <= 100) {
				level = 'Advanced';
			}

			if (level !== data.level) {
				try {
					const studentDoc = doc(db, 'students', id);

					setDoc(studentDoc, {
						name: data.name,
						myKidNo: data.myKidNo,
						gender: data.gender,
						email: data.email,

						year: data.year,
						className: data.className,
						studentNo: data.studentNo,

						phoneNo: data.phoneNo,
						parentGuardianName: data.parentGuardianName,
						parentGuardianPhoneNo: data.parentGuardianPhoneNo,

						addressLineOne: data.addressLineOne,
						addressLineTwo: data.addressLineTwo,
						postalCode: data.postalCode,
						city: data.city,
						state: data.state,

						createdAt: serverTimestamp(),
						imageUrl: data.imageUrl,
						level: level, // eslint-disable-line object-shorthand
					});

					await getStudents();
				} catch (error) {
					showNotification(
						'Notice', // String, HTML or Component
						error.message, // String, HTML or Component
						'danger', // 'default' || 'info' || 'warning' || 'success' || 'danger',
					);
				}
			}
		};

		const getStudents = async () => {
			const docs = await getDocs(
				query(collection(db, 'students'), orderBy('createdAt', 'desc')),
			);
			dispatch(setStudents(docs.docs.map((item) => ({ ...item.data(), id: item.id }))));
		};

		getGraph();
	}, [id, readingState, listeningState, levelState, marksState, data, dispatch]);

	const [levelState, setLevelState] = useState({
		series: [
			{
				name: 'Reading',
				data: [0, 0],
			},
			{
				name: 'Listening',
				data: [0, 0],
			},
		],
		options: {
			chart: {
				type: 'bar',
				height: 350,
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '55%',
					endingShape: 'rounded',
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent'],
			},
			xaxis: {
				categories: ['Last Week', 'This Week'],
			},
			yaxis: {
				title: {
					text: 'Marks Percentage (%)',
				},
				max: 100,
				tickAmount: 5,
				labels: {
					formatter(val) {
						return val.toFixed(0);
					},
				},
			},
			fill: {
				opacity: 1,
			},
			tooltip: {
				y: {
					formatter(val) {
						return `${val.toFixed(2)}%`;
					},
				},
				theme: 'dark',
			},
		},
	});

	const [readingState, setReadingState] = useState({
		series: [0],
		options: {
			chart: {
				height: 350,
				type: 'radialBar',
				toolbar: {
					show: true,
				},
			},
			plotOptions: {
				radialBar: {
					startAngle: -135,
					endAngle: 225,
					hollow: {
						margin: 0,
						size: '70%',
						background: '#fff',
						image: undefined,
						imageOffsetX: 0,
						imageOffsetY: 0,
						position: 'front',
						dropShadow: {
							enabled: true,
							top: 3,
							left: 0,
							blur: 4,
							opacity: 0.24,
						},
					},
					track: {
						background: '#fff',
						strokeWidth: '67%',
						margin: 0, // margin is in pixels
						dropShadow: {
							enabled: true,
							top: -3,
							left: 0,
							blur: 4,
							opacity: 0.35,
						},
					},

					dataLabels: {
						show: true,
						name: {
							offsetY: -10,
							show: true,
							color: '#888',
							fontSize: '17px',
						},
						value: {
							formatter(val) {
								return parseInt(val, 10);
							},
							color: '#111',
							fontSize: '36px',
							show: true,
						},
					},
				},
			},
			fill: {
				type: 'gradient',
				gradient: {
					shade: 'dark',
					type: 'horizontal',
					shadeIntensity: 0.5,
					gradientToColors: [process.env.REACT_APP_SECONDARY_COLOR],
					inverseColors: true,
					opacityFrom: 1,
					opacityTo: 1,
					stops: [0, 100],
				},
			},
			stroke: {
				lineCap: 'round',
			},
			labels: ['Percent'],
		},
	});

	const [listeningState, setListeningState] = useState({
		series: [0],
		options: {
			chart: {
				height: 350,
				type: 'radialBar',
				toolbar: {
					show: true,
				},
			},
			plotOptions: {
				radialBar: {
					startAngle: -135,
					endAngle: 225,
					hollow: {
						margin: 0,
						size: '70%',
						background: '#fff',
						image: undefined,
						imageOffsetX: 0,
						imageOffsetY: 0,
						position: 'front',
						dropShadow: {
							enabled: true,
							top: 3,
							left: 0,
							blur: 4,
							opacity: 0.24,
						},
					},
					track: {
						background: '#fff',
						strokeWidth: '67%',
						margin: 0, // margin is in pixels
						dropShadow: {
							enabled: true,
							top: -3,
							left: 0,
							blur: 4,
							opacity: 0.35,
						},
					},

					dataLabels: {
						show: true,
						name: {
							offsetY: -10,
							show: true,
							color: '#888',
							fontSize: '17px',
						},
						value: {
							formatter(val) {
								return parseInt(val, 10);
							},
							color: '#111',
							fontSize: '36px',
							show: true,
						},
					},
				},
			},
			fill: {
				type: 'gradient',
				gradient: {
					shade: 'dark',
					type: 'horizontal',
					shadeIntensity: 0.5,
					gradientToColors: [process.env.REACT_APP_SECONDARY_COLOR],
					inverseColors: true,
					opacityFrom: 1,
					opacityTo: 1,
					stops: [0, 100],
				},
			},
			stroke: {
				lineCap: 'round',
			},
			labels: ['Percent'],
		},
	});

	const today = new Date();
	const today2 = new Date();
	const today3 = new Date();
	const today4 = new Date();

	const [marksState, setMarksState] = useState({
		series: [
			{
				name: 'Mark',
				data: [],
			},
		],
		options: {
			chart: {
				id: 'area-datetime',
				type: 'area',
				height: 350,
			},
			dataLabels: {
				enabled: false,
			},
			markers: {
				size: 0,
				style: 'hollow',
			},
			xaxis: {
				type: 'datetime',
				min: new Date(today.setDate(1)).getTime() + 3600000 * 8,
				tickAmount: 6,
			},
			yaxis: {
				title: {
					text: 'Marks',
				},
				min: 0,
				max: 10,
				tickAmount: 5,
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
					opacityFrom: 0.7,
					opacityTo: 0.9,
					stops: [0, 100],
				},
			},
		},

		selection: 'month',
	});

	const updateMarksData = (timeline) => {
		setMarksState({
			series: [...marksState.series],
			options: { ...marksState.options },
			selection: timeline,
		});

		switch (timeline) {
			case 'day':
				ApexCharts.exec(
					'area-datetime',
					'zoomX',
					new Date(
						new Date(
							new Date(new Date(today4.setHours(0)).setMinutes(0)).setSeconds(0),
						).setMilliseconds(0),
					).getTime() +
						3600000 * 8,
					new Date(
						new Date(
							new Date(new Date(today4.setHours(24)).setMinutes(0)).setSeconds(0),
						).setMilliseconds(0),
					).getTime() +
						3600000 * 8,
				);
				break;
			case 'week':
				ApexCharts.exec(
					'area-datetime',
					'zoomX',
					new Date(today2.setDate(today2.getDate() - today2.getDay() + 1)).getTime() +
						3600000 * 8,
					new Date(today3.setDate(today3.getDate() - today3.getDay() + 7)).getTime() +
						3600000 * 8,
				);
				break;
			case 'month':
				ApexCharts.exec(
					'area-datetime',
					'zoomX',
					new Date(today.setDate(1)).getTime() + 3600000 * 8,
				);
				break;
			default:
		}
	};

	return (
		<PageWrapper title={data?.name}>
			<SubHeader>
				{user.data.role === 'admin' && (
					<SubHeaderLeft>
						<Button
							color='info'
							isLink
							icon='ArrowBack'
							tag='a'
							to={`../${dmsMenu.studentList.path}`}>
							Back to List
						</Button>
					</SubHeaderLeft>
				)}
				<SubHeaderRight>
					<Button
						icon='Edit'
						color='info'
						isLight
						tag='a'
						to={`../${dmsMenu2.editStudent.path}/${id}`}>
						Edit Details
					</Button>
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-lg-4'>
						<Card className='shadow-3d-info'>
							<CardBody>
								<div className='row g-5'>
									<div className='col-12 d-flex justify-content-center'>
										{data && <Avatar src={data.imageUrl} color='primary' />}
									</div>
									<div className='col-12'>
										<div className='row g-2'>
											<div className='col-12'>
												<div className='d-flex align-items-center'>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-5 mb-0'>
															{data?.name}
														</div>
														<div className='text-muted'>Full Name</div>
													</div>
												</div>
											</div>
											<div className='col-12'>
												<div className='d-flex align-items-center'>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-5 mb-0'>
															{data?.myKidNo}
														</div>
														<div className='text-muted'>My Kid No.</div>
													</div>
												</div>
											</div>
											<div className='col-12'>
												<div className='d-flex align-items-center'>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-5 mb-0'>
															{data?.gender}
														</div>
														<div className='text-muted'>Gender</div>
													</div>
												</div>
											</div>
											<div className='col-12'>
												<div className='d-flex align-items-center'>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-5 mb-0'>
															{data?.email}
														</div>
														<div className='text-muted'>
															Email Address
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</CardBody>
						</Card>
						<Card>
							<CardHeader>
								<CardLabel icon='School' iconColor='secondary'>
									<CardTitle>School Information</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='row g-2'>
									<div className='col-12'>
										<div className='d-flex align-items-center'>
											<div className='flex-grow-1 ms-3'>
												<div className='fw-bold fs-5 mb-0'>
													{data?.className}
												</div>
												<div className='text-muted'>Class Name</div>
											</div>
										</div>
									</div>
									<div className='col-12'>
										<div className='d-flex align-items-center'>
											<div className='flex-grow-1 ms-3'>
												<div className='fw-bold fs-5 mb-0'>
													{data?.year}
												</div>
												<div className='text-muted'>Year</div>
											</div>
										</div>
									</div>
									<div className='col-12'>
										<div className='d-flex align-items-center'>
											<div className='flex-grow-1 ms-3'>
												<div className='fw-bold fs-5 mb-0'>
													{data?.studentNo}
												</div>
												<div className='text-muted'>Student No.</div>
											</div>
										</div>
									</div>
								</div>
							</CardBody>
						</Card>
						<Card>
							<CardHeader>
								<CardLabel icon='Phone' iconColor='warning'>
									<CardTitle>Contact Information</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='row g-2'>
									<div className='col-12'>
										<div className='d-flex align-items-center'>
											<div className='flex-grow-1 ms-3'>
												<div className='fw-bold fs-5 mb-0'>
													{data?.parentGuardianName}
												</div>
												<div className='text-muted'>
													Parent's / Guardian's Name
												</div>
											</div>
										</div>
									</div>
									<div className='col-12'>
										<div className='d-flex align-items-center'>
											<div className='flex-grow-1 ms-3'>
												<div className='fw-bold fs-5 mb-0'>
													{data?.parentGuardianPhoneNo}
												</div>
												<div className='text-muted'>
													Parent's / Guardian's Phone No.
												</div>
											</div>
										</div>
									</div>
									<div className='col-12'>
										<div className='d-flex align-items-center'>
											<div className='flex-grow-1 ms-3'>
												<div className='fw-bold fs-5 mb-0'>
													{data?.phoneNo}
												</div>
												<div className='text-muted'>
													Student's Phone No.
												</div>
											</div>
										</div>
									</div>
								</div>
							</CardBody>
						</Card>
						<Card>
							<CardHeader>
								<CardLabel icon='Place' iconColor='info'>
									<CardTitle>Address Information</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='row g-2'>
									<div className='col-12'>
										<div className='d-flex align-items-center'>
											<div className='flex-grow-1 ms-3'>
												<div className='fw-bold fs-5 mb-0'>
													{data?.addressLineOne}
												</div>
												<div className='text-muted'>Address Line</div>
											</div>
										</div>
									</div>
									<div className='col-12'>
										<div className='d-flex align-items-center'>
											<div className='flex-grow-1 ms-3'>
												<div className='fw-bold fs-5 mb-0'>
													{data?.addressLineTwo}
												</div>
												<div className='text-muted'>Address Line 2</div>
											</div>
										</div>
									</div>
									<div className='col-12'>
										<div className='d-flex align-items-center'>
											<div className='flex-grow-1 ms-3'>
												<div className='fw-bold fs-5 mb-0'>
													{data?.postalCode}
												</div>
												<div className='text-muted'>Postal Code</div>
											</div>
										</div>
									</div>
									<div className='col-12'>
										<div className='d-flex align-items-center'>
											<div className='flex-grow-1 ms-3'>
												<div className='fw-bold fs-5 mb-0'>
													{data?.city}
												</div>
												<div className='text-muted'>City</div>
											</div>
										</div>
									</div>
									<div className='col-12'>
										<div className='d-flex align-items-center'>
											<div className='flex-grow-1 ms-3'>
												<div className='fw-bold fs-5 mb-0'>
													{data?.state}
												</div>
												<div className='text-muted'>State</div>
											</div>
										</div>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-8'>
						<Card>
							<CardHeader>
								<CardLabel icon='ShowChart' iconColor='secondary'>
									<CardTitle>Statistics</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='row g-4 align-items-center'>
									<div className='col-xl-6'>
										<div
											className={classNames(
												'd-flex align-items-center rounded-2 p-3',
												{
													'bg-l10-warning': !darkModeStatus,
													'bg-lo25-warning': darkModeStatus,
												},
											)}>
											<div className='flex-shrink-0'>
												<Icon icon='DoneAll' size='3x' color='warning' />
											</div>
											<div className='flex-grow-1 ms-3'>
												<div className='fw-bold fs-3 mb-0'>
													{marks.length}
												</div>
												<div className='text-muted mt-n2 truncate-line-1'>
													Completed quizzes
												</div>
											</div>
										</div>
									</div>
									<div className='col-xl-6'>
										<div
											className={classNames(
												'd-flex align-items-center rounded-2 p-3',
												{
													'bg-l10-info': !darkModeStatus,
													'bg-lo25-info': darkModeStatus,
												},
											)}>
											<div className='flex-shrink-0'>
												<Icon icon='Stream' size='3x' color='info' />
											</div>
											<div className='flex-grow-1 ms-3'>
												<div className='fw-bold fs-3 mb-0'>
													{data?.level}
												</div>
												<div className='text-muted mt-n2 truncate-line-1'>
													Level
												</div>
											</div>
										</div>
									</div>
									<div className='col-xl-6'>
										<div
											className={classNames(
												'd-flex align-items-center rounded-2 p-3',
												{
													'bg-l10-primary': !darkModeStatus,
													'bg-lo25-primary': darkModeStatus,
												},
											)}>
											<div className='flex-shrink-0'>
												<Icon icon='MenuBook' size='3x' color='primary' />
											</div>
											<div className='flex-grow-1 ms-3'>
												<div className='fw-bold fs-3 mb-0'>
													{
														marks.filter(
															(item) => item.category === 'Reading',
														).length
													}
												</div>
												<div className='text-muted mt-n2 truncate-line-1'>
													Reading Completed
												</div>
											</div>
										</div>
									</div>
									<div className='col-xl-6'>
										<div
											className={classNames(
												'd-flex align-items-center rounded-2 p-3',
												{
													'bg-l10-success': !darkModeStatus,
													'bg-lo25-success': darkModeStatus,
												},
											)}>
											<div className='flex-shrink-0'>
												<Icon icon='Hearing' size='3x' color='success' />
											</div>
											<div className='flex-grow-1 ms-3'>
												<div className='fw-bold fs-3 mb-0'>
													{
														marks.filter(
															(item) => item.category === 'Listening',
														).length
													}
												</div>
												<div className='text-muted mt-n2'>
													Listening Completed
												</div>
											</div>
										</div>
									</div>
								</div>
							</CardBody>
						</Card>
						<Card className='shadow-3d-primary'>
							<CardHeader>
								<CardLabel icon='AreaChart' iconColor='primary'>
									<CardTitle tag='h4' className='h5'>
										Latest Marks
									</CardTitle>
								</CardLabel>
								<CardActions>
									<ButtonGroup>
										<Button
											color='primary'
											isLight
											id='day'
											onClick={() => updateMarksData('day')}
											isActive={marksState.selection === 'day'}>
											Day
										</Button>
										<Button
											color='primary'
											isLight
											id='week'
											onClick={() => updateMarksData('week')}
											isActive={marksState.selection === 'week'}>
											Week
										</Button>
										<Button
											color='primary'
											isLight
											id='month'
											onClick={() => updateMarksData('month')}
											isActive={marksState.selection === 'month'}>
											Month
										</Button>
									</ButtonGroup>
								</CardActions>
							</CardHeader>
							<CardBody>
								<Chart
									series={marksState.series}
									options={marksState.options}
									type={marksState.options.chart.type}
									height={marksState.options.chart.height}
								/>
							</CardBody>
						</Card>
						<Card className='shadow-3d-primary'>
							<CardHeader>
								<CardLabel icon='BarChart' iconColor='info'>
									<CardTitle tag='h4' className='h5'>
										Level of Improvement
									</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<Chart
									series={levelState.series}
									options={levelState.options}
									type={levelState.options.chart.type}
									height={levelState.options.chart.height}
								/>
							</CardBody>
						</Card>
						<div className='row'>
							<div className='col-xl-6'>
								<Card className='shadow-3d-primary'>
									<CardHeader>
										<CardLabel icon='DonutLarge' iconColor='success'>
											<CardTitle tag='h4' className='h5'>
												Overall Reading Marks Percentage
											</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<Chart
											series={readingState.series}
											options={readingState.options}
											type={readingState.options.chart.type}
											height={readingState.options.chart.height}
										/>
									</CardBody>
								</Card>
							</div>
							<div className='col-xl-6'>
								<Card className='shadow-3d-primary'>
									<CardHeader>
										<CardLabel icon='DonutLarge' iconColor='success'>
											<CardTitle tag='h4' className='h5'>
												Overall Listening Marks Percentage
											</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<Chart
											series={listeningState.series}
											options={listeningState.options}
											type={listeningState.options.chart.type}
											height={listeningState.options.chart.height}
										/>
									</CardBody>
								</Card>
							</div>
						</div>
						<Card>
							<CardHeader>
								<CardLabel icon='Task' iconColor='danger'>
									<CardTitle>Latest Quiz Taken</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='table-responsive'>
									<table className='table table-modern mb-0'>
										<thead>
											<tr>
												<th>Date / Time</th>
												<th>Category</th>
												<th>Quiz Title</th>
												<th>Marks</th>
											</tr>
										</thead>
										<tbody>
											{marks.length !== 0 &&
												dataPagination(marks, currentPage, perPage).map(
													(item) => (
														<tr key={item.id}>
															<td>
																<div className='d-flex align-items-center'>
																	<span className='text-nowrap'>
																		{moment(
																			item.createdAt?.toDate(),
																		).format(
																			'MMM Do YYYY, h:mm a',
																		)}
																	</span>
																</div>
															</td>
															<td>
																<div>
																	<Icon
																		icon={`${
																			item.category ===
																			'Reading'
																				? 'MenuBook'
																				: 'Hearing'
																		}`}
																		color={`${
																			item.category ===
																			'Reading'
																				? 'primary'
																				: 'success'
																		}`}
																		className='me-2'
																	/>
																	<span
																		className={`${
																			item.category ===
																			'Reading'
																				? 'text-primary'
																				: 'text-success'
																		}`}>
																		{item.category}
																	</span>
																</div>
															</td>
															<td>{item.quizName}</td>
															<td>{item.marks}</td>
														</tr>
													),
												)}
										</tbody>
									</table>
								</div>
								{!marks.length && (
									<Alert color='warning' isLight icon='Report' className='mt-3'>
										There is no quiz taken yet.
									</Alert>
								)}
							</CardBody>
							<PaginationButtons
								data={marks}
								label='marks'
								setCurrentPage={setCurrentPage}
								currentPage={currentPage}
								perPage={perPage}
								setPerPage={setPerPage}
							/>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default EmployeePage;
