import React from 'react';
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

const SpacingPage = () => {
	const _example = `.mt-0 {
  margin-top: 0 !important;
}

.ms-1 {
  margin-left: ($spacer * .25) !important;
}

.px-2 {
  padding-left: ($spacer * .5) !important;
  padding-right: ($spacer * .5) !important;
}

.p-3 {
  padding: $spacer !important;
}`;
	const _horizontalCentering = `
<div className='mx-auto' style={{ width: 200, backgroundColor: 'rgba(86, 61, 124, 0.15)' }}>
	Centered element
</div>`;

	const _negativeMargin = `
.mt-n1 {
	margin-top: -0.25rem !important;
}`;

	const _gap = `
<div className='d-grid gap-3'>
	<div className='p-2 bg-light border'>Grid item 1</div>
	<div className='p-2 bg-light border'>Grid item 2</div>
	<div className='p-2 bg-light border'>Grid item 3</div>
</div>`;

	const _map = `
$spacer: 1rem;
$spacers: (
  	0: 0,
  	1: $spacer / 4,
  	2: $spacer / 2,
  	3: $spacer,
  	4: $spacer * 1.5,
  	5: $spacer * 3,
);

$negative-spacers: if($enable-negative-margins, negativify-map($spacers), null);`;
	const _utilitiesApi = `
"margin": (
  	responsive: true,
  	property: margin,
  	class: m,
  	values: map-merge($spacers, (auto: auto))
),
"margin-x": (
  	responsive: true,
  	property: margin-right margin-left,
  	class: mx,
  	values: map-merge($spacers, (auto: auto))
),
"margin-y": (
  	responsive: true,
  	property: margin-top margin-bottom,
  	class: my,
  	values: map-merge($spacers, (auto: auto))
),
"margin-top": (
  	responsive: true,
  	property: margin-top,
  	class: mt,
  	values: map-merge($spacers, (auto: auto))
),
"margin-end": (
  	responsive: true,
  	property: margin-right,
  	class: me,
  	values: map-merge($spacers, (auto: auto))
),
"margin-bottom": (
  	responsive: true,
  	property: margin-bottom,
  	class: mb,
  	values: map-merge($spacers, (auto: auto))
),
"margin-start": (
  	responsive: true,
  	property: margin-left,
  	class: ms,
  	values: map-merge($spacers, (auto: auto))
),
// Negative margin utilities
"negative-margin": (
  	responsive: true,
  	property: margin,
  	class: m,
  	values: $negative-spacers
),
"negative-margin-x": (
  	responsive: true,
  	property: margin-right margin-left,
  	class: mx,
  	values: $negative-spacers
),
"negative-margin-y": (
  	responsive: true,
  	property: margin-top margin-bottom,
  	class: my,
  	values: $negative-spacers
),
"negative-margin-top": (
  	responsive: true,
  	property: margin-top,
  	class: mt,
  	values: $negative-spacers
),
"negative-margin-end": (
  	responsive: true,
  	property: margin-right,
  	class: me,
  	values: $negative-spacers
),
"negative-margin-bottom": (
  	responsive: true,
  	property: margin-bottom,
  	class: mb,
  	values: $negative-spacers
),
"negative-margin-start": (
  	responsive: true,
  	property: margin-left,
  	class: ms,
  	values: $negative-spacers
),
// Padding utilities
"padding": (
  	responsive: true,
  	property: padding,
  	class: p,
  	values: $spacers
),
"padding-x": (
  	responsive: true,
  	property: padding-right padding-left,
  	class: px,
  	values: $spacers
),
"padding-y": (
  	responsive: true,
  	property: padding-top padding-bottom,
  	class: py,
  	values: $spacers
),
"padding-top": (
  	responsive: true,
  	property: padding-top,
  	class: pt,
  	values: $spacers
),
"padding-end": (
  	responsive: true,
  	property: padding-right,
  	class: pe,
  	values: $spacers
),
"padding-bottom": (
  	responsive: true,
  	property: padding-bottom,
  	class: pb,
  	values: $spacers
),
"padding-start": (
  	responsive: true,
  	property: padding-left,
  	class: ps,
  	values: $spacers
),`;

	return (
		<PageWrapper title={componentsMenu.utilities.subMenu.spacing.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Utilities', to: '/utilities' },
							{ title: 'Spacing', to: '/utilities/spacing' },
						]}
					/>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12 my-4'>
						<h1>Spacing</h1>
						<p className='lead'>
							Bootstrap includes a wide range of shorthand responsive margin, padding,
							and gap utility classes to modify an element’s appearance.
						</p>
					</div>

					<div className='col-12'>
						<Card id='margin-and-padding' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Margin and padding</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Assign responsive-friendly <code>margin</code> or{' '}
									<code>padding</code> values to an element or a subset of its
									sides with shorthand classes. Includes support for individual
									properties, all properties, and vertical and horizontal
									properties. Classes are built from a default Sass map ranging
									from <code>.25rem</code> to <code>3rem</code>.
								</p>
								<p>
									Using the CSS Grid layout module? Consider using{' '}
									<HashLink to='#gap'>the gap utility</HashLink>.
								</p>
								<Card id='notation' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Notation</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Spacing utilities that apply to all breakpoints, from{' '}
											<code>xs</code> to <code>xxl</code>, have no breakpoint
											abbreviation in them. This is because those classes are
											applied from <code>min-width: 0</code> and up, and thus
											are not bound by a media query. The remaining
											breakpoints, however, do include a breakpoint
											abbreviation.
										</p>
										<p>
											The classes are named using the format{' '}
											<code>{`{property}{sides}-{size}`}</code> for{' '}
											<code>xs</code> and{' '}
											<code>{`{property}{sides}-{breakpoint}-{size}`}</code>{' '}
											for <code>sm</code>, <code>md</code>, <code>lg</code>,{' '}
											<code>xl</code>, and <code>xxl</code>.
										</p>
										<p>
											Where <em>property</em> is one of:
										</p>
										<ul>
											<li>
												<code>m</code> - for classes that set{' '}
												<code>margin</code>
											</li>
											<li>
												<code>p</code> - for classes that set{' '}
												<code>padding</code>
											</li>
										</ul>
										<p>
											Where <em>sides</em> is one of:
										</p>
										<ul>
											<li>
												<code>t</code> - for classes that set{' '}
												<code>margin-top</code> or <code>padding-top</code>
											</li>
											<li>
												<code>b</code> - for classes that set{' '}
												<code>margin-bottom</code> or{' '}
												<code>padding-bottom</code>
											</li>
											<li>
												<code>s</code> - for classes that set{' '}
												<code>margin-left</code> or{' '}
												<code>padding-left</code> in LTR,{' '}
												<code>margin-right</code> or{' '}
												<code>padding-right</code> in RTL
											</li>
											<li>
												<code>e</code> - for classes that set{' '}
												<code>margin-right</code> or{' '}
												<code>padding-right</code> in LTR,{' '}
												<code>margin-left</code> or{' '}
												<code>padding-left</code> in RTL
											</li>
											<li>
												<code>x</code> - for classes that set both{' '}
												<code>*-left</code> and <code>*-right</code>
											</li>
											<li>
												<code>y</code> - for classes that set both{' '}
												<code>*-top</code> and <code>*-bottom</code>
											</li>
											<li>
												blank - for classes that set a <code>margin</code>{' '}
												or <code>padding</code> on all 4 sides of the
												element
											</li>
										</ul>
										<p>
											Where <em>size</em> is one of:
										</p>
										<ul>
											<li>
												<code>0</code> - for classes that eliminate the{' '}
												<code>margin</code> or <code>padding</code> by
												setting it to <code>0</code>
											</li>
											<li>
												<code>1</code> - (by default) for classes that set
												the <code>margin</code> or <code>padding</code> to{' '}
												<code>$spacer * .25</code>
											</li>
											<li>
												<code>2</code> - (by default) for classes that set
												the <code>margin</code> or <code>padding</code> to{' '}
												<code>$spacer * .5</code>
											</li>
											<li>
												<code>3</code> - (by default) for classes that set
												the <code>margin</code> or <code>padding</code> to{' '}
												<code>$spacer</code>
											</li>
											<li>
												<code>4</code> - (by default) for classes that set
												the <code>margin</code> or <code>padding</code> to{' '}
												<code>$spacer * 1.5</code>
											</li>
											<li>
												<code>5</code> - (by default) for classes that set
												the <code>margin</code> or <code>padding</code> to{' '}
												<code>$spacer * 3</code>
											</li>
											<li>
												<code>auto</code> - for classes that set the{' '}
												<code>margin</code> to auto
											</li>
										</ul>
										<p>
											(You can add more sizes by adding entries to the{' '}
											<code>$spacers</code> Sass map variable.)
										</p>
									</CardBody>
								</Card>
								<Card id='examples' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Examples</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Here are some representative examples of these classes:
										</p>
										<CommonCodePreview code={_example} language='scss' />
									</CardBody>
								</Card>
								<Card id='horizontal-centering' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Horizontal centering</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Additionally, Bootstrap also includes an{' '}
											<code>.mx-auto</code> class for horizontally centering
											fixed-width block level content—that is, content that
											has <code>display: block</code> and a <code>width</code>{' '}
											set—by setting the horizontal margins to{' '}
											<code>auto</code>.
										</p>
										<CommonCodePreview code={_horizontalCentering}>
											<div
												className='mx-auto'
												style={{
													width: 200,
													backgroundColor: 'rgba(86, 61, 124, 0.15)',
												}}>
												Centered element
											</div>
										</CommonCodePreview>
									</CardBody>
								</Card>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='negative-margin' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Negative margin</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									In CSS, <code>margin</code> properties can utilize negative
									values (<code>padding</code> cannot). These negative margins are{' '}
									<strong>disabled by default</strong>, but can be enabled in Sass
									by setting <code>$enable-negative-margins: true</code>.
								</p>
								<p>
									The syntax is nearly the same as the default, positive margin
									utilities, but with the addition of <code>n</code> before the
									requested size. Here’s an example class that’s the opposite of{' '}
									<code>.mt-1</code>:
								</p>
								<CommonCodePreview code={_negativeMargin} language='scss' />
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='gap' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Gap</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									When using <code>display: grid</code>, you can make use of{' '}
									<code>gap</code> utilities on the parent grid container. This
									can save on having to add margin utilities to individual grid
									items (children of a <code>display: grid</code> container). Gap
									utilities are responsive by default, and are generated via our
									utilities API, based on the <code>$spacers</code> Sass map.
								</p>
								<CommonCodePreview code={_gap}>
									<div className='d-grid gap-3'>
										<div className='p-2 bg-light border'>Grid item 1</div>
										<div className='p-2 bg-light border'>Grid item 2</div>
										<div className='p-2 bg-light border'>Grid item 3</div>
									</div>
								</CommonCodePreview>
								<p>
									Support includes responsive options for all of Bootstrap’s grid
									breakpoints, as well as six sizes from the <code>$spacers</code>{' '}
									map (<code>0</code>–<code>5</code>). There is no{' '}
									<code>.gap-auto</code> utility class as it’s effectively the
									same as <code>.gap-0</code>.
								</p>
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
								<Card id='map' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Map</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Spacing utilities are declared via Sass map and then
											generated with our utilities API.
										</p>
										<CommonCodePreview code={_map} language='scss' />
									</CardBody>
								</Card>
								<Card id='utilities-api' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Utilities API</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Sizing utilities are declared in our utilities API in{' '}
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

export default SpacingPage;
