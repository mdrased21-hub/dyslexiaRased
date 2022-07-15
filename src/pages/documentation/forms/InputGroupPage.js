import React, { useState } from 'react';
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
import InputGroup, { InputGroupText } from '../../../components/bootstrap/forms/InputGroup';
import Label from '../../../components/bootstrap/forms/Label';
import Textarea from '../../../components/bootstrap/forms/Textarea';
import Button from '../../../components/bootstrap/Button';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from '../../../components/bootstrap/Modal';
import CommonDesc from '../../../components/common/CommonDesc';
import CommonHowToUse from '../../../components/common/CommonHowToUse';
import Checks from '../../../components/bootstrap/forms/Checks';
import Select from '../../../components/bootstrap/forms/Select';
import { _selectOptions } from './SelectPage';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

const InputGroupPage = () => {
	const [modalStatus, setModalStatus] = useState(false);
	const _generalUsage = `
<InputGroup
	ref={ref}
	id={ String }
	className={ String }
	isWrap={ Boolean }
	size={ String } // null || 'sm' || 'lg'
	{...props}>
	<InputGroupText
		ref={ref}
		tag={ String } // 'span' || 'div' || 'label'
		id={ String }
		className={ String }
		{...props}>
		...
	</InputGroupText>
	...
	<Button {...props}>...</Button>
	...
	<DropdownToggle>...</DropdownToggle>
	<DropdownMenu>...</DropdownMenu>
	...
	<Input {...props} /> { /* or */} <Textarea {...props} /> { /* etc. */}
</InputGroup>`;

	const formik = useFormik({
		initialValues: {
			exampleUsername: '',
			exampleMailAddress: '',
			exampleUrl: '',
			examplePrice: '',
			exampleCompanyEmail: '',
			exampleCompanyServer: '',
			exampleDescription: '',
		},
		// eslint-disable-next-line no-unused-vars
		onSubmit: (values) => {
			// console.log(JSON.stringify(values, null, 2));
		},
	});

	const formikCR = useFormik({
		initialValues: {
			exampleInput: '',
			exampleInputCheck: true,
			exampleInput2: '',
			exampleInputCheck2: false,
			exampleInputRadio: 'username',
			exampleInput3: '',
			exampleInput4: '',
			exampleInput5: '',
		},
		// eslint-disable-next-line no-unused-vars
		onSubmit: (values) => {
			// console.log(JSON.stringify(values, null, 2));
		},
	});

	return (
		<PageWrapper title={componentsMenu.forms.subMenu.inputGroup.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Forms', to: '/forms' },
							{ title: 'Input Group', to: '/forms/input-group' },
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/docs/forms-inputgroup--start' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='DynamicFeed'>
									<CardTitle tag='h2'>Input Group</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<h3 className='text-muted'>
									Easily extend form controls by adding text, buttons, or button
									groups on either side of textual inputs, custom selects, and
									custom file inputs.
								</h3>
							</CardBody>
							<CardHeader>
								<CardLabel icon='Assignment'>
									<CardTitle>General Usage</CardTitle>
									<CardSubTitle>InputGroup and InputGroupText</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<CardCodeView>{_generalUsage}</CardCodeView>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch tag='form' onSubmit={formik.handleSubmit}>
							<CardHeader>
								<CardLabel icon='DriveFileRename'>
									<CardTitle>Basic Examples</CardTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/docs/forms-inputgroup--start' />
								</CardActions>
							</CardHeader>
							<CardBody>
								<p>
									Place one add-on or button on either side of an input. You may
									also place one on both sides of an input. Remember to place{' '}
									<code>{`<Label>`}</code>s outside the input group.
								</p>
								<div className='row g-4'>
									<FormGroup>
										<Label htmlFor='exampleUsername'>Username</Label>
										<InputGroup>
											<InputGroupText id='addon1'>@</InputGroupText>
											<Input
												id='exampleUsername'
												placeholder='Username'
												aria-label='Username'
												autoComplete='username'
												ariaDescribedby='addon1'
												onChange={formik.handleChange}
												value={formik.values.exampleUsername}
											/>
										</InputGroup>
									</FormGroup>
									<FormGroup>
										<Label htmlFor='exampleMailAddress'>Mail Address</Label>
										<InputGroup>
											<Input
												id='exampleMailAddress'
												placeholder="Recipient's username"
												aria-label="Recipient's username"
												autoComplete='email'
												ariaDescribedby='addon2'
												onChange={formik.handleChange}
												value={formik.values.exampleMailAddress}
											/>
											<InputGroupText id='addon2'>
												@example.com
											</InputGroupText>
										</InputGroup>
									</FormGroup>
									<FormGroup>
										<Label htmlFor='exampleUrl'>Your vanity URL</Label>
										<InputGroup>
											<InputGroupText id='addon3'>
												https://example.com/users/
											</InputGroupText>
											<Input
												id='exampleUrl'
												ariaDescribedby='addon3'
												onChange={formik.handleChange}
												value={formik.values.exampleUrl}
											/>
										</InputGroup>
									</FormGroup>
									<FormGroup>
										<Label htmlFor='examplePrice'>Price</Label>
										<InputGroup>
											<InputGroupText>$</InputGroupText>
											<Input
												id='examplePrice'
												ariaLabel='Amount (to the nearest dollar)'
												component='NumberFormat'
												thousandSeparator
												onChange={formik.handleChange}
												value={formik.values.examplePrice}
											/>
											<InputGroupText>.00</InputGroupText>
										</InputGroup>
									</FormGroup>
									<FormGroup>
										<Label htmlFor='exampleCompanyEmail'>
											Company email address
										</Label>
										<InputGroup>
											<Input
												id='exampleCompanyEmail'
												placeholder='Username'
												aria-label='Username'
												onChange={formik.handleChange}
												value={formik.values.exampleCompanyEmail}
											/>
											<InputGroupText>@</InputGroupText>
											<Input
												id='exampleCompanyServer'
												placeholder='Server'
												aria-label='Server'
												onChange={formik.handleChange}
												value={formik.values.exampleCompanyServer}
											/>
										</InputGroup>
									</FormGroup>
									<FormGroup>
										<Label htmlFor='exampleDescription'>Description</Label>
										<InputGroup>
											<InputGroupText>With textarea</InputGroupText>
											<Textarea
												id='exampleDescription'
												ariaLabel='With textarea'
												onChange={formik.handleChange}
												value={formik.values.exampleDescription}
											/>
										</InputGroup>
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
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Straighten' iconColor='warning'>
									<CardTitle>size</CardTitle>
									<CardSubTitle>InputGroup</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/docs/forms-inputgroup--start&args=size:lg' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									size: PropTypes.oneOf(['sm', 'lg']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<p>
									Add the relative form sizing prop to the <code>InputGroup</code>{' '}
									itself and contents within will automatically resize—no need for
									repeating the form control size classes on each element.
								</p>
								<div className='row g-4'>
									<InputGroup size='sm'>
										<InputGroupText id='inputGroup-sizing-sm'>
											Small
										</InputGroupText>
										<Input
											ariaLabel='Sizing example input'
											ariaDescribedby='inputGroup-sizing-sm'
										/>
									</InputGroup>
									<InputGroup>
										<InputGroupText id='inputGroup-sizing-default'>
											Default
										</InputGroupText>
										<Input
											ariaLabel='Sizing example input'
											ariaDescribedby='inputGroup-sizing-default'
										/>
									</InputGroup>
									<InputGroup size='lg'>
										<InputGroupText id='inputGroup-sizing-lg'>
											Default
										</InputGroupText>
										<Input
											ariaLabel='Sizing example input'
											ariaDescribedby='inputGroup-sizing-lg'
										/>
									</InputGroup>
								</div>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									<b>
										Sizing on the individual input group elements isn’t
										supported.
									</b>
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='WrapText' iconColor='danger'>
									<CardTitle>isWrap</CardTitle>
									<CardSubTitle>InputGroup</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/docs/forms-inputgroup--start&args=isWrap:false' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isWrap: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<FormGroup>
									<InputGroup isWrap>
										<InputGroupText id='addon-wrapping'>@</InputGroupText>
										<Input
											placeholder='Username'
											ariaLabel='Username'
											ariaDescribedby='addon-wrapping'
										/>
									</InputGroup>
								</FormGroup>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									Input groups wrap by default via wrap in order to accommodate
									custom form field validation within an input group. You may
									disable this with <code>{`isWrap={false}`}</code>.
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Edit' iconColor='secondary'>
									<CardTitle>isFormCheckInput</CardTitle>
									<CardSubTitle>Checks</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/docs/forms-inputgroup--with-checks' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isFormCheckInput: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Card>
									<CardBody>
										<div className='row g-4'>
											<FormGroup>
												<InputGroup>
													<InputGroupText tag='div' id='addon-wrapping'>
														<Checks
															id='exampleInputCheck'
															onChange={formikCR.handleChange}
															checked={
																formikCR.values.exampleInputCheck
															}
														/>
													</InputGroupText>
													<Input
														id='exampleInput'
														placeholder='Username'
														ariaLabel='Username'
														ariaDescribedby='addon-wrapping'
														autoComplete='username'
														onChange={formikCR.handleChange}
														value={formikCR.values.exampleInput}
														disabled={
															!formikCR.values.exampleInputCheck
														}
													/>
												</InputGroup>
											</FormGroup>
											<FormGroup>
												<InputGroup>
													<InputGroupText tag='div' id='addon-wrapping2'>
														<Checks
															id='exampleInputCheck2'
															onChange={formikCR.handleChange}
															checked={
																formikCR.values.exampleInputCheck2
															}
														/>
													</InputGroupText>
													<Input
														id='exampleInput2'
														type='email'
														placeholder='Email'
														ariaLabel='Email'
														ariaDescribedby='addon-wrapping2'
														autoComplete='email'
														onChange={formikCR.handleChange}
														value={formikCR.values.exampleInput2}
														disabled={
															!formikCR.values.exampleInputCheck2
														}
													/>
													<InputGroupText>@example.com</InputGroupText>
												</InputGroup>
											</FormGroup>
										</div>
									</CardBody>
								</Card>
								<Card>
									<CardBody>
										<div className='row g-4'>
											<FormGroup>
												<InputGroup>
													<InputGroupText
														tag='div'
														id='addon-wrapping-radio'>
														<Checks
															id='exampleInputRadio'
															name='exampleInputRadio'
															type='radio'
															onChange={formikCR.handleChange}
															value='username'
															checked={
																formikCR.values.exampleInputRadio
															}
														/>
													</InputGroupText>
													<Input
														id='exampleInput3'
														placeholder='Username'
														ariaLabel='Username'
														ariaDescribedby='addon-wrapping-radio'
														autoComplete='username'
														onChange={formikCR.handleChange}
														value={formikCR.values.exampleInput3}
														disabled={
															formikCR.values.exampleInputRadio !==
															'username'
														}
													/>
												</InputGroup>
											</FormGroup>
											<FormGroup>
												<InputGroup>
													<InputGroupText
														tag='div'
														id='addon-wrapping2-radio'>
														<Checks
															id='exampleInputRadio2'
															name='exampleInputRadio'
															type='radio'
															onChange={formikCR.handleChange}
															value='email'
															checked={
																formikCR.values.exampleInputRadio
															}
														/>
													</InputGroupText>
													<Input
														id='exampleInput4'
														type='email'
														placeholder='Email'
														ariaLabel='Email'
														ariaDescribedby='addon-wrapping2-radio'
														autoComplete='email'
														onChange={formikCR.handleChange}
														value={formikCR.values.exampleInput4}
														disabled={
															formikCR.values.exampleInputRadio !==
															'email'
														}
													/>
													<InputGroupText>@</InputGroupText>
													<Input
														id='exampleInput5'
														placeholder='example.com'
														ariaLabel='Server'
														ariaDescribedby='addon-wrapping2-radio'
														autoComplete='url'
														onChange={formikCR.handleChange}
														value={formikCR.values.exampleInput5}
														disabled={
															formikCR.values.exampleInputRadio !==
															'email'
														}
													/>
												</InputGroup>
											</FormGroup>
										</div>
									</CardBody>
								</Card>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									<code>isFormCheckInput</code> is automatically detected and
									added. 🥳
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel>
									<CardTitle>Multiple Input</CardTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/docs/forms-inputgroup--multiple' />
								</CardActions>
							</CardHeader>
							<CardBody>
								<InputGroup>
									<InputGroupText>First and last name</InputGroupText>
									<Input placeholder='First Name' ariaLabel='First name' />
									<Input placeholder='Last Name' ariaLabel='Last name' />
								</InputGroup>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									While multiple <code>{`<Input>`}</code>s are supported visually,
									validation styles are only available for input groups with a
									single <code>{`<Input>`}</code>.
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel>
									<CardTitle>Multiple Addons</CardTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/docs/forms-inputgroup--multiple' />
								</CardActions>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<InputGroup>
										<InputGroupText>$</InputGroupText>
										<InputGroupText>0.00</InputGroupText>
										<Input ariaLabel='Dollar amount (with dot and two decimal places)' />
									</InputGroup>
									<InputGroup>
										<Input ariaLabel='Dollar amount (with dot and two decimal places)' />
										<InputGroupText>$</InputGroupText>
										<InputGroupText>0.00</InputGroupText>
									</InputGroup>
								</div>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									Multiple add-ons are supported and can be mixed with checkbox
									and radio (<code>{`<Checks>`}</code>) input versions.
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel>
									<CardTitle>Button Addons</CardTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/docs/forms-inputgroup--with-button' />
								</CardActions>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<InputGroup>
										<Button isOutline color='primary' id='button-addon1'>
											Button
										</Button>
										<Input
											placeholder=''
											ariaLabel='Example text with button addon'
											ariaDescribedby='button-addon1'
										/>
									</InputGroup>
									<InputGroup>
										<Input
											placeholder="Recipient's username"
											ariaLabel="Recipient's username"
											ariaDescribedby='button-addon2'
										/>
										<Button isOutline color='primary' id='button-addon2'>
											Button
										</Button>
									</InputGroup>
									<InputGroup>
										<Button isOutline color='success'>
											Button
										</Button>
										<Button isOutline color='primary'>
											Button
										</Button>
										<Input ariaLabel='Example text with two button addons' />
									</InputGroup>
									<InputGroup>
										<Input
											placeholder="Recipient's username"
											ariaLabel="Recipient's username with two button addons"
										/>
										<Button isOutline color='primary'>
											Button
										</Button>
										<Button isOutline color='primary' icon='Save'>
											Button
										</Button>
									</InputGroup>
								</div>
							</CardBody>
						</Card>
					</div>
					{/* <div className='col-lg-6'> */}
					{/*	<Card stretch> */}
					{/*		<CardHeader> */}
					{/*			<CardLabel> */}
					{/*				<CardTitle>Button with Dropdowns Addons</CardTitle> */}
					{/*			</CardLabel> */}
					{/*			<CardActions> */}
					{/*				<CommonStoryBtn to='/docs/forms-inputgroup--with-dropdown' /> */}
					{/*			</CardActions> */}
					{/*		</CardHeader> */}
					{/*		<CardBody> */}
					{/*			<div className='row g-4'> */}
					{/*				<InputGroup> */}
					{/*					<DropdownToggle> */}
					{/*						<Button color='primary' isOutline hoverShadow='sm'> */}
					{/*							Dropdown */}
					{/*						</Button> */}
					{/*					</DropdownToggle> */}
					{/*					<DropdownMenu>{_dropdownInner}</DropdownMenu> */}
					{/*					<Input */}
					{/*						placeholder='' */}
					{/*						ariaLabel='Text input with dropdown button' */}
					{/*					/> */}
					{/*				</InputGroup> */}
					{/*				<InputGroup> */}
					{/*					<Input */}
					{/*						placeholder='' */}
					{/*						ariaLabel='Text input with dropdown button' */}
					{/*					/> */}
					{/*					<DropdownToggle> */}
					{/*						<Button color='info' isOutline hoverShadow='sm'> */}
					{/*							Dropdown */}
					{/*						</Button> */}
					{/*					</DropdownToggle> */}
					{/*					<DropdownMenu isAlignmentEnd>{_dropdownInner}</DropdownMenu> */}
					{/*				</InputGroup> */}
					{/*			</div> */}
					{/*		</CardBody> */}
					{/*	</Card> */}
					{/* </div> */}

					{/* <div className='col-lg-6'> */}
					{/*	<Card stretch> */}
					{/*		<CardHeader> */}
					{/*			<CardLabel> */}
					{/*				<CardTitle>Segmented Buttons Addons</CardTitle> */}
					{/*			</CardLabel> */}
					{/*			<CardActions> */}
					{/*				<CommonStoryBtn to='/docs/forms-inputgroup--with-segmented-buttons' /> */}
					{/*			</CardActions> */}
					{/*		</CardHeader> */}
					{/*		<CardBody> */}
					{/*			<div className='row g-4'> */}
					{/*				<InputGroup> */}
					{/*					<Button color='primary' isOutline> */}
					{/*						Button */}
					{/*					</Button> */}
					{/*					<DropdownToggle isSplit> */}
					{/*						<Button color='primary' isOutline /> */}
					{/*					</DropdownToggle> */}
					{/*					<DropdownMenu>{_dropdownInner}</DropdownMenu> */}
					{/*					<Input */}
					{/*						placeholder='' */}
					{/*						ariaLabel='Text input with dropdown button' */}
					{/*					/> */}
					{/*				</InputGroup> */}
					{/*				<InputGroup> */}
					{/*					<Input */}
					{/*						placeholder='' */}
					{/*						ariaLabel='Text input with dropdown button' */}
					{/*					/> */}
					{/*					<Button color='primary' isOutline> */}
					{/*						Button */}
					{/*					</Button> */}
					{/*					<Button color='primary' isOutline> */}
					{/*						Button */}
					{/*					</Button> */}
					{/*					<DropdownToggle isSplit> */}
					{/*						<Button color='primary' isOutline /> */}
					{/*					</DropdownToggle> */}
					{/*					<DropdownMenu isAlignmentEnd>{_dropdownInner}</DropdownMenu> */}
					{/*				</InputGroup> */}
					{/*			</div> */}
					{/*		</CardBody> */}
					{/*	</Card> */}
					{/* </div> */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel>
									<CardTitle>Custom Forms</CardTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/docs/forms-inputgroup--custom' />
								</CardActions>
							</CardHeader>
							<CardBody>
								<Card>
									<CardHeader>
										<CardLabel>
											<CardTitle>Custom Select</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<div className='row g-4'>
											<InputGroup>
												<InputGroupText
													tag='label'
													htmlFor='inputGroupSelect01'>
													Options
												</InputGroupText>
												<Select
													id='inputGroupSelect01'
													ariaLabel='Default select example'
													placeholder='Choose...'
													list={_selectOptions}
												/>
											</InputGroup>
											<InputGroup>
												<Select
													ariaLabel='Default select example'
													placeholder='Choose...'
													list={_selectOptions}
												/>
												<Button isOutline color='dark'>
													Button
												</Button>
											</InputGroup>
										</div>
									</CardBody>
								</Card>
								<Card>
									<CardHeader>
										<CardLabel>
											<CardTitle>Custom File Input</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<div className='row g-4'>
											<InputGroup>
												<InputGroupText
													tag='label'
													htmlFor='inputGroupFile01'>
													Only .pdf
												</InputGroupText>
												<Input
													id='inputGroupFile01'
													type='file'
													accept='.pdf'
												/>
											</InputGroup>
											<InputGroup>
												<Input type='file' />
												<Button isOutline color='dark' icon='CloudUpload'>
													Upload
												</Button>
											</InputGroup>
										</div>
									</CardBody>
								</Card>
							</CardBody>
						</Card>
					</div>
				</div>

				<Modal isOpen={modalStatus} setIsOpen={setModalStatus} titleId='exampleModalLabel'>
					<ModalHeader>
						<ModalTitle id='exampleModalLabel'>Form Values</ModalTitle>
					</ModalHeader>
					<ModalBody>
						<div className='row g-4'>
							{formik.values.exampleUsername && (
								<>
									<div className='col-3'>
										<b>Username:</b>
									</div>
									<div className='col-9'>{`@${formik.values.exampleUsername}`}</div>
								</>
							)}
							{formik.values.exampleMailAddress && (
								<>
									<div className='col-3'>
										<b>Mail Address:</b>
									</div>
									<div className='col-9'>{`${formik.values.exampleMailAddress}@example.com`}</div>
								</>
							)}
							{formik.values.exampleUrl && (
								<>
									<div className='col-3'>
										<b>Your vanity URL:</b>
									</div>
									<div className='col-9'>{`https://example.com/users/${formik.values.exampleUrl}`}</div>
								</>
							)}
							{formik.values.examplePrice && (
								<>
									<div className='col-3'>
										<b>Price:</b>
									</div>
									<div className='col-9'>{`$${formik.values.examplePrice}.00`}</div>
								</>
							)}
							{formik.values.exampleCompanyEmail &&
								formik.values.exampleCompanyServer && (
									<>
										<div className='col-3'>
											<b>Price:</b>
										</div>
										<div className='col-9'>{`${formik.values.exampleCompanyEmail}@${formik.values.exampleCompanyServer}`}</div>
									</>
								)}
							{formik.values.exampleDescription && (
								<>
									<div className='col-3'>
										<b>Desc:</b>
									</div>
									<div className='col-9'>{formik.values.exampleDescription}</div>
								</>
							)}
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
			</Page>
		</PageWrapper>
	);
};

export default InputGroupPage;
