import React from 'react';
import { useFormik } from 'formik';
import SubHeader, { SubHeaderLeft } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Card, {
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
import Label from '../../../components/bootstrap/forms/Label';
import Input from '../../../components/bootstrap/forms/Input';
import InputGroup, { InputGroupText } from '../../../components/bootstrap/forms/InputGroup';
import Select from '../../../components/bootstrap/forms/Select';
import Checks, { ChecksGroup } from '../../../components/bootstrap/forms/Checks';
import Textarea from '../../../components/bootstrap/forms/Textarea';
import Button from '../../../components/bootstrap/Button';
import { componentsMenu } from '../../../menu';

const _generalUsage = `<COMPONENT // Input || Select || Textarea || ChecksGroup || Checks
	onBlur={ Function } // Example: formik.handleBlur , Only Input, Select and Textarea
	isValid={ Boolean } // Example: formik.isValid , For formik 
	isTouched={ Boolean } // Example: formik.touched.NAME_OR_ID , For formik
	invalidFeedback={ String } // Example: formik.errors.NAME_OR_ID , For formik
	validFeedback={ String }
	isValidMessage={ Boolean }
	isTooltipFeedback={ Boolean }
 	{...props}/>`;

const _sampleUsage = `import React from 'react';
import { useFormik } from 'formik';

const validate = (values) => {
  const errors = {};
  if (!values.validationFirstName) {
    errors.validationFirstName = 'Required';
  } else if (values.validationFirstName.length > 15) {
    errors.validationFirstName = 'Must be 15 characters or less';
  }
}

const ExampleForm = () => {
  const formik = ({
    initialValues: {},
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
	
  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <FormGroup
        id='validationFirstName'
        label='First name'>
        <Input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.validationFirstName}
          isValid={formik.isValid}
          isTouched={formik.touched.validationFirstName}
          invalidFeedback={formik.errors.validationFirstName}
          validFeedback='Looks good!'
        />
      </FormGroup>
      <Button
        type='submit'
        color='primary'
        isDisable={!formik.isValid && !!formik.submitCount}>
        Submit form
      </Button>
    </form>
  );
}

export default ExampleForm`;

const validate = (values) => {
	const errors = {};
	if (!values.validationFirstName) {
		errors.validationFirstName = 'Required';
	} else if (values.validationFirstName.length > 15) {
		errors.validationFirstName = 'Must be 15 characters or less';
	}

	if (!values.validationLastName) {
		errors.validationLastName = 'Required';
	} else if (values.validationLastName.length > 20) {
		errors.validationLastName = 'Must be 20 characters or less';
	}

	if (!values.validationCustomUsername) {
		errors.validationCustomUsername = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.validationCustomUsername)) {
		errors.validationCustomUsername = 'Invalid email address';
	}

	if (!values.validationCity) {
		errors.validationCity = 'Please provide a valid city.';
	}

	if (!values.validationState) {
		errors.validationState = 'Please select a valid state.';
	}

	if (!values.validationZip) {
		errors.validationZip = 'Please provide a valid zip.';
	} else if (values.validationZip.length !== 5) {
		errors.validationZip = 'Must be 5 characters';
	}

	if (!values.validationDesc) {
		errors.validationDesc = 'Please provide a valid Desc.';
	} else if (values.validationDesc.length < 20) {
		errors.validationDesc = `Must be 20 characters or more, but currently ${values.validationDesc.length} characters`;
	}

	if (!values.validationRadios) {
		errors.validationRadios = 'You must choose one before posting.';
	}

	if (!values.validationCheck) {
		errors.validationCheck = 'You must agree before submitting.';
	}

	return errors;
};

