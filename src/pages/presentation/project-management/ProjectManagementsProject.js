import React, { useState } from 'react';
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
import COLORS from '../../../common/data/enumColors';
import Board from '../../../components/Board/Board';
import USERS from '../../../common/data/userDummyData';

import Slide2 from '../../../assets/img/wanna/slide/scene-2.png';
import Slide4 from '../../../assets/img/wanna/slide/scene-4.png';
import Slide6 from '../../../assets/img/wanna/slide/scene-6.png';
import TAGS from '../../../common/data/boardTagsData';
import CommonAvatarTeam from '../../../components/common/CommonAvatarTeam';
import Button from '../../../components/bootstrap/Button';
import useDarkMode from '../../../hooks/useDarkMode';

const ProjectManagementsProject = () => {
	const { darkModeStatus } = useDarkMode();
	const navigate = useNavigate();
	const data = [
		{
			id: 'lane1',
			title: 'Backlog',
			color: darkModeStatus ? COLORS.LIGHT.name : COLORS.DARK.name,
			icon: 'RateReview',
			cards: [
				{
					id: 'Card1',
					title: 'Mail App',
					subtitle: 'Facit Themes',
					description: 'Mail application and screens will be added',
					label: '7 day left',
					user: USERS.JOHN,
					img: Slide2,
					tags: [TAGS.critical, TAGS.design, TAGS.code],
					tasks: [
						{ id: 1, text: 'Page UI & UX design', status: true },
						{ id: 2, text: 'HTML & SCSS coding', status: true },
						{ id: 3, text: 'React Components to do', status: false },
					],
					attachments: [
						{ id: 1, path: 'somefile.txt', file: 'TXT' },
						{ id: 2, path: 'somefile.txt', file: 'WORD' },
						{ id: 3, path: 'somefile.txt', file: 'PSD' },
					],
				},
				{
					id: 'Card2',
					title: 'Invoice',
					subtitle: 'Facit Themes',
					description: 'Invoice preview and new creation screens will be added',
					user: USERS.ELLA,
					label: '5 day left',
					tags: [TAGS.revise, TAGS.design],
					tasks: [
						{ id: 1, text: 'Lorem ipsum dolor', status: true },
						{ id: 2, text: 'Sit amet.', status: false },
					],
				},
			],
		},
		{
			id: 'lane2',
			title: 'To Do',
			color: COLORS.INFO.name,
			icon: 'DoneOutline',
			cards: [
				{
					id: 'Card3',
					title: 'Landing Page Update',
					subtitle: 'Omtanke Team',
					description: 'Will be redesigned',
					label: '5 day left',
					user: USERS.GRACE,
					tags: [TAGS.design, TAGS.code],
					tasks: [
						{ id: 1, text: 'Draft drawings will be made', status: true },
						{ id: 2, text: 'Page will be updated', status: false },
						{ id: 3, text: 'Will be sent for review.', status: false },
					],
					attachments: [{ id: 2, path: 'somefile.txt', file: 'WORD' }],
				},
				{
					id: 'Card4',
					title: 'Write Blog',
					subtitle: 'Facit Themes',
					description: 'Explain why it should be chosen',
					label: '7 day left',
					user: USERS.JOHN,
					img: Slide4,
					tags: [TAGS.design],
					tasks: [{ id: 1, text: 'Lorem ipsum dolor', status: true }],
					attachments: [{ id: 1, path: 'somefile.txt', file: 'TXT' }],
				},
			],
		},
		{
			id: 'lane3',
			title: 'Pending',
			color: COLORS.INFO.name,
			icon: 'PendingActions',
			cards: [],
		},
		{
			id: 'lane4',
			title: 'Run',
			color: COLORS.INFO.name,
			icon: 'DirectionsRun',
			cards: [
				{
					id: 'Card5',
					title: 'Bug Fix',
					subtitle: 'Facit Themes',
					description: 'Minor bugs will be fixed',
					label: '5 day left',
					user: USERS.GRACE,
					tags: [TAGS.review, TAGS.design, TAGS.code],
					tasks: [
						{ id: 1, text: 'Lorem ipsum dolor', status: true },
						{ id: 2, text: 'Sit amet.', status: false },
						{ id: 3, text: 'Aliquam quis varius turpis.', status: false },
					],
					attachments: [
						{ id: 1, path: 'somefile.txt', file: 'TXT' },
						{ id: 2, path: 'somefile.txt', file: 'WORD' },
						{ id: 3, path: 'somefile.txt', file: 'PSD' },
					],
				},
			],
		},
		{
			id: 'lane5',
			title: 'Done',
			color: COLORS.SUCCESS.name,
			icon: 'Verified',
			cards: [
				{
					id: 'Card6',
					title: 'Project App',
					subtitle: 'Facit Themes',
					description: 'Project tracking screen will be added',
					label: '1 day ago',
					user: USERS.JOHN,
					img: Slide6,
					tags: [TAGS.critical, TAGS.design],
					tasks: [
						{ id: 1, text: 'Lorem ipsum dolor', status: true },
						{ id: 2, text: 'Sit amet.', status: false },
						{ id: 3, text: 'Aliquam quis varius turpis.', status: false },
					],
					attachments: [
						{ id: 1, path: 'somefile.txt', file: 'TXT' },
						{ id: 2, path: 'somefile.txt', file: 'WORD' },
						{ id: 3, path: 'somefile.txt', file: 'PSD' },
					],
				},
			],
		},
	];
	const [boardData, setBoardData] = useState(data);

	return (
		<PageWrapper title={demoPages.projectManagement.subMenu.item.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Button color='info' isLink icon='ArrowBack' onClick={() => navigate(-1)}>
						Back to List
					</Button>
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
			<Page container='fluid'>
				<Board data={boardData} setData={setBoardData} />
			</Page>
		</PageWrapper>
	);
};

export default ProjectManagementsProject;
