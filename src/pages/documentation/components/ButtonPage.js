import React from 'react';
import { NavLink } from 'react-router-dom';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Card, {
	CardActions,
	CardBody,
	CardCodeView,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Button, { ButtonGroup } from '../../../components/bootstrap/Button';
import Page from '../../../layout/Page/Page';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import CommonHowToUse from '../../../components/common/CommonHowToUse';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import CommonStoryLink from '../../../components/common/CommonStoryLink';
import { componentsMenu } from '../../../menu';

const ButtonPage = () => {
	const _generalUsage = `
<Button
	className={ String }
	color={ String } // 'primary' || 'secondary' || 'success' || 'info' || 'warning' || 'danger' || 'light' || 'dark' || 'link'
	isOutline={ Boolean }
	isLink={ Boolean }
	isLight={ Boolean }
	isActive={ Boolean }
	isDisable={ Boolean }
	size={ String } // 'sm' || 'lg'
	rounded={ String || Number } // 'default' || 0 || 1 || 2 || 3 || 'bottom' || 'top' || 'circle' || 'end' || 'start' || 'pill'
	shadow={ String } // 'none' || 'sm' || 'default' || 'lg'
	hoverShadow={ String } // 'none' || 'sm' || 'default' || 'lg'
	tag={ String } // 'button' || 'a' || 'input' || 'link'
	type={ String } // 'button' || 'submit' || 'reset'
	to={ String }
	href={ String }
	target={ String } // '_blank' || '_self' || '_parent' || '_top'
	{...props}>
	...
</Button>`;

	const _roundedStory = [
		{ text: 'Default', path: '/docs/components-button-props-rounded--default' },
		{ text: 'Rounded 0', path: '/docs/components-button-props-rounded--zero' },
		{ text: 'Rounded 1', path: '/docs/components-button-props-rounded--one' },
		{ text: 'Rounded 2', path: '/docs/components-button-props-rounded--two' },
		{ text: 'Rounded 3', path: '/docs/components-button-props-rounded--three' },
		{ text: 'Bottom', path: '/docs/components-button-props-rounded--bottom' },
		{ text: 'Top', path: '/docs/components-button-props-rounded--top' },
		{ text: 'End', path: '/docs/components-button-props-rounded--end' },
		{ text: 'Start', path: '/docs/components-button-props-rounded--start' },
		{ text: 'Circle', path: '/docs/components-button-props-rounded--circle' },
		{ text: 'Pill', path: '/docs/components-button-props-rounded--pill' },
	];

	const _sizeStory = [
		{ text: 'Default', path: '/docs/components-button-props-size--default' },
		{ text: 'Small', path: '/docs/components-button-props-size--small' },
		{ text: 'Large', path: '/docs/components-button-props-size--large' },
	];

	const _isActiveStory = [
		{ text: 'Color Button', path: '/docs/components-button-props-isactive--color-button' },
		{ text: 'Outline Button', path: '/docs/components-button-props-isactive--outline-button' },
		{ text: 'Link Button', path: '/docs/components-button-props-isactive--link-button' },
		{ text: 'Light Button', path: '/docs/components-button-props-isactive--light-button' },
	];

	const _isDisableStory = [
		{ text: 'Color Button', path: '/docs/components-button-props-isdisable--color-button' },
		{ text: 'Outline Button', path: '/docs/components-button-props-isdisable--outline-button' },
		{ text: 'Link Button', path: '/docs/components-button-props-isdisable--link-button' },
		{ text: 'Light Button', path: '/docs/components-button-props-isdisable--light-button' },
	];

	const _shadowStory = [
		{ text: 'None', path: '/docs/components-button-props-shadow--none' },
		{ text: 'Small', path: '/docs/components-button-props-shadow--small' },
		{ text: 'Default', path: '/docs/components-button-props-shadow--default-or-true' },
		{ text: 'Large', path: '/docs/components-button-props-shadow--large' },
	];

	const _hoverShadowStory = [
		{ text: 'None', path: '/docs/components-button-props-hovershadow--none' },
		{ text: 'Small', path: '/docs/components-button-props-hovershadow--small' },
		{ text: 'Default', path: '/docs/components-button-props-hovershadow--default-or-true' },
		{ text: 'Large', path: '/docs/components-button-props-hovershadow--large' },
	];

	return (
		<PageWrapper title={componentsMenu.components.subMenu.button.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{
								title: componentsMenu.components.text,
								to: `/${componentsMenu.components.path}`,
							},
							{
								title: componentsMenu.components.subMenu.button.text,
								to: `/${componentsMenu.components.subMenu.button.path}`,
							},
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/docs/components-button--default' />
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
									<CardTitle>
										color <small>High Emphasis</small>
									</CardTitle>
									<CardSubTitle>Button</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-button-props-color--primary' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									color: PropTypes.oneOf([ null, 'primary', 'secondary',
									'success', 'info', 'warning', 'danger', 'light', 'dark', 'link',
									]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									<div className='col-auto'>
										<Button>Default</Button>
									</div>
									<div className='col-auto'>
										<Button color='primary'>Primary</Button>
									</div>
									<div className='col-auto'>
										<Button color='secondary'>Secondary</Button>
									</div>
									<div className='col-auto'>
										<Button color='success'>Success</Button>
									</div>
									<div className='col-auto'>
										<Button color='info'>Info</Button>
									</div>
									<div className='col-auto'>
										<Button color='warning'>Warning</Button>
									</div>
									<div className='col-auto'>
										<Button color='danger'>Danger</Button>
									</div>
									<div className='col-auto'>
										<Button color='light'>Light</Button>
									</div>
									<div className='col-auto'>
										<Button color='dark'>Dark</Button>
									</div>
									<div className='col-auto'>
										<Button color='link'>Link</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					{/* isOutline */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='BorderStyle'>
									<CardTitle>
										isOutline <small>Medium Emphasis</small>
									</CardTitle>
									<CardSubTitle>Button</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-button-props-isoutline--primary' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isOutline: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									<div className='col-auto'>
										<Button color='primary' isOutline>
											Primary
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='secondary' isOutline>
											Secondary
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='success' isOutline>
											Success
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='info' isOutline>
											Info
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='warning' isOutline>
											Warning
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='danger' isOutline>
											Danger
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='light' isOutline>
											Light
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='dark' isOutline>
											Dark
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					{/* isLink */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='InsertLink' iconColor='info'>
									<CardTitle>
										isLink <small>Low Emphasis</small>
									</CardTitle>
									<CardSubTitle>Button</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-button-props-islink--primary' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isLink: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									<div className='col-auto'>
										<Button color='primary' isLink>
											Primary
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='secondary' isLink>
											Secondary
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='success' isLink>
											Success
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='info' isLink>
											Info
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='warning' isLink>
											Warning
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='danger' isLink>
											Danger
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='light' isLink>
											Light
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='dark' isLink>
											Dark
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					{/* isLight */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Lightbulb' iconColor='warning'>
									<CardTitle>isLight</CardTitle>
									<CardSubTitle>Button</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-button-props-islight--primary' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isLight: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									<div className='col-auto'>
										<Button color='primary' isLight>
											Primary
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='secondary' isLight>
											Secondary
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='success' isLight>
											Success
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='info' isLight>
											Info
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='warning' isLight>
											Warning
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='danger' isLight>
											Danger
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='light' isLight>
											Light
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='dark' isLight>
											Dark
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					{/* rounded */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='RoundedCorner' iconColor='success'>
									<CardTitle>rounded</CardTitle>
									<CardSubTitle>Button</CardSubTitle>
								</CardLabel>
								<CardActions>
									<ButtonGroup>
										<Dropdown>
											<DropdownToggle>
												<Button
													color='storybook'
													icon='CustomStorybook'
													isLight>
													Storybook
												</Button>
											</DropdownToggle>
											<DropdownMenu isAlignmentEnd>
												{_roundedStory.map((i) => (
													<DropdownItem key={i.text}>
														<CommonStoryLink to={i.path}>
															{i.text}
														</CommonStoryLink>
													</DropdownItem>
												))}
											</DropdownMenu>
										</Dropdown>
									</ButtonGroup>
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									rounded: PropTypes.oneOf([ 'default', 0, 1, 2, 3, 'bottom',
									'top', 'circle', 'end', 'start', 'pill', ]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									<div className='col-auto'>
										<Button color='primary' isLight rounded='default'>
											Default
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='primary' isLight rounded={0}>
											Rounded 0
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='primary' isLight rounded={1}>
											Rounded 1
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='primary' isLight rounded={2}>
											Rounded 2
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='primary' isLight rounded={3}>
											Rounded 3
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='primary' isLight rounded='bottom'>
											Bottom
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='primary' isLight rounded='top'>
											Top
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='primary' isLight rounded='circle'>
											Circle
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='primary' isLight rounded='end'>
											End
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='primary' isLight rounded='start'>
											Start
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='primary' isLight rounded='pill'>
											Pill
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					{/* size */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Straighten'>
									<CardTitle>size</CardTitle>
									<CardSubTitle>Button</CardSubTitle>
								</CardLabel>
								<CardActions>
									<ButtonGroup>
										<Dropdown>
											<DropdownToggle>
												<Button
													color='storybook'
													icon='CustomStorybook'
													isLight>
													Storybook
												</Button>
											</DropdownToggle>
											<DropdownMenu isAlignmentEnd>
												{_sizeStory.map((i) => (
													<DropdownItem key={i.text}>
														<CommonStoryLink to={i.path}>
															{i.text}
														</CommonStoryLink>
													</DropdownItem>
												))}
											</DropdownMenu>
										</Dropdown>
									</ButtonGroup>
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									size: PropTypes.oneOf(['sm', null, 'lg']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-auto'>
										<div className='row g-3 align-items-center'>
											<div className='col-auto'>
												<Button color='success' isLight size='lg'>
													Large
												</Button>
											</div>
											<div className='col-auto'>
												<Button color='success' isLight>
													Default
												</Button>
											</div>
											<div className='col-auto'>
												<Button color='success' isLight size='sm'>
													Small
												</Button>
											</div>
										</div>
									</div>
									<div className='col-auto'>
										<div className='row g-3 align-items-center'>
											<div className='col-auto'>
												<Button
													color='danger'
													isLight
													size='sm'
													icon='Archive'>
													Small
												</Button>
											</div>
											<div className='col-auto'>
												<Button color='danger' isLight icon='Archive'>
													Default
												</Button>
											</div>
											<div className='col-auto'>
												<Button
													color='danger'
													isLight
													size='lg'
													icon='Archive'>
													Large
												</Button>
											</div>
										</div>
									</div>
									<div className='col-auto'>
										<div className='row g-3 align-items-center'>
											<div className='col-auto'>
												<Button
													color='info'
													size='lg'
													icon='Archive'
													isLight
												/>
											</div>
											<div className='col-auto'>
												<Button color='info' icon='Archive' isLight />
											</div>
											<div className='col-auto'>
												<Button
													color='info'
													size='sm'
													icon='Archive'
													isLight
												/>
											</div>
										</div>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					{/* isActive */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Bolt' iconColor='warning'>
									<CardTitle>isActive</CardTitle>
									<CardSubTitle>Button</CardSubTitle>
								</CardLabel>
								<CardActions>
									<ButtonGroup>
										<Dropdown>
											<DropdownToggle>
												<Button
													color='storybook'
													icon='CustomStorybook'
													isLight>
													Storybook
												</Button>
											</DropdownToggle>
											<DropdownMenu isAlignmentEnd>
												{_isActiveStory.map((i) => (
													<DropdownItem key={i.text}>
														<CommonStoryLink to={i.path}>
															{i.text}
														</CommonStoryLink>
													</DropdownItem>
												))}
											</DropdownMenu>
										</Dropdown>
									</ButtonGroup>
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isActive: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									<div className='col-auto'>
										<Button color='primary' isActive>
											Color Button
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='primary' isOutline isActive>
											Outline Button
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='primary' isLink isActive>
											Link Button
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='primary' isLight isActive>
											Light Button
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					{/* isDisable */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Report' iconColor='danger'>
									<CardTitle>isDisable</CardTitle>
									<CardSubTitle>Button</CardSubTitle>
								</CardLabel>
								<CardActions>
									<ButtonGroup>
										<Dropdown>
											<DropdownToggle>
												<Button
													color='storybook'
													icon='CustomStorybook'
													isLight>
													Storybook
												</Button>
											</DropdownToggle>
											<DropdownMenu isAlignmentEnd>
												{_isDisableStory.map((i) => (
													<DropdownItem key={i.text}>
														<CommonStoryLink to={i.path}>
															{i.text}
														</CommonStoryLink>
													</DropdownItem>
												))}
											</DropdownMenu>
										</Dropdown>
									</ButtonGroup>
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isDisable: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									<div className='col-auto'>
										<Button color='primary' isDisable>
											Color Button
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='primary' isOutline isDisable>
											Outline Button
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='primary' isLink isDisable>
											Link Button
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='primary' isLight isDisable>
											Light Button
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					{/* shadow */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ContentCopy' iconColor='dark'>
									<CardTitle>shadow</CardTitle>
									<CardSubTitle>Button</CardSubTitle>
								</CardLabel>
								<CardActions>
									<ButtonGroup>
										<Dropdown>
											<DropdownToggle>
												<Button
													color='storybook'
													icon='CustomStorybook'
													isLight>
													Storybook
												</Button>
											</DropdownToggle>
											<DropdownMenu isAlignmentEnd>
												{_shadowStory.map((i) => (
													<DropdownItem key={i.text}>
														<CommonStoryLink to={i.path}>
															{i.text}
														</CommonStoryLink>
													</DropdownItem>
												))}
											</DropdownMenu>
										</Dropdown>
									</ButtonGroup>
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									shadow: PropTypes.oneOf([null, 'none', 'sm', 'default', 'lg']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									<div className='col-auto'>
										<Button color='dark' isLight shadow='none'>
											None
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='dark' isLight shadow='sm'>
											Small
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='dark' isLight shadow='default'>
											Default
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='dark' isLight shadow='lg'>
											Large
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					{/* hoverShadow */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='FilterNone' iconColor='info'>
									<CardTitle>hoverShadow</CardTitle>
									<CardSubTitle>Button</CardSubTitle>
								</CardLabel>
								<CardActions>
									<ButtonGroup>
										<Dropdown>
											<DropdownToggle>
												<Button
													color='storybook'
													icon='CustomStorybook'
													isLight>
													Storybook
												</Button>
											</DropdownToggle>
											<DropdownMenu isAlignmentEnd>
												{_hoverShadowStory.map((i) => (
													<DropdownItem key={i.text}>
														<CommonStoryLink to={i.path}>
															{i.text}
														</CommonStoryLink>
													</DropdownItem>
												))}
											</DropdownMenu>
										</Dropdown>
									</ButtonGroup>
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									hoverShadow: PropTypes.oneOf([null, 'none', 'sm', 'default',
									'lg']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									<div className='col-auto'>
										<Button color='info' isLight shadow='none' hoverShadow='lg'>
											Hover large
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='info' isLight shadow='sm' hoverShadow='lg'>
											Default sm, hover lg
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='info'
											isLight
											shadow='default'
											hoverShadow='none'>
											Default, hover none
										</Button>
									</div>
									<div className='col-auto'>
										<Button color='info' isLight shadow='lg' hoverShadow='none'>
											Default lg, hover none
										</Button>
									</div>
								</div>
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
									<CardSubTitle>Button</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-button-props-icon-with-icon-examples--color-button' />
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
								<div className='row g-3 mb-3'>
									<div className='col-auto'>
										<Button
											color='primary'
											icon='Star'
											shadow='none'
											hoverShadow='lg'>
											Primary
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='secondary'
											icon='Group'
											shadow='none'
											hoverShadow='lg'>
											Secondary
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='success'
											icon='VerifiedUser'
											shadow='none'
											hoverShadow='lg'>
											Success
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='info'
											icon='Info'
											shadow='none'
											hoverShadow='lg'>
											Info
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='warning'
											icon='Warning'
											shadow='none'
											hoverShadow='lg'>
											Warning
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='danger'
											icon='Bolt'
											shadow='none'
											hoverShadow='lg'>
											Danger
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='light'
											icon='Light'
											shadow='none'
											hoverShadow='lg'>
											Light
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='dark'
											icon='NightsStay'
											shadow='none'
											hoverShadow='lg'>
											Dark
										</Button>
									</div>
								</div>
								<div className='row g-3 mb-3'>
									<div className='col-auto'>
										<Button
											color='primary'
											isOutline
											icon='Star'
											shadow='none'
											hoverShadow='lg'>
											Primary
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='secondary'
											isOutline
											icon='Group'
											shadow='none'
											hoverShadow='lg'>
											Secondary
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='success'
											isOutline
											icon='VerifiedUser'
											shadow='none'
											hoverShadow='lg'>
											Success
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='info'
											isOutline
											icon='Info'
											shadow='none'
											hoverShadow='lg'>
											Info
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='warning'
											isOutline
											icon='Warning'
											shadow='none'
											hoverShadow='lg'>
											Warning
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='danger'
											isOutline
											icon='Bolt'
											shadow='none'
											hoverShadow='lg'>
											Danger
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='light'
											isOutline
											icon='Light'
											shadow='none'
											hoverShadow='lg'>
											Light
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='dark'
											isOutline
											icon='NightsStay'
											shadow='none'
											hoverShadow='lg'>
											Dark
										</Button>
									</div>
								</div>
								<div className='row g-3 mb-3'>
									<div className='col-auto'>
										<Button
											color='primary'
											isLink
											icon='Star'
											shadow='none'
											hoverShadow='lg'>
											Primary
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='secondary'
											isLink
											icon='Group'
											shadow='none'
											hoverShadow='lg'>
											Secondary
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='success'
											isLink
											icon='VerifiedUser'
											shadow='none'
											hoverShadow='lg'>
											Success
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='info'
											isLink
											icon='Info'
											shadow='none'
											hoverShadow='lg'>
											Info
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='warning'
											isLink
											icon='Warning'
											shadow='none'
											hoverShadow='lg'>
											Warning
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='danger'
											isLink
											icon='Bolt'
											shadow='none'
											hoverShadow='lg'>
											Danger
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='light'
											isLink
											icon='Light'
											shadow='none'
											hoverShadow='lg'>
											Light
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='dark'
											isLink
											icon='NightsStay'
											shadow='none'
											hoverShadow='lg'>
											Dark
										</Button>
									</div>
								</div>
								<div className='row g-3 mb-3'>
									<div className='col-auto'>
										<Button
											color='primary'
											isLight
											icon='Star'
											shadow='none'
											hoverShadow='lg'>
											Primary
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='secondary'
											isLight
											icon='Group'
											shadow='none'
											hoverShadow='lg'>
											Secondary
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='success'
											isLight
											icon='VerifiedUser'
											shadow='none'
											hoverShadow='lg'>
											Success
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='info'
											isLight
											icon='Info'
											shadow='none'
											hoverShadow='lg'>
											Info
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='warning'
											isLight
											icon='Warning'
											shadow='none'
											hoverShadow='lg'>
											Warning
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='danger'
											isLight
											icon='Bolt'
											shadow='none'
											hoverShadow='lg'>
											Danger
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='light'
											isLight
											icon='Light'
											shadow='none'
											hoverShadow='lg'>
											Light
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='dark'
											isLight
											icon='NightsStay'
											shadow='none'
											hoverShadow='lg'>
											Dark
										</Button>
									</div>
								</div>
								<Card shadow='none' className='border-1 mb-0'>
									<CardHeader>
										<CardLabel>
											<CardTitle tag='h6'>Example Sizes</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<div className='row g-4'>
											<div className='col-12'>
												<div className='row g-3 align-items-center'>
													<div className='col-auto'>
														<Button
															color='primary'
															size='sm'
															icon='Star'
															shadow='none'
															hoverShadow='lg'>
															Primary Small
														</Button>
													</div>
													<div className='col-auto'>
														<Button
															color='primary'
															size='lg'
															icon='Star'
															shadow='none'
															hoverShadow='lg'>
															Primary Large
														</Button>
													</div>
												</div>
											</div>
											<div className='col-12'>
												<div className='row g-3 align-items-center'>
													<div className='col-auto'>
														<Button
															color='secondary'
															isOutline
															size='sm'
															icon='Star'
															shadow='none'
															hoverShadow='lg'>
															Secondary Small
														</Button>
													</div>
													<div className='col-auto'>
														<Button
															color='secondary'
															isOutline
															size='lg'
															icon='Star'
															shadow='none'
															hoverShadow='lg'>
															Secondary Large
														</Button>
													</div>
												</div>
											</div>
											<div className='col-12'>
												<div className='row g-3 align-items-center'>
													<div className='col-auto'>
														<Button
															color='success'
															isLink
															size='sm'
															icon='Star'
															shadow='none'
															hoverShadow='lg'>
															Success Small
														</Button>
													</div>
													<div className='col-auto'>
														<Button
															color='success'
															isLink
															size='lg'
															icon='Star'
															shadow='none'
															hoverShadow='lg'>
															Success Large
														</Button>
													</div>
												</div>
											</div>
											<div className='col-12'>
												<div className='row g-3 align-items-center'>
													<div className='col-auto'>
														<Button
															color='info'
															isLight
															size='sm'
															icon='Star'
															shadow='none'
															hoverShadow='lg'>
															Info Small
														</Button>
													</div>
													<div className='col-auto'>
														<Button
															color='info'
															isLight
															size='lg'
															icon='Star'
															shadow='none'
															hoverShadow='lg'>
															Info Large
														</Button>
													</div>
												</div>
											</div>
										</div>
									</CardBody>
								</Card>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='FilterNone' iconColor='info'>
									<CardTitle>
										icon <small>Only Icon</small>
									</CardTitle>
									<CardSubTitle>Button</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-button-props-icon-only-icon-examples--color-button' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>icon: PropTypes.string,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3 mb-3'>
									<div className='col-auto'>
										<Button
											color='primary'
											icon='Star'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='secondary'
											icon='Group'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='success'
											icon='VerifiedUser'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='info'
											icon='Info'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='warning'
											icon='Warning'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='danger'
											icon='Bolt'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='light'
											icon='Light'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='dark'
											icon='NightsStay'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
								</div>
								<div className='row g-3 mb-3'>
									<div className='col-auto'>
										<Button
											color='primary'
											isOutline
											icon='Star'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='secondary'
											isOutline
											icon='Group'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='success'
											isOutline
											icon='VerifiedUser'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='info'
											isOutline
											icon='Info'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='warning'
											isOutline
											icon='Warning'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='danger'
											isOutline
											icon='Bolt'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='light'
											isOutline
											icon='Light'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='dark'
											isOutline
											icon='NightsStay'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
								</div>
								<div className='row g-3 mb-3'>
									<div className='col-auto'>
										<Button
											color='primary'
											isLink
											icon='Star'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='secondary'
											isLink
											icon='Group'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='success'
											isLink
											icon='VerifiedUser'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='info'
											isLink
											icon='Info'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='warning'
											isLink
											icon='Warning'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='danger'
											isLink
											icon='Bolt'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='light'
											isLink
											icon='Light'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='dark'
											isLink
											icon='NightsStay'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
								</div>
								<div className='row g-3 mb-3'>
									<div className='col-auto'>
										<Button
											color='primary'
											isLight
											icon='Star'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='secondary'
											isLight
											icon='Group'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='success'
											isLight
											icon='VerifiedUser'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='info'
											isLight
											icon='Info'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='warning'
											isLight
											icon='Warning'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='danger'
											isLight
											icon='Bolt'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='light'
											isLight
											icon='Light'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
									<div className='col-auto'>
										<Button
											color='dark'
											isLight
											icon='NightsStay'
											shadow='none'
											hoverShadow='lg'
										/>
									</div>
								</div>
								<Card shadow='none' className='border-1 mb-0'>
									<CardHeader>
										<CardLabel>
											<CardTitle tag='h6'>Example Sizes</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<div className='row g-3'>
											<div className='col-12'>
												<Button
													className='me-3'
													color='primary'
													size='sm'
													icon='Star'
													shadow='none'
													hoverShadow='lg'
												/>
												<Button
													className='me-3'
													color='primary'
													icon='Star'
													shadow='none'
													hoverShadow='lg'
												/>
												<Button
													color='primary'
													size='lg'
													icon='Star'
													shadow='none'
													hoverShadow='lg'
												/>
											</div>
											<div className='col-12'>
												<Button
													className='me-3'
													color='secondary'
													isOutline
													size='sm'
													icon='Star'
													shadow='none'
													hoverShadow='lg'
												/>
												<Button
													className='me-3'
													color='secondary'
													isOutline
													icon='Star'
													shadow='none'
													hoverShadow='lg'
												/>
												<Button
													color='secondary'
													isOutline
													size='lg'
													icon='Star'
													shadow='none'
													hoverShadow='lg'
												/>
											</div>
											<div className='col-12'>
												<Button
													className='me-3'
													color='success'
													isLink
													size='sm'
													icon='Star'
													shadow='none'
													hoverShadow='lg'
												/>
												<Button
													className='me-3'
													color='success'
													isLink
													icon='Star'
													shadow='none'
													hoverShadow='lg'
												/>
												<Button
													color='success'
													isLink
													size='lg'
													icon='Star'
													shadow='none'
													hoverShadow='lg'
												/>
											</div>
											<div className='col-12'>
												<Button
													className='me-3'
													color='info'
													isLight
													size='sm'
													icon='Star'
													shadow='none'
													hoverShadow='lg'
												/>
												<Button
													className='me-3'
													color='info'
													isLight
													icon='Star'
													shadow='none'
													hoverShadow='lg'
												/>
												<Button
													color='info'
													isLight
													size='lg'
													icon='Star'
													shadow='none'
													hoverShadow='lg'
												/>
											</div>
										</div>
									</CardBody>
								</Card>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ButtonPage;
