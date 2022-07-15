import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import { demoPages } from '../../../menu';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import Badge from '../../../components/bootstrap/Badge';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Button from '../../../components/bootstrap/Button';
import Avatar, { AvatarGroup } from '../../../components/Avatar';
import USERS from '../../../common/data/userDummyData';
import Icon from '../../../components/icon/Icon';
import Progress from '../../../components/bootstrap/Progress';
import CommonAvatarTeam from '../../../components/common/CommonAvatarTeam';
import useDarkMode from '../../../hooks/useDarkMode';
import useTourStep from '../../../hooks/useTourStep';

// eslint-disable-next-line react/prop-types
const Item = ({ name, teamName, attachCount, taskCount, percent, dueDate, ...props }) => {
	const { darkModeStatus } = useDarkMode();
	const navigate = useNavigate();
	const handleOnClickToProjectPage = useCallback(
		() => navigate(`../${demoPages.projectManagement.subMenu.itemID.path}/1`),
		[navigate],
	);
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<div className='col-md-4' {...props}>
			<Card stretch onClick={handleOnClickToProjectPage} className='cursor-pointer'>
				<CardHeader>
					<CardLabel icon='Ballot'>
						<CardTitle>{name}</CardTitle>
						<CardSubTitle>{teamName}</CardSubTitle>
					</CardLabel>
					<CardActions>
						<small className='border border-success border-2 text-success fw-bold px-2 py-1 rounded-1'>
							{dueDate}
						</small>
					</CardActions>
				</CardHeader>
				<CardBody>
					<div className='row g-2 mb-3'>
						<div className='col-auto'>
							<Badge color={darkModeStatus ? 'light' : 'dark'} isLight>
								<Icon icon='AttachFile' /> {attachCount}
							</Badge>
						</div>
						<div className='col-auto'>
							<Badge color={darkModeStatus ? 'light' : 'dark'} isLight>
								<Icon icon='TaskAlt' /> {taskCount}
							</Badge>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-6'>
							{percent}%
							<Progress isAutoColor value={percent} height={10} />
						</div>
						<div className='col-md-6 d-flex justify-content-end'>
							<AvatarGroup>
								<Avatar
									srcSet={USERS.GRACE.srcSet}
									src={USERS.GRACE.src}
									userName={`${USERS.GRACE.name} ${USERS.GRACE.surname}`}
									color={USERS.GRACE.color}
								/>
								<Avatar
									srcSet={USERS.SAM.srcSet}
									src={USERS.SAM.src}
									userName={`${USERS.SAM.name} ${USERS.SAM.surname}`}
									color={USERS.SAM.color}
								/>
								<Avatar
									srcSet={USERS.CHLOE.srcSet}
									src={USERS.CHLOE.src}
									userName={`${USERS.CHLOE.name} ${USERS.CHLOE.surname}`}
									color={USERS.CHLOE.color}
								/>

								<Avatar
									srcSet={USERS.JANE.srcSet}
									src={USERS.JANE.src}
									userName={`${USERS.JANE.name} ${USERS.JANE.surname}`}
									color={USERS.JANE.color}
								/>
								<Avatar
									srcSet={USERS.JOHN.srcSet}
									src={USERS.JOHN.src}
									userName={`${USERS.JOHN.name} ${USERS.JOHN.surname}`}
									color={USERS.JOHN.color}
								/>
								<Avatar
									srcSet={USERS.RYAN.srcSet}
									src={USERS.RYAN.src}
									userName={`${USERS.RYAN.name} ${USERS.RYAN.surname}`}
									color={USERS.RYAN.color}
								/>
							</AvatarGroup>
						</div>
					</div>
				</CardBody>
			</Card>
		</div>
	);
};

