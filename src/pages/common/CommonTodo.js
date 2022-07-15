import React, { useState } from 'react';
import { Calendar as DatePicker } from 'react-date-range';
import moment from 'moment';
import { useFormik } from 'formik';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../components/bootstrap/Card';
import Button from '../../components/bootstrap/Button';
import Modal, { ModalBody, ModalHeader, ModalTitle } from '../../components/bootstrap/Modal';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';
import Todo from '../../components/extras/Todo';
import Label from '../../components/bootstrap/forms/Label';
import Checks, { ChecksGroup } from '../../components/bootstrap/forms/Checks';
import Badge from '../../components/bootstrap/Badge';
import Progress from '../../components/bootstrap/Progress';

const CommonTodo = () => {
	const TODO_BADGES = {
		NEW: { text: 'New', color: 'success' },
		UPDATE: { text: 'Update', color: 'info' },
		TEST: { text: 'Test', color: 'warning' },
		REPORT: { text: 'Report', color: 'info' },
		PRINT: { text: 'Print', color: 'danger' },
		CONTROL: { text: 'Control', color: 'primary' },
		MEETING: { text: 'Meeting', color: 'secondary' },
	};
	const getBadgeWithText = (text) => {
		return TODO_BADGES[Object.keys(TODO_BADGES).filter((f) => TODO_BADGES[f].text === text)];
	};

	/**
	 * To/Do List
	 */
	const [list, setList] = useState([
		{
			id: 1,
			status: true,
			title: 'New Products will be added',
			date: moment().add(0.5, 'day'),
			badge: TODO_BADGES.NEW,
		},
		{
			id: 2,
			status: true,
			title: 'Cover images will be edited',
			date: moment().add(2, 'day'),
			badge: TODO_BADGES.UPDATE,
		},
		{
			id: 3,
			status: false,
			title: 'Preparing for A/B testing',
			date: moment().add(2, 'day'),
			badge: TODO_BADGES.TEST,
		},
		{
			id: 4,
			status: false,
			title: 'Google Analytics data will be examined',
			date: moment().add(4, 'day'),
			badge: TODO_BADGES.REPORT,
		},
		{
			id: 5,
			status: false,
			title: 'Invoices will be issued',
			date: moment().add(9, 'day'),
			badge: TODO_BADGES.PRINT,
		},
		{
			id: 6,
			status: false,
			title: 'Dependencies check and update',
			date: moment().add(15, 'day'),
			badge: TODO_BADGES.CONTROL,
		},
		{
			id: 7,
			status: false,
			title: 'End of month meeting',
			date: moment().add(32, 'day'),
			badge: TODO_BADGES.MEETING,
		},
	]);
	const listLength = list.length;
	const completeTaskLength = list.filter((i) => i.status).length;

	/**
	 * Add New Modal Status
	 */
	const [modalStatus, setModalStatus] = useState(false);

	/**
	 * Ann New To/Do func
	 * @param title
	 * @param date
	 * @param badge
	 */
	const addTodo = (title, date, badge) => {
		const newTodos = [{ title, date, badge }, ...list];
		setList(newTodos);
	};

	/**
	 * New To/Do Day
	 */
	const [date, setDate] = useState(new Date());

	const validate = (values) => {
		const errors = {};
		if (!values.todoTitle) {
			errors.todoTitle = 'Required';
		} else if (values.todoTitle.length > 40) {
			errors.todoTitle = 'Must be 40 characters or less';
		}

		return errors;
	};
	const formik = useFormik({
		initialValues: {
			todoTitle: '',
			todoBadges: '',
		},
		validate,
		onSubmit: (values, { resetForm }) => {
			addTodo(values.todoTitle, date, getBadgeWithText(values.todoBadges));
			setModalStatus(false);
			resetForm({ values: '' });
		},
	});

	return (
		<Card stretch>
			<CardHeader>
				<CardLabel icon='AssignmentTurnedIn' iconColor='danger'>
					<CardTitle tag='h4' className='h5'>
						John's Issue
					</CardTitle>
					<CardSubTitle>
						<Progress
							height={8}
							max={listLength}
							value={completeTaskLength}
							color={completeTaskLength === listLength ? 'success' : 'primary'}
						/>
					</CardSubTitle>
				</CardLabel>
				<CardActions>
					<Button
						color='info'
						icon='Add'
						isLight
						onClick={() => setModalStatus(!modalStatus)}>
						New
					</Button>
					<Modal setIsOpen={setModalStatus} isOpen={modalStatus} titleId='new-todo-modal'>
						<ModalHeader setIsOpen={setModalStatus}>
							<ModalTitle id='new-todo-modal'>New Issue</ModalTitle>
						</ModalHeader>
						<ModalBody>
							<form className='row g-3' onSubmit={formik.handleSubmit}>
								<div className='col-12'>
									<FormGroup id='todoTitle' label='Title'>
										<Input
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											isValid={formik.isValid}
											isTouched={formik.touched.todoTitle}
											invalidFeedback={formik.errors.todoTitle}
											validFeedback='Looks good!'
											value={formik.values.todoTitle}
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<div>
										<Label>Due Date</Label>
									</div>
									<div className='text-center mt-n4'>
										<DatePicker
											onChange={(item) => setDate(item)}
											date={date}
											minDate={new Date()}
											color={process.env.REACT_APP_PRIMARY_COLOR}
										/>
									</div>
								</div>
								<div className='col-12'>
									<FormGroup>
										<Label>Badge</Label>
										<ChecksGroup isInline>
											{Object.keys(TODO_BADGES).map((i) => (
												<Checks
													key={TODO_BADGES[i].text}
													type='radio'
													name='todoBadges'
													id={TODO_BADGES[i].text}
													label={
														<Badge isLight color={TODO_BADGES[i].color}>
															{TODO_BADGES[i].text}
														</Badge>
													}
													value={TODO_BADGES[i].text}
													onChange={formik.handleChange}
													checked={formik.values.todoBadges}
												/>
											))}
										</ChecksGroup>
									</FormGroup>
								</div>
								<div className='col' />
								<div className='col-auto'>
									<Button
										type='submit'
										color='info'
										isLight
										isDisable={!formik.isValid && !!formik.submitCount}>
										Add Item
									</Button>
								</div>
							</form>
						</ModalBody>
					</Modal>
				</CardActions>
			</CardHeader>
			<CardBody isScrollable>
				<Todo list={list} setList={setList} />
			</CardBody>
		</Card>
	);
};

export default CommonTodo;
