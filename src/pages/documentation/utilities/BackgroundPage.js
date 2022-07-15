import React from 'react';
import { Link } from 'react-router-dom';
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

const BackgroundPage = () => {
	const _backgroundColor = `
<div className='p-3 mb-2 bg-primary text-white'>.bg-primary</div>
<div className='p-3 mb-2 bg-secondary text-white'>.bg-secondary</div>
<div className='p-3 mb-2 bg-success text-white'>.bg-success</div>
<div className='p-3 mb-2 bg-danger text-white'>.bg-danger</div>
<div className='p-3 mb-2 bg-warning text-dark'>.bg-warning</div>
<div className='p-3 mb-2 bg-info text-dark'>.bg-info</div>
<div className='p-3 mb-2 bg-light text-dark'>.bg-light</div>
<div className='p-3 mb-2 bg-dark text-white'>.bg-dark</div>
<div className='p-3 mb-2 bg-body text-dark'>.bg-body</div>
<div className='p-3 mb-2 bg-white text-dark'>.bg-white</div>
<div className='p-3 mb-2 bg-transparent text-dark'>.bg-transparent</div>`;

	const _backgroundColorLight = `
<div className='row g-2'>
	<div className='col'><div className='p-3 mb-2 bg-l10-primary text-dark'>.bg-l10-primary</div></div>
	<div className='col'><div className='p-3 mb-2 bg-l25-primary text-dark'>.bg-l25-primary</div></div>
	<div className='col'><div className='p-3 mb-2 bg-l50-primary text-dark'>.bg-l50-primary</div></div>
	<div className='col'><div className='p-3 mb-2 bg-l75-primary text-white'>.bg-l75-primary</div></div>
	<div className='col'><div className='p-3 mb-2 bg-l90-primary text-white'>.bg-l90-primary</div></div>
</div>`;

	const _backgroundColorLightOpacity = `
<div className='row g-2'>
	<div className='col'><div className='p-3 mb-2 bg-lo10-primary text-dark'>.bg-lo10-primary</div></div>
	<div className='col'><div className='p-3 mb-2 bg-lo25-primary text-dark'>.bg-lo25-primary</div></div>
	<div className='col'><div className='p-3 mb-2 bg-lo50-primary text-dark'>.bg-lo50-primary</div></div>
	<div className='col'><div className='p-3 mb-2 bg-lo75-primary text-white'>.bg-lo75-primary</div></div>
	<div className='col'><div className='p-3 mb-2 bg-lo90-primary text-white'>.bg-lo90-primary</div></div>
</div>`;

	const _backgroundColor2 = `
<div className='p-3 mb-2 bg-primary bg-gradient text-white'>.bg-primary.bg-gradient</div>
<div className='p-3 mb-2 bg-secondary bg-gradient text-white'>.bg-secondary.bg-gradient</div>
<div className='p-3 mb-2 bg-success bg-gradient text-white'>.bg-success.bg-gradient</div>
<div className='p-3 mb-2 bg-danger bg-gradient text-white'>.bg-danger.bg-gradient</div>
<div className='p-3 mb-2 bg-warning bg-gradient text-dark'>.bg-warning.bg-gradient</div>
<div className='p-3 mb-2 bg-info bg-gradient text-dark'>.bg-info.bg-gradient</div>
<div className='p-3 mb-2 bg-light bg-gradient text-dark'>.bg-light.bg-gradient</div>
<div className='p-3 mb-2 bg-dark bg-gradient text-white'>.bg-dark.bg-gradient</div>`;

	const _variables = `
$primary:       ${process.env.REACT_APP_PRIMARY_COLOR};
$secondary:		${process.env.REACT_APP_SECONDARY_COLOR};
$success:       ${process.env.REACT_APP_SUCCESS_COLOR};
$info:          ${process.env.REACT_APP_INFO_COLOR};
$warning:       ${process.env.REACT_APP_WARNING_COLOR};
$danger:        ${process.env.REACT_APP_DANGER_COLOR};
$light:         ${process.env.REACT_APP_LIGHT_COLOR};
$dark:          ${process.env.REACT_APP_DARK_COLOR};`;
	const _variables2 = `
$gradient: linear-gradient(180deg, rgba($white, .15), rgba($white, 0));`;
	const _variables3 = `
$white:    #fff;
$gray-100: #f8f9fa;
$gray-200: #e9ecef;
$gray-300: #dee2e6;
$gray-400: #ced4da;
$gray-500: #adb5bd;
$gray-600: #6c757d;
$gray-700: #495057;
$gray-800: #343a40;
$gray-900: #212529;
$black:    #000;`;

	const _map = `
$theme-colors: (
	"primary":    $primary,
  	"secondary":  $secondary,
  	"success":    $success,
  	"info":       $info,
  	"warning":    $warning,
  	"danger":     $danger,
  	"light":      $light,
  	"dark":       $dark
);`;
	const _map2 = `
$grays: (
	"100": $gray-100,
  	"200": $gray-200,
	"300": $gray-300,
  	"400": $gray-400,
  	"500": $gray-500,
  	"600": $gray-600,
  	"700": $gray-700,
  	"800": $gray-800,
  	"900": $gray-900
);`;

	const _mixin = `
@mixin gradient-bg($color: null) {
	background-color: $color;

	@if $enable-gradients {
		background-image: var(--#{$variable-prefix}gradient);
	}
}`;
	const _mixin2 = `
// Horizontal gradient, from left to right
//
// Creates two color stops, start and end, by specifying a color and position for each color stop.
@mixin gradient-x($start-color: $gray-700, $end-color: $gray-800, $start-percent: 0%, $end-percent: 100%) {
	background-image: linear-gradient(to right, $start-color $start-percent, $end-color $end-percent);
}

// Vertical gradient, from top to bottom
//
// Creates two color stops, start and end, by specifying a color and position for each color stop.
@mixin gradient-y($start-color: $gray-700, $end-color: $gray-800, $start-percent: null, $end-percent: null) {
	background-image: linear-gradient(to bottom, $start-color $start-percent, $end-color $end-percent);
}

@mixin gradient-directional($start-color: $gray-700, $end-color: $gray-800, $deg: 45deg) {
	background-image: linear-gradient($deg, $start-color, $end-color);
}

@mixin gradient-x-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {
	background-image: linear-gradient(to right, $start-color, $mid-color $color-stop, $end-color);
}

@mixin gradient-y-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {
	background-image: linear-gradient($start-color, $mid-color $color-stop, $end-color);
}

@mixin gradient-radial($inner-color: $gray-700, $outer-color: $gray-800) {
	background-image: radial-gradient(circle, $inner-color, $outer-color);
}

@mixin gradient-striped($color: rgba($white, .15), $angle: 45deg) {
	background-image: linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);
}`;

	const _utilitiesApi = `
"background-color": (
	property: background-color,
	class: bg,
	values: map-merge(
		$theme-colors,
		(
        	"body": $body-bg,
        	"white": $white,
          	"transparent": transparent
        )
    )
),`;

	return (
		<PageWrapper title={componentsMenu.utilities.subMenu.background.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Utilities', to: '/utilities' },
							{ title: 'Background', to: '/utilities/background' },
						]}
					/>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12 my-4'>
						<h1>Background</h1>
						<p className='lead'>
							Convey meaning through <code>background-color</code> and add decoration
							with gradients.
						</p>
					</div>

					<div className='col-12'>
						<Card id='background-color' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Background color</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Similar to the contextual text color classes, set the background
									of an element to any contextual class. Background utilities{' '}
									<strong>
										do not set <code>color</code>
									</strong>
									, so in some cases you’ll want to use <code>.text-*</code>{' '}
									<Link to='../utilities/colors/'>color utilities</Link>.
								</p>
								<CommonCodePreview code={_backgroundColor}>
									<div className='p-3 mb-2 bg-primary text-white'>
										.bg-primary
									</div>
									<div className='p-3 mb-2 bg-secondary text-white'>
										.bg-secondary
									</div>
									<div className='p-3 mb-2 bg-success text-white'>
										.bg-success
									</div>
									<div className='p-3 mb-2 bg-danger text-white'>.bg-danger</div>
									<div className='p-3 mb-2 bg-warning text-dark'>.bg-warning</div>
									<div className='p-3 mb-2 bg-info text-dark'>.bg-info</div>
									<div className='p-3 mb-2 bg-light text-dark'>.bg-light</div>
									<div className='p-3 mb-2 bg-dark text-white'>.bg-dark</div>
									<div className='p-3 mb-2 bg-body text-dark'>.bg-body</div>
									<div className='p-3 mb-2 bg-white text-dark'>.bg-white</div>
									<div className='p-3 mb-2 bg-transparent text-dark'>
										.bg-transparent
									</div>
								</CommonCodePreview>
								<CommonCodePreview code={_backgroundColorLight}>
									<div className='row g-2'>
										<div className='col'>
											<div className='p-3 mb-2 bg-l10-primary text-dark'>
												.bg-l10-primary
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l25-primary text-dark'>
												.bg-l25-primary
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l50-primary text-dark'>
												.bg-l50-primary
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l75-primary text-white'>
												.bg-l75-primary
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l90-primary text-white'>
												.bg-l90-primary
											</div>
										</div>
									</div>
									<div className='row g-2'>
										<div className='col'>
											<div className='p-3 mb-2 bg-l10-secondary text-dark'>
												.bg-l10-secondary
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l25-secondary text-dark'>
												.bg-l25-secondary
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l50-secondary text-dark'>
												.bg-l50-secondary
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l75-secondary text-white'>
												.bg-l75-secondary
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l90-secondary text-white'>
												.bg-l90-secondary
											</div>
										</div>
									</div>
									<div className='row g-2'>
										<div className='col'>
											<div className='p-3 mb-2 bg-l10-success text-dark'>
												.bg-l10-success
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l25-success text-dark'>
												.bg-l25-success
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l50-success text-dark'>
												.bg-l50-success
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l75-success text-white'>
												.bg-l75-success
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l90-success text-white'>
												.bg-l90-success
											</div>
										</div>
									</div>
									<div className='row g-2'>
										<div className='col'>
											<div className='p-3 mb-2 bg-l10-danger text-dark'>
												.bg-l10-danger
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l25-danger text-dark'>
												.bg-l25-danger
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l50-danger text-dark'>
												.bg-l50-danger
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l75-danger text-white'>
												.bg-l75-danger
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l90-danger text-white'>
												.bg-l90-danger
											</div>
										</div>
									</div>
									<div className='row g-2'>
										<div className='col'>
											<div className='p-3 mb-2 bg-l10-warning text-dark'>
												.bg-l10-warning
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l25-warning text-dark'>
												.bg-l25-warning
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l50-warning text-dark'>
												.bg-l50-warning
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l75-warning text-white'>
												.bg-l75-warning
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l90-warning text-white'>
												.bg-l90-warning
											</div>
										</div>
									</div>
									<div className='row g-2'>
										<div className='col'>
											<div className='p-3 mb-2 bg-l10-info text-dark'>
												.bg-l10-info
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l25-info text-dark'>
												.bg-l25-info
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l50-info text-dark'>
												.bg-l50-info
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l75-info text-white'>
												.bg-l75-info
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l90-info text-white'>
												.bg-l90-info
											</div>
										</div>
									</div>
									<div className='row g-2'>
										<div className='col'>
											<div className='p-3 mb-2 bg-l10-light text-dark'>
												.bg-l10-light
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l25-light text-dark'>
												.bg-l25-light
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l50-light text-dark'>
												.bg-l50-light
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l75-light text-dark'>
												.bg-l75-light
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l90-light text-dark'>
												.bg-l90-light
											</div>
										</div>
									</div>
									<div className='row g-2'>
										<div className='col'>
											<div className='p-3 mb-2 bg-l10-dark text-dark'>
												.bg-l10-dark
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l25-dark text-dark'>
												.bg-l25-dark
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l50-dark text-white'>
												.bg-l50-dark
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l75-dark text-white'>
												.bg-l75-dark
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-l90-dark text-white'>
												.bg-l90-dark
											</div>
										</div>
									</div>
								</CommonCodePreview>
								<CommonCodePreview code={_backgroundColorLightOpacity}>
									<div className='row g-2'>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo10-primary text-white'>
												.bg-lo10-primary
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo25-primary text-white'>
												.bg-lo25-primary
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo50-primary text-white'>
												.bg-lo50-primary
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo75-primary text-white'>
												.bg-lo75-primary
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo90-primary text-white'>
												.bg-lo90-primary
											</div>
										</div>
									</div>
									<div className='row g-2'>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo10-secondary text-white'>
												.bg-lo10-secondary
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo25-secondary text-white'>
												.bg-lo25-secondary
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo50-secondary text-white'>
												.bg-lo50-secondary
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo75-secondary text-white'>
												.bg-lo75-secondary
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo90-secondary text-white'>
												.bg-lo90-secondary
											</div>
										</div>
									</div>
									<div className='row g-2'>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo10-success text-white'>
												.bg-lo10-success
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo25-success text-white'>
												.bg-lo25-success
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo50-success text-white'>
												.bg-lo50-success
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo75-success text-white'>
												.bg-lo75-success
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo90-success text-white'>
												.bg-lo90-success
											</div>
										</div>
									</div>
									<div className='row g-2'>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo10-danger text-white'>
												.bg-lo10-danger
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo25-danger text-white'>
												.bg-lo25-danger
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo50-danger text-white'>
												.bg-lo50-danger
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo75-danger text-white'>
												.bg-lo75-danger
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo90-danger text-white'>
												.bg-lo90-danger
											</div>
										</div>
									</div>
									<div className='row g-2'>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo10-warning text-white'>
												.bg-lo10-warning
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo25-warning text-white'>
												.bg-lo25-warning
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo50-warning text-white'>
												.bg-lo50-warning
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo75-warning text-white'>
												.bg-lo75-warning
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo90-warning text-white'>
												.bg-lo90-warning
											</div>
										</div>
									</div>
									<div className='row g-2'>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo10-info text-white'>
												.bg-lo10-info
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo25-info text-white'>
												.bg-lo25-info
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo50-info text-white'>
												.bg-lo50-info
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo75-info text-white'>
												.bg-lo75-info
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo90-info text-white'>
												.bg-lo90-info
											</div>
										</div>
									</div>
									<div className='row g-2'>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo10-light text-white'>
												.bg-lo10-light
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo25-light text-white'>
												.bg-lo25-light
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo50-light text-white'>
												.bg-lo50-light
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo75-light text-white'>
												.bg-lo75-light
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo90-light text-white'>
												.bg-lo90-light
											</div>
										</div>
									</div>
									<div className='row g-2'>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo10-dark text-white'>
												.bg-lo10-dark
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo25-dark text-white'>
												.bg-lo25-dark
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo50-dark text-white'>
												.bg-lo50-dark
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo75-dark text-white'>
												.bg-lo75-dark
											</div>
										</div>
										<div className='col'>
											<div className='p-3 mb-2 bg-lo90-dark text-white'>
												.bg-lo90-dark
											</div>
										</div>
									</div>
								</CommonCodePreview>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='background-gradient' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Background gradient</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									By adding a <code>.bg-gradient</code> class, a linear gradient
									is added as background image to the backgrounds. This gradient
									starts with a semi-transparent white which fades out to the
									bottom.
								</p>
								<p>
									Do you need a gradient in your custom CSS? Just add{' '}
									<code>background-image: var(--bs-gradient);</code>.
								</p>
								<CommonCodePreview code={_backgroundColor2}>
									<div className='p-3 mb-2 bg-primary bg-gradient text-white'>
										.bg-primary.bg-gradient
									</div>
									<div className='p-3 mb-2 bg-secondary bg-gradient text-white'>
										.bg-secondary.bg-gradient
									</div>
									<div className='p-3 mb-2 bg-success bg-gradient text-white'>
										.bg-success.bg-gradient
									</div>
									<div className='p-3 mb-2 bg-danger bg-gradient text-white'>
										.bg-danger.bg-gradient
									</div>
									<div className='p-3 mb-2 bg-warning bg-gradient text-dark'>
										.bg-warning.bg-gradient
									</div>
									<div className='p-3 mb-2 bg-info bg-gradient text-dark'>
										.bg-info.bg-gradient
									</div>
									<div className='p-3 mb-2 bg-light bg-gradient text-dark'>
										.bg-light.bg-gradient
									</div>
									<div className='p-3 mb-2 bg-dark bg-gradient text-white'>
										.bg-dark.bg-gradient
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
								<p>
									In addition to the following Sass functionality, consider
									reading about our included{' '}
									<a
										href='https://getbootstrap.com/docs/5.0/customize/css-variables/'
										target='_blank'
										rel='noreferrer'>
										CSS custom properties
									</a>{' '}
									(aka CSS variables) for colors and more.
								</p>
								<Card id='variables' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Variables</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Most <code>background-color</code> utilities are
											generated by our theme colors, reassigned from our
											generic color palette variables.
										</p>
										<CommonCodePreview
											code={_variables}
											language='scss'
											className='mb-4'
										/>
										<CommonCodePreview
											code={_variables2}
											language='scss'
											className='mb-4'
										/>
										<p>
											Grayscale colors are also available, but only a subset
											are used to generate any utilities.
										</p>
										<CommonCodePreview code={_variables3} language='scss' />
									</CardBody>
								</Card>
								<Card id='map' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Map</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Theme colors are then put into a Sass map so we can loop
											over them to generate our utilities, component
											modifiers, and more.
										</p>
										<CommonCodePreview
											code={_map}
											language='scss'
											className='mb-4'
										/>
										<p>
											Grayscale colors are also available as a Sass map.{' '}
											<strong>
												This map is not used to generate any utilities.
											</strong>
										</p>
										<CommonCodePreview code={_map2} language='scss' />
									</CardBody>
								</Card>
								<Card id='mixins' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Mixins</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											<strong>
												No mixins are used to generate our background
												utilities
											</strong>
											, but we do have some additional mixins for other
											situations where you’d like to create your own
											gradients.
										</p>
										<CommonCodePreview
											code={_mixin}
											language='scss'
											className='mb-4'
										/>
										<CommonCodePreview code={_mixin2} language='scss' />
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
											Background utilities are declared in our utilities API
											in{' '}
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

export default BackgroundPage;
