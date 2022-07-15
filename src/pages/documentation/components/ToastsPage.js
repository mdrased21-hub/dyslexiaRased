import React from 'react';
import { useToasts } from 'react-toast-notifications';
import { NavLink } from 'react-router-dom';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Button from '../../../components/bootstrap/Button';
import Card, {
	CardActions,
	CardBody,
	CardCodeView,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Toasts from '../../../components/bootstrap/Toasts';
import { componentsMenu } from '../../../menu';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import CommonHowToUse from '../../../components/common/CommonHowToUse';

const ToastsPage = () => {
	const _generalUsage = `
const { addToast } = useToasts();`;

	const _generalUsage2 = `
	() => addToast(
		<Toasts
			icon={ String }
			iconColor={ String } // 'primary' || 'secondary' || 'success' || 'info' || 'warning' || 'danger' || 'light' || 'dark'
			title={ String || Node }
			time={ String }
			isDismiss={ Boolean }
			{...props}>
			... { // String, HTML tag or React Component }
		</Toasts>,
		{
			autoDismiss: Boolean ,
			autoDismissTimeout: Number // Examples: 1000, 3000, ...
		}
	)
`;

	const { addToast } = useToasts();

	return (
		<PageWrapper title={componentsMenu.components.subMenu.toasts.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{
								title: componentsMenu.components.text,
								to: `/${componentsMenu.components.path}`,
							},
							{
								title: componentsMenu.components.subMenu.toasts.text,
								to: `/${componentsMenu.components.subMenu.toasts.path}`,
							},
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/docs/components-toasts--default' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					{/* General Usage */}
					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='Assignment'>
									<CardTitle>General Usage</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<CardCodeView className='mb-4'>{_generalUsage}</CardCodeView>
								<CardCodeView>{_generalUsage2}</CardCodeView>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='FilterNone' iconColor='primary'>
									<CardTitle>icon</CardTitle>
									<CardSubTitle>Toasts</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-toasts--default&args=icon:Info' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									<div>icon: PropTypes.string,</div>
									{/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
									<div>
										// <NavLink to='/icons/material'>Material</NavLink> or{' '}
										<NavLink to='/icons/bootstrap-icon'>Bootstrap</NavLink> to
										see the icon names and previews.
									</div>
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-auto'>
										<Button
											color='primary'
											icon='VerifiedUser'
											isLight
											onClick={() =>
												addToast(
													<Toasts
														title='Toasts notifications'
														icon='VerifiedUser'
														iconColor='primary'
														time='Now'
														isDismiss>
														Hello, world! This is a toast message.
													</Toasts>,
													{
														autoDismiss: true,
													},
												)
											}>
											Add Toast
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='primary'
											icon='Info'
											isLight
											onClick={() =>
												addToast(
													<Toasts
														title='Toasts notifications'
														icon='Info'
														iconColor='primary'
														time='Now'
														isDismiss>
														Hello, world! This is a toast message.
													</Toasts>,
													{
														autoDismiss: true,
													},
												)
											}>
											Add Toast
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='primary'
											icon='Warning'
											isLight
											onClick={() =>
												addToast(
													<Toasts
														title='Toasts notifications'
														icon='Warning'
														iconColor='primary'
														time='Now'
														isDismiss>
														Hello, world! This is a toast message.
													</Toasts>,
													{
														autoDismiss: true,
													},
												)
											}>
											Add Toast
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='primary'
											icon='Bolt'
											isLight
											onClick={() =>
												addToast(
													<Toasts
														title='Toasts notifications'
														icon='Bolt'
														iconColor='primary'
														time='Now'
														isDismiss>
														Hello, world! This is a toast message.
													</Toasts>,
													{
														autoDismiss: true,
													},
												)
											}>
											Add Toast
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Palette' iconColor='info'>
									<CardTitle>iconColor</CardTitle>
									<CardSubTitle>Toasts</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-toasts--default&args=icon:Info;iconColor:info' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									iconColor: PropTypes.oneOf([ 'primary', 'secondary', 'success',
									'info', 'warning', 'danger', 'light', 'dark', ]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-auto'>
										<Button
											color='success'
											icon='VerifiedUser'
											isLight
											onClick={() =>
												addToast(
													<Toasts
														title='Toasts notifications'
														icon='VerifiedUser'
														iconColor='success'
														time='Now'
														isDismiss>
														Hello, world! This is a toast message.
													</Toasts>,
													{
														autoDismiss: true,
													},
												)
											}>
											Add Toast
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='info'
											icon='Info'
											isLight
											onClick={() =>
												addToast(
													<Toasts
														title='Toasts notifications'
														icon='Info'
														iconColor='info'
														time='Now'
														isDismiss>
														Hello, world! This is a toast message.
													</Toasts>,
													{
														autoDismiss: true,
													},
												)
											}>
											Add Toast
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='warning'
											icon='Warning'
											isLight
											onClick={() =>
												addToast(
													<Toasts
														title='Toasts notifications'
														icon='Warning'
														iconColor='warning'
														time='Now'
														isDismiss>
														Hello, world! This is a toast message.
													</Toasts>,
													{
														autoDismiss: true,
													},
												)
											}>
											Add Toast
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='danger'
											icon='Bolt'
											isLight
											onClick={() =>
												addToast(
													<Toasts
														title='Toasts notifications'
														icon='Bolt'
														iconColor='danger'
														time='Now'
														isDismiss>
														Hello, world! This is a toast message.
													</Toasts>,
													{
														autoDismiss: true,
													},
												)
											}>
											Add Toast
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Title' iconColor='secondary'>
									<CardTitle>title</CardTitle>
									<CardSubTitle>Toasts</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-toasts--default&args=title:Title+is+here' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>title: PropTypes.node.isRequired,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-auto'>
										<Button
											color='secondary'
											icon='BorderColor'
											isLight
											onClick={() =>
												addToast(
													<Toasts
														title='Toasts notifications'
														icon='VerifiedUser'
														iconColor='primary'
														time='Now'
														isDismiss>
														Hello, world! This is a toast message.
													</Toasts>,
													{
														autoDismiss: true,
													},
												)
											}>
											String title
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='secondary'
											icon='Code'
											isLight
											onClick={() =>
												addToast(
													<Toasts
														title={
															<>
																Toasts{' '}
																<u>
																	<b>notifications</b>
																</u>
															</>
														}
														icon='Info'
														iconColor='primary'
														time='Now'
														isDismiss>
														Hello, world! This is a toast message.
													</Toasts>,
													{
														autoDismiss: true,
													},
												)
											}>
											Node title
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Timer' iconColor='success'>
									<CardTitle>time</CardTitle>
									<CardSubTitle>Toasts</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-toasts--default&args=time:Time+is+here' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>time: PropTypes.string,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-auto'>
										<Button
											color='success'
											icon='Update'
											isLight
											onClick={() =>
												addToast(
													<Toasts
														title='Toasts notifications'
														icon='Update'
														iconColor='success'
														time='Just now'
														isDismiss>
														Hello, world! This is a toast message.
													</Toasts>,
													{
														autoDismiss: true,
													},
												)
											}>
											Just now
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='success'
											icon='AlarmOn'
											isLight
											onClick={() =>
												addToast(
													<Toasts
														title='Toasts notifications'
														icon='AlarmOn'
														iconColor='success'
														time='11 minutes ago'
														isDismiss>
														Hello, world! This is a toast message.
													</Toasts>,
													{
														autoDismiss: true,
													},
												)
											}>
											11 minutes ago
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='success'
											icon='TimerOff'
											isLight
											onClick={() =>
												addToast(
													<Toasts
														title='Toasts notifications'
														icon='TimerOff'
														iconColor='success'
														isDismiss>
														Hello, world! This is a toast message.
													</Toasts>,
													{
														autoDismiss: true,
													},
												)
											}>
											None
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Cancel' iconColor='danger'>
									<CardTitle>isDismiss</CardTitle>
									<CardSubTitle>Toasts</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-toasts--default&args=isDismiss:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isDismiss: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-auto'>
										<Button
											color='danger'
											icon='Cancel'
											isLight
											onClick={() =>
												addToast(
													<Toasts
														title='Toasts notifications'
														icon='Cancel'
														iconColor='danger'
														time='Just now'
														isDismiss={false}>
														Hello, world! This is a toast message.
													</Toasts>,
													{
														autoDismiss: true,
													},
												)
											}>
											No close button
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='success'
											icon='Cancel'
											isLight
											onClick={() =>
												addToast(
													<Toasts
														title='Toasts notifications'
														icon='Cancel'
														iconColor='success'
														time='Just now'>
														Hello, world! This is a toast message.
													</Toasts>,
													{
														autoDismiss: true,
													},
												)
											}>
											With close button
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Flaky' iconColor='warning'>
									<CardTitle>autoDismiss</CardTitle>
									<CardSubTitle>addToast</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-toasts--default&args=autoDismiss:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>autoDismiss: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-auto'>
										<Button
											color='danger'
											icon='Cancel'
											isLight
											onClick={() =>
												addToast(
													<Toasts
														title='Toasts notifications'
														icon='Cancel'
														iconColor='danger'
														time='Just now'>
														Hello, world! This is a toast message.
													</Toasts>,
													{
														autoDismiss: false,
													},
												)
											}>
											autoDismiss value is false
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='success'
											icon='Cancel'
											isLight
											onClick={() =>
												addToast(
													<Toasts
														title='Toasts notifications'
														icon='Cancel'
														iconColor='success'
														time='Just now'>
														Hello, world! This is a toast message.
													</Toasts>,
													{
														autoDismiss: true,
													},
												)
											}>
											autoDismiss value is true
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Timer' iconColor='warning'>
									<CardTitle>autoDismiss</CardTitle>
									<CardSubTitle>addToast</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-toasts--default&args=autoDismissTimeout:3000' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>autoDismiss: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-auto'>
										<Button
											color='info'
											icon='Bolt'
											isLight
											onClick={() =>
												addToast(
													<Toasts
														title='Toasts notifications'
														icon='Bolt'
														iconColor='info'
														time='Just now'>
														Hello, world! This is a toast message.
													</Toasts>,
													{
														autoDismiss: true,
														autoDismissTimeout: 1000,
													},
												)
											}>
											autoDismissTimeout value is 1000
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='success'
											icon='Cancel'
											isLight
											onClick={() =>
												addToast(
													<Toasts
														title='Toasts notifications'
														icon='Cancel'
														iconColor='success'
														time='Just now'>
														Hello, world! This is a toast message.
													</Toasts>,
													{
														autoDismiss: true,
													},
												)
											}>
											autoDismiss value is null (5000)
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

export default ToastsPage;
