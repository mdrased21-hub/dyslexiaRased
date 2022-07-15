import React from 'react';
import { componentsMenu } from '../../../menu';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
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
import Progress from '../../../components/bootstrap/Progress';
import Popovers from '../../../components/bootstrap/Popovers';
import COLORS from '../../../common/data/colorDummyData';

const ProgressPage = () => {
	const _generalUsage = `
<Progress
	value={ Number }
	min={ Number }
	max={ Number }
	height={ Number || String } // Example: 10, '3vh', '5rem' etc.
	isStriped={ Boolean }
	isAnimated={ Boolean }
	isAutoColor={ Boolean }
	color={ String } // 'primary' || 'secondary' || 'success' || 'info' || 'warning' || 'danger' || 'light' || 'dark'
	className={ String }
	{...props} />`;

	const _generalUsage2 = `
<Progress>
	<Progress {...props} />
	<Progress {...props} />
	...
</Progress>`;
	return (
		<PageWrapper title={componentsMenu.components.subMenu.progress.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{
								title: componentsMenu.components.text,
								to: `/${componentsMenu.components.path}`,
							},
							{
								title: componentsMenu.components.subMenu.progress.text,
								to: `/${componentsMenu.components.subMenu.progress.path}`,
							},
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/docs/components-progress--default' />
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
								<CardLabel icon='Poll' iconColor='primary'>
									<CardTitle>value</CardTitle>
									<CardSubTitle>Progress</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-progress--default&args=value:65' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>value: PropTypes.number,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									<div className='col-12'>
										<Popovers desc='Value 0' trigger='hover'>
											<Progress value={0} />
										</Popovers>
									</div>
									<div className='col-12'>
										<Popovers desc='Value 25' trigger='hover'>
											<Progress value={25} />
										</Popovers>
									</div>
									<div className='col-12'>
										<Popovers desc='Value 50' trigger='hover'>
											<Progress value={50} />
										</Popovers>
									</div>
									<div className='col-12'>
										<Popovers desc='Value 75' trigger='hover'>
											<Progress value={75} />
										</Popovers>
									</div>
									<div className='col-12'>
										<Popovers desc='Value 100' trigger='hover'>
											<Progress value={100} />
										</Popovers>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Minimize' iconColor='warning'>
									<CardTitle>min</CardTitle>
									<CardSubTitle>Progress</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-progress--default&args=min:40' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>min: PropTypes.number,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									<div className='col-12'>
										<Popovers desc='Min 0, Value 85' trigger='hover'>
											<Progress value={85} min={0} color='warning' />
										</Popovers>
									</div>
									<div className='col-12'>
										<Popovers desc='Min 20, Value 85' trigger='hover'>
											<Progress value={85} min={20} color='warning' />
										</Popovers>
									</div>
									<div className='col-12'>
										<Popovers desc='Min 40, Value 85' trigger='hover'>
											<Progress value={85} min={40} color='warning' />
										</Popovers>
									</div>
									<div className='col-12'>
										<Popovers desc='Min 60, Value 85' trigger='hover'>
											<Progress value={85} min={60} color='warning' />
										</Popovers>
									</div>
									<div className='col-12'>
										<Popovers desc='Min 80, Value 85' trigger='hover'>
											<Progress value={85} min={80} color='warning' />
										</Popovers>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Maximize' iconColor='danger'>
									<CardTitle>max</CardTitle>
									<CardSubTitle>Progress</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-progress--default&args=max:90' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>max: PropTypes.number,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									<div className='col-12'>
										<Popovers desc='Max 20, Value 15' trigger='hover'>
											<Progress value={15} max={20} color='danger' />
										</Popovers>
									</div>
									<div className='col-12'>
										<Popovers desc='Max 40, Value 15' trigger='hover'>
											<Progress value={15} max={40} color='danger' />
										</Popovers>
									</div>
									<div className='col-12'>
										<Popovers desc='Max 60, Value 15' trigger='hover'>
											<Progress value={15} max={60} color='danger' />
										</Popovers>
									</div>
									<div className='col-12'>
										<Popovers desc='Max 80, Value 15' trigger='hover'>
											<Progress value={15} max={80} color='danger' />
										</Popovers>
									</div>
									<div className='col-12'>
										<Popovers desc='Max 100, Value 15' trigger='hover'>
											<Progress value={15} max={100} color='danger' />
										</Popovers>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Height' iconColor='info'>
									<CardTitle>height</CardTitle>
									<CardSubTitle>Progress</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-progress--default&args=height:5vh' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									height: PropTypes.oneOfType([PropTypes.number,
									PropTypes.string])
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									<div className='col-12'>
										<Popovers desc='Height 30(30px)' trigger='hover'>
											<Progress value={75} height={30} color='info' />
										</Popovers>
									</div>
									<div className='col-12'>
										<Popovers desc='Height 2rem' trigger='hover'>
											<Progress value={75} height='2rem' color='info' />
										</Popovers>
									</div>
									<div className='col-12'>
										<Popovers desc='Height 1vh' trigger='hover'>
											<Progress value={75} height='1vh' color='info' />
										</Popovers>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Texture' iconColor='success'>
									<CardTitle>isStriped</CardTitle>
									<CardSubTitle>Progress</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-progress--default&args=isStriped:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isStriped: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									{Object.keys(COLORS).map((color) => (
										<div key={color} className='col-12'>
											<Progress value={60} isStriped color={COLORS[color]} />
										</div>
									))}
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Animation' iconColor='warning'>
									<CardTitle>isAnimated</CardTitle>
									<CardSubTitle>Progress</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-progress--default&args=isAnimated:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isAnimated: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									{Object.keys(COLORS).map((color) => (
										<div key={color} className='col-12'>
											<Progress value={60} isAnimated color={COLORS[color]} />
										</div>
									))}
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Palette' iconColor='info'>
									<CardTitle>color</CardTitle>
									<CardSubTitle>Progress</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-progress--default&args=color:success' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									color: PropTypes.oneOf([ 'primary', 'secondary', 'success',
									'info', 'warning', 'danger', 'light', 'dark' ]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									{Object.keys(COLORS).map((color) => (
										<div key={color} className='col-12'>
											<Progress value={40} color={COLORS[color]} />
										</div>
									))}
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Colorize' iconColor='danger'>
									<CardTitle>isAutoColor</CardTitle>
									<CardSubTitle>Progress</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-progress--default&args=value:18;isAutoColor:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isAutoColor: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									<div className='col-12'>
										<Popovers trigger='hover' desc='Value 1'>
											<Progress value={1} isAutoColor />
										</Popovers>
									</div>
									<div className='col-12'>
										<Popovers trigger='hover' desc='Value 24'>
											<Progress value={24} isAutoColor />
										</Popovers>
									</div>
									<div className='col-12'>
										<Popovers trigger='hover' desc='Value 25'>
											<Progress value={25} isAutoColor />
										</Popovers>
									</div>
									<div className='col-12'>
										<Popovers trigger='hover' desc='Value 49'>
											<Progress value={49} isAutoColor />
										</Popovers>
									</div>
									<div className='col-12'>
										<Popovers trigger='hover' desc='Value 50'>
											<Progress value={50} isAutoColor />
										</Popovers>
									</div>
									<div className='col-12'>
										<Popovers trigger='hover' desc='Value 74'>
											<Progress value={74} isAutoColor />
										</Popovers>
									</div>
									<div className='col-12'>
										<Popovers trigger='hover' desc='Value 75'>
											<Progress value={75} isAutoColor />
										</Popovers>
									</div>
									<div className='col-12'>
										<Popovers trigger='hover' desc='Value 100'>
											<Progress value={100} isAutoColor />
										</Popovers>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='FamilyRestroom' iconColor='success'>
									<CardTitle>children</CardTitle>
									<CardSubTitle>Progress</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-progress--multiple' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>children: PropTypes.node,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									<div className='col-12'>
										<Popovers
											trigger='hover'
											desc='Info 20, warning 35, success 10'>
											<Progress>
												<Progress value={20} color='info' />
												<Progress value={35} color='warning' />
												<Progress value={10} color='success' />
											</Progress>
										</Popovers>
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

export default ProgressPage;
