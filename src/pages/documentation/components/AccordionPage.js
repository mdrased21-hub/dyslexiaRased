import React from 'react';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Accordion, { AccordionItem } from '../../../components/bootstrap/Accordion';
import Card, {
	CardActions,
	CardBody,
	CardCodeView,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import CommonHowToUse from '../../../components/common/CommonHowToUse';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

const AccordionPage = () => {
	const _generalUsage = `
<Accordion 
	tag={ String } // 'div' || 'section' 
	id={ String }
	activeItemId={ Boolean || String || Number } // false || '...' || ...
	className={ String }
	shadow={ String } // 'none' || 'sm' || 'default' || 'lg'
	isFlush={ Boolean } 
	color={ String } // 'primary' || 'secondary' || 'success' || 'info' || 'warning' || 'danger' || 'light' || 'dark'
	>
	<AccordionItem 
		id={ String } 
		title={ String }
		icon={ String }
		tag={ String } // 'div' || 'section' 
		headerTag={ String } // 'h1' || 'h2' || 'h3' || 'h4' || 'h5' || 'h6' || 'div' || 'span' || 'section'
		overWriteColor={ String } // 'primary' || 'secondary' || 'success' || 'info' || 'warning' || 'danger' || 'light' || 'dark'
		{...props}>
		...
	</AccordionItem>
	...
</Accordion>`;

	const _colors = [
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
		'light',
		'dark',
	];
	return (
		<PageWrapper title={componentsMenu.components.subMenu.accordion.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{
								title: componentsMenu.components.text,
								to: `/${componentsMenu.components.path}`,
							},
							{
								title: componentsMenu.components.subMenu.accordion.text,
								to: `/${componentsMenu.components.subMenu.accordion.path}`,
							},
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/docs/components-accordion--default' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					{/* general usage */}
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

					{/* isFlush */}
					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='CleaningServices' iconColor='info'>
									<CardTitle>isFlush</CardTitle>
									<CardSubTitle>Accordion</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/docs/components-accordion--default&args=isFlush:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isFlush: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-lg-6'>
										<Accordion id='accSample' activeItemId={false}>
											<AccordionItem
												id='accor1'
												title='isFlush is false'
												icon='Person'>
												Quisque suscipit blandit faucibus. Mauris vel nibh
												at erat ullamcorper pellentesque. Sed id odio
												mattis, elementum massa id, placerat purus.
												Curabitur eu eros velit.
											</AccordionItem>
											<AccordionItem
												id='accor2'
												title='Hobbies'
												icon='DocumentScanner'>
												Mauris a placerat ex. Interdum et malesuada fames ac
												ante ipsum primis in faucibus. In a orci nec augue
												accumsan varius at eget neque. Sed vestibulum, ipsum
												quis pretium iaculis, leo sem malesuada magna, et
												efficitur ligula justo vel arcu.
											</AccordionItem>
											<AccordionItem
												id='accor3'
												title='Preferences'
												icon='Opacity'>
												Phasellus molestie ligula purus, vitae elementum
												lorem porta vitae. Praesent semper posuere arcu eget
												ornare. Duis ut rutrum justo. Praesent ultrices
												libero quis sodales molestie.
											</AccordionItem>
										</Accordion>
									</div>
									<div className='col-lg-6'>
										<Accordion id='accSample-2' isFlush shadow='none'>
											<AccordionItem
												id='accor1-2'
												title='isFlush is true'
												icon='Person'>
												Quisque suscipit blandit faucibus. Mauris vel nibh
												at erat ullamcorper pellentesque. Sed id odio
												mattis, elementum massa id, placerat purus.
												Curabitur eu eros velit.
											</AccordionItem>
											<AccordionItem
												id='accor2-2'
												title='Hobbies'
												icon='DocumentScanner'>
												Mauris a placerat ex. Interdum et malesuada fames ac
												ante ipsum primis in faucibus. In a orci nec augue
												accumsan varius at eget neque. Sed vestibulum, ipsum
												quis pretium iaculis, leo sem malesuada magna, et
												efficitur ligula justo vel arcu.
											</AccordionItem>
											<AccordionItem
												id='accor3-2'
												title='Preferences'
												icon='Opacity'>
												Phasellus molestie ligula purus, vitae elementum
												lorem porta vitae. Praesent semper posuere arcu eget
												ornare. Duis ut rutrum justo. Praesent ultrices
												libero quis sodales molestie.
											</AccordionItem>
										</Accordion>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					{/* shadow */}
					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='ContentCopy' iconColor='warning'>
									<CardTitle>shadow</CardTitle>
									<CardSubTitle>Accordion</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/docs/components-accordion--default&args=shadow:lg' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									shadow: PropTypes.oneOf([null, 'none', 'sm', 'default', 'lg']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-md-3'>
										<Accordion id='accSample-shadow-1' shadow='none'>
											<AccordionItem
												id='accor1-shadow-1'
												title='Shadow is none'
												icon='Person'>
												Quisque suscipit blandit faucibus. Mauris vel nibh
												at erat ullamcorper pellentesque. Sed id odio
												mattis, elementum massa id, placerat purus.
												Curabitur eu eros velit.
											</AccordionItem>
											<AccordionItem
												id='accor2-shadow-1'
												title='Hobbies'
												icon='DocumentScanner'>
												Mauris a placerat ex. Interdum et malesuada fames ac
												ante ipsum primis in faucibus. In a orci nec augue
												accumsan varius at eget neque. Sed vestibulum, ipsum
												quis pretium iaculis, leo sem malesuada magna, et
												efficitur ligula justo vel arcu.
											</AccordionItem>
											<AccordionItem
												id='accor3-shadow-1'
												title='Preferences'
												icon='Opacity'>
												Phasellus molestie ligula purus, vitae elementum
												lorem porta vitae. Praesent semper posuere arcu eget
												ornare. Duis ut rutrum justo. Praesent ultrices
												libero quis sodales molestie.
											</AccordionItem>
										</Accordion>
									</div>
									<div className='col-md-3'>
										<Accordion id='accSample-shadow-2' shadow='sm'>
											<AccordionItem
												id='accor1-shadow-2'
												title='Shadow is sm'
												icon='Person'>
												Quisque suscipit blandit faucibus. Mauris vel nibh
												at erat ullamcorper pellentesque. Sed id odio
												mattis, elementum massa id, placerat purus.
												Curabitur eu eros velit.
											</AccordionItem>
											<AccordionItem
												id='accor2-shadow-2'
												title='Hobbies'
												icon='DocumentScanner'>
												Mauris a placerat ex. Interdum et malesuada fames ac
												ante ipsum primis in faucibus. In a orci nec augue
												accumsan varius at eget neque. Sed vestibulum, ipsum
												quis pretium iaculis, leo sem malesuada magna, et
												efficitur ligula justo vel arcu.
											</AccordionItem>
											<AccordionItem
												id='accor3-shadow-2'
												title='Preferences'
												icon='Opacity'>
												Phasellus molestie ligula purus, vitae elementum
												lorem porta vitae. Praesent semper posuere arcu eget
												ornare. Duis ut rutrum justo. Praesent ultrices
												libero quis sodales molestie.
											</AccordionItem>
										</Accordion>
									</div>
									<div className='col-md-3'>
										<Accordion id='accSample-shadow-3' shadow='default'>
											<AccordionItem
												id='accor1-shadow-3'
												title='Shadow is default'
												icon='Person'>
												Quisque suscipit blandit faucibus. Mauris vel nibh
												at erat ullamcorper pellentesque. Sed id odio
												mattis, elementum massa id, placerat purus.
												Curabitur eu eros velit.
											</AccordionItem>
											<AccordionItem
												id='accor2-shadow-3'
												title='Hobbies'
												icon='DocumentScanner'>
												Mauris a placerat ex. Interdum et malesuada fames ac
												ante ipsum primis in faucibus. In a orci nec augue
												accumsan varius at eget neque. Sed vestibulum, ipsum
												quis pretium iaculis, leo sem malesuada magna, et
												efficitur ligula justo vel arcu.
											</AccordionItem>
											<AccordionItem
												id='accor3-shadow-3'
												title='Preferences'
												icon='Opacity'>
												Phasellus molestie ligula purus, vitae elementum
												lorem porta vitae. Praesent semper posuere arcu eget
												ornare. Duis ut rutrum justo. Praesent ultrices
												libero quis sodales molestie.
											</AccordionItem>
										</Accordion>
									</div>
									<div className='col-md-3'>
										<Accordion id='accSample-shadow-4' shadow='lg'>
											<AccordionItem
												id='accor1-shadow-4'
												title='Shadow is lg'
												icon='Person'>
												Quisque suscipit blandit faucibus. Mauris vel nibh
												at erat ullamcorper pellentesque. Sed id odio
												mattis, elementum massa id, placerat purus.
												Curabitur eu eros velit.
											</AccordionItem>
											<AccordionItem
												id='accor2-shadow-4'
												title='Hobbies'
												icon='DocumentScanner'>
												Mauris a placerat ex. Interdum et malesuada fames ac
												ante ipsum primis in faucibus. In a orci nec augue
												accumsan varius at eget neque. Sed vestibulum, ipsum
												quis pretium iaculis, leo sem malesuada magna, et
												efficitur ligula justo vel arcu.
											</AccordionItem>
											<AccordionItem
												id='accor3-shadow-4'
												title='Preferences'
												icon='Opacity'>
												Phasellus molestie ligula purus, vitae elementum
												lorem porta vitae. Praesent semper posuere arcu eget
												ornare. Duis ut rutrum justo. Praesent ultrices
												libero quis sodales molestie.
											</AccordionItem>
										</Accordion>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					{/* color */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Palette' iconColor='danger'>
									<CardTitle>color</CardTitle>
									<CardSubTitle>Accordion</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/docs/components-accordion--default&args=;color:info' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									color: PropTypes.oneOf([ 'primary', 'secondary', 'success',
									'info', 'warning', 'danger', 'light', 'dark', ]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row row-cols-xl-3 row-cols-lg-2 g-4'>
									{_colors.map((item) => (
										<div key={item} className='col'>
											<Accordion id={`accSample-color--${item}`} color={item}>
												<AccordionItem
													id={`accor1-color-${item}`}
													title='User Information'
													icon='Person'>
													Quisque suscipit blandit faucibus. Mauris vel
													nibh at erat ullamcorper pellentesque.
												</AccordionItem>
												<AccordionItem
													id={`accor2-color-${item}`}
													title='Hobbies'
													icon='DocumentScanner'>
													Mauris a placerat ex. Interdum et malesuada
													fames ac ante ipsum primis in faucibus.
												</AccordionItem>
											</Accordion>
										</div>
									))}
								</div>
							</CardBody>
						</Card>
					</div>
					{/* overWriteColor */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='FormatColorFill'>
									<CardTitle>overWriteColor</CardTitle>
									<CardSubTitle>AccordionItem</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/docs/components-accordion-sub-components-accordionitem--default-item&args=overWriteColor:danger' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									overWriteColor: PropTypes.oneOf([ 'primary', 'secondary',
									'success', 'info', 'warning', 'danger', 'light', 'dark', ]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Accordion id='accSample-color-2' color='success'>
									<AccordionItem
										id='accor1-color-default'
										title='Default color is success'
										icon='Person'>
										Quisque suscipit blandit faucibus. Mauris vel nibh at erat
										ullamcorper pellentesque. Sed id odio mattis, elementum
										massa id, placerat purus. Curabitur eu eros velit.
									</AccordionItem>
									{_colors.map((item) => (
										<AccordionItem
											key={item}
											id={`accor3-color-${item}`}
											title={`overWriteColor is ${item}`}
											icon='Opacity'
											overWriteColor={item}>
											Phasellus molestie ligula purus, vitae elementum lorem
											porta vitae. Praesent semper posuere arcu eget ornare.
											Duis ut rutrum justo. Praesent ultrices libero quis
											sodales molestie.
										</AccordionItem>
									))}
								</Accordion>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default AccordionPage;
