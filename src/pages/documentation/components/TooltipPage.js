import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import { componentsMenu } from '../../../menu';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import Page from '../../../layout/Page/Page';
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
import Button from '../../../components/bootstrap/Button';
import Tooltips from '../../../components/bootstrap/Tooltips';
import CommonHowToUse from '../../../components/common/CommonHowToUse';
import CommonDesc from '../../../components/common/CommonDesc';

const TooltipPage = () => {
	const _generalUsage = `
<Tooltips
	className={ String }
	title={ String || Node }
	placement={ String } // 'auto' || 'top' || 'bottom' || 'right' || 'left'
	flip={ Array } // ['auto' || 'top' || 'bottom' || 'right' || 'left']
	delay={ Number }
	isDisplayInline={ Boolean }
	isDisableElements={ Boolean }
	modifiers={ Object } // [Popper.js](https://popper.js.org/docs/v2/modifiers/)
	{...props}>
	... { // String, HTML tag or React Component }
</Tooltips>`;
	return (
		<PageWrapper title={componentsMenu.components.subMenu.tooltip.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{
								title: componentsMenu.components.text,
								to: `/${componentsMenu.components.path}`,
							},
							{
								title: componentsMenu.components.subMenu.tooltip.text,
								to: `/${componentsMenu.components.subMenu.tooltip.path}`,
							},
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/docs/components-tooltips--default' />
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

					{/* placement */}
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ControlCamera' iconColor='warning'>
									<CardTitle>placement</CardTitle>
									<CardSubTitle>Tooltips</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-tooltips--default&args=placement:right' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									placement: PropTypes.oneOf(['auto', 'top', 'bottom', 'right',
									'left']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4 align-items-stretch'>
									<div className='col-md'>
										<Tooltips title='This is a title' placement='auto'>
											<Button
												color='primary'
												isLight
												icon='PublishedWithChanges'
												className='w-100 h-100'>
												Auto
											</Button>
										</Tooltips>
									</div>
									<div className='col-md'>
										<Tooltips title='This is a title' placement='top'>
											<Button
												color='secondary'
												isLight
												icon='North'
												className='w-100 h-100'>
												Top
											</Button>
										</Tooltips>
									</div>
									<div className='col-md'>
										<Tooltips title='This is a title' placement='right'>
											<Button
												color='info'
												isLight
												icon='East'
												className='w-100 h-100'>
												Right
											</Button>
										</Tooltips>
									</div>
									<div className='col-md'>
										<Tooltips title='This is a title' placement='bottom'>
											<Button
												color='success'
												isLight
												icon='South'
												className='w-100 h-100'>
												Bottom
											</Button>
										</Tooltips>
									</div>
									<div className='col-md'>
										<Tooltips title='This is a title' placement='left'>
											<Button
												color='danger'
												isLight
												icon='West'
												className='w-100 h-100'>
												Left
											</Button>
										</Tooltips>
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
									<CardSubTitle>Tooltips</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-tooltips--default&args=placement:right;flip[1]:left' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									flip: PropTypes.arrayOf(PropTypes.oneOf(['auto', 'top',
									'bottom', 'right', 'left'])),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Tooltips title='This is a title' flip={['top', 'bottom']}>
									<Button color='primary' isLight icon='DataExploration'>
										Hover me!
									</Button>
								</Tooltips>
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

					{/* delay */}
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Bolt' iconColor='primary'>
									<CardTitle>delay</CardTitle>
									<CardSubTitle>Tooltips</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-tooltips--default&args=delay:1000' />
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
								<div className='row d-flex align-items-center'>
									<div className='col-auto'>
										<Tooltips title='This is a title.' delay={1000}>
											Bring the mouse to see! (Turns off after 1 second)
										</Tooltips>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					{/* isDisableElements */}
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Bolt' iconColor='primary'>
									<CardTitle>isDisableElements</CardTitle>
									<CardSubTitle>Tooltips</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-tooltips--default&args=isDisplayInline:true;isDisableElements:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isDisableElements: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row d-flex align-items-center'>
									<div className='col-auto'>
										<Tooltips
											title='This is a title.'
											isDisableElements
											isDisplayInline>
											<Button color='primary' isDisable>
												Disable Button
											</Button>
										</Tooltips>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					{/* modifiers */}
					<div className='col'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Extension' iconColor='danger'>
									<CardTitle>modifiers</CardTitle>
									<CardSubTitle>Tooltips</CardSubTitle>
								</CardLabel>
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

export default TooltipPage;
