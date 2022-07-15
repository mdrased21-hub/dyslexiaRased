import React from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useFormik } from 'formik';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import { componentsMenu } from '../../../menu';
import Icon from '../../../components/icon/Icon';
import useDarkMode from '../../../hooks/useDarkMode';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Input from '../../../components/bootstrap/forms/Input';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';

const ChartsListPage = () => {
	const { darkModeStatus } = useDarkMode();

	const charts = componentsMenu.charts.subMenu;

	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			searchInput: '',
		},
		onSubmit: () => {},
	});

	return (
		<PageWrapper title={`${componentsMenu.charts.text} List`}>
			<SubHeader>
				<SubHeaderLeft>
					<label
						className='border-0 bg-transparent cursor-pointer me-0'
						htmlFor='searchInput'>
						<Icon icon='Search' size='2x' color='primary' />
					</label>
					<Input
						id='searchInput'
						type='search'
						className='border-0 shadow-none bg-transparent'
						placeholder='Search...'
						onChange={formik.handleChange}
						value={formik.values.searchInput}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/docs/' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					{Object.keys(charts)
						.filter((key) =>
							charts[key].text
								.toLowerCase()
								.includes(formik.values.searchInput.toLowerCase()),
						)
						.map((i) => (
							<div key={charts[i].id} className='col-md-3'>
								<Card
									className={classNames('cursor-pointer transition-base', {
										'bg-lo25-info-hover': darkModeStatus,
										'bg-l25-info-hover': !darkModeStatus,
									})}
									onClick={() => navigate(`../${charts[i].path}`)}>
									<CardBody>
										<div className='d-flex align-items-center'>
											<div className='flex-shrink-0'>
												<div
													className='ratio ratio-1x1'
													style={{ width: 72 }}>
													<div
														className={classNames(
															'rounded-2 d-flex align-items-center justify-content-center',
															{
																'bg-lo25-info': darkModeStatus,
																'bg-l25-info': !darkModeStatus,
															},
														)}>
														<span className='text-info fs-1 fw-bold'>
															<Icon icon={charts[i].icon} />
														</span>
													</div>
												</div>
											</div>
											<div className='flex-grow-1 ms-3 d-flex justify-content-between align-items-center'>
												<div>
													<div className='fw-bold fs-5 mb-0'>
														{charts[i].text}
													</div>
												</div>
											</div>
										</div>
									</CardBody>
								</Card>
							</div>
						))}
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ChartsListPage;
