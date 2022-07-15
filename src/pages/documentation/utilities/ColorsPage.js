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
import CommonDesc from '../../../components/common/CommonDesc';
import { AlertHeading } from '../../../components/bootstrap/Alert';
import PrismCode from '../../../components/extras/PrismCode';
import { componentsMenu } from '../../../menu';

const ColorsPage = () => {
	const _colors = `
<p className='text-primary'>.text-primary</p>
<p className='text-secondary'>.text-secondary</p>
<p className='text-success'>.text-success</p>
<p className='text-danger'>.text-danger</p>
<p className='text-warning bg-dark'>.text-warning</p>
<p className='text-info bg-dark'>.text-info</p>
<p className='text-light bg-dark'>.text-light</p>
<p className='text-dark'>.text-dark</p>
<p className='text-body'>.text-body</p>
<p className='text-muted'>.text-muted</p>
<p className='text-white bg-dark'>.text-white</p>
<p className='text-black-50'>.text-black-50</p>
<p className='text-white-50 bg-dark'>.text-white-50</p>`;

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

	const _utilitiesApi = `
"color": (
	property: color,
	class: text,
	values: map-merge(
		$theme-colors,
		(
			"white": $white,
			"body": $body-color,
			"muted": $text-muted,
			"black-50": rgba($black, .5),
			"white-50": rgba($white, .5),
			"reset": inherit,
        )
    )
),`;

	return (
		<PageWrapper title={componentsMenu.utilities.subMenu.colors.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Utilities', to: '/utilities' },
							{ title: 'Colors', to: '/utilities/colors' },
						]}
					/>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12 my-4'>
						<h1>Colors</h1>
						<p className='lead'>
							Convey meaning through <code>color</code> with a handful of color
							utility classes. Includes support for styling links with hover states,
							too.
						</p>
					</div>

					<div className='col-12'>
						<Card id='colors' className='scroll-margin' isCompact>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Colors</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Colorize text with color utilities. If you want to colorize
									links, you can use the{' '}
									<Link to='../helpers/colored-links/'>
										<code>.link-*</code> helper classes
									</Link>{' '}
									which have <code>:hover</code> and <code>:focus</code> states.
								</p>
								<CommonCodePreview code={_colors}>
									<p className='text-primary'>.text-primary</p>
									<p className='text-secondary'>.text-secondary</p>
									<p className='text-success'>.text-success</p>
									<p className='text-danger'>.text-danger</p>
									<p className='text-warning bg-dark'>.text-warning</p>
									<p className='text-info bg-dark'>.text-info</p>
									<p className='text-light bg-dark'>.text-light</p>
									<p className='text-dark'>.text-dark</p>
									<p className='text-body'>.text-body</p>
									<p className='text-muted'>.text-muted</p>
									<p className='text-white bg-dark'>.text-white</p>
									<p className='text-black-50'>.text-black-50</p>
									<p className='text-white-50 bg-dark'>.text-white-50</p>
								</CommonCodePreview>
								<CommonDesc color='info'>
									<AlertHeading>
										Conveying meaning to assistive technologies
									</AlertHeading>
									<p className='mb-0'>
										Using color to add meaning only provides a visual
										indication, which will not be conveyed to users of assistive
										technologies – such as screen readers. Ensure that
										information denoted by the color is either obvious from the
										content itself (e.g. the visible text), or is included
										through alternative means, such as additional text hidden
										with the <code>.visually-hidden</code> class.
									</p>
								</CommonDesc>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='specificity' className='scroll-margin' isCompact>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Specificity</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Sometimes contextual classes cannot be applied due to the
									specificity of another selector. In some cases, a sufficient
									workaround is to wrap your element’s content in a{' '}
									<code>&lt;div&gt;</code> or more semantic element with the
									desired class.
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
											Most <code>color</code> utilities are generated by our
											theme colors, reassigned from our generic color palette
											variables.
										</p>
										<PrismCode
											code={_variables}
											language='scss'
											className='mb-4'
										/>
										<PrismCode
											code={_variables2}
											language='scss'
											className='mb-4'
										/>
										<p>
											Grayscale colors are also available, but only a subset
											are used to generate any utilities.
										</p>
										<PrismCode
											code={_variables3}
											language='scss'
											className='mb-0'
										/>
									</CardBody>
								</Card>
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
									Theme colors are then put into a Sass map so we can loop over
									them to generate our utilities, component modifiers, and more.
								</p>
								<CommonCodePreview code={_map} language='scss' className='mb-4' />
								<p>
									Grayscale colors are also available as a Sass map.{' '}
									<strong>This map is not used to generate any utilities.</strong>
								</p>
								<CommonCodePreview code={_map2} language='scss' />
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
									Background utilities are declared in our utilities API in{' '}
									<code>node_modules/bootstrap/scss/_utilities.scss</code>.{' '}
									<HashLink to='../utilities/api#using-the-api'>
										Learn how to use the utilities API.
									</HashLink>
								</p>
								<CommonCodePreview code={_utilitiesApi} language='scss' />
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ColorsPage;
