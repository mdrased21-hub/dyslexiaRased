import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	orderBy,
	query,
	serverTimestamp,
	setDoc,
} from 'firebase/firestore';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../../layout/SubHeader/SubHeader';
import Button, { ButtonGroup } from '../../../components/bootstrap/Button';

import CommonGridProductItem from '../../common/CommonGridProductItem';
import OffCanvas, {
	OffCanvasBody,
	OffCanvasHeader,
	OffCanvasTitle,
} from '../../../components/bootstrap/OffCanvas';
import Badge from '../../../components/bootstrap/Badge';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Input from '../../../components/bootstrap/forms/Input';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import { demoPages } from '../../../menu';
import useDarkMode from '../../../hooks/useDarkMode';
import Select from '../../../components/bootstrap/forms/Select';
import Spinner from '../../../components/bootstrap/Spinner';
import { db } from '../../../firebase-config';
import showNotification from '../../../components/extras/showNotification';
import Icon from '../../../components/icon/Icon';
import { setQuizzes } from '../../../quizzesSlice';
import Modal, { ModalFooter, ModalHeader, ModalTitle } from '../../../components/bootstrap/Modal';

const validate = (values) => {
	const errors = {}; // validate errors of values

	if (!values.name) {
		errors.name = 'Required';
	} else if (values.name.length < 3) {
		errors.name = 'Must be 3 characters or more';
	} else if (values.name.length > 20) {
		errors.name = 'Must be 20 characters or less';
	}

	if (!values.category) {
		errors.category = 'Required';
	}

	if (!values.q1) {
		errors.q1 = 'Required';
	}
	if (!values.q2) {
		errors.q2 = 'Required';
	}
	if (!values.q3) {
		errors.q3 = 'Required';
	}
	if (!values.q4) {
		errors.q4 = 'Required';
	}
	if (!values.q5) {
		errors.q5 = 'Required';
	}

	return errors;
};

