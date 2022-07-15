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
import PlaceholderImage from '../../../components/extras/PlaceholderImage';
import { componentsMenu } from '../../../menu';

const useStyles = createUseStyles({
	// stylelint-disable-next-line selector-type-no-unknown
	example: {
		// stylelint-disable-next-line scss/selector-no-redundant-nesting-selector
		"& [class^='border']": {
			display: 'inline-block',
			width: '5rem',
			height: '5rem',
			margin: '0.25rem',
			backgroundColor: '#f5f5f5',
		},

		// stylelint-disable-next-line scss/selector-no-redundant-nesting-selector
		"& [class*='rounded']": {
			marginRight: '0.5rem',
		},
	},
});

const BordersPage = () => {
	const classes = useStyles();

	const _additive = `
<span className='border' />
<span className='border-top' />
<span className='border-end' />
<span className='border-bottom' />
<span className='border-start' />`;
	const _subtractive = `
<span className='border-0' />
<span className='border border-top-0' />
<span className='border border-end-0' />
<span className='border border-bottom-0' />
<span className='border border-start-0' />`;

	const _borderColor = `
<span className='border border-primary' />
<span className='border border-secondary' />
<span className='border border-success' />
<span className='border border-danger' />
<span className='border border-warning' />
<span className='border border-info' />
<span className='border border-light' />
<span className='border border-dark' />
<span className='border border-white' />`;

	const _borderWidth = `
<span className='border border-1' />
<span className='border border-2' />
<span className='border border-3' />
<span className='border border-4' />
<span className='border border-5' />`;

	const _rounded = `
<img src='...' className='rounded' alt='...'/>
<img src='...' className='rounded-top' alt='...'/>
<img src='...' className='rounded-end' alt='...'/>
<img src='...' className='rounded-bottom' alt='...'/>
<img src='...' className='rounded-start' alt='...'/>
<img src='...' className='rounded-circle' alt='...'/>
<img src='...' className='rounded-pill' alt='...'/>`;
	const _size = `
<img src='...' className='rounded-0' alt='...' />
<img src='...' className='rounded-1' alt='...' />
<img src='...' className='rounded-2' alt='...' />
<img src='...' className='rounded-3' alt='...' />`;

	const _variables = `
$border-width:			1px;
$border-widths: (
	1: 1px,
	2: 2px,
	3: 3px,
	4: 4px,
	5: 5px
);

$border-color:			$gray-300;s`;
	const _variables2 = `
$border-radius:			1rem;
$border-radius-sm:		$border-radius * 0.875;
$border-radius-lg:		$border-radius * 1.25;
$border-radius-pill:	50rem;`;

	const _mixin = `
@mixin border-radius($radius: $border-radius, $fallback-border-radius: false) {
	@if $enable-rounded {
		border-radius: valid-radius($radius);
	}
  	@else if $fallback-border-radius != false {
    	border-radius: $fallback-border-radius;
  	}
}

@mixin border-top-radius($radius: $border-radius) {
  	@if $enable-rounded {
    	border-top-left-radius: valid-radius($radius);
    	border-top-right-radius: valid-radius($radius);
  	}
}

@mixin border-end-radius($radius: $border-radius) {
  	@if $enable-rounded {
    	border-top-right-radius: valid-radius($radius);
    	border-bottom-right-radius: valid-radius($radius);
  	}
}

@mixin border-bottom-radius($radius: $border-radius) {
  	@if $enable-rounded {
    	border-bottom-right-radius: valid-radius($radius);
    	border-bottom-left-radius: valid-radius($radius);
  	}
}

@mixin border-start-radius($radius: $border-radius) {
  	@if $enable-rounded {
    	border-top-left-radius: valid-radius($radius);
    	border-bottom-left-radius: valid-radius($radius);
  	}
}

@mixin border-top-start-radius($radius: $border-radius) {
  	@if $enable-rounded {
    	border-top-left-radius: valid-radius($radius);
  	}
}

@mixin border-top-end-radius($radius: $border-radius) {
  	@if $enable-rounded {
    	border-top-right-radius: valid-radius($radius);
  	}
}

@mixin border-bottom-end-radius($radius: $border-radius) {
  	@if $enable-rounded {
    	border-bottom-right-radius: valid-radius($radius);
  	}
}

@mixin border-bottom-start-radius($radius: $border-radius) {
  	@if $enable-rounded {
    	border-bottom-left-radius: valid-radius($radius);
  	}
}`;

	const _utilitiesApi = `
"border": (
  	property: border,
  	values: (
		null: $border-width solid $border-color,
		0: 0,
  	)
),
"border-top": (
  	property: border-top,
  	values: (
		null: $border-width solid $border-color,
		0: 0,
  	)
),
"border-end": (
  	property: border-right,
  	class: border-end,
  	values: (
		null: $border-width solid $border-color,
		0: 0,
  	)
),
"border-bottom": (
  	property: border-bottom,
  	values: (
		null: $border-width solid $border-color,
		0: 0,
  	)
),
"border-start": (
  	property: border-left,
  	class: border-start,
  	values: (
		null: $border-width solid $border-color,
		0: 0,
  	)
),
"border-color": (
  	property: border-color,
  	class: border,
  	values: map-merge($theme-colors, ("white": $white))
),
"border-width": (
  	property: border-width,
  	class: border,
  	values: $border-widths
),`;
	const _utilitiesApi2 = `
"rounded": (
	property: border-radius,
	class: rounded,
	values: (
		null: $border-radius,
		0: 0,
		1: $border-radius-sm,
		2: $border-radius,
		3: $border-radius-lg,
		circle: 50%,
		pill: $border-radius-pill
	)
),
"rounded-top": (
	property: border-top-left-radius border-top-right-radius,
	class: rounded-top,
	values: (null: $border-radius)
),
"rounded-end": (
	property: border-top-right-radius border-bottom-right-radius,
	class: rounded-end,
	values: (null: $border-radius)
),
"rounded-bottom": (
	property: border-bottom-right-radius border-bottom-left-radius,
	class: rounded-bottom,
	values: (null: $border-radius)
),
"rounded-start": (
	property: border-bottom-left-radius border-top-left-radius,
	class: rounded-start,
	values: (null: $border-radius)
),`;

	return (
		<PageWrapper title={componentsMenu.utilities.subMenu.borders.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Utilities', to: '/utilities' },
							{ title: 'Borders', to: '/utilities/borders' },
						]}
					/>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12 my-4'>
						<h1>Borders</h1>
						<p className='lead'>
							Use border utilities to quickly style the border and border-radius of an
							element. Great for images, buttons, or any other element.
						</p>
					</div>

					<div className='col-12'>
						<Card id='border' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Border</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Use border utilities to add or remove an element’s borders.
									Choose from all borders or one at a time.
								</p>
								<Card id='additive' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Additive</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<CommonCodePreview code={_additive}>
											<div className={classes.example}>
												<span className='border' />
												<span className='border-top' />
												<span className='border-end' />
												<span className='border-bottom' />
												<span className='border-start' />
											</div>
										</CommonCodePreview>
									</CardBody>
								</Card>
								<Card id='subtractive' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Subtractive</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<CommonCodePreview code={_subtractive}>
											<div className={classes.example}>
												<span className='border-0' />
												<span className='border border-top-0' />
												<span className='border border-end-0' />
												<span className='border border-bottom-0' />
												<span className='border border-start-0' />
											</div>
										</CommonCodePreview>
									</CardBody>
								</Card>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='border-color' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Border color</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Change the border color using utilities built on our theme
									colors.
								</p>
								<CommonCodePreview code={_borderColor}>
									<div className={classes.example}>
										<span className='border border-primary' />
										<span className='border border-secondary' />
										<span className='border border-success' />
										<span className='border border-danger' />
										<span className='border border-warning' />
										<span className='border border-info' />
										<span className='border border-light' />
										<span className='border border-dark' />
										<span className='border border-white' />
									</div>
								</CommonCodePreview>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='border-width' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Border width</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<CommonCodePreview code={_borderWidth}>
									<div className={classes.example}>
										<span className='border border-1' />
										<span className='border border-2' />
										<span className='border border-3' />
										<span className='border border-4' />
										<span className='border border-5' />
									</div>
								</CommonCodePreview>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='border-radius' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Border radius</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>Add classes to an element to easily round its corners.</p>
								<CommonCodePreview code={_rounded}>
									<div className={classes.example}>
										<PlaceholderImage className='rounded' />
										<PlaceholderImage className='rounded-top' />
										<PlaceholderImage className='rounded-end' />
										<PlaceholderImage className='rounded-bottom' />
										<PlaceholderImage className='rounded-start' />
										<PlaceholderImage className='rounded-circle' />
										<PlaceholderImage width={150} className='rounded-pill' />
									</div>
								</CommonCodePreview>
								<Card id='sizes' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Sizes</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<CommonCodePreview code={_size}>
											<div className={classes.example}>
												<PlaceholderImage className='rounded-0' />
												<PlaceholderImage className='rounded-1' />
												<PlaceholderImage className='rounded-2' />
												<PlaceholderImage className='rounded-3' />
											</div>
										</CommonCodePreview>
									</CardBody>
								</Card>
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
								<Card id='variables' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Variables</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<CommonCodePreview
											code={_variables}
											language='scss'
											className='mb-4'
										/>
										<CommonCodePreview code={_variables2} language='scss' />
									</CardBody>
								</Card>
								<Card id='mixins' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Mixins</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<CommonCodePreview code={_mixin} language='scss' />
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
											Border utilities are declared in our utilities API in{' '}
											<code>node_modules/bootstrap/scss/_utilities.scss</code>
											.{' '}
											<HashLink to='../utilities/api#using-the-api'>
												Learn how to use the utilities API.
											</HashLink>
										</p>
										<CommonCodePreview
											code={_utilitiesApi}
											language='scss'
											className='mb-4'
										/>
										<CommonCodePreview code={_utilitiesApi2} language='scss' />
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

export default BordersPage;
