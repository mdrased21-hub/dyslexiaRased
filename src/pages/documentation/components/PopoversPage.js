import React from 'react';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Popovers from '../../../components/bootstrap/Popovers';
import Button, { ButtonGroup } from '../../../components/bootstrap/Button';
import Card, {
	CardActions,
	CardBody,
	CardCodeView,
	CardFooter,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Icon from '../../../components/icon/Icon';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import CommonHowToUse from '../../../components/common/CommonHowToUse';
import CommonDesc from '../../../components/common/CommonDesc';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import CommonStoryLink from '../../../components/common/CommonStoryLink';
import { componentsMenu } from '../../../menu';

const PopoversPage = () => {
	const _generalUsage = `
<Popovers
	className={ String }
	title={ String }
	desc={ String || Object}
	placement={ String } // 'auto' || 'auto-start' || 'auto-end' || 'top' || 'top-start' || 'top-end' || 'bottom' || 'bottom-start' || 'bottom-end' || 'right' || 'right-start' || 'right-end' || 'left' || 'left-start' || 'left-end'
	flip={ Array } // ['auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end']
	trigger={ String } // 'click' || 'hover'
	delay={ Number }
	isDisplayInline={ Boolean }
	modifiers={ Object } // [Popper.js](https://popper.js.org/docs/v2/modifiers/)
	{...props}>
	... { // String, HTML tag or React Component }
</Popovers>`;

	const _placementStory = [
		{ text: 'Default', path: '/story/components-popovers-props--placement' },
		{ text: 'auto', path: '/story/components-popovers-props--placement&args=placement:auto' },
		{
			text: 'auto-start',
			path: '/story/components-popovers-props--placement&args=placement:auto-start',
		},
		{
			text: 'auto-end',
			path: '/story/components-popovers-props--placement&args=placement:auto-end',
		},
		{ text: 'top', path: '/story/components-popovers-props--placement&args=placement:top' },
		{
			text: 'top-start',
			path: '/story/components-popovers-props--placement&args=placement:top-start',
		},
		{
			text: 'top-end',
			path: '/story/components-popovers-props--placement&args=placement:top-end',
		},
		{
			text: 'bottom',
			path: '/story/components-popovers-props--placement&args=placement:bottom',
		},
		{
			text: 'bottom-start',
			path: '/story/components-popovers-props--placement&args=placement:bottom-start',
		},
		{
			text: 'bottom-end',
			path: '/story/components-popovers-props--placement&args=placement:bottom-end',
		},
		{
			text: 'right-start',
			path: '/story/components-popovers-props--placement&args=placement:right-start',
		},
		{
			text: 'right-end',
			path: '/story/components-popovers-props--placement&args=placement:right-end',
		},
		{ text: 'left', path: '/story/components-popovers-props--placement&args=placement:left' },
		{
			text: 'left-start',
			path: '/story/components-popovers-props--placement&args=placement:left-start',
		},
		{
			text: 'left-end',
			path: '/story/components-popovers-props--placement&args=placement:left-end',
		},
	];

	return (
		<PageWrapper title={componentsMenu.components.subMenu.popovers.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{
								title: componentsMenu.components.text,
								to: `/${componentsMenu.components.path}`,
							},
							{
								title: componentsMenu.components.subMenu.popovers.text,
								to: `/${componentsMenu.components.subMenu.popovers.path}`,
							},
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/docs/components-popovers--default' />
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

					{/* title */}
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='FormatSize' iconColor='success'>
									<CardTitle>title</CardTitle>
									<CardSubTitle>Popovers</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/docs/components-popovers--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>title: PropTypes.string,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4 d-flex align-items-center'>
									<div className='col-auto'>
										<Popovers desc='This is a title' trigger='hover'>
											Bring the mouse to see!
										</Popovers>
									</div>
									<div className='col-auto'>
										<Popovers desc='This is a title' trigger='hover'>
											<Button color='primary' isLight>
												Bring the mouse to see!
											</Button>
										</Popovers>
									</div>
									<div className='col-auto'>
										<Popovers desc='This is a title' trigger='hover'>
											<Icon
												icon='Assistant'
												className='h1 mb-0 text-success'
											/>
										</Popovers>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					{/* desc */}
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='FormatAlignLeft' iconColor='info'>
									<CardTitle>desc</CardTitle>
									<CardSubTitle>Popovers</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/docs/components-popovers--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									desc: PropTypes.oneOfType([PropTypes.string,
									PropTypes.object]).isRequired,
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-lg-6'>
										<Card className='mb-0' stretch>
											<CardHeader>
												<CardLabel>
													<CardTitle>
														desc <small>string</small>
													</CardTitle>
												</CardLabel>
											</CardHeader>
											<CardBody>
												<Popovers
													desc='This is a description'
													trigger='hover'>
													Bring the mouse to see!
												</Popovers>
											</CardBody>
											<CardFooter>
												<CommonDesc>
													<code>desc='This is a description'</code>
												</CommonDesc>
											</CardFooter>
										</Card>
									</div>
									<div className='col-lg-6'>
										<Card className='mb-0' stretch>
											<CardHeader>
												<CardLabel>
													<CardTitle>
														desc <small>HTML</small>
													</CardTitle>
												</CardLabel>
											</CardHeader>
											<CardBody>
												<Popovers
													desc={
														<>
															This is a <b>description.</b>
														</>
													}
													trigger='hover'>
													Bring the mouse to see!
												</Popovers>
											</CardBody>
											<CardFooter>
												<CommonDesc>
													<code>
														{
															'desc={<>This is a <b>description.</b></>}'
														}
													</code>
												</CommonDesc>
											</CardFooter>
										</Card>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					{/* placement */}
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ControlCamera' iconColor='warning'>
									<CardTitle>placement</CardTitle>
									<CardSubTitle>Popovers</CardSubTitle>
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
												{_placementStory.map((i) => (
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
									placement: PropTypes.oneOf([ 'auto', 'auto-start', 'auto-end',
									'top', 'top-start', 'top-end', 'bottom', 'bottom-start',
									'bottom-end', 'right', 'right-start', 'right-end', 'left',
									'left-start', 'left-end', ]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4 mb-4 d-flex align-items-stretch'>
									<div className='col-md'>
										<Popovers
											title='This is a title'
											desc='This is a description'
											placement='auto'>
											<Button
												color='primary'
												isLight
												icon='PublishedWithChanges'
												className='w-100 h-100'>
												Click me! - Auto
											</Button>
										</Popovers>
									</div>
									<div className='col-md'>
										<Popovers
											title='This is a title'
											desc='This is a description'
											placement='auto-start'>
											<Button
												color='primary'
												isLight
												icon='PublishedWithChanges'
												className='w-100 h-100'>
												Click me! - Auto-start
											</Button>
										</Popovers>
									</div>
									<div className='col-md'>
										<Popovers
											title='This is a title'
											desc='This is a description'
											placement='auto-end'>
											<Button
												color='primary'
												isLight
												icon='PublishedWithChanges'
												className='w-100 h-100'>
												Click me! - Auto-end
											</Button>
										</Popovers>
									</div>
								</div>
								<div className='row g-4 mb-4 d-flex align-items-stretch'>
									<div className='col-md'>
										<Popovers
											title='This is a title'
											desc='This is a description'
											placement='top'>
											<Button
												color='secondary'
												isLight
												icon='North'
												className='w-100 h-100'>
												Click me! - Top
											</Button>
										</Popovers>
									</div>
									<div className='col-md'>
										<Popovers
											title='This is a title'
											desc='This is a description'
											placement='top-start'>
											<Button
												color='secondary'
												isLight
												icon='NorthWest'
												className='w-100 h-100'>
												Click me! - Top-start
											</Button>
										</Popovers>
									</div>
									<div className='col-md'>
										<Popovers
											title='This is a title'
											desc='This is a description'
											placement='top-end'>
											<Button
												color='secondary'
												isLight
												icon='NorthEast'
												className='w-100 h-100'>
												Click me! - Top-end
											</Button>
										</Popovers>
									</div>
								</div>
								<div className='row g-4 mb-4 d-flex align-items-stretch'>
									<div className='col-md'>
										<Popovers
											title='This is a title'
											desc='This is a description'
											placement='bottom'>
											<Button
												color='success'
												isLight
												icon='South'
												className='w-100 h-100'>
												Click me! - Bottom
											</Button>
										</Popovers>
									</div>
									<div className='col-md'>
										<Popovers
											title='This is a title'
											desc='This is a description'
											placement='bottom-start'>
											<Button
												color='success'
												isLight
												icon='SouthWest'
												className='w-100 h-100'>
												Click me! - Bottom-start
											</Button>
										</Popovers>
									</div>
									<div className='col-md'>
										<Popovers
											title='This is a title'
											desc='This is a description'
											placement='bottom-end'>
											<Button
												color='success'
												isLight
												icon='SouthEast'
												className='w-100 h-100'>
												Click me! - Bottom-end
											</Button>
										</Popovers>
									</div>
								</div>
								<div className='row g-4 mb-4 d-flex align-items-stretch'>
									<div className='col-md'>
										<Popovers
											title='This is a title'
											desc='This is a description'
											placement='right'>
											<Button
												color='info'
												isLight
												icon='East'
												className='w-100 h-100'>
												Click me! - Right
											</Button>
										</Popovers>
									</div>
									<div className='col-md'>
										<Popovers
											title='This is a title'
											desc='This is a description'
											placement='right-start'>
											<Button
												color='info'
												isLight
												icon='NorthEast'
												className='w-100 h-100'>
												Click me! - Right-start
											</Button>
										</Popovers>
									</div>
									<div className='col-md'>
										<Popovers
											title='This is a title'
											desc='This is a description'
											placement='right-end'>
											<Button
												color='info'
												isLight
												icon='SouthEast'
												className='w-100 h-100'>
												Click me! - Right-end
											</Button>
										</Popovers>
									</div>
								</div>
								<div className='row g-4 d-flex align-items-stretch'>
									<div className='col-md'>
										<Popovers
											title='This is a title'
											desc='This is a description'
											placement='left'>
											<Button
												color='danger'
												isLight
												icon='West'
												className='w-100 h-100'>
												Click me! - Left
											</Button>
										</Popovers>
									</div>
									<div className='col-md'>
										<Popovers
											title='This is a title'
											desc='This is a description'
											placement='left-start'>
											<Button
												color='danger'
												isLight
												icon='NorthWest'
												className='w-100 h-100'>
												Click me! - Left-start
											</Button>
										</Popovers>
									</div>
									<div className='col-md'>
										<Popovers
											title='This is a title'
											desc='This is a description'
											placement='left-end'>
											<Button
												color='danger'
												isLight
												icon='SouthWest'
												className='w-100 h-100'>
												Click me! - Left-end
											</Button>
										</Popovers>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					{/* flip */}
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='PublishedWithChanges' iconColor='danger'>
									<CardTitle>flip</CardTitle>
									<CardSubTitle>Popovers</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-popovers-props--flip' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									flip: PropTypes.arrayOf( PropTypes.oneOf([ 'auto', 'auto-start',
									'auto-end', 'top', 'top-start', 'top-end', 'bottom',
									'bottom-start', 'bottom-end', 'right', 'right-start',
									'right-end', 'left', 'left-start', 'left-end', ]), ),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Popovers
									title='This is a title'
									desc='This is a description'
									flip={['top', 'bottom']}>
									<Button
										color='primary'
										isLight
										icon='DataExploration'
										className='position-absolute'>
										Click me! - Top
									</Button>
								</Popovers>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									<p>
										If the popper has placement set to bottom, but there isn't
										enough space to position the popper in that direction, by
										default, it will change the popper placement to top. As soon
										as enough space is detected, the placement will be reverted
										to the originally defined (or preferred) one.
									</p>
									<p>
										You can also define fallback placements by providing a list
										of placements to try. When no space is available on the
										preferred placement, the modifier will test the ones
										provided in the list, and use the first useful one.
									</p>{' '}
									If you want detailed information,
									<a
										href='https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements'
										rel='noreferrer'
										target='_blank'>
										Popper.js
									</a>
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>

					{/* trigger */}
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Bolt' iconColor='warning'>
									<CardTitle>trigger</CardTitle>
									<CardSubTitle>Popovers</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-popovers-props--trigger' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									trigger: PropTypes.oneOf(['click', 'hover']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4 d-flex align-items-center'>
									<div className='col-auto'>
										<Popovers
											title='Maecenas vel bibendum purus'
											desc='Fusce viverra risus ante, vitae sagittis mauris vestibulum nec.'
											trigger='hover'>
											Bring the mouse to see!
										</Popovers>
									</div>
									<div className='col-auto'>
										<Popovers
											title='Nulla facilisi'
											desc='Vivamus tristique egestas neque eu elementum.'
											trigger='click'>
											Click the mouse to see!
										</Popovers>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					{/* delay */}
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Bolt' iconColor='primary'>
									<CardTitle>delay</CardTitle>
									<CardSubTitle>Popovers</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-popovers-props--delay' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									{/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
									<div>// miliseconds</div>
									delay: PropTypes.number,
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4 d-flex align-items-center'>
									<div className='col-auto'>
										<Popovers
											title='Maecenas vel bibendum purus'
											desc='Fusce viverra risus ante, vitae sagittis mauris vestibulum nec.'
											trigger='hover'
											delay={1000}>
											Bring the mouse to see! (Turns off after 1 second)
										</Popovers>
									</div>
								</div>
							</CardBody>
							<CardFooter>
								<CommonDesc>Only works with trigger="hover"</CommonDesc>
							</CardFooter>
						</Card>
					</div>

					{/* modifiers */}
					<div className='col'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Extension' iconColor='danger'>
									<CardTitle>modifiers</CardTitle>
									<CardSubTitle>Popovers</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-popovers-props--modifiers' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>modifiers: PropTypes.object,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<p>
									Popper is built using an extensible core, which provides the
									foundation used to deliver all the functionalities offered by
									the library.
								</p>
								<p>
									All the useful functionalities provided by the library are
									implemented as Popper modifiers. They are plugins, or
									middlewares, that can hook into the lifecycle of Popper, and add
									additional logic to the positioning operations provided by
									default by Popper. They effectively "modify" the popper state in
									some fashion, adding functionality, hence the term "modifiers".
								</p>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									If you want detailed information,
									<a
										href='https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements'
										rel='noreferrer'
										target='_blank'>
										Popper.js
									</a>
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default PopoversPage;
