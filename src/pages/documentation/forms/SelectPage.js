import React from 'react';
import { useFormik } from 'formik';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
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
import Select from '../../../components/bootstrap/forms/Select';
import Option, { Options } from '../../../components/bootstrap/Option';
import CommonDesc from '../../../components/common/CommonDesc';
import CommonHowToUse from '../../../components/common/CommonHowToUse';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Label from '../../../components/bootstrap/forms/Label';
import Button from '../../../components/bootstrap/Button';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

export const _selectOptions = [
	{ value: 1, text: 'One' },
	{ value: 2, text: 'Two' },
	{ value: 3, text: 'Three' },
	{ value: 4, text: 'Four' },
	{ value: 5, text: 'Five' },
	{ value: 6, text: 'Six' },
];

const SelectPage = () => {
	const _generalUsage = `
<Select
	id={ String }
	name={ String }
	className={ String }
	placeholder={ String }
	required={ Boolean }
	ariaDescribedby={ String }
	ariaLabelledby={ String }
	ariaLabel={ String }
	list={ Array } // [ {value: String, text: String}, ... ]
	multiple={ Boolean }
	title={ String }
	size={ String } // null || 'sm' || 'lg'
	disabled={ Boolean }
	value={ String || Object}
	defaultValue={ String || Array} // '...' || [ {value: String, text: String}, ... ]
	onBlur={ Function }
	onChange={ Function }
	onFocus={ Function }
	onInput={ Function }
	onInvalid={ Function }
	onSelect={ Function }
 	{...props} />`;
	const _generalUsage3 = `
<Select
	id={ String }
	name={ String }
	className={ String }
	placeholder={ String }
	required={ Boolean }
	ariaDescribedby={ String }
	ariaLabelledby={ String }
	ariaLabel={ String }
	list={null}
	multiple={ Boolean }
	title={ String }
	size={ String } // null || 'sm' || 'lg'
	disabled={ Boolean }
	value={ String || Object }
	defaultValue={ String || Array } // '...' || [ {value: String, text: String}, ... ]
	onBlur={ Function }
	onChange={ Function }
	onFocus={ Function }
	onInput={ Function }
	onInvalid={ Function }
	onSelect={ Function }
 	{...props}>
		<Option value={ String }>...</Option>
		...
</Select>`;
	const _generalUsage2 = `
<Select
	id={ String }
	name={ String }
	className={ String }
	placeholder={ String }
	required={ Boolean }
	ariaDescribedby={ String }
	ariaLabelledby={ String }
	ariaLabel={ String }
	list={null}
	multiple={ Boolean }
	title={ String }
	size={ String } // null || 'sm' || 'lg'
	disabled={ Boolean }
	value={ String || Object }
	defaultValue={ String || Array } // '...' || [ {value: String, text: String}, ... ]
	onBlur={ Function }
	onChange={ Function }
	onFocus={ Function }
	onInput={ Function }
	onInvalid={ Function }
	onSelect={ Function }
 	{...props}>
 		<Options list={ Array } />
</Select>`;

	const _firstWay = (
		<a href='#firstWay' className='text-decoration-none'>
			<sup>[1]</sup>
		</a>
	);
	const _secondWay = (
		<a href='#secondWay' className='text-decoration-none'>
			<sup>[2]</sup>
		</a>
	);
	const _thirdWay = (
		<a href='#thirdWay' className='text-decoration-none'>
			<sup>[3]</sup>
		</a>
	);

	const formikOneWay = useFormik({
		initialValues: {
			exampleSelectOneWay: '',
		},
		onSubmit: (values) => {
			// eslint-disable-next-line no-alert
			alert(JSON.stringify(values, null, 2));
		},
	});

	const formikTwoWay = useFormik({
		initialValues: {
			exampleSelectTwoWay: '',
		},
		onSubmit: (values) => {
			// eslint-disable-next-line no-alert
			alert(JSON.stringify(values, null, 2));
		},
	});

	const formikThreeWay = useFormik({
		initialValues: {
			exampleSelectThreeWay: '',
		},
		onSubmit: (values) => {
			// eslint-disable-next-line no-alert
			alert(JSON.stringify(values, null, 2));
		},
	});

	const formikTwo = useFormik({
		initialValues: {
			exampleMultiSelect: ['1', '2'],
		},
		onSubmit: (values) => {
			// eslint-disable-next-line no-alert
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<PageWrapper title={componentsMenu.forms.subMenu.select.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Forms', to: '/forms' },
							{ title: 'Select', to: '/forms/select' },
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/docs/forms-select--default' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='Assignment'>
									<CardTitle tag='h2'>Select</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<h3 className='text-muted'>
									Customize the native <code>&#60;select&#62;</code>s with custom
									props and CSS that changes the element’s initial appearance.
								</h3>
							</CardBody>
							<CardHeader>
								<CardLabel icon='Assignment'>
									<CardTitle>General Usage</CardTitle>
									<CardSubTitle>Select, Options and Option</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-lg-4'>
										<h4 id='firstWay' className='scroll-margin'>
											1. Way
										</h4>
										<CardCodeView>{_generalUsage}</CardCodeView>
									</div>
									<div className='col-lg-4'>
										<h4 id='secondWay' className='scroll-margin'>
											2. Way
										</h4>
										<CardCodeView>{_generalUsage2}</CardCodeView>
									</div>
									<div className='col-lg-4'>
										<h4 id='thirdWay' className='scroll-margin'>
											3. Way
										</h4>
										<CardCodeView>{_generalUsage3}</CardCodeView>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card>
							<CardBody>
								<div className='row g-4'>
									<div className='col-md-4'>
										<Card
											className='mb-0'
											stretch
											tag='form'
											onSubmit={formikOneWay.handleSubmit}>
											<CardHeader>
												<CardLabel icon='Ballot'>
													<CardTitle>list {_firstWay}</CardTitle>
													<CardSubTitle>Select</CardSubTitle>
												</CardLabel>
												<CardActions>
													<CommonStoryBtn to='/story/forms-select--default' />
												</CardActions>
											</CardHeader>
											<CardHeader>
												<CommonHowToUse>
													<div>list: PropTypes.arrayOf(</div>
													<div className='ps-3'>
														PropTypes.shape({`{`}
													</div>
													<div className='ps-3'>
														<div className='ps-3'>
															value: PropTypes.oneOfType([
															PropTypes.string, PropTypes.number]),
														</div>
														<div className='ps-3'>
															text: PropTypes.oneOfType([
															PropTypes.string, PropTypes.number]),
														</div>
														<div className='ps-3'>
															label: PropTypes.oneOfType([
															PropTypes.string, PropTypes.number]),
														</div>
													</div>
													<div className='ps-3'>{`}`}),</div>
													<div>),</div>
												</CommonHowToUse>
											</CardHeader>
											<CardBody>
												<div className='row g-4'>
													<FormGroup
														id='exampleSelectOneWay'
														label='Please select'
														className='col-12'>
														<Select
															ariaLabel='Default select example'
															placeholder='Open this select menu'
															onChange={formikOneWay.handleChange}
															value={
																formikOneWay.values
																	.exampleSelectOneWay
															}
															list={_selectOptions}
														/>
													</FormGroup>
													<div className='col-12 d-flex justify-content-md-end'>
														<Button type='submit' color='info'>
															Submit
														</Button>
													</div>
												</div>
											</CardBody>
										</Card>
									</div>
									<div className='col-md-4'>
										<Card
											className='mb-0'
											stretch
											tag='form'
											onSubmit={formikTwoWay.handleSubmit}>
											<CardHeader>
												<CardLabel icon='Ballot'>
													<CardTitle>list {_secondWay}</CardTitle>
													<CardSubTitle>Options</CardSubTitle>
												</CardLabel>
												<CardActions>
													<CommonStoryBtn to='/story/forms-select--second-way' />
												</CardActions>
											</CardHeader>
											<CardHeader>
												<CommonHowToUse>
													<div>list: PropTypes.arrayOf(</div>
													<div className='ps-3'>
														PropTypes.shape({`{`}
													</div>
													<div className='ps-3'>
														<div className='ps-3'>
															value: PropTypes.oneOfType([
															PropTypes.string, PropTypes.number]),
														</div>
														<div className='ps-3'>
															text: PropTypes.oneOfType([
															PropTypes.string, PropTypes.number]),
														</div>
														<div className='ps-3'>
															label: PropTypes.oneOfType([
															PropTypes.string, PropTypes.number]),
														</div>
													</div>
													<div className='ps-3'>{`}`}),</div>
													<div>),</div>
												</CommonHowToUse>
											</CardHeader>
											<CardBody>
												<div className='row g-4'>
													<FormGroup
														id='exampleSelectTwoWay'
														label='Please select'
														className='col-12'>
														<Select
															ariaLabel='Default select example'
															placeholder='Open this select menu'
															onChange={formikTwoWay.handleChange}
															value={
																formikTwoWay.values
																	.exampleSelectTwoWay
															}>
															<Options list={_selectOptions} />
														</Select>
													</FormGroup>
													<div className='col-12 d-flex justify-content-md-end'>
														<Button type='submit' color='info'>
															Submit
														</Button>
													</div>
												</div>
											</CardBody>
										</Card>
									</div>
									<div className='col-md-4'>
										<Card
											className='mb-0'
											stretch
											tag='form'
											onSubmit={formikThreeWay.handleSubmit}>
											<CardHeader>
												<CardLabel icon='Ballot'>
													<CardTitle>
														value & children {_thirdWay}
													</CardTitle>
													<CardSubTitle>Option</CardSubTitle>
												</CardLabel>
												<CardActions>
													<CommonStoryBtn to='/story/forms-select--third-way' />
												</CardActions>
											</CardHeader>
											<CardHeader>
												<CommonHowToUse>
													<div>
														children: PropTypes.string.isRequired,
													</div>
													<div>
														value:
														PropTypes.oneOfType([PropTypes.string,
														PropTypes.number]),
													</div>
												</CommonHowToUse>
											</CardHeader>
											<CardBody>
												<div className='row g-4'>
													<FormGroup
														id='exampleSelectThreeWay'
														label='Please select'
														className='col-12'>
														<Select
															ariaLabel='Default select example'
															placeholder='Open this select menu'
															onChange={formikThreeWay.handleChange}
															value={
																formikThreeWay.values
																	.exampleSelectThreeWay
															}>
															<Option value='1'>One</Option>
															<Option value='2'>Two</Option>
															<Option value='3'>Three</Option>
															<Option value='4'>Four</Option>
														</Select>
													</FormGroup>
													<div className='col-12 d-flex justify-content-md-end'>
														<Button type='submit' color='info'>
															Submit
														</Button>
													</div>
												</div>
											</CardBody>
										</Card>
									</div>
								</div>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									Custom <code>&#60;select&#62;</code> menus need only a custom
									class, .form-select to trigger the custom styles. Custom styles
									are limited to the <code>&#60;select&#62;</code>’s initial
									appearance and cannot modify the <code>&#60;option&#62;</code>s
									due to browser limitations.
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch tag='form' onSubmit={formikTwo.handleSubmit}>
							<CardHeader>
								<CardLabel icon='DynamicFeed'>
									<CardTitle>multiple</CardTitle>
									<CardSubTitle>Select</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-select--default&args=multiple:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>multiple: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<FormGroup
										id='exampleMultiSelect'
										label='Select one'
										className='col-12'>
										<Select
											ariaLabel='Default select example'
											multiple
											onChange={formikTwo.handleChange}
											value={formikTwo.values.exampleMultiSelect}>
											<Option value='1'>One</Option>
											<Option value='2'>Two</Option>
											<Option value='3'>Three</Option>
											<Option value='4'>Four</Option>
										</Select>
									</FormGroup>
									<div className='col-12 d-flex justify-content-md-end'>
										<Button type='submit' color='info'>
											Submit
										</Button>
									</div>
								</div>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									Selecting multiple options vary in different operating systems
									and browsers:
									<ul>
										<li>
											For windows: Hold down the <kbd>control</kbd> (ctrl)
											button to select multiple options
										</li>
										<li>
											For Mac: Hold down the <kbd>command</kbd> button to
											select multiple options
										</li>
									</ul>
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='GppBad' iconColor='danger'>
									<CardTitle>disabled</CardTitle>
									<CardSubTitle>Select</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-select--default&args=disabled:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>disabled: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<FormGroup>
									<Label htmlFor='smallSelect'>Disabled Select</Label>
									<Select
										id='smallSelect'
										ariaLabel='Default select example'
										placeholder='Open this select menu'
										disabled>
										<Option value='1'>One</Option>
										<Option value='2'>Two</Option>
										<Option value='3'>Three</Option>
									</Select>
								</FormGroup>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Straighten' iconColor='success'>
									<CardTitle>size</CardTitle>
									<CardSubTitle>Select</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-select--default&args=size:lg' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									size: PropTypes.oneOf(['lg', 'sm']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<FormGroup className='col-12'>
										<Label htmlFor='smallSelect'>Small</Label>
										<Select
											id='smallSelect'
											ariaLabel='Default select example'
											placeholder='Open this select menu'
											size='sm'>
											<Option value='1'>One</Option>
											<Option value='2'>Two</Option>
											<Option value='3'>Three</Option>
										</Select>
									</FormGroup>
									<FormGroup className='col-12'>
										<Label htmlFor='defaultSelect'>Default</Label>
										<Select
											id='defaultSelect'
											ariaLabel='Default select example'
											placeholder='Open this select menu'>
											<Option value='1'>One</Option>
											<Option value='2'>Two</Option>
											<Option value='3'>Three</Option>
										</Select>
									</FormGroup>
									<FormGroup className='col-12'>
										<Label htmlFor='largeSelect'>Large</Label>
										<Select
											id='largeSelect'
											ariaLabel='Default select example'
											placeholder='Open this select menu'
											size='lg'>
											<Option value='1'>One</Option>
											<Option value='2'>Two</Option>
											<Option value='3'>Three</Option>
										</Select>
									</FormGroup>
								</div>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									Set heights using size props like <code>lg</code> and{' '}
									<code>sm</code>.
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default SelectPage;
