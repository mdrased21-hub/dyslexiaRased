import React from 'react';
import { createUseStyles } from 'react-jss';
import { HashLink } from 'react-router-hash-link';
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
import CommonCodePreview from '../../../components/common/CommonCodePreview';
import { componentsMenu } from '../../../menu';

const useStyles = createUseStyles({
	// stylelint-disable-next-line selector-type-no-unknown
	example: {
		// stylelint-disable-next-line scss/selector-no-redundant-nesting-selector
		'& .d-inline': {
			marginRight: '0.5rem',
		},
	},
});

const DisplayPage = () => {
	const classes = useStyles();

	const _example = `
<div className='d-inline p-2 bg-primary text-white'>d-inline</div>
<div className='d-inline p-2 bg-dark text-white'>d-inline</div>`;
	const _example2 = `
<span className='d-block p-2 bg-primary text-white'>d-block</span>
<span className='d-block p-2 bg-dark text-white'>d-block</span>`;

	const _hiding = `
<div className="d-lg-none">hide on lg and wider screens</div>
<div className="d-none d-lg-block">hide on screens smaller than lg</div>`;

	const _printing = `
<div className='d-print-none'>Screen Only (Hide on print only)</div>
<div className='d-none d-print-block'>Print Only (Hide on screen only)</div>
<div className='d-none d-lg-block d-print-block'>Hide up to large on screen, but always show on print</div>`;

	const _utilitiesApi = `"display": (
	responsive: true,
	print: true,
	property: display,
	class: d,
	values: inline inline-block block grid table table-row table-cell flex inline-flex none
),`;

	return (
		<PageWrapper title={componentsMenu.utilities.subMenu.display.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Utilities', to: '/utilities' },
							{ title: 'Display', to: '/utilities/display' },
						]}
					/>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12 my-4'>
						<h1>Display property</h1>
						<p className='lead'>
							Quickly and responsively toggle the display value of components and more
							with our display utilities. Includes support for some of the more common
							values, as well as some extras for controlling display when printing.
						</p>
					</div>

					<div className='col-12'>
						<Card id='how-it-works' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>How it works</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Change the value of the{' '}
									<a
										href='https://developer.mozilla.org/en-US/docs/Web/CSS/display'
										target='_blank'
										rel='noreferrer'>
										<code>display</code> property
									</a>{' '}
									with our responsive display utility classes. We purposely
									support only a subset of all possible values for{' '}
									<code>display</code>. Classes can be combined for various
									effects as you need.
								</p>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='notation' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Notation</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Display utility classes that apply to all{' '}
									<a
										href='https://getbootstrap.com/docs/5.0/layout/breakpoints/'
										target='_blank'
										rel='noreferrer'>
										breakpoints
									</a>
									, from <code>xs</code> to <code>xxl</code>, have no breakpoint
									abbreviation in them. This is because those classes are applied
									from <code>min-width: 0;</code> and up, and thus are not bound
									by a media query. The remaining breakpoints, however, do include
									a breakpoint abbreviation.
								</p>
								<p>As such, the classes are named using the format:</p>
								<ul>
									<li>
										<code>{`.d-{value}`}</code> for <code>xs</code>
									</li>
									<li>
										<code>{`.d-{breakpoint}-{value}`}</code> for <code>sm</code>
										, <code>md</code>, <code>lg</code>, <code>xl</code>, and{' '}
										<code>xxl</code>.
									</li>
								</ul>
								<p>
									Where <em>value</em> is one of:
								</p>
								<ul>
									<li>
										<code>none</code>
									</li>
									<li>
										<code>inline</code>
									</li>
									<li>
										<code>inline-block</code>
									</li>
									<li>
										<code>block</code>
									</li>
									<li>
										<code>grid</code>
									</li>
									<li>
										<code>table</code>
									</li>
									<li>
										<code>table-cell</code>
									</li>
									<li>
										<code>table-row</code>
									</li>
									<li>
										<code>flex</code>
									</li>
									<li>
										<code>inline-flex</code>
									</li>
								</ul>
								<p>
									The display values can be altered by changing the{' '}
									<code>$displays</code> variable and recompiling the SCSS.
								</p>
								<p>
									The media queries affect screen widths with the given breakpoint{' '}
									<em>or larger</em>. For example, <code>.d-lg-none</code> sets{' '}
									<code>display: none;</code> on <code>lg</code>, <code>xl</code>,
									and <code>xxl</code> screens.
								</p>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='examples' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Examples</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<CommonCodePreview code={_example}>
									<div className={classes.example}>
										<div className='d-inline p-2 bg-primary text-white'>
											d-inline
										</div>
										<div className='d-inline p-2 bg-dark text-white'>
											d-inline
										</div>
									</div>
								</CommonCodePreview>
								<CommonCodePreview code={_example2}>
									<span className='d-block p-2 bg-primary text-white'>
										d-block
									</span>
									<span className='d-block p-2 bg-dark text-white'>d-block</span>
								</CommonCodePreview>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='hiding-elements' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Hiding elements</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									For faster mobile-friendly development, use responsive display
									classes for showing and hiding elements by device. Avoid
									creating entirely different versions of the same site, instead
									hide elements responsively for each screen size.
								</p>
								<p>
									To hide elements simply use the <code>.d-none</code> class or
									one of the <code>{`.d-{(sm, md, lg, xl, xxl)}-none`}</code>{' '}
									classes for any responsive screen variation.
								</p>
								<p>
									To show an element only on a given interval of screen sizes you
									can combine one <code>.d-*-none</code> class with a{' '}
									<code>.d-*-*</code> class, for example{' '}
									<code>.d-none .d-md-block .d-xl-none .d-xxl-none</code> will
									hide the element for all screen sizes except on medium and large
									devices.
								</p>
								<table className='table'>
									<thead>
										<tr>
											<th>Screen size</th>
											<th>Class</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Hidden on all</td>
											<td>
												<code>.d-none</code>
											</td>
										</tr>
										<tr>
											<td>Hidden only on xs</td>
											<td>
												<code>.d-none .d-sm-block</code>
											</td>
										</tr>
										<tr>
											<td>Hidden only on sm</td>
											<td>
												<code>.d-sm-none .d-md-block</code>
											</td>
										</tr>
										<tr>
											<td>Hidden only on md</td>
											<td>
												<code>.d-md-none .d-lg-block</code>
											</td>
										</tr>
										<tr>
											<td>Hidden only on lg</td>
											<td>
												<code>.d-lg-none .d-xl-block</code>
											</td>
										</tr>
										<tr>
											<td>Hidden only on xl</td>
											<td>
												<code>.d-xl-none .d-xxl-block</code>
											</td>
										</tr>
										<tr>
											<td>Hidden only on xxl</td>
											<td>
												<code>.d-xxl-none</code>
											</td>
										</tr>
										<tr>
											<td>Visible on all</td>
											<td>
												<code>.d-block</code>
											</td>
										</tr>
										<tr>
											<td>Visible only on xs</td>
											<td>
												<code>.d-block .d-sm-none</code>
											</td>
										</tr>
										<tr>
											<td>Visible only on sm</td>
											<td>
												<code>.d-none .d-sm-block .d-md-none</code>
											</td>
										</tr>
										<tr>
											<td>Visible only on md</td>
											<td>
												<code>.d-none .d-md-block .d-lg-none</code>
											</td>
										</tr>
										<tr>
											<td>Visible only on lg</td>
											<td>
												<code>.d-none .d-lg-block .d-xl-none</code>
											</td>
										</tr>
										<tr>
											<td>Visible only on xl</td>
											<td>
												<code>.d-none .d-xl-block .d-xxl-none</code>
											</td>
										</tr>
										<tr>
											<td>Visible only on xxl</td>
											<td>
												<code>.d-none .d-xxl-block</code>
											</td>
										</tr>
									</tbody>
								</table>
								<CommonCodePreview code={_hiding}>
									<div className='d-lg-none'>hide on lg and wider screens</div>
									<div className='d-none d-lg-block'>
										hide on screens smaller than lg
									</div>
								</CommonCodePreview>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='display-in-print' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Display in print</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Change the <code>display</code> value of elements when printing
									with our print display utility classes. Includes support for the
									same <code>display</code> values as our responsive{' '}
									<code>.d-*</code> utilities.
								</p>
								<ul>
									<li>
										<code>.d-print-none</code>
									</li>
									<li>
										<code>.d-print-inline</code>
									</li>
									<li>
										<code>.d-print-inline-block</code>
									</li>
									<li>
										<code>.d-print-block</code>
									</li>
									<li>
										<code>.d-print-grid</code>
									</li>
									<li>
										<code>.d-print-table</code>
									</li>
									<li>
										<code>.d-print-table-row</code>
									</li>
									<li>
										<code>.d-print-table-cell</code>
									</li>
									<li>
										<code>.d-print-flex</code>
									</li>
									<li>
										<code>.d-print-inline-flex</code>
									</li>
								</ul>
								<p>The print and display classes can be combined.</p>
								<CommonCodePreview code={_printing}>
									<div className='d-print-none'>
										Screen Only (Hide on print only)
									</div>
									<div className='d-none d-print-block'>
										Print Only (Hide on screen only)
									</div>
									<div className='d-none d-lg-block d-print-block'>
										Hide up to large on screen, but always show on print
									</div>
								</CommonCodePreview>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='sass' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Sass</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<Card id='utilities-api' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Utilities API</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Display utilities are declared in our utilities API in{' '}
											<code>node_modules/bootstrap/scss/_utilities.scss</code>
											.{' '}
											<HashLink to='../utilities/api#using-the-api'>
												Learn how to use the utilities API.
											</HashLink>
										</p>
										<CommonCodePreview code={_utilitiesApi} language='scss' />
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

export default DisplayPage;
