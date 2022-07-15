import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import Alert, { AlertHeading, AlertLink } from '../../../components/bootstrap/Alert';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Card, {
	CardActions,
	CardBody,
	CardCodeView,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../components/bootstrap/Card';
import CommonHowToUse from '../../../components/common/CommonHowToUse';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

const AlertPage = () => {
	const _generalUsage = `
<Alert
	className={ String }
	color={ String } // 'primary' || 'secondary' || 'success' || 'info' || 'warning' || 'danger' || 'light' || 'dark'
	isLight={ Boolean }
	isOutline={ Boolean }
	borderWidth={ Number } // null || 0 || 1 || 2 || 3 || 4 || 5
	isDismissible={ Boolean }
	icon={ String }
	shadow={ String } // null || 'sm' || 'md' || 'lg' || '3d'
	rounded={ String || Number} // null || 'default' || 0 || 1 || 2 || 3 || 'pill'
	{...props}>
	<AlertHeading
		tag={ String } // 'h1' || 'h2' || 'h3' || 'h4' || 'h5' || 'h6'
		className={ String }
		{...props}>
		...
	</AlertHeading>
	...
	... <AlertLink className={ String } href={ String } to={ String } {...props}></AlertLink> ...
	...
</Alert>`;

	return (
		<PageWrapper title={componentsMenu.components.subMenu.alert.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{
								title: componentsMenu.components.text,
								to: `/${componentsMenu.components.path}`,
							},
							{
								title: componentsMenu.components.subMenu.alert.text,
								to: `/${componentsMenu.components.subMenu.alert.path}`,
							},
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/docs/components-alert--default' />
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
								<CardCodeView>{_generalUsage}</CardCodeView>
							</CardBody>
						</Card>
					</div>

					{/* color */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Palette' iconColor='info'>
									<CardTitle>color</CardTitle>
									<CardSubTitle>Alert</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-alert-props-color--primary' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									color: PropTypes.oneOf([ 'primary', 'secondary', 'success',
									'info', 'warning', 'danger', 'light', 'dark', ]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Alert>This is a alert!</Alert>
								<Alert color='secondary'>This is a alert!</Alert>
								<Alert color='success'>This is a alert!</Alert>
								<Alert color='info'>This is a alert!</Alert>
								<Alert color='warning'>This is a alert!</Alert>
								<Alert color='danger'>This is a alert!</Alert>
								<Alert color='light'>This is a alert!</Alert>
								<Alert color='dark' className='mb-0'>
									This is a alert!
								</Alert>
							</CardBody>
						</Card>
					</div>
					{/* isLight */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Lightbulb' iconColor='warning'>
									<CardTitle>isLight</CardTitle>
									<CardSubTitle>Alert</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-alert-props-islight--primary' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isLight: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Alert isLight>This is a alert!</Alert>
								<Alert color='secondary' isLight>
									This is a alert!
								</Alert>
								<Alert color='success' isLight>
									This is a alert!
								</Alert>
								<Alert color='info' isLight>
									This is a alert!
								</Alert>
								<Alert color='warning' isLight>
									This is a alert!
								</Alert>
								<Alert color='danger' isLight>
									This is a alert!
								</Alert>
								<Alert color='light' isLight>
									This is a alert!
								</Alert>
								<Alert color='dark' isLight className='mb-0'>
									This is a alert!
								</Alert>
							</CardBody>
						</Card>
					</div>

					{/* isOutline */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='BorderStyle'>
									<CardTitle>isOutline</CardTitle>
									<CardSubTitle>Alert</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-alert-props-isoutline--primary' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isOutline: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Alert isOutline>This is a alert!</Alert>
								<Alert color='secondary' isOutline>
									This is a alert!
								</Alert>
								<Alert color='success' isOutline>
									This is a alert!
								</Alert>
								<Alert color='info' isOutline>
									This is a alert!
								</Alert>
								<Alert color='warning' isOutline>
									This is a alert!
								</Alert>
								<Alert color='danger' isOutline>
									This is a alert!
								</Alert>
								<Alert color='light' isOutline>
									This is a alert!
								</Alert>
								<Alert color='dark' isOutline className='mb-0'>
									This is a alert!
								</Alert>
							</CardBody>
						</Card>
					</div>
					{/*	icon */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='FilterNone' iconColor='info'>
									<CardTitle>
										icon <small>With Icon</small>
									</CardTitle>
									<CardSubTitle>Alert</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-alert-props-icon--star' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>icon: PropTypes.string,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Alert color='warning' icon='Info'>
									This is a alert!
								</Alert>
								<Alert color='success' isLight icon='VerifiedUser'>
									This is a alert!
								</Alert>
								<Alert color='danger' isOutline icon='Report'>
									This is a alert!
								</Alert>
							</CardBody>
						</Card>
					</div>

					{/* shadow */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ContentCopy' iconColor='dark'>
									<CardTitle>shadow</CardTitle>
									<CardSubTitle>Alert</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-alert-props-shadow--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									shadow: PropTypes.oneOf([null, 'sm', 'md', 'lg', '3d']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Alert isLight shadow={null}>
									This is a alert!
								</Alert>
								<Alert isLight shadow='sm'>
									This is a alert!
								</Alert>
								<Alert isLight shadow='md'>
									This is a alert!
								</Alert>
								<Alert isLight shadow='lg'>
									This is a alert!
								</Alert>
								<Alert isLight shadow='3d'>
									This is a alert!
								</Alert>
							</CardBody>
						</Card>
					</div>
					{/* Additional */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Engineering' iconColor='danger'>
									<CardTitle>
										children
										<small>Additional content</small>
									</CardTitle>
									<CardSubTitle>AlertHeading, AlertLink</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-alert--advance' />
								</CardActions>
							</CardHeader>
							<CardBody>
								<Alert shadow='md'>
									<AlertHeading>Well Done!</AlertHeading>
									<p>
										Aww yeah, you successfully read this important alert
										message. This example text is{' '}
										<AlertLink to='../components/button'>going</AlertLink> to
										run a bit longer so that you can see how spacing within an
										alert works with this kind of content.
									</p>
								</Alert>
								<Alert color='secondary' shadow='md' isLight icon='Report'>
									<AlertHeading>Well Done!</AlertHeading>
									<p>
										Aww yeah, you successfully read this important alert
										message. This example text is{' '}
										<AlertLink to='../components/button'>going</AlertLink> to
										run a bit longer so that you can see how spacing within an
										alert works with this kind of content.
									</p>
								</Alert>
								<Alert
									color='success'
									shadow='md'
									isLight
									icon='Recommend'
									className='flex-nowrap'>
									<AlertHeading>Well Done!</AlertHeading>
									<p>
										Aww yeah, you successfully read this important alert
										message. This example text is{' '}
										<AlertLink to='../components/button'>going</AlertLink> to
										run a bit longer so that you can see how spacing within an
										alert works with this kind of content.
									</p>
								</Alert>
							</CardBody>
						</Card>
					</div>

					{/* isDismissible */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='CleaningServices' iconColor='warning'>
									<CardTitle>isDismissible</CardTitle>
									<CardSubTitle>Alert</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-alert-props-isdismissible--true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isDismissible: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Alert color='warning' icon='Info' isDismissible>
									This is a alert!
								</Alert>
								<Alert color='success' isLight icon='VerifiedUser' isDismissible>
									This is a alert!
								</Alert>
								<Alert color='danger' isOutline icon='Report' isDismissible>
									This is a alert!
								</Alert>
							</CardBody>
						</Card>
					</div>
					{/* borderWidth */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='BorderStyle' iconColor='primary'>
									<CardTitle>borderWidth</CardTitle>
									<CardSubTitle>Alert</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-alert-props-borderwidth--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									borderWidth: PropTypes.oneOf([0, 1, 2, 3, 4, 5])
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Alert isOutline borderWidth={0}>
									This is a alert! Border width 0
								</Alert>
								<Alert isOutline borderWidth={1}>
									This is a alert! Border width 1
								</Alert>
								<Alert isOutline borderWidth={2}>
									This is a alert! Border width2
								</Alert>
								<Alert isOutline borderWidth={3}>
									This is a alert! Border width3
								</Alert>
								<Alert isOutline borderWidth={4}>
									This is a alert! Border width4
								</Alert>
								<Alert isOutline borderWidth={5} className='mb-0'>
									This is a alert! Border width5
								</Alert>
							</CardBody>
						</Card>
					</div>

					{/* rounded */}
					<div className='col-lg-6'>
						<Card>
							<CardHeader>
								<CardLabel icon='RoundedCorner' iconColor='success'>
									<CardTitle>rounded</CardTitle>
									<CardSubTitle>Alert</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-alert-props-rounded--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									rounded: PropTypes.oneOf(['default', 0, 1, 2, 3, 'pill']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Alert color='success' isLight rounded='default'>
									This is a alert! Rounded default
								</Alert>
								<Alert color='success' isLight rounded={0}>
									This is a alert! Rounded 0
								</Alert>
								<Alert color='success' isLight rounded={1}>
									This is a alert! Rounded 1
								</Alert>
								<Alert color='success' isLight rounded={2}>
									This is a alert! Rounded 2
								</Alert>
								<Alert color='success' isLight rounded={3}>
									This is a alert! Rounded 3
								</Alert>
								<Alert color='success' isLight rounded='pill'>
									This is a alert! Rounded pill
								</Alert>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default AlertPage;
