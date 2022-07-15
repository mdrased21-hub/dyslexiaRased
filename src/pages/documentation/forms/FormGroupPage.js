import React, { useState } from 'react';
import { useFormik } from 'formik';
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
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Input from '../../../components/bootstrap/forms/Input';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import CommonDesc from '../../../components/common/CommonDesc';
import CommonHowToUse from '../../../components/common/CommonHowToUse';
import Label from '../../../components/bootstrap/forms/Label';
import FormText from '../../../components/bootstrap/forms/FormText';
import Button from '../../../components/bootstrap/Button';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from '../../../components/bootstrap/Modal';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import CommonStoryLink from '../../../components/common/CommonStoryLink';
import { componentsMenu } from '../../../menu';

const FormGroupPage = () => {
	const [modalStatus, setModalStatus] = useState(false);
	const [modalStatus2, setModalStatus2] = useState(false);

	const _generalUsage = `
<FormGroup
	tag={ String } // 'div' || 'section'
	isFloating={ Boolean }
	className={ String }
	id={ String }
	label={ String }
	formText={ String }
	isHiddenLabel={ Boolean }
	size={ String } // null || 'sm' || 'lg'
	isColForLabel={ Boolean }
	labelClassName={ String }
	childWrapperClassName={ String }>
	
	<Input {...props}/>
	{/* or */}
	<Select {...props}/>
	{/* or */}
	<Textarea {...props}/>
	
</FormGroup>`;
	const _generalUsage2 = `
<FormGroup
	tag={ String } // 'div' || 'section'
	isFloating={ Boolean }
	className={ String }
	id={null}
	label={null}
	isHiddenLabel={null}
	size={null}
	isColForLabel={null}
	labelClassName={null}
	childWrapperClassName={null}>
	<Label
		className={ String }
		htmlFor={ String }
		isColForLabel={ Boolean }
		isHidden={ Boolean }
		size={ String } // null || 'sm' || 'lg'
		>
		...
	</Label>
	
	<Input {...props}/>
	{/* or */}
	<Select {...props}/>
	{/* or */}
	<Textarea {...props}/>
	
	<FormText {...props}>...</FormText>
</FormGroup>`;

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

	const formik = useFormik({
		initialValues: {
			exampleColForLabelMail: 'email@example.com',
			exampleColForLabelPassword: '',
		},
		// eslint-disable-next-line no-unused-vars
		onSubmit: (values) => {
			// console.log(JSON.stringify(values, null, 2));
		},
	});
	const formik2 = useFormik({
		initialValues: {
			exampleColForLabelMail2: 'email@example.com',
			exampleColForLabelPassword2: '',
		},
		// eslint-disable-next-line no-unused-vars
		onSubmit: (values) => {
			// console.log(JSON.stringify(values, null, 2));
		},
	});

	return (
		<PageWrapper title={componentsMenu.forms.subMenu.formGroup.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Forms', to: '/forms' },
							{ title: 'Form Group', to: '/forms/form-group' },
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
								<CommonStoryLink to='/story/forms-formgroup-advance--default'>
									Basic
								</CommonStoryLink>
							</DropdownItem>
							<DropdownItem>
								<CommonStoryLink to='/story/forms-formgroup-basic--default'>
									Advance
								</CommonStoryLink>
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
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
									<CardSubTitle>
										FormGroup, Label, Input, Textarea and FormText
									</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-lg-6'>
										<h4 id='firstWay' className='scroll-margin'>
											1. Way (Basic)
										</h4>
										<CardCodeView>{_generalUsage}</CardCodeView>
									</div>
									<div className='col-lg-6'>
										<h4 id='secondWay' className='scroll-margin'>
											2. Way (Advance)
										</h4>
										<CardCodeView>{_generalUsage2}</CardCodeView>
									</div>
								</div>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									You can use the FormGroup component in two different ways. In
									the first way, you can customize it with html elements or
									components as you wish, but you should pay attention to htmlFor
									and id props for a11y. In the second way, it makes your job
									easier by making them automatically.
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>

					{/* label */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='FormatSize' iconColor='warning'>
									<CardTitle>label {_firstWay}</CardTitle>
									<CardSubTitle>FormGroup</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-formgroup-basic--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>label: PropTypes.string,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<FormGroup
									className='mb-3'
									id='exampleLabel'
									label='Name'
									formText='This has a label'>
									<Input placeholder='John Doe' />
								</FormGroup>
								<FormGroup
									className='mb-3'
									id='exampleLabelWithout'
									formText='This has no label'>
									<Input placeholder='Name' />
								</FormGroup>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='FormatSize' iconColor='warning'>
									<CardTitle>children {_secondWay}</CardTitle>
									<CardSubTitle>Label</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/docs/forms-formgroup-advance--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>children: PropTypes.node,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<FormGroup className='mb-3'>
									<Label htmlFor='exampleLabel2'>
										Name <b>with surname</b>
									</Label>
									<Input
										id='exampleLabel2'
										placeholder='John Doe'
										ariaDescribedby='exampleLabel2-text'
									/>
									<FormText id='exampleLabel2-text'>This has a label</FormText>
								</FormGroup>
								<FormGroup className='mb-3'>
									<Input
										id='exampleLabelWithout2'
										placeholder='Name'
										ariaDescribedby='exampleLabelWithout2-text'
									/>
									<FormText id='exampleLabelWithout2-text'>
										This has no label
									</FormText>
								</FormGroup>
							</CardBody>
						</Card>
					</div>

					{/* text */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Title' iconColor='success'>
									<CardTitle>formText {_firstWay}</CardTitle>
									<CardSubTitle>FormGroup</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-formgroup-basic--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>formText: PropTypes.string,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<p>
									It is very easy to use in the first method, just type what you
									want to write in the <code>formText</code> prop. It will
									automatically do what is required for the accessibility. You can
									click on the Storybook link above to review the code structure.
								</p>
								<FormGroup
									className='mb-3'
									id='exampleFormText'
									label='Name'
									formText='This is a form text'>
									<Input placeholder='John Doe' />
								</FormGroup>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Title' iconColor='success'>
									<CardTitle>children {_secondWay}</CardTitle>
									<CardSubTitle>FormText</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/docs/forms-formgroup-advance--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>children: PropTypes.node,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<FormGroup className='mb-3'>
									<p>
										The first method is very easy to use, just type what you
										want to write in <code>formText</code> prop. For
										accessibility you need to mark{' '}
										<code>{`<FormText {...props}/>`}</code> with{' '}
										<code>{`<Input {...props}/>`}</code>,{' '}
										<code>{`<Select {...props}/>`}</code> and{' '}
										<code>{`<Textarea {...props}/>`}</code> with{' '}
										<code>ariaDescribedby</code>. You can click on the Storybook
										link above to review the code structure.
									</p>
									<Label htmlFor='exampleFormText2'>Name</Label>
									<Input
										id='exampleFormText2'
										placeholder='John Doe'
										ariaDescribedby='exampleFormText2-text'
									/>
									<FormText id='exampleFormText2-text'>
										This is a form text
									</FormText>
								</FormGroup>
							</CardBody>
						</Card>
					</div>

					{/* isFloating */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ViewArray' iconColor='info'>
									<CardTitle>isFloating {_firstWay}</CardTitle>
									<CardSubTitle>FormGroup</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-formgroup-basic--float' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isFloating: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<p>
									It is very easy to use it in the first method, just set the
									isFloating value to true. You can click on the <b>Storybook</b>{' '}
									link above to examine the code structure.
								</p>
								<FormGroup
									className='mb-3'
									id='exampleFloat'
									label='Name'
									formText='When the value of isFloating is false'>
									<Input placeholder='John Doe' />
								</FormGroup>
								<FormGroup
									className='mb-3'
									id='exampleFloatFalse'
									label='Name'
									isFloating
									formText='When the value of isFloating is true'>
									<Input />
								</FormGroup>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									When the isFloating value is true, the placeholder cannot work.
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ViewArray' iconColor='info'>
									<CardTitle>isFloating {_secondWay}</CardTitle>
									<CardSubTitle>FormGroup</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-formgroup-advance--float' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isFloating: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<p>
									In the second method, you have to write some things yourself.
									For <code>{`<Label htmlFor='...'>...</Label>`}</code>, you must
									write the htmlFor value.You can click on the <b>Storybook</b>{' '}
									link above to examine the code structure.
								</p>
								<FormGroup className='mb-3'>
									<Label htmlFor='exampleFloat2'>Name</Label>
									<Input
										id='exampleFloat2'
										placeholder='John Doe'
										ariaDescribedby='exampleFloat2-text'
									/>
									<FormText id='exampleFloat2-text'>
										When the value of isFloating is false
									</FormText>
								</FormGroup>
								<FormGroup className='mb-3' isFloating>
									<Input
										id='exampleFloatFalse2'
										ariaDescribedby='exampleFloatFalse2-text'
										placeholder='Name'
									/>
									<Label htmlFor='exampleFloatFalse2'>Name</Label>
									<FormText id='exampleFloatFalse2-text'>
										When the value of isFloating is true
									</FormText>
								</FormGroup>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									Wrap a pair of{' '}
									<code>{`<Input {...props}>, <Select {...props}`}</code> or{' '}
									<code>{`<Textarea {...props} />`}</code> and{' '}
									<code>{`<Label>`}</code> component in{' '}
									<code>{`<FormGroup isFloating {...props}>...</FormGroup>`}</code>{' '}
									to enable floating labels with Bootstrap’s textual form fields.
									A <code>placeholder</code> is required on each{' '}
									<code>{`<input>`}</code> as our method of CSS-only floating
									labels uses the <code>:placeholder-shown</code> pseudo-element.
									Also note that the{' '}
									<code>{`<Input {...props}>, <Select {...props}`}</code> or{' '}
									<code>{`<Textarea {...props} />`}</code> must come first so we
									can utilize a sibling selector (e.g., <code>~</code>).{' '}
									<a
										href='https://getbootstrap.com/docs/5.0/forms/floating-labels/'
										rel='noreferrer'
										target='_blank'>
										Read more on Bootstrap.
									</a>
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>

					{/* isHiddenLabel */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='VisibilityOff' iconColor='danger'>
									<CardTitle>isHiddenLabel {_firstWay}</CardTitle>
									<CardSubTitle>FormGroup</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-formgroup-basic--hidden-label' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isHiddenLabel: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<FormGroup label='Name' id='exampleHiddenLabel' isHiddenLabel>
									<Input placeholder='Name' ariaLabelledby='Name' />
								</FormGroup>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									<p>
										Ensure that all form controls have an appropriate accessible
										name so that their purpose can be conveyed to users of
										assistive technologies. The simplest way to achieve this is
										to use a <code>{`<Label>`}</code> component, or—in the case
										of buttons—to include sufficiently descriptive text as part
										of the <code>{`<Button>...</Button>`}</code> content.
									</p>
									<p>
										For situations where it’s not possible to include a visible{' '}
										<code>{`<Label>`}</code> or appropriate text content, there
										are alternative ways of still providing an accessible name,
										such as:
									</p>
									<ul>
										<li>
											<code>{`<Label>`}</code> components hidden using the{' '}
											<code>
												isHiddenLabel <sup>[.visually-hidden]</sup>
											</code>{' '}
											prop
										</li>
										<li>
											Pointing to an existing element that can act as a label
											using <code>aria-labelledby</code>
										</li>
										<li>
											Providing a <code>title</code> attribute
										</li>
										<li>
											Explicitly setting the accessible name on an element
											using <code>aria-label</code>
										</li>
									</ul>
									<p>
										If none of these are present, assistive technologies may
										resort to using the placeholder attribute as a fallback for
										the accessible name on <code>{`<Input>`}</code> and{' '}
										<code>{`<Textarea>`}</code> components.
									</p>
									<p>
										While using visually hidden content (
										<code>isHiddenLabel</code>, <code>aria-label</code>, and
										even <code>placeholder</code> content, which disappears once
										a form field has content) will benefit assistive technology
										users, a lack of visible label text may still be problematic
										for certain users. Some form of visible label is generally
										the best approach, both for accessibility and usability.{' '}
										<a
											href='https://getbootstrap.com/docs/5.0/forms/overview/#accessibility'
											rel='noreferrer'
											target='_blank'>
											Read more on Bootstrap.
										</a>
									</p>
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>
					{/* isHidden */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='VisibilityOff' iconColor='danger'>
									<CardTitle>isHidden {_secondWay}</CardTitle>
									<CardSubTitle>Label</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-formgroup-advance--hidden-label' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isHidden: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<FormGroup>
									<Label htmlFor='exampleHiddenLabel2' isHidden>
										Name
									</Label>
									<Input
										id='exampleHiddenLabel2'
										placeholder='Name'
										ariaLabelledby='Name'
									/>
								</FormGroup>
							</CardBody>
						</Card>
					</div>

					{/* size */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Straighten' iconColor='info'>
									<CardTitle>size {_firstWay}</CardTitle>
									<CardSubTitle>FormGroup</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-formgroup-basic--size-sm' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									size: PropTypes.oneOf([null, 'lg', 'sm']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<FormGroup
									className='mb-3'
									id='exampleSizeSm'
									label='Name'
									size='sm'
									formText='This is a small field'>
									<Input placeholder='John Doe' />
								</FormGroup>
								<FormGroup
									className='mb-3'
									id='exampleSize'
									label='Name'
									formText='This is a default field'>
									<Input placeholder='John Doe' />
								</FormGroup>
								<FormGroup
									className='mb-3'
									id='exampleSizeLg'
									label='Name'
									size='lg'
									formText='This is a large field'>
									<Input placeholder='John Doe' />
								</FormGroup>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Straighten' iconColor='info'>
									<CardTitle>size {_secondWay}</CardTitle>
									<CardSubTitle>Input, Select or Textarea</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-formgroup-advance--size-sm' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									size: PropTypes.oneOf([null, 'lg', 'sm']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<FormGroup className='mb-3'>
									<Label htmlFor='exampleSizeSm2'>Name</Label>
									<Input
										id='exampleSizeSm2'
										placeholder='John Doe'
										size='sm'
										ariaDescribedby='exampleSizeSm2-text'
									/>
									<FormText id='exampleSizeSm2-text'>
										This is a small field
									</FormText>
								</FormGroup>
								<FormGroup className='mb-3'>
									<Label htmlFor='exampleSize2'>Name</Label>
									<Input
										id='exampleSize2'
										placeholder='John Doe'
										size='sm'
										ariaDescribedby='exampleSize2-text'
									/>
									<FormText id='exampleSize2-text'>
										This is a default field
									</FormText>
								</FormGroup>
								<FormGroup className='mb-3'>
									<Label htmlFor='exampleSizeLg2'>Name</Label>
									<Input
										id='exampleSizeLg2'
										placeholder='John Doe'
										size='lg'
										ariaDescribedby='exampleSizeLg2-text'
									/>
									<FormText id='exampleSizeLg2-text'>
										This is a large field
									</FormText>
								</FormGroup>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ViewColumn'>
									<CardTitle>
										isColForLabel, labelClassName and childWrapperClassName{' '}
										{_firstWay}
									</CardTitle>
									<CardSubTitle>FormGroup</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-formgroup-basic--col-use' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									<div>isColForLabel: PropTypes.bool,</div>
									<div>labelClassName: PropTypes.string,</div>
									<div>childWrapperClassName: PropTypes.string,</div>
								</CommonHowToUse>
							</CardHeader>
							<CardBody tag='form' onSubmit={formik.handleSubmit}>
								<FormGroup
									className='mb-3'
									id='exampleColForLabelMail'
									label='Email'
									labelClassName='col-sm-2'
									isColForLabel
									childWrapperClassName='col-sm-10'>
									<Input
										readOnly='plaintext'
										autoComplete='username'
										onChange={formik.handleChange}
										value={formik.values.exampleColForLabelMail}
									/>
								</FormGroup>
								<FormGroup
									className='mb-3'
									id='exampleColForLabelPassword'
									label='Password'
									isColForLabel
									labelClassName='col-sm-2'
									childWrapperClassName='col-sm-10'>
									<Input
										type='password'
										autoComplete='current-password'
										onChange={formik.handleChange}
										value={formik.values.exampleColForLabelPassword}
									/>
								</FormGroup>
								<div className='row'>
									<div className='col-12'>
										<Button
											type='submit'
											color='primary'
											isLight
											onClick={() => setModalStatus(true)}>
											Submit
										</Button>
									</div>
								</div>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									In this use, it automatically adds the <code>row</code> class to
									the{' '}
									<code>{`<FormGroup isColForLabel {...props}>...</FormGroup>`}</code>
									.
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ViewColumn'>
									<CardTitle>isColForLabel {_secondWay}</CardTitle>
									<CardSubTitle>Label</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-formgroup-advance--col-use' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isColForLabel: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody tag='form' onSubmit={formik2.handleSubmit}>
								<FormGroup className='mb-3 row'>
									<Label
										htmlFor='exampleColForLabelMail2'
										className='col-sm-2'
										isColForLabel>
										Email
									</Label>
									<div className='col-sm-10'>
										<Input
											id='exampleColForLabelMail2'
											readOnly='plaintext'
											autoComplete='username'
											onChange={formik2.handleChange}
											value={formik2.values.exampleColForLabelMail2}
										/>
									</div>
								</FormGroup>
								<FormGroup className='mb-3 row'>
									<Label
										htmlFor='exampleColForLabelPassword2'
										className='col-sm-2'
										isColForLabel>
										Password
									</Label>
									<div className='col-sm-10'>
										<Input
											id='exampleColForLabelPassword2'
											type='password'
											autoComplete='current-password'
											onChange={formik2.handleChange}
											value={formik2.values.exampleColForLabelPassword2}
										/>
									</div>
								</FormGroup>
								<div className='row'>
									<div className='col-12'>
										<Button
											type='submit'
											color='primary'
											isLight
											onClick={() => setModalStatus2(true)}>
											Submit
										</Button>
									</div>
								</div>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									In this use you need to add the <code>row</code> class to the
									<code>{`<FormGroup className='... row' {...props}>...</FormGroup>`}</code>
									.
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
									<b>Email:</b>
								</div>
								<div className='col-9'>{formik.values.exampleColForLabelMail}</div>
								<div className='col-3'>
									<b>Password:</b>
								</div>
								<div className='col-9'>
									{formik.values.exampleColForLabelPassword}
								</div>
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
					<Modal
						isOpen={modalStatus2}
						setIsOpen={setModalStatus2}
						titleId='exampleModalLabel2'>
						<ModalHeader>
							<ModalTitle id='exampleModalLabel2'>Form Values</ModalTitle>
						</ModalHeader>
						<ModalBody>
							<div className='row g-4'>
								<div className='col-3'>
									<b>Email:</b>
								</div>
								<div className='col-9'>
									{formik2.values.exampleColForLabelMail2}
								</div>
								<div className='col-3'>
									<b>Password:</b>
								</div>
								<div className='col-9'>
									{formik2.values.exampleColForLabelPassword2}
								</div>
							</div>
						</ModalBody>
						<ModalFooter>
							<Button
								color='info'
								isOutline
								className='border-0'
								onClick={() => setModalStatus2(false)}>
								Close
							</Button>
						</ModalFooter>
					</Modal>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default FormGroupPage;
