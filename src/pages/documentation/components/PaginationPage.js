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
import CommonHowToUse from '../../../components/common/CommonHowToUse';
import CommonDesc from '../../../components/common/CommonDesc';
import Pagination, { PaginationItem } from '../../../components/bootstrap/Pagination';

const PaginationPage = () => {
	const _generalUsage = `
<Pagination
	ariaLabel={ String }
	size={ String } // 'sm' || 'lg' || null
	className={ String }
	{...props}>
	<PaginationItem
		isPrev={ Boolean }
		isNext={ Boolean }
		isActive={ Boolean }
		isDisabled={ Boolean }
		className={ String }
		onClick={ Function }
		{...props}>...</PaginationItem>
	...
</Pagination>`;

	return (
		<PageWrapper title={componentsMenu.components.subMenu.pagination.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{
								title: componentsMenu.components.text,
								to: `/${componentsMenu.components.path}`,
							},
							{
								title: componentsMenu.components.subMenu.pagination.text,
								to: `/${componentsMenu.components.subMenu.pagination.path}`,
							},
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/docs/components-pagination--default' />
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
								<CardLabel icon='Bookmarks' iconColor='danger'>
									<CardTitle>ariaLabel</CardTitle>
									<CardSubTitle>Pagination</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-pagination--default&args=ariaLabel:pagination' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>ariaLabel: PropTypes.string,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Pagination ariaLabel='Sample'>
									<PaginationItem isPrev />
									<PaginationItem isActive>1</PaginationItem>
									<PaginationItem>2</PaginationItem>
									<PaginationItem>3</PaginationItem>
									<PaginationItem isNext />
								</Pagination>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									In addition, as pages likely have more than one such navigation
									section, it’s advisable to provide a descriptive{' '}
									<code>ariaLabel</code> for the {`<Pagination>`} to reflect its
									purpose. For example, if the pagination component is used to
									navigate between a set of search results, an appropriate label
									could be <code>ariaLabel="Search results pages"</code>.
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Straighten' iconColor='success'>
									<CardTitle>size</CardTitle>
									<CardSubTitle>Pagination</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-pagination--default&args=size:sm' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									size: PropTypes.oneOf(['sm', 'lg']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-auto'>
										<Pagination ariaLabel='Small' size='sm'>
											<PaginationItem isPrev />
											<PaginationItem isActive>1</PaginationItem>
											<PaginationItem>2</PaginationItem>
											<PaginationItem>3</PaginationItem>
											<PaginationItem isNext />
										</Pagination>
									</div>
									<div className='col-auto'>
										<Pagination ariaLabel='Large' size='lg'>
											<PaginationItem isPrev />
											<PaginationItem isActive>1</PaginationItem>
											<PaginationItem>2</PaginationItem>
											<PaginationItem>3</PaginationItem>
											<PaginationItem isNext />
										</Pagination>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='SkipPrevious' iconColor='info'>
									<CardTitle>isPrev</CardTitle>
									<CardSubTitle>PaginationItem</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-pagination-sub-components-paginationitem--default&args=isPrev:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isPrev: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-auto'>
										<Pagination ariaLabel='Example prev icon'>
											<PaginationItem isPrev />
											<PaginationItem isActive>1</PaginationItem>
											<PaginationItem>2</PaginationItem>
											<PaginationItem>3</PaginationItem>
											<PaginationItem isNext />
										</Pagination>
									</div>
									<div className='col-auto'>
										<Pagination ariaLabel='Example prev string'>
											<PaginationItem>Prev or '...'</PaginationItem>
											<PaginationItem isActive>1</PaginationItem>
											<PaginationItem>2</PaginationItem>
											<PaginationItem>3</PaginationItem>
											<PaginationItem isNext />
										</Pagination>
									</div>
								</div>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									You can set <code>isPrev</code> to <code>true</code> and make an
									icon or write whatever you want.
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='SkipNext' iconColor='danger'>
									<CardTitle>isNext</CardTitle>
									<CardSubTitle>PaginationItem</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-pagination-sub-components-paginationitem--default&args=isNext:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isNext: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-auto'>
										<Pagination ariaLabel='Example next icon'>
											<PaginationItem isPrev />
											<PaginationItem isActive>1</PaginationItem>
											<PaginationItem>2</PaginationItem>
											<PaginationItem>3</PaginationItem>
											<PaginationItem isNext />
										</Pagination>
									</div>
									<div className='col-auto'>
										<Pagination ariaLabel='Example next string'>
											<PaginationItem isPrev />
											<PaginationItem isActive>1</PaginationItem>
											<PaginationItem>2</PaginationItem>
											<PaginationItem>3</PaginationItem>
											<PaginationItem>Next or '...'</PaginationItem>
										</Pagination>
									</div>
								</div>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									You can set <code>isNext</code> to <code>true</code> and make an
									icon or write whatever you want.
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ToggleOn' iconColor='success'>
									<CardTitle>isActive</CardTitle>
									<CardSubTitle>PaginationItem</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-pagination-sub-components-paginationitem--default&args=isActive:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isActive: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-auto'>
										<Pagination ariaLabel='Example active'>
											<PaginationItem isPrev />
											<PaginationItem isActive>Active</PaginationItem>
											<PaginationItem>Not Active</PaginationItem>
											<PaginationItem>Not Active</PaginationItem>
											<PaginationItem isNext />
										</Pagination>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='DoDisturbOn' iconColor='danger'>
									<CardTitle>isDisabled</CardTitle>
									<CardSubTitle>PaginationItem</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-pagination-sub-components-paginationitem--default&args=isDisabled:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isDisabled: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-auto'>
										<Pagination ariaLabel='Example disable'>
											<PaginationItem isPrev />
											<PaginationItem isActive>Active</PaginationItem>
											<PaginationItem isDisabled>Disable</PaginationItem>
											<PaginationItem isActive isDisabled>
												Active & Disable
											</PaginationItem>
											<PaginationItem>Default</PaginationItem>
											<PaginationItem isNext />
										</Pagination>
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

export default PaginationPage;
