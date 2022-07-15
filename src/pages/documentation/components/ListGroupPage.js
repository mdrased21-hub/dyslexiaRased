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
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../components/bootstrap/Card';
import CommonHowToUse from '../../../components/common/CommonHowToUse';
import ListGroup, { ListGroupItem } from '../../../components/bootstrap/ListGroup';
import CommonDesc from '../../../components/common/CommonDesc';
import COLORS from '../../../common/data/colorDummyData';

const ListGroupPage = () => {
	const _generalUsage = `
<ListGroup
	tag={ String } // 'section' || 'div' || 'ol' || 'ul'
	className={ String } 
	isHorizontal={ Boolean || String } // true || false || 'sm' || 'md' || 'lg' || 'xl' || 'xxl'
	isFlush={ Boolean }
	isNumbered={ Boolean }
	{...props}>
	<ListGroupItem
		tag={ String } // 'section' || 'div' || 'li' || 'a' || 'button' || 'label'
		className={ String }
		color={ String } // 'primary' || 'secondary' || 'success' || 'info' || 'warning' || 'danger' || 'light' || 'dark'
		isActive={ Boolean }
		isDisable={ Boolean }
		{...props}>
		...
	</ListGroupItem>
	...
</ListGroup>`;

	return (
		<PageWrapper title={componentsMenu.components.subMenu.listGroup.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{
								title: componentsMenu.components.text,
								to: `/${componentsMenu.components.path}`,
							},
							{
								title: componentsMenu.components.subMenu.listGroup.text,
								to: `/${componentsMenu.components.subMenu.listGroup.path}`,
							},
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/docs/components-listgroup--default' />
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

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='OpenInFull' iconColor='info'>
									<CardTitle>isFlush</CardTitle>
									<CardSubTitle>ListGroup</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-listgroup--default&args=isFlush:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isFlush: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<ListGroup isFlush>
									<ListGroupItem>An item</ListGroupItem>
									<ListGroupItem>A second item</ListGroupItem>
									<ListGroupItem>A third item</ListGroupItem>
									<ListGroupItem>A fourth item</ListGroupItem>
									<ListGroupItem>And a fifth one</ListGroupItem>
								</ListGroup>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='FormatListNumbered' iconColor='secondary'>
									<CardTitle>isNumbered</CardTitle>
									<CardSubTitle>ListGroup</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-listgroup--default&args=isNumbered:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isNumbered: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<ListGroup isNumbered tag='ol'>
									<ListGroupItem>An item</ListGroupItem>
									<ListGroupItem>A second item</ListGroupItem>
									<ListGroupItem>A third item</ListGroupItem>
									<ListGroupItem>A fourth item</ListGroupItem>
									<ListGroupItem>And a fifth one</ListGroupItem>
								</ListGroup>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='HorizontalSplit' iconColor='success'>
									<CardTitle>isHorizontal</CardTitle>
									<CardSubTitle>ListGroup</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-listgroup--default&args=isHorizontal:xxl' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									isHorizontal: PropTypes.oneOfType([ PropTypes.bool,
									PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']), ]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-xl-6'>
										<ListGroup isHorizontal>
											<ListGroupItem>An item</ListGroupItem>
											<ListGroupItem>A second item</ListGroupItem>
											<ListGroupItem>A third item</ListGroupItem>
										</ListGroup>
										<CommonDesc className='mt-3'>Any width</CommonDesc>
									</div>
									<div className='col-xl-6'>
										<ListGroup isHorizontal='sm'>
											<ListGroupItem>An item</ListGroupItem>
											<ListGroupItem>A second item</ListGroupItem>
											<ListGroupItem>A third item</ListGroupItem>
										</ListGroup>
										<CommonDesc className='mt-3'>Breakpoint is sm</CommonDesc>
									</div>
									<div className='col-xl-6'>
										<ListGroup isHorizontal='md'>
											<ListGroupItem>An item</ListGroupItem>
											<ListGroupItem>A second item</ListGroupItem>
											<ListGroupItem>A third item</ListGroupItem>
										</ListGroup>
										<CommonDesc className='mt-3'>Breakpoint is md</CommonDesc>
									</div>
									<div className='col-xl-6'>
										<ListGroup isHorizontal='lg'>
											<ListGroupItem>An item</ListGroupItem>
											<ListGroupItem>A second item</ListGroupItem>
											<ListGroupItem>A third item</ListGroupItem>
										</ListGroup>
										<CommonDesc className='mt-3'>Breakpoint is lg</CommonDesc>
									</div>
									<div className='col-xl-6'>
										<ListGroup isHorizontal='xl'>
											<ListGroupItem>An item</ListGroupItem>
											<ListGroupItem>A second item</ListGroupItem>
											<ListGroupItem>A third item</ListGroupItem>
										</ListGroup>
										<CommonDesc className='mt-3'>Breakpoint is xl</CommonDesc>
									</div>
									<div className='col-xl-6'>
										<ListGroup isHorizontal='xxl'>
											<ListGroupItem>An item</ListGroupItem>
											<ListGroupItem>A second item</ListGroupItem>
											<ListGroupItem>A third item</ListGroupItem>
										</ListGroup>
										<CommonDesc className='mt-3'>Breakpoint is xxl</CommonDesc>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Palette' iconColor='info'>
									<CardTitle>color</CardTitle>
									<CardSubTitle>ListGroupItem</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-listgroup-sub-components-listgroupitem--default&args=color:primary' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									color: PropTypes.oneOf([ 'primary', 'secondary', 'success',
									'info', 'warning', 'danger', 'light', 'dark', ])
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<ListGroup>
									{Object.keys({ DEFAULT: '', ...COLORS }).map((color) => (
										<ListGroupItem key={color} color={COLORS[color]}>
											A simple {COLORS[color]} list group item
										</ListGroupItem>
									))}
								</ListGroup>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Mouse' iconColor='warning'>
									<CardTitle>color & tag</CardTitle>
									<CardSubTitle>ListGroupItem</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-listgroup-sub-components-listgroupitem--default&args=tag:a;color:success' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									<div>
										color: PropTypes.oneOf([ 'primary', 'secondary', 'success',
										'info', 'warning', 'danger', 'light', 'dark', ]),
									</div>
									<div>
										tag: PropTypes.oneOf(['section', 'div', 'li', 'a', 'button',
										'label']),
									</div>
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<ListGroup tag='div'>
									{Object.keys({ DEFAULT: '', ...COLORS }).map((color) => (
										<ListGroupItem
											key={color}
											color={COLORS[color]}
											tag='a'
											href='#'>
											A simple {COLORS[color]} list group item
										</ListGroupItem>
									))}
								</ListGroup>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ToggleOn' iconColor='success'>
									<CardTitle>isActive</CardTitle>
									<CardSubTitle>ListGroupItem</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-listgroup-sub-components-listgroupitem--default&args=isActive:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isActive: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<ListGroup>
									<ListGroupItem isActive>An active item</ListGroupItem>
									<ListGroupItem>A second item</ListGroupItem>
									<ListGroupItem>A third item</ListGroupItem>
									<ListGroupItem>A fourth item</ListGroupItem>
									<ListGroupItem>And a fifth one</ListGroupItem>
								</ListGroup>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='DoNotDisturbOn' iconColor='danger'>
									<CardTitle>isDisable</CardTitle>
									<CardSubTitle>ListGroupItem</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-listgroup-sub-components-listgroupitem--default&args=isDisable:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isDisable: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<ListGroup>
									<ListGroupItem isDisable>A disabled item</ListGroupItem>
									<ListGroupItem>A second item</ListGroupItem>
									<ListGroupItem>A third item</ListGroupItem>
									<ListGroupItem>A fourth item</ListGroupItem>
									<ListGroupItem>And a fifth one</ListGroupItem>
								</ListGroup>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ListGroupPage;
