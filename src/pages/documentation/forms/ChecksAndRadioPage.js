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
import Checks, { ChecksGroup } from '../../../components/bootstrap/forms/Checks';
import CommonHowToUse from '../../../components/common/CommonHowToUse';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Label from '../../../components/bootstrap/forms/Label';
import CommonDesc from '../../../components/common/CommonDesc';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import Button from '../../../components/bootstrap/Button';
import CommonStoryLink from '../../../components/common/CommonStoryLink';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

const ChecksAndRadioPage = () => {
	const _generalUsage = `
<Checks
	id={ String }
	name={ String }
	className={ String }
	type={ String } // 'checkbox' || 'radio' || 'switch'
	label={ String }
	value={ String } // For only type is radio
	checked={ Boolean } 
	disabled={ Boolean } 
	isInline={ Boolean } 
	isFormCheckInput={ Boolean } // For input group
	onBlur={ Function }
	onChange={ Function }
	onFocus={ Function }
	onInput={ Function }
	onInvalid={ Function }
	onSelect={ Function }
 	{...props}>`;
	const _generalUsage2 = `
<ChecksGroup
	id={ String }
	className={ String }
	isInline={ Boolean }
 	{...props}>
 	<Checks {...props} />
 	...
</ChecksGroup>`;

	const flexChecks = useFormik({
		initialValues: {
			defaultCheck: false,
			checkedCheck: true,
		},
	});
	const flexRadios = useFormik({
		initialValues: {
			flexRadioDefault: 'first',
			flexRadioDisabled: 'third',
		},
	});

	const inlineCheckboxes = useFormik({
		initialValues: {
			checkOne: true,
			checkTwo: false,
			checkThree: false,
		},
	});

	const inlineRadios = useFormik({
		initialValues: {
			radios: 'first',
		},
	});

	const exampleLabel = useFormik({
		initialValues: {
			exampleLabelOne: true,
			exampleLabelTwo: false,
			exampleLabelThree: true,
			exampleLabelFour: false,
		},
	});

	const exampleInline = useFormik({
		initialValues: {
			exampleInlineOne: true,
			exampleInlineTwo: false,
			exampleInlineThree: false,
		},
	});

	return (
		<PageWrapper title={componentsMenu.forms.subMenu.checksAndRadio.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Forms', to: '/forms' },
							{ title: 'Checks & Radio', to: '/forms/checks-and-radio' },
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
								<CommonStoryLink to='/docs/forms-checks--checkbox'>
									Checkbox
								</CommonStoryLink>
							</DropdownItem>
							<DropdownItem>
								<CommonStoryLink to='/docs/forms-checks--radio'>
									Radio
								</CommonStoryLink>
							</DropdownItem>
							<DropdownItem>
								<CommonStoryLink to='/docs/forms-checks--switch'>
									Switch
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
								<CardLabel icon='Assignment'>
									<CardTitle tag='h2'>Checks and radios</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<h3 className='text-muted'>
									Create consistent cross-browser and cross-device checkboxes and
									radios with our completely rewritten checks component.
								</h3>
							</CardBody>
							<CardHeader>
								<CardLabel icon='Assignment'>
									<CardTitle>General Usage</CardTitle>
									<CardSubTitle>Checks and ChecksGroup</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='row'>
									<div className='col-lg-6'>
										<CardCodeView>{_generalUsage}</CardCodeView>
									</div>
									<div className='col-lg-6'>
										<CardCodeView>{_generalUsage2}</CardCodeView>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='CheckBox' iconColor='info'>
									<CardTitle>
										type <small>checkbox</small>
									</CardTitle>
									<CardSubTitle>Checks</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-checks--checkbox' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									type: PropTypes.oneOf(['<b>checkbox</b>', 'radio', 'switch']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Checks
									id='flexCheckDefault'
									label='Default checkbox'
									name='defaultCheck'
									onChange={flexChecks.handleChange}
									checked={flexChecks.values.defaultCheck}
								/>
								<Checks
									id='flexCheckChecked'
									label='Checked checkbox'
									name='checkedCheck'
									onChange={flexChecks.handleChange}
									checked={flexChecks.values.checkedCheck}
								/>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='GppBad' iconColor='info'>
									<CardTitle>
										type<small>="checkbox"</small> & disabled
									</CardTitle>
									<CardSubTitle>Checks</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-checks--checkbox&args=disabled:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>disabled: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Checks
									id='flexCheckDisabled'
									label='Disabled checkbox'
									name='defaultCheck'
									onChange={flexChecks.handleChange}
									checked={flexChecks.values.defaultCheck}
									disabled
								/>
								<Checks
									id='flexCheckCheckedDisabled'
									label='Disabled checked checkbox'
									name='checkedCheck'
									onChange={flexChecks.handleChange}
									checked={flexChecks.values.checkedCheck}
									disabled
								/>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='RadioButtonChecked' iconColor='success'>
									<CardTitle>
										type <small>radio</small>
									</CardTitle>
									<CardSubTitle>Checks</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-checks--radio' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									type: PropTypes.oneOf(['checkbox', '<b>radio</b>', 'switch']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Checks
									type='radio'
									name='flexRadioDefault'
									id='flexRadioDefault1'
									label='Default radio'
									value='first'
									onChange={flexRadios.handleChange}
									checked={flexRadios.values.flexRadioDefault}
								/>
								<Checks
									type='radio'
									name='flexRadioDefault'
									id='flexRadioDefault2'
									label='Default checked radio'
									value='second'
									onChange={flexRadios.handleChange}
									checked={flexRadios.values.flexRadioDefault}
								/>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='GppBad' iconColor='success'>
									<CardTitle>
										type<small>="radio"</small> & disabled
									</CardTitle>
									<CardSubTitle>Checks</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-checks--radio&args=disabled:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>disabled: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Checks
									type='radio'
									name='flexRadioDisabled'
									id='flexRadioDefault1-2'
									label='Default radio'
									value='third'
									onChange={flexRadios.handleChange}
									checked={flexRadios.values.flexRadioDisabled}
									disabled
								/>
								<Checks
									type='radio'
									name='flexRadioDisabled'
									id='flexRadioDefault2-2'
									label='Default checked radio'
									value='fourth'
									onChange={flexRadios.handleChange}
									checked={flexRadios.values.flexRadioDisabled}
									disabled
								/>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ToggleOn' iconColor='warning'>
									<CardTitle>
										type <small>switch</small>
									</CardTitle>
									<CardSubTitle>Checks</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-checks--switch' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									type: PropTypes.oneOf(['checkbox', 'radio', '<b>switch</b>']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Checks
									type='switch'
									id='flexSwitchCheckDefault'
									label='Default switch checkbox input'
									name='defaultCheck'
									onChange={flexChecks.handleChange}
									checked={flexChecks.values.defaultCheck}
								/>
								<Checks
									type='switch'
									id='flexSwitchCheckChecked'
									label='Checked switch checkbox input'
									name='checkedCheck'
									onChange={flexChecks.handleChange}
									checked={flexChecks.values.checkedCheck}
								/>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='GppBad' iconColor='warning'>
									<CardTitle>
										type<small>="switch"</small> & disabled
									</CardTitle>
									<CardSubTitle>Checks</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-checks--switch&args=disabled:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>disabled: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Checks
									type='switch'
									id='flexSwitchCheckDisabled'
									label='Disabled switch checkbox input'
									name='defaultCheck'
									onChange={flexChecks.handleChange}
									checked={flexChecks.values.defaultCheck}
									disabled
								/>
								<Checks
									type='switch'
									id='flexSwitchCheckCheckedDisabled'
									label='Disabled checked switch checkbox input'
									name='checkedCheck'
									onChange={flexChecks.handleChange}
									checked={flexChecks.values.checkedCheck}
									disabled
								/>
							</CardBody>
						</Card>
					</div>

					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Label' iconColor='warning'>
									<CardTitle>label</CardTitle>
									<CardSubTitle>Checks</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-checks--checkbox' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row'>
									<FormGroup className='col-lg-6'>
										<Label>With label</Label>
										<Checks
											type='checkbox'
											id='exampleLabelOne'
											label={
												<>
													Initial <b>select</b>
												</>
											}
											onChange={exampleLabel.handleChange}
											checked={exampleLabel.values.exampleLabelOne}
										/>
										<Checks
											type='checkbox'
											id='exampleLabelTwo'
											label='Initial unselect'
											onChange={exampleLabel.handleChange}
											checked={exampleLabel.values.exampleLabelTwo}
										/>
									</FormGroup>
									<FormGroup className='col-lg-6'>
										<Label>Without label</Label>
										<Checks
											type='checkbox'
											id='exampleLabelThree'
											onChange={exampleLabel.handleChange}
											checked={exampleLabel.values.exampleLabelThree}
										/>
										<Checks
											type='checkbox'
											id='exampleLabelFour'
											onChange={exampleLabel.handleChange}
											checked={exampleLabel.values.exampleLabelFour}
										/>
									</FormGroup>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='FormatAlignJustify' iconColor='info'>
									<CardTitle>isInline</CardTitle>
									<CardSubTitle>Checks</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-checks-sup-component-checksgroup--default&args=children[2].isInline:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isInline: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<FormGroup>
									<Label>Set as only the first two inline</Label>
									<ChecksGroup>
										<Checks
											type='checkbox'
											id='exampleInlineOne'
											label='Select one (isInline)'
											onChange={exampleInline.handleChange}
											checked={exampleInline.values.exampleInlineOne}
											isInline
										/>
										<Checks
											type='checkbox'
											id='exampleInlineTwo'
											label='Select two (isInline)'
											onChange={exampleInline.handleChange}
											checked={exampleInline.values.exampleInlineTwo}
											isInline
										/>
										<Checks
											type='checkbox'
											id='exampleInlineThree'
											label='Select three'
											onChange={exampleInline.handleChange}
											checked={exampleInline.values.exampleInlineThree}
										/>
									</ChecksGroup>
								</FormGroup>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									This value overwrites the value of the{' '}
									<code>{`<ChecksGroup>`}</code>.
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>

					<div className='col-12'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='FormatAlignJustify' iconColor='info'>
									<CardTitle>isInline</CardTitle>
									<CardSubTitle>ChecksGroup</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/forms-checks-sup-component-checksgroup--default&args=isInline:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isInline: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row'>
									<div className='col-lg-4'>
										<Card stretch className='mb-0'>
											<CardHeader>
												<CardLabel icon='CheckBox' iconColor='info'>
													<CardTitle>
														type <small>checkbox</small>
													</CardTitle>
													<CardSubTitle>Checks</CardSubTitle>
												</CardLabel>
											</CardHeader>
											<CardBody>
												<FormGroup>
													<Label>
														Group checkboxes or radios on the same
														horizontal row by adding{' '}
														<code>isInline</code>
													</Label>
													<ChecksGroup isInline>
														<Checks
															type='checkbox'
															id='inlineCheckOne'
															label='One'
															name='checkOne'
															onChange={inlineCheckboxes.handleChange}
															checked={
																inlineCheckboxes.values.checkOne
															}
														/>
														<Checks
															type='checkbox'
															id='inlineCheckTwo'
															label='Two'
															name='checkTwo'
															onChange={inlineCheckboxes.handleChange}
															checked={
																inlineCheckboxes.values.checkTwo
															}
														/>
														<Checks
															type='checkbox'
															id='inlineCheckThree'
															label={
																<>
																	Three <sup>(disabled)</sup>
																</>
															}
															name='checkThree'
															onChange={inlineCheckboxes.handleChange}
															checked={
																inlineCheckboxes.values.checkThree
															}
															disabled
														/>
													</ChecksGroup>
												</FormGroup>
											</CardBody>
										</Card>
									</div>
									<div className='col-lg-4'>
										<Card stretch className='mb-0'>
											<CardHeader>
												<CardLabel
													icon='RadioButtonChecked'
													iconColor='success'>
													<CardTitle>
														type <small>radio</small>
													</CardTitle>
													<CardSubTitle>Checks</CardSubTitle>
												</CardLabel>
											</CardHeader>
											<CardBody>
												<FormGroup>
													<Label>
														Group checkboxes or radios on the same
														horizontal row by adding{' '}
														<code>isInline</code>
													</Label>
													<ChecksGroup isInline>
														<Checks
															type='radio'
															id='inlineRadioOne'
															label='One'
															name='radios'
															value='first'
															onChange={inlineRadios.handleChange}
															checked={inlineRadios.values.radios}
														/>
														<Checks
															type='radio'
															id='inlineRadioTwo'
															label='Two'
															name='radios'
															value='second'
															onChange={inlineRadios.handleChange}
															checked={inlineRadios.values.radios}
														/>
														<Checks
															type='radio'
															id='inlineRadioThree'
															label={
																<>
																	Three <sup>(disabled)</sup>
																</>
															}
															name='radios'
															value='third'
															onChange={inlineRadios.handleChange}
															checked={inlineRadios.values.radios}
															disabled
														/>
													</ChecksGroup>
												</FormGroup>
											</CardBody>
										</Card>
									</div>
									<div className='col-lg-4'>
										<Card stretch className='mb-0'>
											<CardHeader>
												<CardLabel icon='ToggleOn' iconColor='warning'>
													<CardTitle>
														type <small>radio</small>
													</CardTitle>
													<CardSubTitle>Checks</CardSubTitle>
												</CardLabel>
											</CardHeader>
											<CardBody>
												<FormGroup>
													<Label>
														Group checkboxes or radios on the same
														horizontal row by adding{' '}
														<code>isInline</code>
													</Label>
													<ChecksGroup isInline>
														<Checks
															type='switch'
															id='inlineCheckOne'
															label='One'
															name='checkOne'
															onChange={inlineCheckboxes.handleChange}
															checked={
																inlineCheckboxes.values.checkOne
															}
														/>
														<Checks
															type='switch'
															id='inlineCheckTwo'
															label='Two'
															name='checkTwo'
															onChange={inlineCheckboxes.handleChange}
															checked={
																inlineCheckboxes.values.checkTwo
															}
														/>
														<Checks
															type='switch'
															id='inlineCheckThree'
															label={
																<>
																	Three <sup>(disabled)</sup>
																</>
															}
															name='checkThree'
															onChange={inlineCheckboxes.handleChange}
															checked={
																inlineCheckboxes.values.checkThree
															}
															disabled
														/>
													</ChecksGroup>
												</FormGroup>
											</CardBody>
										</Card>
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

export default ChecksAndRadioPage;