const ValidationPage = () => {
	const formik = useFormik({
		initialValues: {
			validationFirstName: '',
			validationLastName: '',
			validationCustomUsername: '',
			validationCity: '',
			validationState: '',
			validationZip: '',
			validationDesc: '',
			validationRadios: '',
			validationCheck: false,
		},
		validate,
		onSubmit: (values) => {
			// eslint-disable-next-line no-alert
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<PageWrapper title={componentsMenu.forms.subMenu.validation.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Forms', to: '/forms' },
							{ title: 'Validation', to: '/forms/validation' },
						]}
					/>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='VerifiedUser'>
									<CardTitle tag='h2'>Validation</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<h3 className='text-muted'>
									We recommend using{' '}
									<a
										href='https://formik.org/docs/tutorial'
										target='_blank'
										rel='noreferrer'>
										formik
									</a>{' '}
									on forms. You can use the validation in a very comfortable way
									integrated with formik.
								</h3>
							</CardBody>
							<CardHeader>
								<CardLabel icon='Assignment'>
									<CardTitle>General Usage</CardTitle>
									<CardSubTitle>Input and Textarea</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<CardCodeView>{_generalUsage}</CardCodeView>
							</CardBody>
						</Card>
					</div>
					<div className='col-12'>
						<Card>
							<CardBody>
								<CardCodeView>{_sampleUsage}</CardCodeView>
							</CardBody>
						</Card>
					</div>
					<div className='col-12'>
						<Card stretch tag='form' noValidate onSubmit={formik.handleSubmit}>
							<CardHeader>
								<CardLabel>
									<CardTitle>Sample Validation Form</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<FormGroup
										id='validationFirstName'
										label='First name'
										className='col-md-4'>
										<Input
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.validationFirstName}
											isValid={formik.isValid}
											isTouched={formik.touched.validationFirstName}
											invalidFeedback={formik.errors.validationFirstName}
											validFeedback='Looks good!'
										/>
									</FormGroup>

									<FormGroup
										id='validationLastName'
										label='Last name'
										className='col-md-4'>
										<Input
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.validationLastName}
											isValid={formik.isValid}
											isTouched={formik.touched.validationLastName}
											invalidFeedback={formik.errors.validationLastName}
											validFeedback='Looks good!'
										/>
									</FormGroup>

									<FormGroup className='col-md-4'>
										<Label htmlFor='validationUsername'>Mail address</Label>
										<InputGroup>
											<InputGroupText id='inputGroupPrepend'>
												@
											</InputGroupText>
											<Input
												id='validationCustomUsername'
												ariaDescribedby='inputGroupPrepend'
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.validationCustomUsername}
												isValid={formik.isValid}
												isTouched={formik.touched.validationCustomUsername}
												invalidFeedback={
													formik.errors.validationCustomUsername
												}
												validFeedback='Looks good!'
											/>
										</InputGroup>
									</FormGroup>

									<FormGroup
										id='validationCity'
										label='City'
										className='col-lg-6'>
										<Input
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.validationCity}
											isValid={formik.isValid}
											isTouched={formik.touched.validationCity}
											invalidFeedback={formik.errors.validationCity}
											validFeedback='Looks good!'
										/>
									</FormGroup>

									<FormGroup
										id='validationState'
										label='State'
										className='col-md-3'>
										<Select
											ariaLabel='State'
											placeholder='Choose...'
											list={[
												{ value: 'usa', text: 'USA' },
												{ value: 'ca', text: 'Canada' },
											]}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.validationState}
											isValid={formik.isValid}
											isTouched={formik.touched.validationState}
											invalidFeedback={formik.errors.validationState}
										/>
									</FormGroup>

									<FormGroup id='validationZip' label='Zip' className='col-md-3'>
										<Input
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.validationZip}
											isValid={formik.isValid}
											isTouched={formik.touched.validationZip}
											invalidFeedback={formik.errors.validationZip}
										/>
									</FormGroup>

									<FormGroup
										id='validationDesc'
										label='Desc'
										className='col-lg-6'>
										<Textarea
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.validationDesc}
											isValid={formik.isValid}
											isTouched={formik.touched.validationDesc}
											invalidFeedback={formik.errors.validationDesc}
											validFeedback='Looks good!'
										/>
									</FormGroup>

									<FormGroup className='col-lg-6'>
										<Label>
											Group checkboxes or radios on the same horizontal row by
											adding <code>isInline</code>
										</Label>
										<ChecksGroup
											isValid={formik.isValid}
											isTouched={formik.touched.validationRadios}
											invalidFeedback={formik.errors.validationRadios}>
											<Checks
												type='radio'
												id='validationRadioOne'
												label='One'
												name='validationRadios'
												value='first'
												onChange={formik.handleChange}
												checked={formik.values.validationRadios}
												isInline
											/>
											<Checks
												type='radio'
												id='validationRadioTwo'
												label='Two'
												name='validationRadios'
												value='second'
												onChange={formik.handleChange}
												checked={formik.values.validationRadios}
												isInline
											/>
											<Checks
												type='radio'
												id='validationRadioThree'
												label={
													<>
														Three <sup>(disabled)</sup>
													</>
												}
												name='validationRadios'
												value='third'
												onChange={formik.handleChange}
												checked={formik.values.validationRadios}
												isInline
												disabled
											/>
										</ChecksGroup>
									</FormGroup>

									<FormGroup className='col-12'>
										<Checks
											id='validationCheck'
											label='Agree to terms and conditions'
											onChange={formik.handleChange}
											checked={formik.values.validationCheck}
											isValid={formik.isValid}
											isTouched={formik.touched.validationCheck}
											invalidFeedback={formik.errors.validationCheck}
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
										color='primary'
										isDisable={!formik.isValid && !!formik.submitCount}>
										Submit form
									</Button>
								</CardFooterRight>
							</CardFooter>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ValidationPage;
