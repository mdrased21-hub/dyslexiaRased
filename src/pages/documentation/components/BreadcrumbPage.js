import React from 'react';
import { NavLink } from 'react-router-dom';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb, { BreadcrumbItem } from '../../../components/bootstrap/Breadcrumb';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import { componentsMenu } from '../../../menu';
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
import Icon from '../../../components/icon/Icon';

const BreadcrumbPage = () => {
	const _generalUsage = `
<Breadcrumb
	list={ Array } // [{ title: String , to: String }, Object ]
	tag={ String } // 'nav' || 'div' || 'section'
	listTag={ String } // 'div' || 'ol' || 'ul'
	itemTag={ String } // 'div' || 'li'
	ariaLabel={ String }
	autoActive={ Boolean }
	isToHome={ String || Node } // <Icon {...props}/>
	divider={ String || Node } // <Icon {...props}/>
	/>`;

	const _generalUsage2 = `
<Breadcrumb
	list={null}
	tag={ String } // 'nav' || 'div' || 'section'
	listTag={ String } // 'div' || 'ol' || 'ul'
	itemTag={ String } // 'div' || 'li'
	ariaLabel={ String }
	autoActive={ Boolean }
	isToHome={ String || Node } // <Icon {...props}/>
	divider={ String || Node } // <Icon {...props}/>
	/>
	<BreadcrumbItem
		ariaLabel={ String }
		className={ String }
		tag={ String }
		to={ String }
		isActive={ Boolean } 
		divider={ String || Node } // <Icon {...props}/>
		/>
	...
</Breadcrumb>`;

	return (
		<PageWrapper title={componentsMenu.components.subMenu.breadcrumb.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{
								title: componentsMenu.components.text,
								to: `/${componentsMenu.components.path}`,
							},
							{
								title: componentsMenu.components.subMenu.breadcrumb.text,
								to: `/${componentsMenu.components.subMenu.breadcrumb.path}`,
							},
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/docs/components-breadcrumb--default' />
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
								<div className='row'>
									<div className='col-xl-6'>
										<CardCodeView className='h-100'>
											{_generalUsage}
										</CardCodeView>
									</div>
									<div className='col-xl-6'>
										<CardCodeView className='h-100'>
											{_generalUsage2}
										</CardCodeView>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='FormatListBulleted' iconColor='info'>
									<CardTitle>list</CardTitle>
									<CardSubTitle>Breadcrumb</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-breadcrumb--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									{`list: PropTypes.arrayOf( PropTypes.shape({ title: PropTypes.string.isRequired, to: PropTypes.string.isRequired }) )`}
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Breadcrumb
									list={[
										{
											title: 'Page',
											to: '/page',
										},
										{
											title: 'Sub Page',
											to: '/page/subpage',
										},
										{
											title: 'Sub sub Page',
											to: '/page/subpage/subsubpage',
										},
									]}
								/>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Bookmarks' iconColor='warning'>
									<CardTitle>tag</CardTitle>
									<CardSubTitle>Breadcrumb</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-breadcrumb--default&args=tag:div' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									tag: PropTypes.oneOf(['nav', 'div', 'section']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Breadcrumb
									tag='nav'
									list={[
										{
											title: 'Page',
											to: '/page',
										},
										{
											title: 'tag "nav"',
											to: '/page/subpage',
										},
									]}
								/>
								<Breadcrumb
									tag='div'
									list={[
										{
											title: 'Page',
											to: '/page',
										},
										{
											title: 'tag "div"',
											to: '/page/subpage',
										},
									]}
								/>
								<Breadcrumb
									tag='section'
									list={[
										{
											title: 'Page',
											to: '/page',
										},
										{
											title: 'tag "section"',
											to: '/page/subpage',
										},
									]}
								/>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Bookmarks' iconColor='success'>
									<CardTitle>listTag</CardTitle>
									<CardSubTitle>Breadcrumb</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-breadcrumb--default&args=listTag:ul' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									listTag: PropTypes.oneOf(['div', 'ol', 'ul']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Breadcrumb
									listTag='div'
									list={[
										{
											title: 'Page',
											to: '/page',
										},
										{
											title: 'listTag "div"',
											to: '/page/subpage',
										},
									]}
								/>
								<Breadcrumb
									listTag='ol'
									list={[
										{
											title: 'Page',
											to: '/page',
										},
										{
											title: 'listTag "ol"',
											to: '/page/subpage',
										},
									]}
								/>
								<Breadcrumb
									listTag='ul'
									list={[
										{
											title: 'Page',
											to: '/page',
										},
										{
											title: 'listTag "ul"',
											to: '/page/subpage',
										},
									]}
								/>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Bookmarks' iconColor='danger'>
									<CardTitle>itemTag</CardTitle>
									<CardSubTitle>Breadcrumb</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-breadcrumb--default&args=listTag:div;itemTag:div' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									itemTag: PropTypes.oneOf(['div', 'li']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Breadcrumb
									itemTag='div'
									list={[
										{
											title: 'Page',
											to: '/page',
										},
										{
											title: 'itemTag "div"',
											to: '/page/subpage',
										},
									]}
								/>
								<Breadcrumb
									itemTag='li'
									list={[
										{
											title: 'Page',
											to: '/page',
										},
										{
											title: 'itemTag "li"',
											to: '/page/subpage',
										},
									]}
								/>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='AutoFixNormal' iconColor='primary'>
									<CardTitle>autoActive</CardTitle>
									<CardSubTitle>Breadcrumb</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-breadcrumb--default&args=autoActive:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>autoActive: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Breadcrumb
									list={[
										{
											title: 'Page',
											to: '/page',
										},
										{
											title: 'autoActive "true"',
											to: '/page/subpage',
										},
									]}
								/>
								<Breadcrumb
									autoActive={false}
									list={[
										{
											title: 'Page',
											to: '/page',
										},
										{
											title: 'autoActive "false"',
											to: '/page/subpage',
										},
									]}
								/>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='HolidayVillage' iconColor='info'>
									<CardTitle>isToHome</CardTitle>
									<CardSubTitle>Breadcrumb</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-breadcrumb--default&args=isToHome:Home' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									<div>
										isToHome: PropTypes.oneOfType([PropTypes.string,
										PropTypes.node]),
									</div>
									{/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
									<div>
										// <NavLink to='/icons/material'>Material</NavLink> or{' '}
										<NavLink to='/icons/bootstrap-icon'>Bootstrap</NavLink> to
										see the icon names and previews.
									</div>
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Breadcrumb
									list={[
										{
											title: 'Page',
											to: '/page',
										},
										{
											title: 'Default',
											to: '/page/subpage',
										},
									]}
								/>
								<Breadcrumb
									isToHome='Home'
									list={[
										{
											title: 'Page',
											to: '/page',
										},
										{
											title: 'String "Home"',
											to: '/page/subpage',
										},
									]}
								/>
								<Breadcrumb
									isToHome={<Icon icon='OtherHouses' />}
									list={[
										{
											title: 'Page',
											to: '/page',
										},
										{
											title: `node "<Icon icon='OtherHouses' />"`,
											to: '/page/subpage',
										},
									]}
								/>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Carpenter' iconColor='danger'>
									<CardTitle>divider</CardTitle>
									<CardSubTitle>Breadcrumb</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-breadcrumb--default&args=divider:divide' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									<div>
										divider: PropTypes.oneOfType([PropTypes.string,
										PropTypes.node]),
									</div>
									{/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
									<div>
										// <NavLink to='/icons/material'>Material</NavLink> or{' '}
										<NavLink to='/icons/bootstrap-icon'>Bootstrap</NavLink> to
										see the icon names and previews.
									</div>
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Breadcrumb
									list={[
										{
											title: 'Page',
											to: '/page',
										},
										{
											title: 'Default',
											to: '/page/subpage',
										},
									]}
								/>
								<Breadcrumb
									divider='-'
									list={[
										{
											title: 'Page',
											to: '/page',
										},
										{
											title: 'String "-"',
											to: '/page/subpage',
										},
									]}
								/>
								<Breadcrumb
									divider={<Icon icon='PlayArrow' />}
									list={[
										{
											title: 'Page',
											to: '/page',
										},
										{
											title: `node "<Icon icon='PlayArrow' />"`,
											to: '/page/subpage',
										},
									]}
								/>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Bookmarks' iconColor='info'>
									<CardTitle>tag</CardTitle>
									<CardSubTitle>BreadcrumbItem</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-breadcrumb-sub-components-breadcrumbitem--default&args=tag:div' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>tag: PropTypes.string,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Breadcrumb autoActive={false}>
									<BreadcrumbItem to='/' tag='div'>
										tag "div"
									</BreadcrumbItem>
									<BreadcrumbItem to='/' tag='span'>
										tag "span"
									</BreadcrumbItem>
								</Breadcrumb>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='NotificationsActive' iconColor='warning'>
									<CardTitle>isActive</CardTitle>
									<CardSubTitle>BreadcrumbItem</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-breadcrumb-sub-components-breadcrumbitem--default&args=isActive:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isActive: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Breadcrumb>
									<BreadcrumbItem to='/' isActive={false}>
										isActive "false"
									</BreadcrumbItem>
									<BreadcrumbItem to='/' isActive>
										isActive "true"
									</BreadcrumbItem>
								</Breadcrumb>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Carpenter' iconColor='success'>
									<CardTitle>divider</CardTitle>
									<CardSubTitle>BreadcrumbItem</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-breadcrumb-sub-components-breadcrumbitem--default&args=divider:divide' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>divider: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Breadcrumb>
									<BreadcrumbItem to='/' divider={<Icon icon='Carpenter' />}>
										{`divider "<Icon icon='Carpenter' />"`}
									</BreadcrumbItem>
									<BreadcrumbItem to='/' divider={<Icon icon='ContentCut' />}>
										{`divider "<Icon icon='ContentCut' />"`}
									</BreadcrumbItem>
								</Breadcrumb>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default BreadcrumbPage;
