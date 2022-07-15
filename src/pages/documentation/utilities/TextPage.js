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
import CommonDesc from '../../../components/common/CommonDesc';
import { componentsMenu } from '../../../menu';

const TextPage = () => {
	const _textAlignment = `
<p className='text-start'>Start aligned text on all viewport sizes.</p>
<p className='text-center'>Center aligned text on all viewport sizes.</p>
<p className='text-end'>End aligned text on all viewport sizes.</p>

<p className='text-sm-start'>Start aligned text on viewports sized SM (small) or wider.</p>
<p className='text-md-start'>Start aligned text on viewports sized MD (medium) or wider.</p>
<p className='text-lg-start'>Start aligned text on viewports sized LG (large) or wider.</p>
<p className='text-xl-start'>Start aligned text on viewports sized XL (extra-large) or wider.</p>`;

	const _wrap = `
<div className='badge bg-primary text-wrap' style={{ width: '6rem' }}>
	This text should wrap.
</div>`;
	const _wrap2 = `
<div className='text-nowrap bg-light' style={{ width: '8rem' }}>
	This text should overflow the parent.
</div>`;

	const _textTransform = `
<p className='text-lowercase'>Lowercased text.</p>
<p className='text-uppercase'>Uppercased text.</p>
<p className='text-capitalize'>CapiTaliZed text.</p>`;

	const _fontSize = `
<p className='fs-1'>.fs-1 text</p>
<p className='fs-2'>.fs-2 text</p>
<p className='fs-3'>.fs-3 text</p>
<p className='fs-4'>.fs-4 text</p>
<p className='fs-5'>.fs-5 text</p>
<p className='fs-6'>.fs-6 text</p>`;

	const _fontWeightItalics = `
<p className='fw-bold'>Bold text.</p>
<p className='fw-bolder'>Bolder weight text (relative to the parent element).</p>
<p className='fw-normal'>Normal weight text.</p>
<p className='fw-light'>Light weight text.</p>
<p className='fw-lighter'>Lighter weight text (relative to the parent element).</p>
<p className='fst-italic'>Italic text.</p>
<p className='fst-normal'>Text with normal font style</p>`;

	const _lineHeight = `
<p className='lh-1'>...</p>
<p className='lh-sm'>...</p>
<p className='lh-base'>...</p>
<p className='lh-lg'>...</p>`;

	const _monospace = `<p className='font-monospace'>This is in monospace</p>`;

	const _resetColor = `
<p className='text-muted'>
	Muted text with a<a href='#' className='text-reset'>reset link</a>.
</p>`;
	const _textDecoration = `
<p className='text-decoration-underline'>This text has a line underneath it.</p>
<p className='text-decoration-line-through'>This text has a line going through it.</p>
<a href='#' className='text-decoration-none'>This link has its text decoration removed</a>`;

	const _variables = `
// stylelint-disable value-keyword-case
$font-family-sans-serif:      system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
$font-family-monospace:       SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
// stylelint-enable value-keyword-case
$font-family-base:            var(--#{$variable-prefix}font-sans-serif);
$font-family-code:            var(--#{$variable-prefix}font-monospace);

// $font-size-root effects the value of \`rem\`, which is used for as well font sizes, paddings and margins
// $font-size-base effects the font size of the body text
$font-size-root:              null;
$font-size-base:              1rem; // Assumes the browser default, typically \`16px\`
$font-size-sm:                $font-size-base * .875;
$font-size-lg:                $font-size-base * 1.25;

$font-weight-lighter:         lighter;
$font-weight-light:           300;
$font-weight-normal:          400;
$font-weight-bold:            700;
$font-weight-bolder:          bolder;

$font-weight-base:            $font-weight-normal;

$line-height-base:            1.5;
$line-height-sm:              1.25;
$line-height-lg:              2;

$h1-font-size:                $font-size-base * 2.5;
$h2-font-size:                $font-size-base * 2;
$h3-font-size:                $font-size-base * 1.75;
$h4-font-size:                $font-size-base * 1.5;
$h5-font-size:                $font-size-base * 1.25;
$h6-font-size:                $font-size-base;`;
	const _variables2 = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
// $font-family-base: 'Montserrat', sans-serif;
$font-family-base: 'Poppins', var(--bs-font-sans-serif);

$font-size-root:              0.8125rem; // \`13px\`
$font-size-base:              1rem; // Assumes the browser default, typically \`16px\`
$font-size-sm:                $font-size-base * 0.875;
$font-size-lg:                $font-size-base * 1.25;`;

	const _map = `
$font-sizes: (
	1: $h1-font-size,
	2: $h2-font-size,
	3: $h3-font-size,
	4: $h4-font-size,
	5: $h5-font-size,
	6: $h6-font-size
);`;

	const _utilitiesApi = `
"font-family": (
	property: font-family,
	class: font,
	values: (monospace: var(--#{$variable-prefix}font-monospace))
),
"font-size": (
	rfs: true,
	property: font-size,
	class: fs,
	values: $font-sizes
),
"font-style": (
	property: font-style,
	class: fst,
	values: italic normal
),
"font-weight": (
	property: font-weight,
	class: fw,
	values: (
		light: $font-weight-light,
		lighter: $font-weight-lighter,
		normal: $font-weight-normal,
		bold: $font-weight-bold,
		bolder: $font-weight-bolder
	)
),
"line-height": (
	property: line-height,
	class: lh,
	values: (
		1: 1,
		sm: $line-height-sm,
		base: $line-height-base,
		lg: $line-height-lg,
	)
),
"text-align": (
	responsive: true,
	property: text-align,
	class: text,
	values: (
		start: left,
		end: right,
		center: center,
	)
),
"text-decoration": (
	property: text-decoration,
	values: none underline line-through
),
"text-transform": (
	property: text-transform,
	class: text,
	values: lowercase uppercase capitalize
),
"white-space": (
	property: white-space,
	class: text,
	values: (
		wrap: normal,
		nowrap: nowrap,
	s
),
"word-wrap": (
	property: word-wrap word-break,
	class: text,
	values: (break: break-word),
	rtl: false
),`;

	return (
		<PageWrapper title={componentsMenu.utilities.subMenu.text.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Utilities', to: '/utilities' },
							{ title: 'Text', to: '/utilities/text' },
						]}
					/>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12 my-4'>
						<h1>Text</h1>
						<p className='lead'>
							Documentation and examples for common text utilities to control
							alignment, wrapping, weight, and more.
						</p>
					</div>

					<div className='col-12'>
						<Card id='text-alignment' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Text alignment</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Easily realign text to components with text alignment classes.
									For start, end, and center alignment, responsive classes are
									available that use the same viewport width breakpoints as the
									grid system.
								</p>
								<CommonCodePreview code={_textAlignment}>
									<p className='text-start'>
										Start aligned text on all viewport sizes.
									</p>
									<p className='text-center'>
										Center aligned text on all viewport sizes.
									</p>
									<p className='text-end'>
										End aligned text on all viewport sizes.
									</p>

									<p className='text-sm-start'>
										Start aligned text on viewports sized SM (small) or wider.
									</p>
									<p className='text-md-start'>
										Start aligned text on viewports sized MD (medium) or wider.
									</p>
									<p className='text-lg-start'>
										Start aligned text on viewports sized LG (large) or wider.
									</p>
									<p className='text-xl-start'>
										Start aligned text on viewports sized XL (extra-large) or
										wider.
									</p>
								</CommonCodePreview>
								<CommonDesc color='info'>
									Note that we don’t provide utility classes for justified text.
									While, aesthetically, justified text might look more appealing,
									it does make word-spacing more random and therefore harder to
									read.
								</CommonDesc>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='text-wrapping-and-overflow' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Text wrapping and overflow</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Wrap text with a <code>.text-wrap</code> class.
								</p>
								<CommonCodePreview code={_wrap}>
									<div
										className='badge bg-primary text-wrap'
										style={{ width: '6rem' }}>
										This text should wrap.
									</div>
								</CommonCodePreview>
								<p>
									Prevent text from wrapping with a <code>.text-nowrap</code>{' '}
									class.
								</p>
								<CommonCodePreview code={_wrap2}>
									<div className='text-nowrap bg-light' style={{ width: '8rem' }}>
										This text should overflow the parent.
									</div>
								</CommonCodePreview>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='word-break' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Word break</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Prevent long strings of text from breaking your components'
									layout by using <code>.text-break</code> to set{' '}
									<code>word-wrap: break-word</code> and{' '}
									<code>word-break: break-word</code>. We use{' '}
									<code>word-wrap</code> instead of the more common{' '}
									<code>overflow-wrap</code> for wider browser support, and add
									the deprecated <code>word-break: break-word</code> to avoid
									issues with flex containers.
								</p>
								<CommonCodePreview>
									<p className='text-break'>
										mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
									</p>
								</CommonCodePreview>
								<CommonDesc>
									Note that{' '}
									<a
										href='https://rtlstyling.com/posts/rtl-styling#3.-line-break'
										target='_blank'
										rel='noreferrer'>
										breaking words isn’t possible in Arabic
									</a>
									, which is the most used RTL language. Therefore{' '}
									<code>.text-break</code> is removed from our RTL compiled CSS.
								</CommonDesc>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='text-transform' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Text transform</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Transform text in components with text capitalization classes.
								</p>
								<CommonCodePreview code={_textTransform}>
									<p className='text-lowercase'>Lowercased text.</p>
									<p className='text-uppercase'>Uppercased text.</p>
									<p className='text-capitalize'>CapiTaliZed text.</p>
								</CommonCodePreview>
								<p>
									Note how <code>.text-capitalize</code> only changes the first
									letter of each word, leaving the case of any other letters
									unaffected.
								</p>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='font-size' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Font size</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Quickly change the <code>font-size</code> of text. While our
									heading classes (e.g., <code>.h1</code>–<code>.h6</code>) apply{' '}
									<code>font-size</code>, <code>font-weight</code>, and{' '}
									<code>line-height</code>, these utilities <em>only</em> apply{' '}
									<code>font-size</code>. Sizing for these utilities matches
									HTML’s heading elements, so as the number increases, their size
									decreases.
								</p>
								<CommonCodePreview code={_fontSize}>
									<p className='fs-1'>.fs-1 text</p>
									<p className='fs-2'>.fs-2 text</p>
									<p className='fs-3'>.fs-3 text</p>
									<p className='fs-4'>.fs-4 text</p>
									<p className='fs-5'>.fs-5 text</p>
									<p className='fs-6'>.fs-6 text</p>
								</CommonCodePreview>
								<p>
									Customize your available <code>font-size</code>s by modifying
									the <code>$font-sizes</code> Sass map.
								</p>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='font-weight-and-italics' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Font weight and italics</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Quickly change the <code>font-weight</code> or{' '}
									<code>font-style</code> of text with these utilities.{' '}
									<code>font-style</code> utilities are abbreviated as{' '}
									<code>.fst-*</code> and <code>font-weight</code> utilities are
									abbreviated as <code>.fw-*</code>.
								</p>
								<CommonCodePreview code={_fontWeightItalics}>
									<p className='fw-bold'>Bold text.</p>
									<p className='fw-bolder'>
										Bolder weight text (relative to the parent element).
									</p>
									<p className='fw-normal'>Normal weight text.</p>
									<p className='fw-light'>Light weight text.</p>
									<p className='fw-lighter'>
										Lighter weight text (relative to the parent element).
									</p>
									<p className='fst-italic'>Italic text.</p>
									<p className='fst-normal'>Text with normal font style</p>
								</CommonCodePreview>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='line-height' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Line height</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Change the line height with <code>.lh-*</code> utilities.
								</p>
								<CommonCodePreview code={_lineHeight}>
									<p className='lh-1'>
										Some placeholder content to show off the line height
										utilities. Happy birthday. You could've been the greatest.
										She ride me like a roller coaster. I messed around and got
										addicted. You just gotta ignite the light and let it shine!
										I'm intrigued, for a peek, heard it's fascinating. Catch her
										if you can. I should've told you what you meant to me 'Cause
										now I pay the price. Do you ever feel, feel so paper thin.
									</p>
									<p className='lh-sm'>
										But you better choose carefully. Yo, shout out to all you
										kids, buying bottle service, with your rent money. She's
										sweet as pie but if you break her heart. Just own the night
										like the 4th of July! In another life I would be your girl.
										Playing ping pong all night long, everything's all neon and
										hazy. Shorty so bad, I’m sprung and I don’t care.
									</p>
									<p className='lh-base'>
										I can feel a phoenix inside of me. Maybe a reason why all
										the doors are closed. We go higher and higher. Passport
										stamps, she's cosmopolitan. Someone said you had your tattoo
										removed. All my girls vintage Chanel baby. Someone said you
										had your tattoo removed.
									</p>
									<p className='lh-lg'>
										But I will get there. This is real so take a chance and
										don't ever look back, don't ever look back. You could travel
										the world but nothing comes close to the golden coast. Of
										anything and everything. Venice beach and Palm Springs,
										summertime is everything. Do you ever feel already buried
										deep six feet under? It's time to bring out the big
										balloons. So cover your eyes, I have a surprise. So I don't
										have to say you were the one that got away.
									</p>
								</CommonCodePreview>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='monospace' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Monospace</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Change a selection to our monospace font stack with{' '}
									<code>.font-monospace</code>.
								</p>
								<CommonCodePreview code={_monospace}>
									<p className='font-monospace'>This is in monospace</p>
								</CommonCodePreview>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='reset-color' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Reset color</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Reset a text or link’s color with <code>.text-reset</code>, so
									that it inherits the color from its parent.
								</p>
								<CommonCodePreview code={_resetColor}>
									<p className='text-muted'>
										Muted text with a{' '}
										{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
										<a href='#' className='text-reset'>
											reset link
										</a>
										.
									</p>
								</CommonCodePreview>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='text-decoration' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Text decoration</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>Decorate text in components with text decoration classes.</p>
								<CommonCodePreview code={_textDecoration}>
									<p className='text-decoration-underline'>
										This text has a line underneath it.
									</p>
									<p className='text-decoration-line-through'>
										This text has a line going through it.
									</p>
									{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
									<a href='#' className='text-decoration-none'>
										This link has its text decoration removed
									</a>
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
								<Card id='variables' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Variables</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Spacing utilities are declared via Sass map and then
											generated with our utilities API.
										</p>
										<CommonCodePreview
											code={_variables}
											language='scss'
											className='mb-4'
										/>
										<p>
											You can overwrite the{' '}
											<code>node_modules/bootstrap/scss/_variables.scss</code>{' '}
											file in the <code>src/styles/settings/_index.scss</code>{' '}
											file.
										</p>
										<CommonCodePreview code={_variables2} language='scss' />
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
											Font-size utilities are generated from this map, in
											combination with our utilities API.
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
											Font and text utilities are declared in our utilities
											API in{' '}
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

export default TextPage;
