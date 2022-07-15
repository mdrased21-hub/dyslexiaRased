import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useFormik } from 'formik';
import Card, {
	CardActions,
	CardBody,
	CardFooter,
	CardFooterLeft,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../bootstrap/Card';
import Button from '../bootstrap/Button';
import Badge from '../bootstrap/Badge';
import BoardCard from './BoardCard';
import Dropdown, { DropdownItem, DropdownMenu, DropdownToggle } from '../bootstrap/Dropdown';
import Modal, { ModalBody, ModalFooter, ModalHeader, ModalTitle } from '../bootstrap/Modal';
import FormGroup from '../bootstrap/forms/FormGroup';
import Input from '../bootstrap/forms/Input';
import Textarea from '../bootstrap/forms/Textarea';
import Select from '../bootstrap/forms/Select';
import Option from '../bootstrap/Option';
import USERS from '../../common/data/userDummyData';
import TAGS from '../../common/data/boardTagsData';
import useDarkMode from '../../hooks/useDarkMode';

const BoardGroup = ({ groups, data, setData }) => {
	const { darkModeStatus } = useDarkMode();

	const [editModalStatus, setEditModalStatus] = useState(false);
	const _cardCount = groups?.cards?.length;
	const formik = useFormik({
		initialValues: {
			cardName: '',
			groupId: '',
			description: '',
			assignee: '',
			task: [],
			tags: [],
		},
		// eslint-disable-next-line no-unused-vars
		onSubmit: (values) => {
			setEditModalStatus(false);
		},
	});
	return (
		<>
			<div className='col'>
				<Card
					stretch={_cardCount > 3}
					className={classNames(`board-group shadow-3d-${groups.color}`)}>
					<CardHeader>
						<CardLabel icon={groups.icon} iconColor={groups.color}>
							<CardTitle>
								{groups.title}{' '}
								<Badge color={groups.color} isLight>
									{_cardCount}
								</Badge>
							</CardTitle>
						</CardLabel>
						<CardActions>
							<Dropdown>
								<DropdownToggle hasIcon={false}>
									<Button icon='MoreVert' color={darkModeStatus && 'dark'} />
								</DropdownToggle>
								<DropdownMenu isAlignmentEnd>
									<DropdownItem>
										<Button icon='Edit'>Rename column</Button>
									</DropdownItem>
									<DropdownItem>
										<Button icon='Speed'>Set column limit</Button>
									</DropdownItem>
									<DropdownItem>
										<Button icon='AddBox'>Add new column</Button>
									</DropdownItem>
									<DropdownItem isDivider />
									<DropdownItem>
										<Button icon='Delete'>Delete column</Button>
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</CardActions>
					</CardHeader>
					{!!_cardCount && (
						<CardBody isScrollable={_cardCount > 3}>
							{groups.cards.map((card) => (
								<BoardCard
									key={card.id}
									groupId={groups.id}
									card={card}
									data={data}
									setData={setData}
								/>
							))}
						</CardBody>
					)}
					<CardFooter>
						<CardFooterLeft>
							<Button
								color={groups.color}
								isLight
								icon='AddTask'
								onClick={() => setEditModalStatus(true)}>
								Create
							</Button>
						</CardFooterLeft>
					</CardFooter>
				</Card>
			</div>

			<Modal setIsOpen={setEditModalStatus} isOpen={editModalStatus} size='lg' isScrollable>
				<ModalHeader className='px-4' setIsOpen={setEditModalStatus}>
					<ModalTitle id='project-edit'>New Card</ModalTitle>
				</ModalHeader>
				<ModalBody className='px-4'>
					<div className='row'>
						<div className='col-md-8'>
							<Card shadow='sm'>
								<CardHeader>
									<CardLabel icon='Info' iconColor='success'>
										<CardTitle>Task Information</CardTitle>
									</CardLabel>
								</CardHeader>
								<CardBody>
									<div className='row g-4'>
										<FormGroup
											className='col-12'
											id='cardName'
											label='Task Name'>
											<Input
												onChange={formik.handleChange}
												value={formik.values.cardName}
											/>
										</FormGroup>
										<FormGroup
											className='col-12'
											id='description'
											label='Description'>
											<Textarea
												onChange={formik.handleChange}
												value={formik.values.description}
											/>
										</FormGroup>
									</div>
								</CardBody>
							</Card>
						</div>
						<div className='col-md-4'>
							<div className='row g-4 sticky-top'>
								<FormGroup className='col-12' id='groupId' label='Status'>
									<Select
										ariaLabel='Board select'
										placeholder='Select group'
										onChange={formik.handleChange}
										value={formik.values.groupId}>
										{data.map((group) => (
											<Option key={group.id} value={group.id}>
												{group.title}
											</Option>
										))}
									</Select>
								</FormGroup>
								<FormGroup className='col-12' id='assignee' label='Assignee'>
									<Select
										ariaLabel='Board select'
										placeholder='Select group'
										onChange={formik.handleChange}
										value={formik.values.assignee}>
										{Object.keys(USERS).map((u) => (
											<Option key={USERS[u].id} value={USERS[u].username}>
												{`${USERS[u].name} ${USERS[u].surname}`}
											</Option>
										))}
									</Select>
								</FormGroup>
								<FormGroup className='col-12' id='tags' label='Tags'>
									<Select
										multiple
										ariaLabel='Board select'
										placeholder='Select group'
										onChange={formik.handleChange}
										value={formik.values.tags}>
										{Object.keys(TAGS).map((t) => (
											<Option key={TAGS[t].id} value={TAGS[t].id}>
												{TAGS[t].title}
											</Option>
										))}
									</Select>
								</FormGroup>
							</div>
						</div>
					</div>
				</ModalBody>
				<ModalFooter className='px-4 pb-4'>
					<Button
						color='primary'
						className='w-100'
						type='submit'
						onClick={formik.handleSubmit}>
						Save
					</Button>
				</ModalFooter>
			</Modal>
		</>
	);
};
BoardGroup.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	groups: PropTypes.object.isRequired,
	// eslint-disable-next-line react/forbid-prop-types
	data: PropTypes.array.isRequired,
	setData: PropTypes.func.isRequired,
};

export default BoardGroup;
