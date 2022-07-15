import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import classNames from 'classnames';
import TAGS, { getTagsDataWithId } from '../../common/data/boardTagsData';
import CHATS from '../../common/data/chatDummyData';
import USERS, { getUserDataWithUsername } from '../../common/data/userDummyData';
import Avatar from '../Avatar';
import Badge from '../bootstrap/Badge';
import Button from '../bootstrap/Button';
import Card, {
	CardActions,
	CardBody,
	CardFooter,
	CardFooterLeft,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../bootstrap/Card';
import Checks, { ChecksGroup } from '../bootstrap/forms/Checks';
import FormGroup from '../bootstrap/forms/FormGroup';
import Input from '../bootstrap/forms/Input';
import InputGroup from '../bootstrap/forms/InputGroup';
import Select from '../bootstrap/forms/Select';
import Textarea from '../bootstrap/forms/Textarea';
import Modal, { ModalBody, ModalFooter, ModalHeader, ModalTitle } from '../bootstrap/Modal';
import Option from '../bootstrap/Option';
import Chat, { ChatGroup } from '../Chat';
import Icon from '../icon/Icon';
import useDarkMode from '../../hooks/useDarkMode';
import useTourStep from '../../hooks/useTourStep';

const BoardCard = ({ card, groupId, data, setData }) => {
	useTourStep(13);

	const { darkModeStatus } = useDarkMode();
	const [editModalStatus, setEditModalStatus] = useState(false);

	const formik = useFormik({
		initialValues: {
			cardName: card.title || '',
			groupId: groupId || '',
			description: card.description || '',
			assignee: card.user.username || '',
			task:
				(card.tasks && card.tasks.filter((f) => f.status).map((m) => m.id.toString())) ||
				[],
			tags: (card.tags && card.tags.map((m) => m.id)) || [],
		},
		onSubmit: (values) => {
			setData((prevData) =>
				values.groupId === groupId
					? prevData.map((gr) => {
							if (gr.id === values.groupId) {
								return {
									...gr,
									cards: gr.cards.map((crd) => {
										if (card.id === crd.id) {
											return {
												...crd,
												title: values.cardName,
												description: values.description,
												user: {
													...getUserDataWithUsername(values.assignee),
												},
												tags: values.tags.map((m) => getTagsDataWithId(m)),
											};
										}
										return crd;
									}),
								};
							}

							return gr;
					  })
					: prevData.map((gr) => {
							if (gr.id === values.groupId) {
								return {
									...gr,
									cards: [
										...gr.cards,
										{
											...card,
											title: values.cardName,
											description: values.description,
											user: { ...getUserDataWithUsername(values.assignee) },
											tags: values.tags.map((m) => getTagsDataWithId(m)),
										},
									],
								};
							}

							if (gr.id === groupId) {
								return {
									...gr,
									cards: gr.cards.filter((crd) => crd.id !== card.id),
								};
							}

							return gr;
					  }),
			);
			setEditModalStatus(false);
		},
	});

	return (
		<>
			<Card shadow='none' borderSize={1} className='rounded-2'>
				<CardHeader>
					<CardLabel>
						<CardTitle
							tag='h6'
							className={classNames('cursor-pointer', {
								'link-dark': !darkModeStatus,
								'link-light': darkModeStatus,
							})}
							onClick={() => setEditModalStatus(true)}
							data-tour={card.title}>
							{card.title}
						</CardTitle>
						{card.subtitle && (
							<CardSubTitle className='text-muted'>{card.subtitle}</CardSubTitle>
						)}
					</CardLabel>
					{card.user && (
						<CardActions>
							<Avatar
								src={card.user.src}
								srcSet={card.user.srcSet}
								color={card.user.color}
								size={24}
								userName={`${card.user.name} ${card.user.surname}`}
							/>
						</CardActions>
					)}
				</CardHeader>
				<CardBody className='pt-0'>
					<div className='row g-2 mb-3'>
						{!!card?.attachments?.length && (
							<div className='col-auto'>
								<small className='border border-info border-2 text-info fw-bold px-2 py-1 rounded-1'>
									<Icon icon='AttachFile' /> {card.attachments.length}
								</small>
							</div>
						)}
						{!!card?.tasks?.length && (
							<div className='col-auto'>
								<small className='border border-info border-2 text-info fw-bold px-2 py-1 rounded-1'>
									<Icon icon='TaskAlt' /> {card.tasks.length}
								</small>
							</div>
						)}
						{card.label && (
							<div className='col-auto'>
								<small className='border border-success border-2 text-success fw-bold px-2 py-1 rounded-1'>
									{card.label}
								</small>
							</div>
						)}
					</div>
					{card.img && (
						<img
							src={card.img}
							className={classNames('img-fluid rounded mb-3 mt-1', {
								'bg-lo25-primary': darkModeStatus,
								'bg-l25-primary': !darkModeStatus,
							})}
							alt={card.title}
						/>
					)}
					{card.description}
				</CardBody>
				{card.tags && (
					<CardFooter className='pt-0' size='sm'>
						<CardFooterLeft>
							{card.tags.map((tag) => (
								<Badge key={tag.id} color={tag.color} isLight>
									{tag.title}
								</Badge>
							))}
						</CardFooterLeft>
					</CardFooter>
				)}
			</Card>

			<Modal
				setIsOpen={setEditModalStatus}
				isOpen={editModalStatus}
				size='lg'
				isScrollable
				data-tour='mail-app-modal'>
				<ModalHeader className='px-4' setIsOpen={setEditModalStatus}>
					<ModalTitle id='project-edit'>{card.title}</ModalTitle>
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
							{card.attachments && (
								<Card shadow='sm'>
									<CardHeader>
										<CardLabel icon='AttachFile' iconColor='danger'>
											<CardTitle>Attachment</CardTitle>
											<CardSubTitle>
												{card.attachments.length} files
											</CardSubTitle>
										</CardLabel>
										<CardActions>
											<Button color='danger' isOutline>
												New
											</Button>
										</CardActions>
									</CardHeader>
									<CardBody>
										<div className='row g-3'>
											{card.attachments.map((a) => (
												<div key={a.id} className='col-auto'>
													<Button
														color='danger'
														isLight
														icon='CloudDownload'>
														{a.file}
													</Button>
												</div>
											))}
										</div>
									</CardBody>
								</Card>
							)}
							{card.tasks && (
								<Card shadow='sm'>
									<CardHeader>
										<CardLabel icon='Task Alt' iconColor='primary'>
											<CardTitle>Tasks</CardTitle>
											<CardSubTitle>{card.tasks.length} tasks</CardSubTitle>
										</CardLabel>
										<CardActions>
											<Button color='primary' isOutline>
												New
											</Button>
										</CardActions>
									</CardHeader>
									<CardBody>
										<ChecksGroup>
											{card.tasks.map((t) => (
												<Checks
													key={t.id}
													id={t.id.toString()}
													name='task'
													label={t.text}
													value={t.id}
													onChange={formik.handleChange}
													checked={formik.values.task.includes(
														t.id.toString(),
													)}
												/>
											))}
										</ChecksGroup>
									</CardBody>
								</Card>
							)}
							<Card shadow='sm'>
								<CardHeader>
									<CardLabel icon='QuestionAnswer' iconColor='info'>
										<CardTitle>Comments</CardTitle>
									</CardLabel>
								</CardHeader>
								<CardBody>
									<Chat>
										{CHATS.CHLOE_VS_JOHN.map((msg) => (
											<ChatGroup
												key={msg.id}
												messages={msg.messages}
												user={msg.user}
												isReply={msg.isReply}
											/>
										))}
									</Chat>
								</CardBody>
								<CardFooter className='d-block'>
									<InputGroup>
										<Textarea />
										<Button color='info' icon='Send'>
											SEND
										</Button>
									</InputGroup>
								</CardFooter>
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
BoardCard.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	card: PropTypes.object.isRequired,
	groupId: PropTypes.string.isRequired,
	// eslint-disable-next-line react/forbid-prop-types
	data: PropTypes.array.isRequired,
	setData: PropTypes.func.isRequired,
};

export default BoardCard;
