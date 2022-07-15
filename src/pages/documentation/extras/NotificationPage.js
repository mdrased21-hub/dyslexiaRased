import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Card, {
	CardBody,
	CardCodeView,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../components/bootstrap/Card';
import SubHeader, { SubHeaderLeft } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import showNotification from '../../../components/extras/showNotification';
import Button from '../../../components/bootstrap/Button';
import Icon from '../../../components/icon/Icon';
import CommonDesc from '../../../components/common/CommonDesc';
import { AlertLink } from '../../../components/bootstrap/Alert';
import { componentsMenu } from '../../../menu';

const NotificationPage = () => {
	const _generalUsage = `
() => {
	showNotification(
		'title', // String, HTML or Component
		'message', // String, HTML or Component
		'type' // 'default' || 'info' || 'warning' || 'success' || 'danger',
	);
}`;

	const _title = (
		<span className='d-flex align-items-center'>
			<Icon icon='Info' size='lg' className='me-1' />
			<span>This is a Title</span>
		</span>
	);
	const _message = (
		<div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum dapibus orci,
				non consectetur sem aliquam nec.
			</p>
		</div>
	);

	return (
		<PageWrapper title={componentsMenu.notification.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb list={[{ title: 'Notification', to: '/notifications' }]} />
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='Assignment'>
									<CardTitle>General Usage</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<CardCodeView className='mb-4'>{_generalUsage}</CardCodeView>
								<CommonDesc>
									We preferred <strong>react-notifications-component</strong> for
									notification and ensured compatibility with the theme.If you
									want to make changes, path{' '}
									<code>src/components/extras/showNotification</code>. For more
									information,{' '}
									<AlertLink
										href='https://github.com/teodosii/react-notifications-component#api'
										target='blank'
										rel='noreferrer'>
										react-notifications-component API
									</AlertLink>
									.
								</CommonDesc>
							</CardBody>
						</Card>
					</div>

					<div className='col-xl-6'>
						<Card>
							<CardHeader>
								<CardLabel icon='FormatSize'>
									<CardTitle>'message'</CardTitle>
									<CardSubTitle>showNotification</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<Button
									color='primary'
									isLight
									icon='Notifications'
									onClick={() => {
										showNotification('', _message);
									}}>
									Click
								</Button>
							</CardBody>
						</Card>
					</div>
					<div className='col-xl-6'>
						<Card>
							<CardHeader>
								<CardLabel icon='AnchorCenterDown'>
									<CardTitle>'title'</CardTitle>
									<CardSubTitle>showNotification</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<Button
									color='primary'
									isLight
									icon='Notifications'
									onClick={() => {
										showNotification(_title, _message);
									}}>
									Click
								</Button>
							</CardBody>
						</Card>
					</div>

					<div className='col-xl-6'>
						<Card>
							<CardHeader>
								<CardLabel icon='Color'>
									<CardTitle>'type'</CardTitle>
									<CardSubTitle>showNotification</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									<div className='col-auto'>
										<Button
											color='dark'
											isLight
											icon='Notifications'
											onClick={() => {
												showNotification(_title, _message);
											}}>
											Default
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='info'
											isLight
											icon='Notifications'
											onClick={() => {
												showNotification(_title, _message, 'info');
											}}>
											Info
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='success'
											isLight
											icon='Notifications'
											onClick={() => {
												showNotification(_title, _message, 'success');
											}}>
											Success
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='warning'
											isLight
											icon='Notifications'
											onClick={() => {
												showNotification(_title, _message, 'warning');
											}}>
											Warning
										</Button>
									</div>

									<div className='col-auto'>
										<Button
											color='danger'
											isLight
											icon='Notifications'
											onClick={() => {
												showNotification(_title, _message, 'danger');
											}}>
											Danger
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default NotificationPage;
