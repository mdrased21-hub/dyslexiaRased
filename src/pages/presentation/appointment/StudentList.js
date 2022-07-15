import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Icon from '../../../components/icon/Icon';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Badge from '../../../components/bootstrap/Badge';
import Button from '../../../components/bootstrap/Button';
import Input from '../../../components/bootstrap/forms/Input';
import { dmsMenu, dmsMenu2 } from '../../../menu';
import useTourStep from '../../../hooks/useTourStep';
import { setStudents } from '../../../studentsSlice';
import { db } from '../../../firebase-config';
import Dropdown, { DropdownMenu, DropdownToggle } from '../../../components/bootstrap/Dropdown';
import Label from '../../../components/bootstrap/forms/Label';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Checks, { ChecksGroup } from '../../../components/bootstrap/forms/Checks';

const EmployeeList = () => {
	useTourStep(18);
	const [filterMenu, setFilterMenu] = useState(false);

	const formik = useFormik({
		initialValues: {
			searchInput: '',
			level: [],
		},
		// eslint-disable-next-line no-unused-vars
		onSubmit: (values) => {
			setFilterMenu(false);
		},
	});

	const students = useSelector((state) => state.students);
	const dispatch = useDispatch();

	useEffect(() => {
		const getStudents = async () => {
			const data = await getDocs(
				query(collection(db, 'students'), orderBy('createdAt', 'desc')),
			);
			dispatch(setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
		};
		getStudents();
	}, [dispatch]);

	const searchUsers = Object.keys(students.data)
		.filter(
			(key) =>
				students.data[key].name
					.toLowerCase()
					.includes(formik.values.searchInput.toLowerCase()) ||
				students.data[key].studentNo
					.toLowerCase()
					.includes(formik.values.searchInput.toLowerCase()) ||
				students.data[key].className
					.toLowerCase()
					.includes(formik.values.searchInput.toLowerCase()),
		)
		.filter((key) =>
			formik.values.level.length !== 0
				? formik.values.level.includes(students.data[key].level)
				: true,
		)
		.map((i) => students.data[i]);

	return (
		<PageWrapper title={dmsMenu.studentList.text}>
			<SubHeader>
				<SubHeaderLeft>
					<label
						className='border-0 bg-transparent cursor-pointer me-0'
						htmlFor='searchInput'>
						<Icon icon='Search' size='2x' color='primary' />
					</label>
					<Input
						id='searchInput'
						type='search'
						className='border-0 shadow-none bg-transparent'
						placeholder='Search...'
						onChange={formik.handleChange}
						value={formik.values.searchInput}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<Dropdown isOpen={filterMenu} setIsOpen={setFilterMenu}>
						<DropdownToggle hasIcon={false}>
							<Button icon='FilterAlt' color='primary' isLight />
						</DropdownToggle>
						<DropdownMenu isAlignmentEnd size='lg' isCloseAfterLeave={false}>
							<div className='container py-2'>
								<form className='row g-3' onSubmit={formik.handleSubmit}>
									<div className='col-12'>
										<FormGroup>
											<Label>Level</Label>
											<ChecksGroup>
												<Checks
													id='Beginner'
													label='Beginner'
													name='level'
													value='Beginner'
													onChange={formik.handleChange}
													checked={formik.values.level.includes(
														'Beginner',
													)}
												/>
												<Checks
													id='Intermediate'
													label='Intermediate'
													name='level'
													value='Intermediate'
													onChange={formik.handleChange}
													checked={formik.values.level.includes(
														'Intermediate',
													)}
												/>
												<Checks
													id='Advanced'
													label='Advanced'
													name='level'
													value='Advanced'
													onChange={formik.handleChange}
													checked={formik.values.level.includes(
														'Advanced',
													)}
												/>
											</ChecksGroup>
										</FormGroup>
									</div>
									<div className='col-6'>
										<Button
											color='primary'
											isOutline
											className='w-100'
											onClick={formik.resetForm}>
											Reset
										</Button>
									</div>
									<div className='col-6'>
										<Button color='primary' className='w-100' type='submit'>
											Close
										</Button>
									</div>
								</form>
							</div>
						</DropdownMenu>
					</Dropdown>
					<Button
						icon='PersonAdd'
						color='info'
						isLight
						tag='a'
						to={`../${dmsMenu2.registerStudent.path}`}>
						New Student
					</Button>
				</SubHeaderRight>
			</SubHeader>
			<Page container='fluid'>
				<div className='row row-cols-xxl-3 row-cols-lg-3 row-cols-md-2'>
					{searchUsers.map((user) => (
						<div key={user.id} className='col'>
							<Card>
								<CardBody>
									<div className='row g-3'>
										<div className='col d-flex'>
											<div className='flex-shrink-0'>
												<div className='position-relative'>
													<div
														className='ratio ratio-1x1'
														style={{ width: 100 }}>
														<div
															className={classNames(
																`bg-l25-primary`,
																'rounded-2',
																'd-flex align-items-center justify-content-center',
																'overflow-hidden',
																'shadow',
															)}>
															<img
																src={user.imageUrl}
																alt={user.name}
																width={100}
															/>
														</div>
													</div>
												</div>
											</div>
											<div className='flex-grow-1 ms-3 d-flex justify-content-between'>
												<div className='w-100'>
													<div className='row'>
														<div className='col'>
															<div className='d-flex align-items-center'>
																<div className='fw-bold fs-5 me-2'>
																	{user.studentNo}
																</div>
																<small className='border border-success border-2 text-success fw-bold px-2 py-1 rounded-1'>
																	{user.className}
																</small>
															</div>
															<div className='text-muted'>
																{user.name}
															</div>
														</div>
														<div className='col-auto'>
															<Button
																icon='Info'
																color='dark'
																isLight
																hoverShadow='sm'
																tag='a'
																to={`../${dmsMenu2.studentDetails.path}/${user.id}`}
																data-tour={user.name}
															/>
														</div>
													</div>
													<div className='row g-2 mt-3'>
														<div className='col-auto'>
															<Badge
																isLight
																color={`${
																	// eslint-disable-next-line no-nested-ternary
																	user.level === 'Beginner'
																		? 'success'
																		: user.level ===
																		  'Intermediate'
																		? 'info'
																		: 'danger'
																}`}
																className='px-3 py-2'>
																<Icon
																	icon='Stream'
																	size='lg'
																	className='me-1'
																/>
																{user.level}
															</Badge>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</CardBody>
							</Card>
						</div>
					))}
				</div>
			</Page>
		</PageWrapper>
	);
};

export default EmployeeList;
