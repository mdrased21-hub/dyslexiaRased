import React from 'react';
import { NavLink } from 'react-router-dom';
import SubHeader, { SubHeaderLeft } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Card, {
	CardBody,
	CardCodeView,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../components/bootstrap/Card';
import CommonHowToUse from '../../../components/common/CommonHowToUse';
import Icon from '../../../components/icon/Icon';
import CommonDesc from '../../../components/common/CommonDesc';
import { componentsMenu } from '../../../menu';

const _generalUsage = `<Icon
	icon={ String }
	className={ String }
	color={ String } // null || 'primary' || 'secondary' || 'success' || 'info' || 'warning' || 'danger' || 'light' || 'dark'
	size={ String } // null || 'sm' || 'md' || 'lg' || '2x' || '3x' || '4x' || '5x' || '6x' || '7x' || '8x' || '9x' || '10x'
	forceFamily={ String } // null || 'custom' || 'material' || 'bootstrap'
	{...props} />`;
const _colors = [
	null,
	'primary',
	'secondary',
	'success',
	'info',
	'warning',
	'danger',
	'light',
	'dark',
];
const _sizes = [null, 'sm', 'md', 'lg', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'];

const IconPage = () => {
	return (
		<PageWrapper title={componentsMenu.icons.subMenu.icon.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Icons', to: '/icons' },
							{ title: 'Icon', to: '/icons/icon' },
						]}
					/>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row'>
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
								<CardLabel icon='Lightbulb' iconColor='warning'>
									<CardTitle>icon</CardTitle>
									<CardSubTitle>Icon</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									<div>
										icon: PropTypes.oneOfType([ PropTypes.string,
										PropTypes.oneOf(...)])
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
								<div className='row g-4 d-flex align-items-center'>
									<div className='col-auto'>
										<Icon icon='Save' size='3x' />
									</div>
									<div className='col-auto'>
										<Icon icon='Edit' size='3x' />
									</div>
									<div className='col-auto'>
										<Icon icon='Delete' size='3x' />
									</div>
									<div className='col-auto'>
										<Icon icon='Person' size='3x' />
									</div>
									<div className='col-auto'>
										<Icon icon='Favorite' size='3x' />
									</div>
									<div className='col-auto'>
										<Icon icon='AreaChart' size='3x' />
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
									<CardSubTitle>Icon</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									color: PropTypes.oneOf([ null, 'primary', 'secondary',
									'success', 'info', 'warning', 'danger', 'light', 'dark', ]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									{_colors.map((item) => (
										<div key={item} className='col d-flex align-items-center'>
											<div className='row '>
												<div className='col-12 d-flex justify-content-center'>
													<Icon icon='Save' color={item} size='3x' />
												</div>
												<div className='col-12 d-flex justify-content-center'>
													<b>{item}</b>
												</div>
											</div>
										</div>
									))}
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Straighten'>
									<CardTitle>size</CardTitle>
									<CardSubTitle>Icon</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									size: PropTypes.oneOf([ null, 'sm', 'md', 'lg', '2x', '3x',
									'4x', '5x', '6x', '7x', '8x', '9x', '10x', ]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									{_sizes.map((item) => (
										<div key={item} className='col d-flex align-items-center'>
											<div className='row'>
												<div className='col-12 d-flex justify-content-center'>
													<Icon icon='Save' color='primary' size={item} />
												</div>
												<div className='col-12 d-flex justify-content-center'>
													<b>{item}</b>
												</div>
											</div>
										</div>
									))}
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Healing' iconColor='danger'>
									<CardTitle>forceFamily</CardTitle>
									<CardSubTitle>Icon</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<CommonHowToUse>
									forceFamily: PropTypes.oneOf([null, 'custom', 'material',
									'bootstrap']),
								</CommonHowToUse>
								<CommonDesc>
									In case of icon name conflict of icon packs, forceFamily can be
									used to use the icon pack you want. By default priority is
									custom &gt; material &gt; bootstrap.
								</CommonDesc>
							</CardBody>
							<CardBody>
								<div className='row g-4'>
									<div className='col-auto'>
										<div className='row'>
											<div className='col-12 d-flex justify-content-center'>
												<Icon icon='Alarm' color='primary' size='3x' />
											</div>
											<div className='col-12 d-flex justify-content-center'>
												<code>icon='Alarm'</code>
											</div>
										</div>
									</div>
									<div className='col-auto'>
										<div className='row'>
											<div className='col-12 d-flex justify-content-center'>
												<Icon
													icon='Alarm'
													forceFamily='bootstrap'
													color='primary'
													size='3x'
												/>
											</div>
											<div className='col-12 d-flex justify-content-center'>
												<code>icon='Alarm'</code>
											</div>
											<div className='col-12 d-flex justify-content-center'>
												<code>forceFamily='bootstrap'</code>
											</div>
										</div>
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

export default IconPage;
