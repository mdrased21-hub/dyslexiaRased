import React from 'react';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Badge from '../../../components/bootstrap/Badge';
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
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Alert from '../../../components/bootstrap/Alert';
import CommonHowToUse from '../../../components/common/CommonHowToUse';
import CommonDesc from '../../../components/common/CommonDesc';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

const BadgePage = () => {
	const _generalUsage = `
<Badge
	className={ String }
	color={ String } // 'primary' || 'secondary'  || 'success' || 'info' || 'warning' || 'danger' || 'light' || 'dark'
	shadow={ String } // null || 'none' || 'sm' || 'default' || 'lg'
	rounded={ String || Number } // 'default' ||  0 || 1 || 2 || 3 || 'bottom' || 'top' || 'circle' || 'end' ||  'start' || 'pill'
	{...props}>
	...
</Badge>`;
	return (
		<PageWrapper title={componentsMenu.components.subMenu.badge.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{
								title: componentsMenu.components.text,
								to: `/${componentsMenu.components.path}`,
							},
							{
								title: componentsMenu.components.subMenu.badge.text,
								to: `/${componentsMenu.components.subMenu.badge.path}`,
							},
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/docs/components-badge--default' />
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
									<CardSubTitle>Badge</CardSubTitle>
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
								<h2>
									Example heading <Badge>Badge</Badge>
								</h2>
								<h2>
									Example heading <Badge color='secondary'>Badge</Badge>
								</h2>
								<h2>
									Example heading <Badge color='success'>Badge</Badge>
								</h2>
								<h2>
									Example heading <Badge color='info'>Badge</Badge>
								</h2>
								<h2>
									Example heading <Badge color='warning'>Badge</Badge>
								</h2>
								<h2>
									Example heading <Badge color='danger'>Badge</Badge>
								</h2>
								<h2>
									Example heading <Badge color='light'>Badge</Badge>
								</h2>
								<h2>
									Example heading <Badge color='dark'>Badge</Badge>
								</h2>
							</CardBody>
						</Card>
					</div>
					{/* rounded */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='RoundedCorner' iconColor='success'>
									<CardTitle>rounded</CardTitle>
									<CardSubTitle>Badge</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-alert-props-rounded--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									rounded: PropTypes.oneOf([ 'default', 0, 1, 2, 3, 'bottom',
									'top', 'circle', 'end', 'start', 'pill', ]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<h2>
									Rounded is default{' '}
									<Badge rounded='default' color='success'>
										Badge
									</Badge>
								</h2>
								<h2>
									Rounded is 0{' '}
									<Badge rounded={0} color='success'>
										Badge
									</Badge>
								</h2>
								<h2>
									Rounded is 1{' '}
									<Badge rounded={1} color='success'>
										Badge
									</Badge>
								</h2>
								<h2>
									Rounded is 2{' '}
									<Badge rounded={2} color='success'>
										Badge
									</Badge>
								</h2>
								<h2>
									Rounded is 3{' '}
									<Badge rounded={3} color='success'>
										Badge
									</Badge>
								</h2>
								<h2>
									Rounded is bottom{' '}
									<Badge rounded='bottom' color='success'>
										Badge
									</Badge>
								</h2>
								<h2>
									Rounded is top{' '}
									<Badge rounded='top' color='success'>
										Badge
									</Badge>
								</h2>
								<h2>
									Rounded is circle{' '}
									<Badge rounded='circle' color='success'>
										Badge
									</Badge>
								</h2>
								<h2>
									Rounded is end{' '}
									<Badge rounded='end' color='success'>
										Badge
									</Badge>
								</h2>
								<h2>
									Rounded is start{' '}
									<Badge rounded='start' color='success'>
										Badge
									</Badge>
								</h2>
								<h2>
									Rounded is pill{' '}
									<Badge rounded='pill' color='success'>
										Badge
									</Badge>
								</h2>
							</CardBody>
							<CardFooter>
								<Alert
									color='warning'
									isLight
									shadow='md'
									borderWidth={0}
									icon='Info'
									className='flex-nowrap w-100 mb-0'>
									<code>rounded-0</code> is automatically added if rounded bottom,
									top, end or start.
								</Alert>
							</CardFooter>
						</Card>
					</div>

					{/* shadow */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ContentCopy' iconColor='dark'>
									<CardTitle>shadow</CardTitle>
									<CardSubTitle>Badge</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-alert-props-shadow--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									shadow: PropTypes.oneOf([null, 'none', 'sm', 'default', 'lg']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<h2>
									Shadow is none <Badge shadow='none'>Badge</Badge>
								</h2>
								<h2>
									Shadow is sm <Badge shadow='sm'>Badge</Badge>
								</h2>
								<h2>
									Shadow is default <Badge shadow='default'>Badge</Badge>
								</h2>
								<h2>
									Shadow is lg <Badge shadow='lg'>Badge</Badge>
								</h2>
							</CardBody>
						</Card>
					</div>
					{/* size */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Straighten' iconColor='warning'>
									<CardTitle>Size</CardTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-badge-props-size--default' />
								</CardActions>
							</CardHeader>
							<CardBody>
								<h1>
									Heading tag is H1 <Badge color='warning'>Badge</Badge>
								</h1>
								<h2>
									Heading tag is H2 <Badge color='warning'>Badge</Badge>
								</h2>
								<h3>
									Heading tag is H3 <Badge color='warning'>Badge</Badge>
								</h3>
								<h4>
									Heading tag is H4 <Badge color='warning'>Badge</Badge>
								</h4>
								<h5>
									Heading tag is H5 <Badge color='warning'>Badge</Badge>
								</h5>
								<h6>
									Heading tag is H6 <Badge color='warning'>Badge</Badge>
								</h6>
								<div>
									Parent tag is div <Badge color='warning'>Badge</Badge>
								</div>
							</CardBody>
							<CardFooter>
								<CommonDesc>Gets the font size of the element it is in.</CommonDesc>
							</CardFooter>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default BadgePage;
