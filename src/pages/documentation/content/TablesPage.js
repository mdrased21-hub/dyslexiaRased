import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, { SubHeaderLeft } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import CommonCodePreview from '../../../components/common/CommonCodePreview';
import CommonDesc from '../../../components/common/CommonDesc';
import { AlertHeading } from '../../../components/bootstrap/Alert';
import PrismCode from '../../../components/extras/PrismCode';
import { componentsMenu } from '../../../menu';

const ExampleTable = ({
	className,
	headClassName,
	isActive,
	isFooter,
	isCaption,
	isResponsive,
}) => {
	if (isResponsive) {
		return (
			<div className='table-responsive'>
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>#</th>
							<th scope='col'>Heading</th>
							<th scope='col'>Heading</th>
							<th scope='col'>Heading</th>
							<th scope='col'>Heading</th>
							<th scope='col'>Heading</th>
							<th scope='col'>Heading</th>
							<th scope='col'>Heading</th>
							<th scope='col'>Heading</th>
							<th scope='col'>Heading</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope='row'>1</th>
							<td>Cell</td>
							<td>Cell</td>
							<td>Cell</td>
							<td>Cell</td>
							<td>Cell</td>
							<td>Cell</td>
							<td>Cell</td>
							<td>Cell</td>
							<td>Cell</td>
						</tr>
						<tr>
							<th scope='row'>2</th>
							<td>Cell</td>
							<td>Cell</td>
							<td>Cell</td>
							<td>Cell</td>
							<td>Cell</td>
							<td>Cell</td>
							<td>Cell</td>
							<td>Cell</td>
							<td>Cell</td>
						</tr>
						<tr>
							<th scope='row'>3</th>
							<td>Cell</td>
							<td>Cell</td>
							<td>Cell</td>
							<td>Cell</td>
							<td>Cell</td>
							<td>Cell</td>
							<td>Cell</td>
							<td>Cell</td>
							<td>Cell</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
	return (
		<table className={classNames('table', className)}>
			{isCaption && <caption>List of users</caption>}
			<thead className={headClassName}>
				<tr>
					<th scope='col'>#</th>
					<th scope='col'>First</th>
					<th scope='col'>Last</th>
					<th scope='col'>Handle</th>
				</tr>
			</thead>
			<tbody>
				<tr className={classNames({ 'table-active': isActive })}>
					<th scope='row'>1</th>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
				</tr>
				<tr>
					<th scope='row'>2</th>
					<td>Jacob</td>
					<td>Thornton</td>
					<td>@fat</td>
				</tr>
				<tr>
					<th scope='row'>3</th>
					<td colSpan='2' className={classNames({ 'table-active': isActive })}>
						Larry the Bird
					</td>
					<td>@twitter</td>
				</tr>
			</tbody>
			{isFooter && (
				<tfoot>
					<tr>
						<td>Footer</td>
						<td>Footer</td>
						<td>Footer</td>
						<td>Footer</td>
					</tr>
				</tfoot>
			)}
		</table>
	);
};
ExampleTable.propTypes = {
	className: PropTypes.string,
	headClassName: PropTypes.string,
	isActive: PropTypes.bool,
	isFooter: PropTypes.bool,
	isCaption: PropTypes.bool,
	isResponsive: PropTypes.bool,
};
ExampleTable.defaultProps = {
	className: null,
	headClassName: null,
	isActive: false,
	isFooter: false,
	isCaption: false,
	isResponsive: false,
};

const TablesPage = () => {
	const _overview = `
<table className='table'>
	<thead>
		<tr>
			<th scope='col'>#</th>
			<th scope='col'>First</th>
			<th scope='col'>Last</th>
			<th scope='col'>Handle</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope='row'>1</th>
			<td>Mark</td>
			<td>Otto</td>
			<td>@mdo</td>
		</tr>
		<tr>
			<th scope='row'>2</th>
			<td>Jacob</td>
			<td>Thornton</td>
			<td>@fat</td>
		</tr>
		<tr>
			<th scope='row'>3</th>
			<td colSpan='2'>Larry the Bird</td>
			<td>@twitter</td>
		</tr>
	</tbody>
</table>`;

	const _modern = `
<table className='table'>
	<thead>
		<tr>
			<th scope='col'>#</th>
			<th scope='col'>First</th>
			<th scope='col'>Last</th>
			<th scope='col'>Handle</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope='row'>1</th>
			<td>Mark</td>
			<td>Otto</td>
			<td>@mdo</td>
		</tr>
		<tr>
			<th scope='row'>2</th>
			<td>Jacob</td>
			<td>Thornton</td>
			<td>@fat</td>
		</tr>
		<tr>
			<th scope='row'>3</th>
			<td colSpan='2'>Larry the Bird</td>
			<td>@twitter</td>
		</tr>
	</tbody>
</table>`;

	const _variants = `
// On tables
<table className='table table-primary'>...</table>
<table className='table table-secondary'>...</table>
<table className='table table-success'>...</table>
<table className='table table-danger'>...</table>
<table className='table table-warning'>...</table>
<table className='table table-info'>...</table>
<table className='table table-light'>...</table>
<table className='table table-dark'>...</table>

// On rows
<tr className='table-primary'>...</tr>
<tr className='table-secondary'>...</tr>
<tr className='table-success'>...</tr>
<tr className='table-danger'>...</tr>
<tr className='table-warning'>...</tr>
<tr className='table-info'>...</tr>
<tr className='table-light'>...</tr>
<tr className='table-dark'>...</tr>

// On cells (\`td\` or \`th\`)
<tr>
  <td className='table-primary'>...</td>
  <td className='table-secondary'>...</td>
  <td className='table-success'>...</td>
  <td className='table-danger'>...</td>
  <td className='table-warning'>...</td>
  <td className='table-info'>...</td>
  <td className='table-light'>...</td>
  <td className='table-dark'>...</td>
</tr>`;

	const _striped = `
<table className='table table-striped'>
  ...
</table>`;
	const _striped2 = `
<table className='table table-dark table-striped'>
  ...
</table>`;
	const _striped3 = `
<table className='table table-success table-striped'>
  ...
</table>`;

	const _hover = `
<table className='table table-striped'>
  ...
</table>`;
	const _hover2 = `
<table className='table table-striped'>
  ...
</table>`;
	const _hover3 = `
<table className='table table-striped'>
  ...
</table>`;

	const _active = `
<table className="table">
	<thead>
		...
	</thead>
	<tbody>
		<tr className="table-active">
			...
		</tr>
		<tr>
			...
		</tr>
		<tr>
			<th scope="row">3</th>
			<td colSpan="2" className="table-active">Larry the Bird</td>
			<td>@twitter</td>
		</tr>
	</tbody>
</table>`;
	const _active2 = `
<table className="table table-dark">
	<thead>
		...
	</thead>
	<tbody>
		<tr className="table-active">
			...
		</tr>
		<tr>
			...
		</tr>
		<tr>
			<th scope="row">3</th>
			<td colSpan="2" className="table-active">Larry the Bird</td>
			<td>@twitter</td>
		</tr>
	</tbody>
</table>`;

	const _tableVariantScss = `
@mixin table-variant($state, $background) {
  .table-#{$state} {
    $color: color-contrast(opaque($body-bg, $background));
    $hover-bg: mix($color, $background, percentage($table-hover-bg-factor));
    $striped-bg: mix($color, $background, percentage($table-striped-bg-factor));
    $active-bg: mix($color, $background, percentage($table-active-bg-factor));

    --#{$variable-prefix}table-bg: #{$background};
    --#{$variable-prefix}table-striped-bg: #{$striped-bg};
    --#{$variable-prefix}table-striped-color: #{color-contrast($striped-bg)};
    --#{$variable-prefix}table-active-bg: #{$active-bg};
    --#{$variable-prefix}table-active-color: #{color-contrast($active-bg)};
    --#{$variable-prefix}table-hover-bg: #{$hover-bg};
    --#{$variable-prefix}table-hover-color: #{color-contrast($hover-bg)};

    color: $color;
    border-color: mix($color, $background, percentage($table-border-factor));
  }
}`;

	const _bordered = `
<table className='table table-bordered'>
	...
</table>`;
	const _borderedColor = `
<table className='table table-bordered border-primary'>
	...
</table>`;
	const _borderless = `
<table className='table table-borderless'>
	...
</table>`;
	const _borderlessDark = `
<table className='table table-dark table-borderless'>
	...
</table>`;

	const _sm = `
<table className='table table-sm'>
	...
</table>`;
	const _smDark = `
<table className='table table-dark table-sm'>
	...
</table>`;

	const _vAlign = `
<table className='table table-sm table-dark'>
	<div className='table-responsive'>
		<table className='table align-middle'>
			<thead>
				<tr>...</tr>
			</thead>
			<tbody>
				<tr>...</tr>
				<tr className='align-bottom'>...</tr>
				<tr>
					<td>...</td>
					<td>...</td>
					<td className='align-top'>This cell is aligned to the top.</td>
					<td>...</td>
				</tr>
			</tbody>
		</table>
	</div>
</table>`;

	const _nesting = `
<table className='table table-striped'>
	<thead>...</thead>
	<tbody>
		...
		<tr>
			<td colSpan='4'>
				<table className='table mb-0'>
					...
				</table>
			</td>
		</tr>
		...
	</tbody>
</table>`;

	const _thead = `
<table className='table'>
	<thead className='table-light'>
		...
	</thead>
	<tbody>
		...
	</tbody>
</table>`;
	const _theadDark = `
<table className='table'>
	<thead className='table-dark'>
		...
	</thead>
	<tbody>
		...
	</tbody>
</table>`;
	const _tfoot = `
<table className='table'>
	<thead>
		...
	</thead>
	<tbody>
		...
	</tbody>
	<tfoot>
		...
	</tfoot>
</table>`;
	const _caption = `
<table className='table'>
	<caption>List of users</caption>
	<thead>...</thead>
	<tbody>...</tbody>
</table>`;
	const _captionTop = `
<table className='table caption-top'>
	<caption>List of users</caption>
	<thead>...</thead>
	<tbody>...</tbody>
</table>`;

	const _responsiveTable = `
<div className='table-responsive'>
	<table className='table'>...</table>
</div>`;
	const _responsiveTable2 = `
<div className='table-responsive'>
	<table className='table'>...</table>
</div>

<div className='table-responsive-sm'>
	<table className='table'>...</table>
</div>

<div className='table-responsive-md'>
	<table className='table'>...</table>
</div>

<div className='table-responsive-lg'>
	<table className='table'>...</table>
</div>

<div className='table-responsive-xl'>
	<table className='table'>...</table>
</div>

<div className='table-responsive-xxl'>
	<table className='table'>...</table>
</div>`;

	const _customizeTable = `
$table-cell-padding-y:        .5rem;
$table-cell-padding-x:        .5rem;
$table-cell-padding-y-sm:     .25rem;
$table-cell-padding-x-sm:     .25rem;

$table-cell-vertical-align:   top;

$table-color:                 $body-color;
$table-bg:                    transparent;

$table-th-font-weight:        null;

$table-striped-color:         $table-color;
$table-striped-bg-factor:     .05;
$table-striped-bg:            rgba($black, $table-striped-bg-factor);

$table-active-color:          $table-color;
$table-active-bg-factor:      .1;
$table-active-bg:             rgba($black, $table-active-bg-factor);

$table-hover-color:           $table-color;
$table-hover-bg-factor:       .075;
$table-hover-bg:              rgba($black, $table-hover-bg-factor);

$table-border-factor:         .1;
$table-border-width:          $border-width;
$table-border-color:          $border-color;

$table-striped-order:         odd;

$table-group-separator-color: currentColor;

$table-caption-color:         $text-muted;

$table-bg-scale:              -80%;

$table-variants: (
  "primary":    shift-color($primary, $table-bg-scale),
  "secondary":  shift-color($secondary, $table-bg-scale),
  "success":    shift-color($success, $table-bg-scale),
  "info":       shift-color($info, $table-bg-scale),
  "warning":    shift-color($warning, $table-bg-scale),
  "danger":     shift-color($danger, $table-bg-scale),
  "light":      $light,
  "dark":       $dark,
);`;

	return (
		<PageWrapper title={componentsMenu.content.subMenu.tables.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Content', to: '/content' },
							{ title: 'Tables', to: '/content/tables' },
						]}
					/>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12 my-4'>
						<h1>Tables</h1>
						<p className='lead'>
							Documentation and examples for opt-in styling of tables (given their
							prevalent use in JavaScript plugins) with Bootstrap.
						</p>
					</div>

					<div className='col-12'>
						<Card id='overview' className='scroll-margin'>
							<CardHeader>
								<CardLabel icon='Visibility'>
									<CardTitle tag='h3'>Overview</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Due to the widespread use of <code>{`<table>`}</code> elements
									across third-party widgets like calendars and date pickers,
									Bootstrap’s tables are opt-in. Add the base class{' '}
									<code>.table</code> to any <code>{`<table>`}</code>, then extend
									with our optional modifier classes or custom styles. All table
									styles are not inherited in Bootstrap, meaning any nested tables
									can be styled independent from the parent.
								</p>
								<p>
									Using the most basic table markup, here’s how{' '}
									<code>.table-</code>based tables look in Bootstrap.
								</p>
								<CommonCodePreview code={_overview}>
									<table className='table'>
										<thead>
											<tr>
												<th scope='col'>#</th>
												<th scope='col'>First</th>
												<th scope='col'>Last</th>
												<th scope='col'>Handle</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope='row'>1</th>
												<td>Mark</td>
												<td>Otto</td>
												<td>@mdo</td>
											</tr>
											<tr>
												<th scope='row'>2</th>
												<td>Jacob</td>
												<td>Thornton</td>
												<td>@fat</td>
											</tr>
											<tr>
												<th scope='row'>3</th>
												<td colSpan='2'>Larry the Bird</td>
												<td>@twitter</td>
											</tr>
										</tbody>
									</table>
								</CommonCodePreview>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='modern' className='scroll-margin'>
							<CardHeader>
								<CardLabel icon='Visibility'>
									<CardTitle tag='h3'>Modern</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Add the base class .table-modern to any <code>{`<table>`}</code>
									.
								</p>
								<CommonCodePreview code={_modern}>
									<table className='table table-modern'>
										<thead>
											<tr>
												<th scope='col'>#</th>
												<th scope='col'>First</th>
												<th scope='col'>Last</th>
												<th scope='col'>Handle</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope='row'>1</th>
												<td>Mark</td>
												<td>Otto</td>
												<td>@mdo</td>
											</tr>
											<tr>
												<th scope='row'>2</th>
												<td>Jacob</td>
												<td>Thornton</td>
												<td>@fat</td>
											</tr>
											<tr>
												<th scope='row'>3</th>
												<td colSpan='2'>Larry the Bird</td>
												<td>@twitter</td>
											</tr>
										</tbody>
									</table>
								</CommonCodePreview>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='variants' className='scroll-margin'>
							<CardHeader>
								<CardLabel icon='ContentCopy'>
									<CardTitle tag='h3'>Variants</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Use contextual classes to color tables, table rows or individual
									cells.
								</p>
								<CommonCodePreview code={_variants}>
									<table className='table'>
										<thead>
											<tr>
												<th scope='col'>Class</th>
												<th scope='col'>Heading</th>
												<th scope='col'>Heading</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope='row'>Default</th>
												<td>Cell</td>
												<td>Cell</td>
											</tr>

											<tr className='table-primary'>
												<th scope='row'>Primary</th>
												<td>Cell</td>
												<td>Cell</td>
											</tr>
											<tr className='table-secondary'>
												<th scope='row'>Secondary</th>
												<td>Cell</td>
												<td>Cell</td>
											</tr>
											<tr className='table-success'>
												<th scope='row'>Success</th>
												<td>Cell</td>
												<td>Cell</td>
											</tr>
											<tr className='table-danger'>
												<th scope='row'>Danger</th>
												<td>Cell</td>
												<td>Cell</td>
											</tr>
											<tr className='table-warning'>
												<th scope='row'>Warning</th>
												<td>Cell</td>
												<td>Cell</td>
											</tr>
											<tr className='table-info'>
												<th scope='row'>Info</th>
												<td>Cell</td>
												<td>Cell</td>
											</tr>
											<tr className='table-light'>
												<th scope='row'>Light</th>
												<td>Cell</td>
												<td>Cell</td>
											</tr>
											<tr className='table-dark'>
												<th scope='row'>Dark</th>
												<td>Cell</td>
												<td>Cell</td>
											</tr>
										</tbody>
									</table>
								</CommonCodePreview>
								<CommonDesc color='info'>
									<AlertHeading>
										Conveying meaning to assistive technologies
									</AlertHeading>
									Using color to add meaning only provides a visual indication,
									which will not be conveyed to users of assistive technologies –
									such as screen readers. Ensure that information denoted by the
									color is either obvious from the content itself (e.g. the
									visible text), or is included through alternative means, such as
									additional text hidden with the <code>.visually-hidden</code>{' '}
									class.
								</CommonDesc>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='accented-tables' className='scroll-margin'>
							<CardHeader>
								<CardLabel icon='FormatAlignJustify'>
									<CardTitle tag='h3'>Accented tables</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<Card id='striped-rows' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Striped rows</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Use <code>.table-striped</code> to add zebra-striping to
											any table row within the <code>{`<tbody>`}</code>.
										</p>
										<div className='row g-4'>
											<div className='col-lg-4'>
												<CommonCodePreview code={_striped} className='mb-0'>
													<ExampleTable className='table-striped' />
												</CommonCodePreview>
											</div>
											<div className='col-lg-4'>
												<CommonCodePreview
													code={_striped2}
													className='mb-0'>
													<ExampleTable className='table-dark table-striped' />
												</CommonCodePreview>
											</div>
											<div className='col-lg-4'>
												<CommonCodePreview
													code={_striped3}
													className='mb-0'>
													<ExampleTable className='table-success table-striped' />
												</CommonCodePreview>
											</div>
										</div>
									</CardBody>
								</Card>
								<Card id='hoverable-rows' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Hoverable rows</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Add .table-hover to enable a hover state on table rows
											within a <code>{`<tbody>`}</code>.
										</p>
										<div className='row g-4'>
											<div className='col-lg-4'>
												<CommonCodePreview code={_hover} className='mb-0'>
													<ExampleTable className='table-hover' />
												</CommonCodePreview>
											</div>
											<div className='col-lg-4'>
												<CommonCodePreview code={_hover2} className='mb-0'>
													<ExampleTable className='table-dark table-hover' />
												</CommonCodePreview>
											</div>
											<div className='col-lg-4'>
												<CommonCodePreview code={_hover3} className='mb-0'>
													<ExampleTable className='table-hover table-striped' />
												</CommonCodePreview>
											</div>
										</div>
									</CardBody>
								</Card>
								<Card id='active-tables' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Active tables</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Highlight a table row or cell by adding a{' '}
											<code>.table-active</code> class.
										</p>
										<div className='row g-4'>
											<div className='col-lg-6'>
												<CommonCodePreview code={_active} className='mb-0'>
													<ExampleTable isActive />
												</CommonCodePreview>
											</div>
											<div className='col-lg-6'>
												<CommonCodePreview code={_active2} className='mb-0'>
													<ExampleTable isActive className='table-dark' />
												</CommonCodePreview>
											</div>
										</div>
									</CardBody>
								</Card>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card
							id='how-do-the-variants-and-accented-tables-work'
							className='scroll-margin'>
							<CardHeader>
								<CardLabel icon='Help'>
									<CardTitle tag='h3'>
										How do the variants and accented tables work?
									</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									For the accented tables (
									<a href='#striped-rows'>striped rows</a>,{' '}
									<a href='#hoverable-rows'>hoverable rows</a>, and{' '}
									<a href='#active-tables'>active tables</a>), we used some
									techniques to make these effects work for all our{' '}
									<a href='#variants'>table variants</a>:
								</p>
								<ul>
									<li>
										We start by setting the background of a table cell with the{' '}
										<code>--bs-table-bg</code> custom property. All table
										variants then set that custom property to colorize the table
										cells. This way, we don’t get into trouble if
										semi-transparent colors are used as table backgrounds.
									</li>
									<li>
										Then we add an inset box shadow on the table cells with{' '}
										<code>
											box-shadow: inset 0 0 0 9999px
											var(--bs-table-accent-bg);
										</code>{' '}
										to layer on top of any specified{' '}
										<code>background-color</code>. Because we use a huge spread
										and no blur, the color will be monotone. Since{' '}
										<code>--bs-table-accent-bg</code> is unset by default, we
										don’t have a default box shadow.
									</li>
									<li>
										When either <code>.table-striped</code>,{' '}
										<code>.table-hover</code> or <code>.table-active</code>{' '}
										classes are added, the <code>--bs-table-accent-bg</code> is
										set to a semitransparent color to colorize the background.
									</li>
									<li>
										For each table variant, we generate a{' '}
										<code>--bs-table-accent-bg</code> color with the highest
										contrast depending on that color. For example, the accent
										color for <code>.table-primary</code> is darker while{' '}
										<code>.table-dark</code> has a lighter accent color.
									</li>
									<li>
										Text and border colors are generated the same way, and their
										colors are inherited by default.
									</li>
								</ul>
								<p>Behind the scenes it looks like this:</p>
								<PrismCode
									code={_tableVariantScss}
									language='scss'
									className='mb-0'
								/>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='table-borders' className='scroll-margin'>
							<CardHeader>
								<CardLabel icon='BorderStyle'>
									<CardTitle tag='h3'>Table borders</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<Card id='bordered-tables' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Bordered tables</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Add <code>.table-bordered</code> for borders on all
											sides of the table and cells.
										</p>
										<CommonCodePreview code={_bordered}>
											<ExampleTable className='table-bordered' />
										</CommonCodePreview>
										<p>
											<HashLink to='../utilities/borders/#border-color'>
												Border color utilities
											</HashLink>{' '}
											can be added to change colors:
										</p>
										<CommonCodePreview code={_borderedColor}>
											<ExampleTable className='table-bordered border-primary' />
										</CommonCodePreview>
									</CardBody>
								</Card>
								<Card
									id='tables-without-borders'
									className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Tables without borders</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Add <code>.table-borderless</code> for a table without
											borders.
										</p>
										<div className='row g-4'>
											<div className='col-lg-6'>
												<CommonCodePreview code={_borderless}>
													<ExampleTable className='table-borderless' />
												</CommonCodePreview>
											</div>
											<div className='col-lg-6'>
												<CommonCodePreview code={_borderlessDark}>
													<ExampleTable className='table-dark table-borderless' />
												</CommonCodePreview>
											</div>
										</div>
									</CardBody>
								</Card>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='small-tables' className='scroll-margin'>
							<CardHeader>
								<CardLabel icon='Straighten'>
									<CardTitle tag='h3'>Small tables</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Add <code>.table-sm</code> to make any <code>.table</code> more
									compact by cutting all cell <code>padding</code> in half.
								</p>
								<div className='row g-4'>
									<div className='col-lg-6'>
										<CommonCodePreview code={_sm}>
											<ExampleTable className='table-sm' />
										</CommonCodePreview>
									</div>
									<div className='col-lg-6'>
										<CommonCodePreview code={_smDark}>
											<ExampleTable className='table-dark table-sm' />
										</CommonCodePreview>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='vertical-alignment' className='scroll-margin'>
							<CardHeader>
								<CardLabel icon='VerticalAlignCenter'>
									<CardTitle tag='h3'>Vertical alignment</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Table cells of <code>{`<thead>`}</code> are always vertical
									aligned to the bottom. Table cells in <code>{`<tbody>`}</code>{' '}
									inherit their alignment from <code>{`<table>`}</code> and are
									aligned to the the top by default. Use the{' '}
									<Link to='../utilities/vertical-align'>vertical align</Link>{' '}
									classes to re-align where needed.
								</p>
								<CommonCodePreview code={_vAlign}>
									<div className='table-responsive'>
										<table className='table align-middle'>
											<thead>
												<tr>
													<th scope='col' className='w-25'>
														Heading 1
													</th>
													<th scope='col' className='w-25'>
														Heading 2
													</th>
													<th scope='col' className='w-25'>
														Heading 3
													</th>
													<th scope='col' className='w-25'>
														Heading 4
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														This cell inherits{' '}
														<code>vertical-align: middle;</code> from
														the table
													</td>
													<td>
														This cell inherits{' '}
														<code>vertical-align: middle;</code> from
														the table
													</td>
													<td>
														This cell inherits{' '}
														<code>vertical-align: middle;</code> from
														the table
													</td>
													<td>
														This here is some placeholder text, intended
														to take up quite a bit of vertical space, to
														demonstrate how the vertical alignment works
														in the preceding cells.
													</td>
												</tr>
												<tr className='align-bottom'>
													<td>
														This cell inherits{' '}
														<code>vertical-align: bottom;</code> from
														the table row
													</td>
													<td>
														This cell inherits{' '}
														<code>vertical-align: bottom;</code> from
														the table row
													</td>
													<td>
														This cell inherits{' '}
														<code>vertical-align: bottom;</code> from
														the table row
													</td>
													<td>
														This here is some placeholder text, intended
														to take up quite a bit of vertical space, to
														demonstrate how the vertical alignment works
														in the preceding cells.
													</td>
												</tr>
												<tr>
													<td>
														This cell inherits{' '}
														<code>vertical-align: middle;</code> from
														the table
													</td>
													<td>
														This cell inherits{' '}
														<code>vertical-align: middle;</code> from
														the table
													</td>
													<td className='align-top'>
														This cell is aligned to the top.
													</td>
													<td>
														This here is some placeholder text, intended
														to take up quite a bit of vertical space, to
														demonstrate how the vertical alignment works
														in the preceding cells.
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</CommonCodePreview>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='nesting' className='scroll-margin'>
							<CardHeader>
								<CardLabel icon='CopyAll'>
									<CardTitle tag='h3'>Nesting</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Border styles, active styles, and table variants are not
									inherited by nested tables.
								</p>
								<CommonCodePreview code={_nesting}>
									<table className='table table-striped table-bordered'>
										<thead>
											<tr>
												<th scope='col'>#</th>
												<th scope='col'>First</th>
												<th scope='col'>Last</th>
												<th scope='col'>Handle</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope='row'>1</th>
												<td>Mark</td>
												<td>Otto</td>
												<td>@mdo</td>
											</tr>
											<tr>
												<td colSpan='4'>
													<table className='table mb-0'>
														<thead>
															<tr>
																<th scope='col'>Header</th>
																<th scope='col'>Header</th>
																<th scope='col'>Header</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<th scope='row'>A</th>
																<td>First</td>
																<td>Last</td>
															</tr>
															<tr>
																<th scope='row'>B</th>
																<td>First</td>
																<td>Last</td>
															</tr>
															<tr>
																<th scope='row'>C</th>
																<td>First</td>
																<td>Last</td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
											<tr>
												<th scope='row'>3</th>
												<td>Larry</td>
												<td>the Bird</td>
												<td>@twitter</td>
											</tr>
										</tbody>
									</table>
								</CommonCodePreview>
								<CommonDesc>
									<AlertHeading id='how-nesting-works' className='scroll-margin'>
										How nesting works
									</AlertHeading>
									<p>
										To prevent any styles from leaking to nested tables, we use
										the child combinator (<code>{`>`}</code>) selector in our
										CSS. Since we need to target all the <code>td</code>s and{' '}
										<code>th</code>s in the <code>thead</code>,{' '}
										<code>tbody</code>, and <code>tfoot</code>, our selector
										would look pretty long without it. As such, we use the
										rather odd looking{' '}
										<code>{`.table > :not(caption) > * > *`}</code> selector to
										target all <code>td</code>s and <code>th</code>s of the
										<code>.table</code>, but none of any potential nested
										tables.
									</p>
									<p>
										Note that if you add <code>{`<tr>`}</code>s as direct
										children of a table, those <code>{`<tr>`}</code> will be
										wrapped in a <code>{`<tbody>`}</code> by default, thus
										making our selectors work as intended.
									</p>
								</CommonDesc>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='anatomy' className='scroll-margin'>
							<CardHeader>
								<CardLabel icon='PivotTableChart'>
									<CardTitle tag='h3'>Anatomy</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<Card id='table-head' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Table head</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Similar to tables and dark tables, use the modifier
											classes <code>.table-light</code> or{' '}
											<code>.table-dark</code> to make{' '}
											<code>{`<thead>`}</code>s appear light or dark gray.
										</p>
										<div className='row g-4'>
											<div className='col-lg-6'>
												<CommonCodePreview code={_thead} className='mb-0'>
													<ExampleTable headClassName='table-light' />
												</CommonCodePreview>
											</div>
											<div className='col-lg-6'>
												<CommonCodePreview
													code={_theadDark}
													className='mb-0'>
													<ExampleTable headClassName='table-dark' />
												</CommonCodePreview>
											</div>
										</div>
									</CardBody>
								</Card>
								<Card id='table-foot' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Table foot</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<CommonCodePreview code={_tfoot}>
											<ExampleTable isFooter />
										</CommonCodePreview>
									</CardBody>
								</Card>
								<Card id='captions' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Captions</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											A <code>{`<caption>`}</code> functions like a heading
											for a table. It helps users with screen readers to find
											a table and understand what it’s about and decide if
											they want to read it.
										</p>
										<CommonCodePreview code={_caption}>
											<ExampleTable isCaption />
										</CommonCodePreview>
										<p>
											You can also put the <code>{`<caption>`}</code> on the
											top of the table with <code>.caption-top</code>.
										</p>
										<CommonCodePreview code={_captionTop}>
											<ExampleTable isCaption className='caption-top' />
										</CommonCodePreview>
									</CardBody>
								</Card>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='responsive-tables' className='scroll-margin'>
							<CardHeader>
								<CardLabel icon='AspectRatio'>
									<CardTitle tag='h3'>Responsive tables</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Responsive tables allow tables to be scrolled horizontally with
									ease. Make any table responsive across all viewports by wrapping
									a <code>.table</code> with <code>.table-responsive</code>. Or,
									pick a maximum breakpoint with which to have a responsive table
									up to by using{' '}
									<code>{`.table-responsive{-sm | -md | -lg | -xl | -xxl}`}</code>
									.
								</p>
								<CommonDesc className='mb-4'>
									<AlertHeading>Vertical clipping/truncation</AlertHeading>
									<p>
										Responsive tables make use of{' '}
										<code>overflow-y: hidden</code>, which clips off any content
										that goes beyond the bottom or top edges of the table. In
										particular, this can clip off dropdown menus and other
										third-party widgets.
									</p>
								</CommonDesc>
								<Card id='always-responsive' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Always responsive</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Across every breakpoint, use{' '}
											<code>.table-responsive</code> for horizontally
											scrolling tables.
										</p>
										<CommonCodePreview code={_responsiveTable}>
											<ExampleTable isResponsive />
										</CommonCodePreview>
									</CardBody>
								</Card>
								<Card id='breakpoint-specific' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Breakpoint specific</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Use{' '}
											<code>{`.table-responsive{-sm|-md|-lg|-xl|-xxl}`}</code>{' '}
											as needed to create responsive tables up to a particular
											breakpoint. From that breakpoint and up, the table will
											behave normally and not scroll horizontally.
										</p>
										<p>
											<b>
												These tables may appear broken until their
												responsive styles apply at specific viewport widths.
											</b>
										</p>
										<CommonCodePreview code={_responsiveTable2}>
											<ExampleTable isResponsive />
										</CommonCodePreview>
									</CardBody>
								</Card>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='customizing-in-sass' className='scroll-margin'>
							<CardHeader>
								<CardLabel icon='Code'>
									<CardTitle tag='h3'>Customizing in Sass</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<ul>
									<li>
										The factor variables (<code>$table-striped-bg-factor</code>,
										<code>$table-active-bg-factor</code> &{' '}
										<code>$table-hover-bg-factor</code>) are used to determine
										the contrast in table variants.
									</li>
									<li>
										Apart from the light & dark table variants, theme colors are
										lightened by the <code>$table-bg-level</code> variable.
									</li>
								</ul>
								<PrismCode
									code={_customizeTable}
									language='scss'
									className='my-0'
								/>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default TablesPage;
