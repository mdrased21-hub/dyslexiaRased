import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../../layout/SubHeader/SubHeader';
import Icon from '../../../components/icon/Icon';
import Button from '../../../components/bootstrap/Button';
import Page from '../../../layout/Page/Page';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Chat, { ChatGroup, ChatHeader, ChatListItem } from '../../../components/Chat';
import USERS from '../../../common/data/userDummyData';
import OffCanvas, { OffCanvasBody, OffCanvasHeader } from '../../../components/bootstrap/OffCanvas';
import InputGroup from '../../../components/bootstrap/forms/InputGroup';
import Textarea from '../../../components/bootstrap/forms/Textarea';
import { demoPages } from '../../../menu';
import CHATS from '../../../common/data/chatDummyData';
import CommonChatStatus from '../../common/CommonChatStatus';

const OnlyListChatPage = () => {
	const navigate = useNavigate();
	const [canvasStatus, setCanvasStatus] = useState(false);

	const TABS = {
		CHLOE: USERS.CHLOE,
		GRACE: USERS.GRACE,
		JANE: USERS.JANE,
		RYAN: USERS.RYAN,
		ELLA: USERS.ELLA,
		SAM: USERS.SAM,
	};
	const [activeTab, setActiveTab] = useState(null);

	function getMessages(ACTIVE_TAB) {
		if (ACTIVE_TAB === USERS.ELLA) {
			return CHATS.ELLA_VS_JOHN;
		}
		if (ACTIVE_TAB === USERS.GRACE) {
			return CHATS.GRACE_VS_JOHN;
		}
		if (ACTIVE_TAB === USERS.JANE) {
			return CHATS.JANE_VS_JOHN;
		}
		if (ACTIVE_TAB === USERS.RYAN) {
			return CHATS.RYAN_VS_JOHN;
		}
		if (ACTIVE_TAB === USERS.CHLOE) {
			return CHATS.CHLOE_VS_JOHN;
		}
		if (ACTIVE_TAB === USERS.SAM) {
			return CHATS.SAM_VS_JOHN;
		}
		return null;
	}

	const getListShow = (TAB_NAME) => {
		setActiveTab(TAB_NAME);
		setCanvasStatus(true);
	};

	useEffect(() => {
		if (!canvasStatus) {
			setActiveTab(null);
		}
		return () => {};
	}, [canvasStatus]);

	return (
		<PageWrapper title={demoPages.chat.subMenu.onlyListChat.text}>
			<SubHeader>
				<SubHeaderLeft>
					<span>
						<Icon icon='Info' className='me-2' size='2x' color='danger' />
						<span className='text-muted'>
							You have <Icon icon='Chat5' color='danger' className='mx-1' size='lg' />{' '}
							14 unread messages.
						</span>
					</span>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonChatStatus />
					<SubheaderSeparator />
					<Button
						icon='Logout'
						color='danger'
						isLight
						onClick={() => navigate(`../${demoPages.login.path}`)}>
						Logout
					</Button>
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row h-100'>
					<div className='col-md-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='AccountCircle' iconColor='success'>
									<CardTitle>Online</CardTitle>
									<CardSubTitle>3 users</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='row'>
									<ChatListItem
										onClick={() => getListShow(TABS.CHLOE)}
										isActive={activeTab === TABS.CHLOE}
										src={USERS.CHLOE.src}
										srcSet={USERS.CHLOE.srcSet}
										name={USERS.CHLOE.name}
										surname={USERS.CHLOE.surname}
										isOnline={USERS.CHLOE.isOnline}
										color={USERS.CHLOE.color}
										lastSeenTime={moment().add(-1, 'week').fromNow()}
										latestMessage={"I think it's really starting to shine."}
									/>
									<ChatListItem
										onClick={() => getListShow(TABS.GRACE)}
										isActive={activeTab === TABS.GRACE}
										src={USERS.GRACE.src}
										srcSet={USERS.GRACE.srcSet}
										name={USERS.GRACE.name}
										surname={USERS.GRACE.surname}
										isOnline={USERS.GRACE.isOnline}
										color={USERS.GRACE.color}
										unreadMessage={13}
										lastSeenTime={moment().add(-1, 'hour').fromNow()}
										latestMessage='Curabitur ornare mattis urna euismod molestie.'
									/>
									<ChatListItem
										onClick={() => getListShow(TABS.JANE)}
										isActive={activeTab === TABS.JANE}
										src={USERS.JANE.src}
										srcSet={USERS.JANE.srcSet}
										name={USERS.JANE.name}
										surname={USERS.JANE.surname}
										isOnline={USERS.JANE.isOnline}
										color={USERS.JANE.color}
										unreadMessage={1}
										lastSeenTime={moment().add(-3, 'hour').fromNow()}
										latestMessage='Nulla sollicitudin consectetur arcu, sit amet rutrum felis tincidunt non.'
									/>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-md-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='AccountCircle' iconColor='danger'>
									<CardTitle>Offline</CardTitle>
									<CardSubTitle>3 users</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='row'>
									<ChatListItem
										onClick={() => getListShow(TABS.RYAN)}
										isActive={activeTab === TABS.RYAN}
										src={USERS.RYAN.src}
										srcSet={USERS.RYAN.srcSet}
										name={USERS.RYAN.name}
										surname={USERS.RYAN.surname}
										isOnline={USERS.RYAN.isOnline}
										color={USERS.RYAN.color}
										lastSeenTime={moment().add(-3, 'day').fromNow()}
										latestMessage='Vivamus fermentum dui sit amet orci interdum pulvinar.'
									/>

									<ChatListItem
										onClick={() => getListShow(TABS.ELLA)}
										isActive={activeTab === TABS.ELLA}
										src={USERS.ELLA.src}
										srcSet={USERS.ELLA.srcSet}
										name={USERS.ELLA.name}
										surname={USERS.ELLA.surname}
										isOnline={USERS.ELLA.isOnline}
										color={USERS.ELLA.color}
										lastSeenTime={moment().fromNow()}
										latestMessage='Eleifend sagittis!'
									/>
									<ChatListItem
										onClick={() => getListShow(TABS.SAM)}
										isActive={activeTab === TABS.SAM}
										src={USERS.SAM.src}
										srcSet={USERS.SAM.srcSet}
										name={USERS.SAM.name}
										surname={USERS.SAM.surname}
										isOnline={USERS.SAM.isOnline}
										color={USERS.SAM.color}
										lastSeenTime={moment().add(-5, 'week').fromNow()}
										latestMessage='Pellentesque a massa at magna laoreet luctus sed dignissim erat.'
									/>
								</div>
							</CardBody>
						</Card>
					</div>
				</div>

				<OffCanvas
					id='chat'
					isOpen={canvasStatus}
					setOpen={setCanvasStatus}
					placement='end'
					isModalStyle
					isBackdrop={false}
					isBodyScroll>
					<OffCanvasHeader setOpen={setCanvasStatus} className='fs-5'>
						<ChatHeader
							to={activeTab ? `${activeTab.name} ${activeTab.surname}` : null}
						/>
					</OffCanvasHeader>
					<OffCanvasBody>
						<Chat>
							{activeTab &&
								getMessages(activeTab).map((msg) => (
									<ChatGroup
										messages={msg.messages}
										user={msg.user}
										isReply={msg.isReply}
									/>
								))}
						</Chat>
					</OffCanvasBody>
					<div className='chat-send-message p-3'>
						<InputGroup>
							<Textarea />
							<Button color='info' icon='Send'>
								SEND
							</Button>
						</InputGroup>
					</div>
				</OffCanvas>
			</Page>
		</PageWrapper>
	);
};

export default OnlyListChatPage;
