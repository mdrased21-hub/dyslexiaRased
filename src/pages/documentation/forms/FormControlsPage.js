import React, { useEffect, useState } from 'react';
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
	CardFooterLeft,
	CardFooterRight,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../components/bootstrap/Card';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Textarea from '../../../components/bootstrap/forms/Textarea';
import CommonHowToUse from '../../../components/common/CommonHowToUse';
import CommonDesc from '../../../components/common/CommonDesc';
import Label from '../../../components/bootstrap/forms/Label';
import Button from '../../../components/bootstrap/Button';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from '../../../components/bootstrap/Modal';
import showNotification from '../../../components/extras/showNotification';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import CommonStoryLink from '../../../components/common/CommonStoryLink';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

const FormControlsPage = () => {
	const _generalUsage = `
<Input
	type={ String } // 'text' || 'email' || 'password' || 'file' || 'color' || 'date' || 'datetime-local' || 'hidden' || 'month' || 'number' || 'range' || 'search' || 'tel' || 'time' || 'url' || 'week'
	id={ String }
	name={ String }
	className={ String }
	placeholder={ String }
	autoComplete={ String }
	ariaDescribedby={ String }
	ariaLabelledby={ String }
	ariaLabel={ String }
	list={ Array } // ['...','...', ...]
	title={ String }
	size={ String } // null || 'sm' || 'lg'
	disabled={ Boolean }
	readOnly={ Boolean || String } // false || true || 'plaintext'
	multiple={ Boolean }
	value={ String || Object}
	onBlur={ Function }
	onChange={ Function }
	onFocus={ Function }
	onInput={ Function }
	onInvalid={ Function }
	onSelect={ Function }
 	{...props}/>`;
	const _generalUsage2 = `
<Textarea
	id={ String }
	name={ String }
	className={ String }
	placeholder={ String }
	autoComplete={ String }
	ariaDescribedby={ String }
	ariaLabelledby={ String }
	ariaLabel={ String }
	title={ String }
	size={ String } // null || 'sm' || 'lg'
	disabled={ Boolean }
	readOnly={ Boolean || String } // false || true || 'plaintext'
	value={ String || Object}
	onBlur={ Function }
	onChange={ Function }
	onFocus={ Function }
	onInput={ Function }
	onInvalid={ Function }
	onSelect={ Function }
 	{...props}/>`;

	const [modalStatus, setModalStatus] = useState(false);

	const formik = useFormik({
		initialValues: {
			formPrefix: '',
			formName: '',
			formMiddleName: '',
			formSurName: '',
			formEmailAddress: '',
			formPhone: '',
			formFile: '',
		},
		// eslint-disable-next-line no-unused-vars
		onSubmit: (values) => {
			// console.log(JSON.stringify(values, null, 2));
		},
	});

	const formikEvents = useFormik({
		initialValues: {
			exampleEvent: '',
			exampleEventTextarea: '',
		},
		// eslint-disable-next-line no-unused-vars
		onSubmit: (values) => {
			// console.log(JSON.stringify(values, null, 2));
		},
	});

	useEffect(() => {
		showNotification('Trigger onChange', 'This input trigger onChange');
		return () => {};
	}, [formikEvents.values.exampleEvent]);

	useEffect(() => {
		showNotification('Trigger onChange', 'This input trigger onChange');
		return () => {};
	}, [formikEvents.values.exampleEventTextarea]);

	const _types = [
		'text',
		'email',
		'password',
		'file',
		'color',
		'date',
		'datetime-local',
		'hidden',
		'month',
		'number',
		'range',
		'search',
		'tel',
		'time',
		'url',
		'week',
	];

	const _placeholderSupportTypes = [
		'text',
		'email',
		'password',
		'number',
		'search',
		'tel',
		'url',
	];

	return (
		<PageWrapper title={componentsMenu.forms.subMenu.formControl.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Forms', to: '/forms' },
							{ title: 'Form Controls', to: '/forms/form-controls' },
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<Dropdown>
						<DropdownToggle>
							<Button color='storybook' icon='CustomStorybook' isLight>
								Storybook
							</Button>
						</DropdownToggle>
						<DropdownMenu isAlignmentEnd>
							<DropdownItem>
								<CommonStoryLink to='/story/forms-input--default'>
									Input
								</CommonStoryLink>
							</DropdownItem>
							<DropdownItem>
								<CommonStoryLink to='/story/forms-textarea--default'>
									Textarea
								</CommonStoryLink>
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='DriveFileRename'>
									<CardTitle tag='h2'>Form controls</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<h3 className='text-muted'>
									Give textual form controls like <code>&#60;Input&#62;</code>s
									and <code>&#60;Textarea&#62;</code>s an upgrade with custom
									styles, sizing, focus states, and more.
								</h3>
							</CardBody>
							<CardHeader>
								<CardLabel icon='Assignment'>
									<CardTitle>General Usage</CardTitle>
									<CardSubTitle>Input and Textarea</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='row'>
									<div className='col-lg-6'>
										<CardCodeView className='h-100'>
											{_generalUsage}
										</CardCodeView>
									</div>
									<div className='col-lg-6'>
										<CardCodeView className='h-100'>
											{_generalUsage2}
										</CardCodeView>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					{/* tpye */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Brush'>
									<CardTitle>type</CardTitle>
									<CardSubTitle>Input</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-input--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									type: PropTypes.oneOf([ 'text', 'email', 'password', 'file',
									'color', 'date', 'datetime-local', 'hidden', 'month', 'number',
									'range', 'search', 'tel', 'time', 'url', 'week', ]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<form className='row g-4'>
									{_types.map((type) => (
										<div key={type} className='col-12'>
											<FormGroup
												id={`exampleTypes--${type}`}
												label={type}
												formText={
													<>
														The type of this input is <b>{type}</b>
													</>
												}
												isColForLabel
												labelClassName='col-sm-2 text-capitalize'
												childWrapperClassName='col-sm-10'>
												<Input
													type={type}
													autoComplete={
														['password', 'email'].includes(type)
															? (type === 'password' &&
																	'current-password') ||
															  (type === 'email' && 'username')
															: null
													}
													placeholder={`Supports ${type} type placeholder`}
													aria-label='.form-control-lg example'
												/>
											</FormGroup>
										</div>
									))}
								</form>
							</CardBody>
						</Card>
					</div>
					{/* placeholder */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Info' iconColor='info'>
									<CardTitle>placeholder</CardTitle>
									<CardSubTitle>Input and Textarea</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-input--with-placeholder' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>placeholder: PropTypes.string,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<form className='row g-4'>
									{_placeholderSupportTypes.map((type) => (
										<div key={type} className='col-12'>
											<FormGroup
												id={`exampleTypesPlaceholder--${type}`}
												label={type}
												formText={
													<>
														The type of this input is <b>{type}</b>
													</>
												}
												isColForLabel
												labelClassName='col-sm-2 text-capitalize'
												childWrapperClassName='col-sm-10'>
												<Input
													type={type}
													autoComplete={
														['password', 'email'].includes(type)
															? (type === 'password' &&
																	'current-password') ||
															  (type === 'email' && 'username')
															: null
													}
													placeholder={`Supports ${type} type placeholder`}
													aria-label='.form-control-lg example'
												/>
											</FormGroup>
										</div>
									))}
									<div className='col-12'>
										<FormGroup
											id='exampleTypesPlaceholder--textarea'
											label='textarea'
											formText={
												<>
													The type of this input is <b>textarea</b>
												</>
											}
											isColForLabel
											labelClassName='col-sm-2 text-capitalize'
											childWrapperClassName='col-sm-10'>
											<Textarea
												placeholder='Supports textarea type placeholder'
												aria-label='.form-control-lg example'
											/>
										</FormGroup>
									</div>
								</form>
							</CardBody>
						</Card>
					</div>

					{/* autoComplete */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='AutoFixHigh' iconColor='warning'>
									<CardTitle>autoComplete</CardTitle>
									<CardSubTitle>Input and Textarea</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-input--auto-complete' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>autoComplete: PropTypes.string,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<form className='row g-4'>
									<FormGroup className='col-12' id='exampleAC--name' label='Name'>
										<Input placeholder='Full Name' autoComplete='cc-name' />
									</FormGroup>
									<FormGroup
										className='col-6'
										id='exampleAC--cc-number'
										label='Credit Card Number'>
										<Input
											type='number'
											autoComplete='cc-number'
											placeholder='Digit Numbers'
											required
										/>
									</FormGroup>
									<FormGroup
										className='col-3'
										id='exampleAC--cvc-number'
										label='Name'>
										<Input
											type='number'
											autoComplete='cc-csc'
											placeholder='CVC Number'
											required
										/>
									</FormGroup>
									<FormGroup
										className='col-3'
										id='exampleAC--expiry'
										label='Expiry'>
										<Input
											type='text'
											autoComplete='cc-exp'
											placeholder='MM/YYYY'
											required
										/>
									</FormGroup>
								</form>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									Credit card form is shown as an example. For detailed usage, you
									can{' '}
									<a
										href='https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill'
										target='_blank'
										rel='noreferrer'>
										visit
									</a>
									.
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>
					{/* size */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Straighten'>
									<CardTitle>size</CardTitle>
									<CardSubTitle>Input and Textarea</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-input--default&args=size:sm' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									size: PropTypes.oneOf(['lg', 'sm']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row mb-4'>
									<FormGroup
										className='col'
										id='exampleSizeInputLg'
										label='Large input'>
										<Input
											size='lg'
											placeholder='Placeholder'
											aria-label='.form-control-lg example'
										/>
									</FormGroup>
									<FormGroup
										className='col'
										id='exampleSizeInput'
										label='Default input'>
										<Input
											placeholder='Placeholder'
											aria-label='default size example'
										/>
									</FormGroup>
									<FormGroup
										className='col'
										id='exampleSizeInputSm'
										label='Small input'>
										<Input
											size='sm'
											placeholder='Placeholder'
											aria-label='.form-control-sm example'
										/>
									</FormGroup>
								</div>
								<div className='row'>
									<FormGroup
										className='col'
										id='exampleSizeTextareaLg'
										label='Large textarea'>
										<Textarea size='lg' placeholder='Placeholder' />
									</FormGroup>
									<FormGroup
										className='col'
										id='exampleSizeTextarea'
										label='Default textarea'>
										<Textarea placeholder='Placeholder' />
									</FormGroup>
									<FormGroup
										className='col'
										id='exampleSizeTextareaLg'
										label='Small textarea'>
										<Textarea size='sm' placeholder='Placeholder' />
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

					{/* disable */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='GppBad' iconColor='danger'>
									<CardTitle>disabled</CardTitle>
									<CardSubTitle>Input and Textarea</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-input--default&args=disabled:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>disabled: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4 mb-4'>
									<FormGroup
										className='col'
										id='exampleDisableInput'
										label='Disabled input'>
										<Input
											placeholder='disabled input'
											aria-label='Disabled input example'
											disabled
										/>
									</FormGroup>
									<FormGroup
										className='col'
										id='exampleDisableReadOnlyInput'
										label='Disabled and readOnly input'>
										<Input
											placeholder='disabled readOnly input'
											aria-label='Disabled input example'
											disabled
											readOnly
										/>
									</FormGroup>
								</div>
								<div className='row g-4'>
									<FormGroup
										className='col'
										id='exampleDisableTextarea'
										label='Disabled textarea'>
										<Textarea
											placeholder='disabled textarea'
											aria-label='Disabled textarea example'
											disabled
										/>
									</FormGroup>
									<FormGroup
										className='col'
										id='exampleDisableReadOnlyTextarea'
										label='Disabled and readOnly textarea'>
										<Textarea
											placeholder='disabled readOnly textarea'
											aria-label='Disabled textarea example'
											disabled
											readOnly
										/>
									</FormGroup>
								</div>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									<p>
										Add the <code>disabled</code> boolean attribute on an input
										to give it a grayed out appearance and remove pointer
										events.
									</p>
									<p>
										A <code>disabled</code> element isn't editable and isn't
										sent on submit.
									</p>
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>
					{/* readOnly */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Visibility' iconColor='info'>
									<CardTitle>readOnly</CardTitle>
									<CardSubTitle>Input and Textarea</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-input--default&args=readOnly:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									readOnly: PropTypes.oneOfType([PropTypes.bool,
									PropTypes.oneOf(['plaintext'])]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Card className='rad'>
									<CardHeader>
										<CardLabel>
											<CardTitle>
												readOnly <small>true</small>
											</CardTitle>
											<CardSubTitle>Input and Textarea</CardSubTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<FormGroup
											id='exampleReadOnlyInput'
											label='Read only input'>
											<Input
												placeholder='Readonly input here...'
												aria-label='readonly input example'
												readOnly
											/>
										</FormGroup>
									</CardBody>
									<CardFooter>
										<CommonDesc>
											Add the <code>readOnly</code> boolean attribute on an
											input to prevent modification of the input’s value.
											Read-only inputs appear lighter (just like disabled
											inputs), but retain the standard cursor.
										</CommonDesc>
									</CardFooter>
								</Card>
								<Card>
									<CardHeader>
										<CardLabel>
											<CardTitle>
												readOnly <small>"plaintext'</small>
											</CardTitle>
											<CardSubTitle>Input and Textarea</CardSubTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<FormGroup
											id='staticEmail'
											label='Email'
											formText='This email address is an input value'>
											<Input
												readOnly='plaintext'
												value='email@example.com'
												autoComplete='username'
											/>
										</FormGroup>
									</CardBody>
									<CardFooter>
										<CommonDesc>
											If you want to have{' '}
											<code>&#60;Input readOnly/&#62;</code> components in
											your form styled as plain text, use the{' '}
											<code>readOnly="plaintext"</code> props to remove the
											default form field styling and preserve the correct
											margin and padding.
										</CommonDesc>
									</CardFooter>
								</Card>
							</CardBody>
						</Card>
					</div>
					{/* value */}
					<div className='col-lg-6'>
						<Card stretch tag='form' onSubmit={formik.handleSubmit}>
							<CardHeader>
								<CardLabel icon='EditAttributes' iconColor='info'>
									<CardTitle>value</CardTitle>
									<CardSubTitle>Input and Textarea</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<FormGroup className='col-md-2' id='formPrefix' label='Prefix'>
										<Input
											placeholder='Dr.'
											autoComplete='honorific-prefix'
											onChange={formik.handleChange}
											value={formik.values.formPrefix}
										/>
									</FormGroup>
									<FormGroup className='col-md-3' id='formName' label='Name'>
										<Input
											placeholder='Timothy'
											autoComplete='given-name'
											onChange={formik.handleChange}
											value={formik.values.formName}
										/>
									</FormGroup>
									<FormGroup
										className='col-md-3'
										id='formMiddleName'
										label='Middle Name'>
										<Input
											placeholder='John'
											autoComplete='additional-name'
											onChange={formik.handleChange}
											value={formik.values.formMiddleName}
										/>
									</FormGroup>
									<FormGroup
										className='col-md-4'
										id='formSurName'
										label='Sur Name'>
										<Input
											placeholder='Doe'
											autoComplete='family-name'
											onChange={formik.handleChange}
											value={formik.values.formSurName}
										/>
									</FormGroup>
									<FormGroup
										className='col-lg-6'
										id='formEmailAddress'
										label='Email Address'>
										<Input
											type='email'
											placeholder='john@domain.com'
											autoComplete='email'
											onChange={formik.handleChange}
											value={formik.values.formEmailAddress}
										/>
									</FormGroup>
									<FormGroup className='col-lg-6' id='formPhone' label='Phone'>
										<Input
											type='tel'
											placeholder='+1 (999) 999-9999'
											autoComplete='tel'
											mask='+1 (999) 999-9999'
											onChange={formik.handleChange}
											value={formik.values.formPhone}
										/>
									</FormGroup>
									<FormGroup
										className='col-12'
										id='formFile'
										label='Profile picture'>
										<Input
											type='file'
											onChange={formik.handleChange}
											value={formik.values.formFile}
										/>
									</FormGroup>
								</div>
							</CardBody>
							<CardFooter>
								<CardFooterLeft>
									<Button
										type='reset'
										color='info'
										isOutline
										onClick={formik.resetForm}>
										Reset
									</Button>
								</CardFooterLeft>
								<CardFooterRight>
									<Button
										type='submit'
										color='info'
										onClick={() => setModalStatus(true)}>
										Submit
									</Button>
								</CardFooterRight>
							</CardFooter>
						</Card>
					</div>
					{/* list */}
					<div className='col-lg-6'>
						<Card>
							<CardHeader>
								<CardLabel icon='Assignment'>
									<CardTitle>list</CardTitle>
									<CardSubTitle>Input</CardSubTitle>
								</CardLabel>

								<CardActions>
									<CommonStoryBtn to='/story/forms-input--with-list' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									list: PropTypes.arrayOf(PropTypes.string),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Label htmlFor='exampleDataList'>Datalist example</Label>
								<Input
									list={[
										'San Francisco',
										'New York',
										'Seattle',
										'Los Angeles',
										'Chicago',
									]}
									id='exampleDataList'
									placeholder='Type to search...'
								/>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									<p>
										Datalists allow you to create a group of{' '}
										<code>&#60;option&#62;</code>s that can be accessed (and
										autocompleted) from within an <code>&#60;input&#62;</code>.
										These are similar to <code>&#60;select&#62;</code> elements,
										but come with more menu styling limitations and differences.
										While most browsers and operating systems include some
										support for <code>&#60;datalist&#62;</code> elements, their
										styling is inconsistent at best.
									</p>
									<p>
										Learn more about{' '}
										<a
											href='https://caniuse.com/datalist'
											target='_blank'
											rel='noreferrer'>
											support for datalist elements.
										</a>
									</p>
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card tag='form' onSubmit={formikEvents.handleSubmit}>
							<CardHeader>
								<CardLabel icon='Bolt' iconColor='warning'>
									<CardTitle>
										onBlur, onChange, onFocus, onInput, onInvalid, onSelect,
									</CardTitle>
									<CardSubTitle>Input and Textarea</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									<div>onBlur: PropTypes.func,</div>
									<div>onChange: PropTypes.func,</div>
									<div>onFocus: PropTypes.func,</div>
									<div>onInput: PropTypes.func,</div>
									<div>onInvalid: PropTypes.func,</div>
									<div>onSelect: PropTypes.func,</div>
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<FormGroup id='exampleEvent' className='col-12' label='Events'>
										<Input
											required
											placeholder='Type to search...'
											value={formik.values.exampleEvent}
											onBlur={() =>
												showNotification(
													'Trigger onBlur',
													'This input trigger onBlur',
												)
											}
											onChange={formikEvents.handleChange}
											onFocus={() =>
												showNotification(
													'Trigger onFocus',
													'This input trigger onFocus',
												)
											}
											onInput={() =>
												showNotification(
													'Trigger onInput',
													'This input trigger onInput',
												)
											}
											onInvalid={() =>
												showNotification(
													'Trigger onInvalid',
													'This input trigger onInvalid',
												)
											}
											onSelect={() =>
												showNotification(
													'Trigger onFocus',
													'This input trigger onSelect',
												)
											}
										/>
									</FormGroup>
									<FormGroup
										id='exampleEventTextarea'
										className='col-12'
										label='Events'>
										<Textarea
											required
											placeholder='Type to search...'
											onBlur={() =>
												showNotification(
													'Trigger onBlur',
													'This input trigger onBlur',
												)
											}
											onChange={formikEvents.handleChange}
											onFocus={() =>
												showNotification(
													'Trigger onFocus',
													'This input trigger onFocus',
												)
											}
											onInput={() =>
												showNotification(
													'Trigger onInput',
													'This input trigger onInput',
												)
											}
											onInvalid={() =>
												showNotification(
													'Trigger onInvalid',
													'This input trigger onInvalid',
												)
											}
											onSelect={() =>
												showNotification(
													'Trigger onFocus',
													'This input trigger onSelect',
												)
											}
										/>
									</FormGroup>
								</div>
							</CardBody>
							<CardFooter>
								<CardFooterRight>
									<Button type='submit' color='info'>
										Submit
									</Button>
								</CardFooterRight>
							</CardFooter>
							<CardFooter>
								<CommonDesc>
									<ul>
										<li>
											<b>onBlur</b> Fires the moment that the element loses
											focus
										</li>
										<li>
											<b>onChange</b> Fires the moment when the value of the
											element is changed
										</li>
										<li>
											<b>onFocus</b> Fires the moment when the element gets
											focus
										</li>
										<li>
											<b>onInput</b> Script to be run when an element gets
											user input
										</li>
										<li>
											<b>onInvalid</b> Script to be run when an element is
											invalid
										</li>
										<li>
											<b>onSelect</b> Fires after some text has been selected
											in an element
										</li>
									</ul>
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>

					<Modal
						isOpen={modalStatus}
						setIsOpen={setModalStatus}
						titleId='exampleModalLabel'>
						<ModalHeader>
							<ModalTitle id='exampleModalLabel'>Form Values</ModalTitle>
						</ModalHeader>
						<ModalBody>
							<div className='row g-4'>
								<div className='col-3'>
									<b>Name:</b>
								</div>
								<div className='col-9'>
									{formik.values.formPrefix && `${formik.values.formPrefix} `}
									{formik.values.formName && `${formik.values.formName} `}
									{formik.values.formMiddleName &&
										`${formik.values.formMiddleName} `}
									{formik.values.formSurName}
								</div>
								<div className='col-3'>
									<b>Mail:</b>
								</div>
								<div className='col-9'>{formik.values.formEmailAddress}</div>
								<div className='col-3'>
									<b>Phone:</b>
								</div>
								<div className='col-9'>{formik.values.formPhone}</div>
							</div>
						</ModalBody>
						<ModalFooter>
							<Button
								color='info'
								isOutline
								className='border-0'
								onClick={() => setModalStatus(false)}>
								Close
							</Button>
						</ModalFooter>
					</Modal>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default FormControlsPage;