const GridFluidPage = () => {
	const { themeStatus, darkModeStatus } = useDarkMode(); // change mode

	const user = useSelector((state) => state.user); // user state
	const quizzes = useSelector((state) => state.quizzes); // quiz state
	const dispatch = useDispatch();

	const TABS = {
		ALL: 'All',
		READING: 'Reading',
		LISTENING: 'Listening',
	}; // Part of three

	const [activeTab, setActiveTab] = useState(TABS.ALL);
	const [isLoading, setIsloading] = useState(false);
	const [editItem, setEditItem] = useState(null);
	const [editPanel, setEditPanel] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const [selectedId, setSelectedId] = useState(false);

	function handleRemove(id) {
		setIsOpen(true);
		setSelectedId(id);
	}

	function handleEdit(id) {
		const newData = quizzes.data.filter((item) => item.id === id);
		setEditItem(newData[0]);
	}

	const formik = useFormik({
		initialValues: {
			name: '',
			category: 'Reading',
			q1: '',
			q2: '',
			q3: '',
			q4: '',
			q5: '',
		},
		validate,
		// eslint-disable-next-line no-unused-vars
		onSubmit: (values) => {
			saveQuiz();
		},
	});

	useEffect(() => {
		if (editItem) {
			formik.setValues({
				name: editItem.name,
				category: editItem.category,
				q1: editItem.q1 ?? '',
				q2: editItem.q2 ?? '',
				q3: editItem.q3 ?? '',
				q4: editItem.q4 ?? '',
				q5: editItem.q5 ?? '',
			});
		}
		return () => {
			formik.setValues({
				name: '',
				category: 'Reading',
				q1: '',
				q2: '',
				q3: '',
				q4: '',
				q5: '',
			});
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [editItem]);

	const saveQuiz = async () => {
		setIsloading(true); // quiz save to database

		try {
			if (isEdit) {
				setDoc(doc(db, 'quizzes', editItem.id), {
					name: formik.values.name,
					category: formik.values.category,
					q1: formik.values.q1,
					q2: formik.values.q2,
					q3: formik.values.q3,
					q4: formik.values.q4,
					q5: formik.values.q5,

					createdAt: serverTimestamp(),
				});
			} else {
				addDoc(collection(db, 'quizzes'), {
					name: formik.values.name,
					category: formik.values.category,
					q1: formik.values.q1,
					q2: formik.values.q2,
					q3: formik.values.q3,
					q4: formik.values.q4,
					q5: formik.values.q5,

					createdAt: serverTimestamp(),
				});
			}

			showNotification(
				<span className='d-flex align-items-center'>
					<Icon icon='Info' size='lg' className='me-1' />
					<span>Saved Successfully</span>
				</span>,
				'Quiz have been successfully saved.',
			);

			await refetchQuiz();

			setEditPanel(false);
			formik.resetForm();
		} catch (error) {
			showNotification(
				'Notice', // String, HTML or Component
				error.message, // String, HTML or Component
				'danger', // 'default' || 'info' || 'warning' || 'success' || 'danger',
			);
		}

		setIsloading(false);
	};

	useEffect(() => {
		const getQuiz = async () => {
			const res = await getDocs(
				query(collection(db, 'quizzes'), orderBy('createdAt', 'desc')),
			);
			dispatch(setQuizzes(res.docs.map((item) => ({ ...item.data(), id: item.id }))));
		};
		getQuiz();
	}, [dispatch]);

	const refetchQuiz = async () => {
		const res = await getDocs(query(collection(db, 'quizzes'), orderBy('createdAt', 'desc')));
		dispatch(setQuizzes(res.docs.map((item) => ({ ...item.data(), id: item.id }))));
	};

	const deleteQuiz = async () => {
		setIsDeleting(true);

		try {
			const quizDoc = doc(db, 'quizzes', selectedId);
			await deleteDoc(quizDoc);

			showNotification(
				<span className='d-flex align-items-center'>
					<Icon icon='Info' size='lg' className='me-1' />
					<span>Quiz Deleted Successfully</span>
				</span>,
				'Quiz have been successfully deleted.',
			);

			await refetchQuiz();
			setIsOpen(false);
		} catch (error) {
			showNotification(
				'Notice', // String, HTML or Component
				error.message, // String, HTML or Component
				'danger', // 'default' || 'info' || 'warning' || 'success' || 'danger',
			);
		}

		setIsDeleting(false);
	};

	return (
		<PageWrapper title={demoPages.gridPages.subMenu.gridFluid.text}>
			<SubHeader>
				<SubHeaderLeft>
					<span>Quizzes</span>
					<SubheaderSeparator />
					<span className='text-muted'>
						{activeTab === 'All' ? (
							<>{quizzes.data.length} items</>
						) : (
							<>
								{quizzes.data.filter((item) => item.category === activeTab).length}{' '}
								items
							</>
						)}
					</span>
					<SubheaderSeparator />
					<ButtonGroup>
						{Object.keys(TABS).map((key) => (
							<Button
								key={key}
								color={activeTab === TABS[key] ? 'success' : themeStatus}
								onClick={() => setActiveTab(TABS[key])}>
								{TABS[key]}
							</Button>
						))}
					</ButtonGroup>
				</SubHeaderLeft>
				{user.data.role === 'admin' && (
					<SubHeaderRight>
						<Button
							color={darkModeStatus ? 'light' : 'dark'}
							isLight
							icon='Add'
							onClick={() => {
								setIsEdit(false);
								setEditItem(null);
								setEditPanel(true);
							}}>
							Add New
						</Button>
					</SubHeaderRight>
				)}
			</SubHeader>
			<Page container='fluid'>
				<div className='display-4 fw-bold py-3'>Quiz List</div>
				<div className='row'>
					{activeTab === 'All' ? (
						<>
							{quizzes.data.map((item) => (
								<div key={item.id} className='col-xxl-3 col-xl-4 col-md-6'>
									<CommonGridProductItem
										id={item.id}
										name={item.name}
										category={item.category}
										img={item.image}
										color={item.color}
										series={item.series}
										price={item.price}
										editAction={() => {
											setIsEdit(true);
											setEditPanel(true);
											handleEdit(item.id);
										}}
										deleteAction={() => handleRemove(item.id)}
									/>
								</div>
							))}
						</>
					) : (
						<>
							{quizzes.data
								.filter((item) => item.category === activeTab)
								.map((item) => (
									<div key={item.id} className='col-xxl-3 col-xl-4 col-md-6'>
										<CommonGridProductItem
											id={item.id}
											name={item.name}
											category={item.category}
											img={item.image}
											color={item.color}
											series={item.series}
											price={item.price}
											editAction={() => {
												setIsEdit(true);
												setEditPanel(true);
												handleEdit(item.id);
											}}
											deleteAction={() => handleRemove(item.id)}
										/>
									</div>
								))}
						</>
					)}
				</div>
			</Page>

			<Modal isOpen={isOpen} setIsOpen={setIsOpen} isCentered isAnimation>
				<ModalHeader setIsOpen={setIsOpen}>
					<ModalTitle id='deleteQuiz'>Are you sure want to delete this quiz?</ModalTitle>
				</ModalHeader>
				<ModalFooter>
					<Button color='danger' onClick={() => deleteQuiz()} isDisable={isDeleting}>
						{!isDeleting ? 'Delete' : <Spinner isSmall />}
					</Button>
				</ModalFooter>
			</Modal>

			<OffCanvas
				setOpen={setEditPanel}
				isOpen={editPanel}
				tag='form'
				noValidate
				onSubmit={formik.handleSubmit}>
				<OffCanvasHeader setOpen={setEditPanel}>
					<OffCanvasTitle id='edit-panel'>
						{editItem?.name || 'New Quiz'}{' '}
						{editItem?.name ? (
							<Badge color='primary' isLight>
								Edit
							</Badge>
						) : (
							<Badge color='success' isLight>
								New
							</Badge>
						)}
					</OffCanvasTitle>
				</OffCanvasHeader>
				<OffCanvasBody>
					<Card tag='form' noValidate onSubmit={formik.handleSubmit}>
						<CardHeader>
							<CardLabel icon='Description' iconColor='success'>
								<CardTitle>Quiz Details</CardTitle>
							</CardLabel>
						</CardHeader>
						<CardBody>
							<div className='row g-4'>
								<div className='col-12'>
									<FormGroup id='name' label='Title' isFloating>
										<Input
											placeholder='Title'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.name}
											isValid={formik.isValid}
											isTouched={formik.touched.name}
											invalidFeedback={formik.errors.name}
											validFeedback='Looks good!'
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='category' label='Category' isFloating>
										<Select
											ariaLabel='Category'
											placeholder='Choose...'
											list={[
												{ value: 'Reading', text: 'Reading' },
												{ value: 'Listening', text: 'Listening' },
											]}
											autoComplete='category'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.category}
											isValid={formik.isValid}
											isTouched={formik.touched.category}
											invalidFeedback={formik.errors.category}
											validFeedback='Looks good!'
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='q1' label='Question 1' isFloating>
										<Input
											placeholder='Question 1'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.q1}
											isValid={formik.isValid}
											isTouched={formik.touched.q1}
											invalidFeedback={formik.errors.q1}
											validFeedback='Looks good!'
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='q2' label='Question 2' isFloating>
										<Input
											placeholder='Question 2'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.q2}
											isValid={formik.isValid}
											isTouched={formik.touched.q2}
											invalidFeedback={formik.errors.q2}
											validFeedback='Looks good!'
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='q3' label='Question 3' isFloating>
										<Input
											placeholder='Question 3'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.q3}
											isValid={formik.isValid}
											isTouched={formik.touched.q3}
											invalidFeedback={formik.errors.q3}
											validFeedback='Looks good!'
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='q4' label='Question 4' isFloating>
										<Input
											placeholder='Question 4'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.q4}
											isValid={formik.isValid}
											isTouched={formik.touched.q4}
											invalidFeedback={formik.errors.q4}
											validFeedback='Looks good!'
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='q5' label='Question 5' isFloating>
										<Input
											placeholder='Question 5'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.q5}
											isValid={formik.isValid}
											isTouched={formik.touched.q5}
											invalidFeedback={formik.errors.q5}
											validFeedback='Looks good!'
										/>
									</FormGroup>
								</div>
							</div>
						</CardBody>
					</Card>
				</OffCanvasBody>
				<div className='p-3'>
					<Button
						color='info'
						icon='Save'
						type='submit'
						isDisable={(!formik.isValid && !!formik.submitCount) || isLoading}>
						{!isLoading ? 'Save' : <Spinner isSmall />}
					</Button>
				</div>
			</OffCanvas>
		</PageWrapper>
	);
};

export default GridFluidPage;
