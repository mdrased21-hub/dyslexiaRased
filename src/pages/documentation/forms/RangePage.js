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
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../components/bootstrap/Card';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import CommonHowToUse from '../../../components/common/CommonHowToUse';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

const RangePage = () => {
	const _generalUsage = `
<Input
	type='range'
	id={ String }
	name={ String }
	className={ String }
	placeholder={null}
	autoComplete={ String }
	ariaDescribedby={ String }
	ariaLabelledby={ String }
	ariaLabel={ String }
	list={null}
	title={ String }
	size={ String } // null || 'sm' || 'lg'
	disabled={ Boolean }
	readOnly={ Boolean }
	multiple={null}
	value={ Number }
	onBlur={ Function }
	onChange={ Function }
	onFocus={ Function }
	onInput={ Function }
	onInvalid={ Function }
	onSelect={ Function }
 	{...props}/>`;

	const formik = useFormik({
		initialValues: {
			exampleRange: 50,
			exampleDisableRange: 50,
			exampleReadOnlyRange: 50,
			exampleMinMaxRange: 3,
			exampleStep: 8.7,
		},
	});

	return (
		<PageWrapper title={componentsMenu.forms.subMenu.range.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Forms', to: '/forms' },
							{ title: 'Range', to: '/forms/range' },
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/docs/forms-input--range' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<form className='row'>
					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='HdrStrong'>
									<CardTitle tag='h2'>Range</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<h3 className='text-muted'>
									Use our custom range inputs for consistent cross-browser styling
									and built-in customization.
								</h3>
								<p>
									Create custom <code>{'<input type="range">'}</code> controls
									with <code>.form-range</code>. The track (the background) and
									thumb (the value) are both styled to appear the same across
									browsers. As only Edge Legacy and Firefox supports “filling”
									their track from the left or right of the thumb as a means to
									visually indicate progress, we do not currently support it.
								</p>
							</CardBody>
							<CardHeader>
								<CardLabel icon='Assignment'>
									<CardTitle>General Usage</CardTitle>
									<CardSubTitle>Input</CardSubTitle>
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
								<CardLabel icon='Brush' iconColor='info'>
									<CardTitle>
										type <small>range</small>
									</CardTitle>
									<CardSubTitle>Input</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-input--range' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									type: PropTypes.oneOf([ 'text', 'email', 'password', 'file',
									'color', 'date', 'datetime-local', 'hidden', 'month', 'number',
									'<b>range</b>', 'search', 'tel', 'time', 'url', 'week', ]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<FormGroup
									id='exampleRange'
									label='Example range'
									formText={`Its value ${formik.values.exampleRange}`}>
									<Input
										type='range'
										onChange={formik.handleChange}
										value={formik.values.exampleRange}
									/>
								</FormGroup>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='GppBad' iconColor='danger'>
									<CardTitle>disabled</CardTitle>
									<CardSubTitle>Input</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-input--range&args=disabled:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>disabled: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<FormGroup
									id='exampleDisableRange'
									label='Disable range'
									formText={`Its value ${formik.values.exampleDisableRange}`}>
									<Input
										type='range'
										onChange={formik.handleChange}
										value={formik.values.exampleDisableRange}
										disabled
									/>
								</FormGroup>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Visibility' iconColor='warning'>
									<CardTitle>readOnly</CardTitle>
									<CardSubTitle>Input</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-input--range&args=readOnly:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>readOnly: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<FormGroup
									id='exampleReadOnlyRange'
									label='Read only range'
									formText={`Its value ${formik.values.exampleReadOnlyRange}`}>
									<Input
										type='range'
										onChange={formik.handleChange}
										value={formik.values.exampleReadOnlyRange}
										readOnly
									/>
								</FormGroup>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Settings' iconColor='success'>
									<CardTitle>min & max</CardTitle>
									<CardSubTitle>Input</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-input--range&args=min:20;max:30' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									<div>min: PropTypes.number,</div>
									<div>max: PropTypes.number,</div>
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<FormGroup
									id='exampleMinMaxRange'
									label='Example range'
									formText={`Its value ${formik.values.exampleMinMaxRange}. You can set minimum 0 maximum 5.`}>
									<Input
										type='range'
										min={0}
										max={5}
										onChange={formik.handleChange}
										value={formik.values.exampleMinMaxRange}
									/>
								</FormGroup>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Swipe' iconColor='secondary'>
									<CardTitle>step</CardTitle>
									<CardSubTitle>Input</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-input--range&args=step:25;' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>step: PropTypes.number,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<FormGroup
									id='exampleStep'
									label='Example range'
									formText={`Its value ${formik.values.exampleStep}.`}>
									<Input
										type='range'
										min={0}
										max={10}
										step={0.1}
										onChange={formik.handleChange}
										value={formik.values.exampleStep}
									/>
								</FormGroup>
							</CardBody>
						</Card>
					</div>
				</form>
			</Page>
		</PageWrapper>
	);
};

export default RangePage;