const ProjectManagementsList = () => {
	useTourStep(12);

	const { darkModeStatus } = useDarkMode();
	const navigate = useNavigate();
	const handleOnClickToEmployeeListPage = useCallback(
		() => navigate(`../${demoPages.appointment.subMenu.employeeList.path}`),
		[navigate],
	);

	return (
		<PageWrapper title={demoPages.projectManagement.subMenu.list.text}>
			<SubHeader>
				<SubHeaderLeft>
					<strong className='fs-5'>Hi John</strong>
					<SubheaderSeparator />
					<span>
						There are{' '}
						<Badge color='info' isLight>
							2 teams
						</Badge>{' '}
						you are in and{' '}
						<Badge color='success' isLight>
							5 projects
						</Badge>
						.
					</span>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonAvatarTeam>
						<strong>Facit</strong> Team
					</CommonAvatarTeam>
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12'>
						<div className='display-4 fw-bold py-3'>Teams</div>
					</div>
					<div className='col-md-4'>
						<Card stretch>
							<CardHeader className='bg-transparent'>
								<CardLabel>
									<CardTitle tag='h4' className='h5'>
										Marketing Team
									</CardTitle>
									<CardSubTitle tag='h5' className='h6 text-muted'>
										There is a meeting at 12 o'clock.
									</CardSubTitle>
								</CardLabel>
								<CardActions>
									<Button
										icon='ArrowForwardIos'
										aria-label='Read More'
										hoverShadow='default'
										color={darkModeStatus && 'dark'}
										onClick={handleOnClickToEmployeeListPage}
									/>
								</CardActions>
							</CardHeader>
							<CardBody>
								<AvatarGroup>
									<Avatar
										srcSet={USERS.GRACE.srcSet}
										src={USERS.GRACE.src}
										userName={`${USERS.GRACE.name} ${USERS.GRACE.surname}`}
										color={USERS.GRACE.color}
									/>
									<Avatar
										srcSet={USERS.SAM.srcSet}
										src={USERS.SAM.src}
										userName={`${USERS.SAM.name} ${USERS.SAM.surname}`}
										color={USERS.SAM.color}
									/>
									<Avatar
										srcSet={USERS.CHLOE.srcSet}
										src={USERS.CHLOE.src}
										userName={`${USERS.CHLOE.name} ${USERS.CHLOE.surname}`}
										color={USERS.CHLOE.color}
									/>

									<Avatar
										srcSet={USERS.JANE.srcSet}
										src={USERS.JANE.src}
										userName={`${USERS.JANE.name} ${USERS.JANE.surname}`}
										color={USERS.JANE.color}
									/>
									<Avatar
										srcSet={USERS.JOHN.srcSet}
										src={USERS.JOHN.src}
										userName={`${USERS.JOHN.name} ${USERS.JOHN.surname}`}
										color={USERS.JOHN.color}
									/>
									<Avatar
										srcSet={USERS.RYAN.srcSet}
										src={USERS.RYAN.src}
										userName={`${USERS.RYAN.name} ${USERS.RYAN.surname}`}
										color={USERS.RYAN.color}
									/>
								</AvatarGroup>
							</CardBody>
						</Card>
					</div>
					<div className='col-md-4'>
						<Card stretch>
							<CardHeader className='bg-transparent'>
								<CardLabel>
									<CardTitle tag='h4' className='h5'>
										Marketing Team
									</CardTitle>
									<CardSubTitle tag='h5' className='h6 text-muted'>
										There is a meeting at 12 o'clock.
									</CardSubTitle>
								</CardLabel>
								<CardActions>
									<Button
										icon='ArrowForwardIos'
										aria-label='Read More'
										hoverShadow='default'
										color={darkModeStatus && 'dark'}
										onClick={handleOnClickToEmployeeListPage}
									/>
								</CardActions>
							</CardHeader>
							<CardBody>
								<AvatarGroup>
									<Avatar
										srcSet={USERS.GRACE.srcSet}
										src={USERS.GRACE.src}
										userName={`${USERS.GRACE.name} ${USERS.GRACE.surname}`}
										color={USERS.GRACE.color}
									/>
									<Avatar
										srcSet={USERS.SAM.srcSet}
										src={USERS.SAM.src}
										userName={`${USERS.SAM.name} ${USERS.SAM.surname}`}
										color={USERS.SAM.color}
									/>
									<Avatar
										srcSet={USERS.CHLOE.srcSet}
										src={USERS.CHLOE.src}
										userName={`${USERS.CHLOE.name} ${USERS.CHLOE.surname}`}
										color={USERS.CHLOE.color}
									/>

									<Avatar
										srcSet={USERS.JANE.srcSet}
										src={USERS.JANE.src}
										userName={`${USERS.JANE.name} ${USERS.JANE.surname}`}
										color={USERS.JANE.color}
									/>
									<Avatar
										srcSet={USERS.JOHN.srcSet}
										src={USERS.JOHN.src}
										userName={`${USERS.JOHN.name} ${USERS.JOHN.surname}`}
										color={USERS.JOHN.color}
									/>
									<Avatar
										srcSet={USERS.RYAN.srcSet}
										src={USERS.RYAN.src}
										userName={`${USERS.RYAN.name} ${USERS.RYAN.surname}`}
										color={USERS.RYAN.color}
									/>
								</AvatarGroup>
							</CardBody>
						</Card>
					</div>
					<div className='col-md-4'>
						<Card stretch>
							<CardBody className='d-flex align-items-center justify-content-center'>
								<Button
									color='info'
									size='lg'
									isLight
									className='w-100 h-100'
									icon='AddCircle'>
									Add New
								</Button>
							</CardBody>
						</Card>
					</div>
				</div>
				<div className='row mt-3'>
					<div className='col-12'>
						<div className='display-4 fw-bold py-3'>Projects</div>
					</div>
					<Item
						name='Theme'
						teamName='Facit Team'
						dueDate='3 days left'
						attachCount={6}
						taskCount={24}
						percent={65}
						data-tour='project-item'
					/>
					<Item
						name='Plugin'
						teamName='Code Team'
						dueDate='14 days left'
						attachCount={1}
						taskCount={4}
						percent={70}
					/>
					<Item
						name='Website'
						teamName='Facit Team'
						dueDate='14 days left'
						attachCount={12}
						taskCount={34}
						percent={78}
					/>
					<Item
						name='UI Design'
						teamName='Omtanke Taem'
						dueDate='21 days left'
						attachCount={4}
						taskCount={18}
						percent={43}
					/>
					<Item
						name='Theme'
						teamName='Facit Theme'
						dueDate='21 days left'
						attachCount={2}
						taskCount={12}
						percent={30}
					/>
					<div className='col-md-4'>
						<Card stretch>
							<CardBody className='d-flex align-items-center justify-content-center'>
								<Button
									color='info'
									size='lg'
									isLight
									className='w-100 h-100'
									icon='AddCircle'>
									Add New
								</Button>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ProjectManagementsList;
