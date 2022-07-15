import React from 'react';
import SubHeader, { SubHeaderLeft } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import PrismCode from '../../../components/extras/PrismCode';
import { componentsMenu } from '../../../menu';

const ApiPage = () => {
	const _apiExplained = `
$utilities: (
	"opacity": (
		property: opacity,
		values: (
			0: 0,
			25: .25,
			50: .5,
			75: .75,
			100: 1,
		)
  	)
 );`;
	const _apiExplained2 = `
.opacity-0 { opacity: 0; }
.opacity-25 { opacity: .25; }
.opacity-50 { opacity: .5; }
.opacity-75 { opacity: .75; }
.opacity-100 { opacity: 1; }`;
	const _customClassPrefix = `
$utilities: (
	"opacity": (
		property: opacity,
		class: o,
		values: (
			0: 0,
			25: .25,
			50: .5,
			75: .75,
			100: 1,
		)
	)
 );`;
	const _customClassPrefix2 = `
.o-0 { opacity: 0; }
.o-25 { opacity: .25; }
.o-50 { opacity: .5; }
.o-75 { opacity: .75; }
.o-100 { opacity: 1; }`;

	const _states = `
$utilities: (
	"opacity": (
		property: opacity,
		class: opacity,
		state: hover,
		values: (
			0: 0,
			25: .25,
			50: .5,
			75: .75,
			100: 1,
		)
	)
);`;
	const _states2 = `
.opacity-0-hover:hover { opacity: 0; }
.opacity-25-hover:hover { opacity: .25; }
.opacity-50-hover:hover { opacity: .5; }
.opacity-75-hover:hover { opacity: .75; }
.opacity-100-hover:hover { opacity: 1; }`;
	const _responsive = `
$utilities: (
	"opacity": (
		property: opacity,
		responsive: true,
		values: (
			0: 0,
			25: .25,
			50: .5,
			75: .75,
			100: 1,
		)
	)
 );`;
	const _responsive2 = `
.opacity-0 { opacity: 0; }
.opacity-25 { opacity: .25; }
.opacity-50 { opacity: .5; }
.opacity-75 { opacity: .75; }
.opacity-100 { opacity: 1; }

@media (min-width: 576px) {
	.opacity-sm-0 { opacity: 0; }
	.opacity-sm-25 { opacity: .25; }
	.opacity-sm-50 { opacity: .5; }
	.opacity-sm-75 { opacity: .75; }
	.opacity-sm-100 { opacity: 1; }
}

@media (min-width: 768px) {
	.opacity-md-0 { opacity: 0; }
	.opacity-md-25 { opacity: .25; }
	.opacity-md-50 { opacity: .5; }
	.opacity-md-75 { opacity: .75; }
	.opacity-md-100 { opacity: 1; }
}

@media (min-width: 992px) {
	.opacity-lg-0 { opacity: 0; }
	.opacity-lg-25 { opacity: .25; }
	.opacity-lg-50 { opacity: .5; }
	.opacity-lg-75 { opacity: .75; }
	.opacity-lg-100 { opacity: 1; }
}

@media (min-width: 1200px) {
	.opacity-xl-0 { opacity: 0; }
	.opacity-xl-25 { opacity: .25; }
	.opacity-xl-50 { opacity: .5; }
	.opacity-xl-75 { opacity: .75; }
	.opacity-xl-100 { opacity: 1; }
}

@media (min-width: 1400px) {
	.opacity-xxl-0 { opacity: 0; }
	.opacity-xxl-25 { opacity: .25; }
	.opacity-xxl-50 { opacity: .5; }
	.opacity-xxl-75 { opacity: .75; }
	.opacity-xxl-100 { opacity: 1; }
}`;
	const _changing = `
$utilities: (
	"overflow": (
		responsive: true,
		property: overflow,
		values: visible hidden scroll auto,
	),
);`;
	const _print = `
$utilities: (
	"opacity": (
    	property: opacity,
    	print: true,
    	values: (
      		0: 0,
      		25: .25,
      		50: .5,
      		75: .75,
      		100: 1,
    	)
  	)
 );`;
	const _print2 = `
.opacity-0 { opacity: 0; }
.opacity-25 { opacity: .25; }
.opacity-50 { opacity: .5; }
.opacity-75 { opacity: .75; }
.opacity-100 { opacity: 1; }

@media print {
  	.opacity-print-0 { opacity: 0; }
  	.opacity-print-25 { opacity: .25; }
  	.opacity-print-50 { opacity: .5; }
  	.opacity-print-75 { opacity: .75; }
  	.opacity-print-100 { opacity: 1; }
}`;

	const _addUtilities = `
$utilities: map-merge(
  	$utilities,
  	(
    	"cursor": (
      		property: cursor,
      		class: cursor,
      		responsive: true,
      		values: auto pointer grab,
    	)
  	)
);`;
	const _modifyUtilities = `
$utilities: map-merge(
	$utilities,
		(
			"width": map-merge(
				map-get($utilities, "width"),
			(
				values: map-merge(
					map-get(map-get($utilities, "width"), "values"),
					(10: 10%),
				),
			),
		),
	)
);`;
	const _renameUtilities = `
$utilities: map-merge(
	$utilities, (
		"margin-start": map-merge(
			map-get($utilities, "margin-start"),
			( class: ml ),
		),
	)
);`;
	const _removeUtilities = `
$utilities: map-merge(
	$utilities,
	(
		"width": null
	)
);`;
	const _removeUtilitiesRTL = `
$utilities: (
	"word-wrap": (
		property: word-wrap word-break,
		class: text,
		values: (break: break-word),
		rtl: false
	),
);`;
	const _removeUtilitiesRTL2 = `
/* rtl:begin:remove */
.text-break {
	word-wrap: break-word !important;
  	word-break: break-word !important;
}
/* rtl:end:remove */`;

	return (
		<PageWrapper title={componentsMenu.utilities.subMenu.api.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Utilities', to: '/utilities' },
							{ title: 'API', to: '/utilities/api' },
						]}
					/>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12 my-4'>
						<h1>Utility API</h1>
						<p className='lead'>
							The utility API is a Sass-based tool to generate utility classes.
						</p>
					</div>

					<div className='col-12'>
						<Card>
							<CardBody>
								<p>
									Bootstrap utilities are generated with our utility API and can
									be used to modify or extend our default set of utility classes
									via Sass. Our utility API is based on a series of Sass maps and
									functions for generating families of classes with various
									options. If you’re unfamiliar with Sass maps, read up on the{' '}
									<a
										href='https://sass-lang.com/documentation/values/maps'
										target='_blank'
										rel='noreferrer'>
										official Sass docs
									</a>{' '}
									to get started.
								</p>
								<p>
									The <code>$utilities</code> map contains all our utilities and
									is later merged with your custom <code>$utilities</code> map, if
									present. The utility map contains a keyed list of utility groups
									which accept the following options:
								</p>
								<Card shadow='none' borderSize={1} stretch>
									<CardBody>
										<table className='table text-start mb-0'>
											<thead>
												<tr>
													<th>Option</th>
													<th>Type</th>
													<th>Description</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<code>property</code>
													</td>
													<td>
														<strong>Required</strong>
													</td>
													<td>
														Name of the property, this can be a string
														or an array of strings (e.g., horizontal
														paddings or margins).
													</td>
												</tr>
												<tr>
													<td>
														<code>values</code>
													</td>
													<td>
														<strong>Required</strong>
													</td>
													<td>
														List of values, or a map if you don’t want
														the class name to be the same as the value.
														If <code>null</code> is used as map key, it
														isn’t compiled.
													</td>
												</tr>
												<tr>
													<td>
														<code>class</code>
													</td>
													<td>Optional</td>
													<td>
														Variable for the class name if you don’t
														want it to be the same as the property. In
														case you don’t provide the{' '}
														<code>class</code> key and{' '}
														<code>property</code> key is an array of
														strings, the class name will be the first
														element of the <code>property</code> array.
													</td>
												</tr>
												<tr>
													<td>
														<code>state</code>
													</td>
													<td>Optional</td>
													<td>
														List of pseudo-class variants like{' '}
														<code>:hover</code> or <code>:focus</code>{' '}
														to generate for the utility. No default
														value.
													</td>
												</tr>
												<tr>
													<td>
														<code>responsive</code>
													</td>
													<td>Optional</td>
													<td>
														Boolean indicating if responsive classes
														need to be generated. <code>false</code> by
														default.
													</td>
												</tr>
												<tr>
													<td>
														<code>rfs</code>
													</td>
													<td>Optional</td>
													<td>
														Boolean to enable fluid rescaling. Have a
														look at the{' '}
														<a
															href='https://getbootstrap.com/docs/5.0/getting-started/rfs/'
															target='_blank'
															rel='noreferrer'>
															RFS
														</a>{' '}
														page to find out how this works.{' '}
														<code>false</code> by default.
													</td>
												</tr>
												<tr>
													<td>
														<code>print</code>
													</td>
													<td>Optional</td>
													<td>
														Boolean indicating if print classes need to
														be generated. <code>false</code> by default.
													</td>
												</tr>
												<tr>
													<td>
														<code>rtl</code>
													</td>
													<td>Optional</td>
													<td>
														Boolean indicating if utility should be kept
														in RTL. <code>true</code> by default.
													</td>
												</tr>
											</tbody>
										</table>
									</CardBody>
								</Card>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='api-explained' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>API explained</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									All utility variables are added to the <code>$utilities</code>{' '}
									variable within our <code>_utilities.scss</code> stylesheet.
									Each group of utilities looks something like this:
								</p>
								<PrismCode code={_apiExplained} language='scss' />
								<p>Which outputs the following:</p>
								<PrismCode code={_apiExplained2} language='scss' className='mb-4' />
								<Card id='custom-class-prefix' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Custom class prefix</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Use the <code>class</code> option to change the class
											prefix used in the compiled CSS:
										</p>
										<PrismCode
											code={_customClassPrefix}
											language='scss'
											className='mb-4'
										/>
										<p>Output:</p>
										<PrismCode
											code={_customClassPrefix2}
											language='scss'
											className='mb-0'
										/>
									</CardBody>
								</Card>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='states' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>States</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Use the <code>state</code> option to generate pseudo-class
									variations. Example pseudo-classes are <code>:hover</code> and{' '}
									<code>:focus</code>. When a list of states are provided,
									classnames are created for that pseudo-class. For example, to
									change opacity on hover, add <code>state: hover</code> and
									you’ll get <code>.opacity-hover:hover</code> in your compiled
									CSS.
								</p>
								<p>
									Need multiple pseudo-classes? Use a space-separated list of
									states: <code>state: hover focus</code>.
								</p>
								<PrismCode code={_states} language='scss' className='mb-4' />
								<p>Output:</p>
								<PrismCode code={_states2} language='scss' className='mb-4' />
								<Card id='responsive-utilities' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Responsive utilities</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Add the <code>responsive</code> boolean to generate
											responsive utilities (e.g., <code>.opacity-md-25</code>)
											across{' '}
											<a
												href='https://getbootstrap.com/docs/5.0/layout/breakpoints/'
												target='_blank'
												rel='noreferrer'>
												all breakpoints
											</a>
											.
										</p>
										<PrismCode
											code={_responsive}
											language='scss'
											className='mb-4'
										/>
										<p>Output:</p>
										<PrismCode
											code={_responsive2}
											language='scss'
											className='mb-0'
										/>
									</CardBody>
								</Card>
								<Card id='changing-utilities' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Changing utilities</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Override existing utilities by using the same key. For
											example, if you want additional responsive overflow
											utility classes, you can do this:
										</p>
										<PrismCode
											code={_changing}
											language='scss'
											className='mb-0'
										/>
									</CardBody>
								</Card>
								<Card id='print-utilities' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Print utilities</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Enabling the <code>print</code> option will{' '}
											<strong>also</strong> generate utility classes for
											print, which are only applied within the{' '}
											<code>{`@media print { ... }`}</code> media query.
										</p>
										<PrismCode code={_print} language='scss' className='mb-4' />
										<p>Output:</p>
										<PrismCode
											code={_print2}
											language='scss'
											className='mb-0'
										/>
									</CardBody>
								</Card>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='using-the-api' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Using the API</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Now that you’re familiar with how the utilities API works, learn
									how to add your own custom classes and modify our default
									utilities.
								</p>
								<Card id='add-utilities' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Add utilities</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											New utilities can be added to the default{' '}
											<code>$utilities</code> map with a{' '}
											<code>map-merge</code>. Use the{' '}
											<code>src/styles/utilities/_index.scss</code> file to
											write new, then use the <code>map-merge</code> to add
											your additional utilities. For example, here’s how to
											add a responsive <code>cursor</code> utility with three
											values.
										</p>
										<PrismCode
											code={_addUtilities}
											language='scss'
											className='mb-0'
										/>
									</CardBody>
								</Card>
								<Card id='modify-utilities' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Modify utilities</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Modify existing utilities in the default{' '}
											<code>$utilities</code> map with <code>map-get</code>{' '}
											and <code>map-merge</code> functions. In the example
											below, we’re adding an additional value to the{' '}
											<code>width</code> utilities. Start with an initial{' '}
											<code>map-merge</code> and then specify which utility
											you want to modify. From there, fetch the nested{' '}
											<code>"width"</code> map with <code>map-get</code> to
											access and modify the utility’s options and values.
										</p>
										<PrismCode
											code={_modifyUtilities}
											language='scss'
											className='mb-4'
										/>
										<Card
											id='rename-utilities'
											className='scroll-margin rounded-1'>
											<CardHeader>
												<CardLabel>
													<CardTitle tag='h6'>Rename utilities</CardTitle>
												</CardLabel>
											</CardHeader>
											<CardBody>
												<p>
													Missing v4 utilities, or used to another naming
													convention? The utilities API can be used to
													override the resulting <code>class</code> of a
													given utility—for example, to rename{' '}
													<code>.ms-*</code> utilities to oldish{' '}
													<code>.ml-*</code>:
												</p>
												<PrismCode
													code={_renameUtilities}
													language='scss'
													className='mb-0'
												/>
											</CardBody>
										</Card>
									</CardBody>
								</Card>
								<Card id='remove-utilities' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Remove utilities</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Remove any of the default utilities by setting the group
											key to <code>null</code>. For example, to remove all our{' '}
											<code>width</code> utilities, create a{' '}
											<code>$utilities</code> <code>map-merge</code> and add{' '}
											<code>"width": null</code> within.
										</p>
										<PrismCode
											code={_removeUtilities}
											language='scss'
											className='mb-4'
										/>
										<Card
											id='remove-utility-in-rtl'
											className='scroll-margin rounded-1'>
											<CardHeader>
												<CardLabel>
													<CardTitle tag='h6'>
														Remove utility in RTL
													</CardTitle>
												</CardLabel>
											</CardHeader>
											<CardBody>
												<p>
													Some edge cases make{' '}
													<a
														href='https://rtlstyling.com/posts/rtl-styling#common-things-that-might-not-work-for-rtl'
														target='_blank'
														rel='noreferrer'>
														RTL styling difficult
													</a>
													, such as line breaks in Arabic. Thus utilities
													can be dropped from RTL output by setting the{' '}
													<code>rtl</code> option to <code>false</code>:
												</p>
												<PrismCode
													code={_removeUtilitiesRTL}
													language='scss'
													className='mb-4'
												/>
												<p>Output:</p>
												<PrismCode
													code={_removeUtilitiesRTL2}
													language='scss'
													className='mb-4'
												/>
												<p>
													This doesn’t output anything in RTL, thanks to{' '}
													<a
														href='https://rtlcss.com/learn/usage-guide/control-directives/#remove'
														target='_blank'
														rel='noreferrer'>
														the RTLCSS <code>remove</code> control
														directive
													</a>
													.
												</p>
											</CardBody>
										</Card>
									</CardBody>
								</Card>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ApiPage;
