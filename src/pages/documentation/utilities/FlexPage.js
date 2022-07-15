import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
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
	example: {
		'&, *': {
			backgroundColor: 'rgba(108, 93, 211, 0.15)',
			border: '1px solid rgba(108, 93, 211, 0.15)',
		},
		'& > *': {
			padding: '0.5rem',
		},
	},
});

const FlexPage = () => {
	const classes = useStyles();

	const _flexItem = <div>Flex item</div>;
	const _flexItems3 = (
		<>
			{_flexItem}
			{_flexItem}
			{_flexItem}
		</>
	);
	const _flexItems15 = (
		<>
			{_flexItem}
			{_flexItem}
			{_flexItem}
			{_flexItem}
			{_flexItem}
			{_flexItem}
			{_flexItem}
			{_flexItem}
			{_flexItem}
			{_flexItem}
			{_flexItem}
			{_flexItem}
			{_flexItem}
			{_flexItem}
			{_flexItem}
		</>
	);

	const _enableFlex = `
<div className='d-flex'>
	I'm a flexbox container!
</div>`;
	const _enableFlex2 = `
<div className='d-inline-flex'>
	I'm a flexbox container!
</div>`;
	const _direction = `
<div className='d-flex flex-row'>
	<div>Flex item 1</div>
	<div>Flex item 2</div>
	<div>Flex item 3</div>
</div>
<div className='d-flex flex-row-reverse'>
	<div>Flex item 1</div>
	<div>Flex item 2</div>
	<div>Flex item 3</div>
</div>`;
	const _direction2 = `
<div className='d-flex flex-column'>
	<div>Flex item 1</div>
	<div>Flex item 2</div>
	<div>Flex item 3</div>
</div>
<div className='d-flex flex-column-reverse'>
	<div>Flex item 1</div>
	<div>Flex item 2</div>
	<div>Flex item 3</div>
</div>`;

	const _justifyContent = `
<div className='d-flex justify-content-start'>...</div>
<div className='d-flex justify-content-end'>...</div>
<div className='d-flex justify-content-center'>...</div>
<div className='d-flex justify-content-between'>...</div>
<div className='d-flex justify-content-around'>...</div>
<div className='d-flex justify-content-evenly'>...</div>`;

	const _alignItems = `
<div className='d-flex align-items-start'>...</div>
<div className='d-flex align-items-end'>...</div>
<div className='d-flex align-items-center'>...</div>
<div className='d-flex align-items-baseline'>...</div>
<div className='d-flex align-items-stretch'>...</div>`;

	const _alignSelf = `
...<div className='align-self-start'>Aligned flex item</div>...
...<div className='align-self-end'>Aligned flex item</div>...
...<div className='align-self-center'>Aligned flex item</div>...
...<div className='align-self-baseline'>Aligned flex item</div>...
...<div className='align-self-stretch'>Aligned flex item</div>...`;

	const _fill = `
<div className='d-flex'>
	<div className='flex-fill'>Flex item with a lot of content</div>
	<div className='flex-fill'>Flex item</div>
	<div className='flex-fill'>Flex item</div>
</div>`;

	const _growShrink = `
<div className='d-flex'>
	<div className='flex-grow-1'>Flex item</div>
	<div>Flex item</div>
	<div>Third flex item</div>
</div>`;
	const _growShrink2 = `
<div className='d-flex'>
	<div className='w-100'>Flex item</div>
	<div className='flex-shrink-1'>Flex item</div>
</div>`;

	const _autoMargin = `
<div className='d-flex'>
	<div>Flex item</div>
	<div>Flex item</div>
	<div>Flex item</div>
</div>

<div className='d-flex'>
	<div className='me-auto'>Flex item</div>
	<div>Flex item</div>
	<div>Flex item</div>
</div>

<div className='d-flex'>
	<div>Flex item</div>
	<div>Flex item</div>
	<div className='ms-auto'>Flex item</div>
</div>`;
	const _autoMargin2 = `
<div className='d-flex align-items-start flex-column' style={{ height: 200 }}>
	<div className='mb-auto'>Flex item</div>
	<div>Flex item</div>
	<div>Flex item</div>
</div>

<div className='d-flex align-items-end flex-column' style={{ height: 200 }}>
	<div>Flex item</div>
	<div>Flex item</div>
	<div className='mt-auto'>Flex item</div>
</div>`;

	const _wrap = `
<div className='d-flex flex-nowrap'>
	...
</div>`;
	const _wrap2 = `
<div className="d-flex flex-wrap">
	...
</div>`;
	const _wrap3 = `
<div className='d-flex flex-wrap-reverse'>
	...
</div>`;

	const _order = `
<div className='d-flex flex-nowrap'>
	<div className='order-3'>First flex item</div>
	<div className='order-2'>Second flex item</div>
	<div className='order-1'>Third flex item</div>
</div>`;

	const _alignContent = `
<div className='d-flex align-content-start flex-wrap'>
	...
</div>`;
	const _alignContent2 = `
<div className='d-flex align-content-end flex-wrap'>
	...
</div>`;
	const _alignContent3 = `
<div className='d-flex align-content-center flex-wrap'>
	...
</div>`;
	const _alignContent4 = `
<div className='d-flex align-content-between flex-wrap'>
	...
</div>`;
	const _alignContent5 = `
<div className='d-flex align-content-around flex-wrap'>
	...
</div>`;
	const _alignContent6 = `
<div className='d-flex align-content-stretch flex-wrap'>
	...
</div>`;

	const _utilitiesApi = `
"flex": (
  	responsive: true,
  	property: flex,
  	values: (fill: 1 1 auto)
),
"flex-direction": (
  	responsive: true,
  	property: flex-direction,
  	class: flex,
  	values: row column row-reverse column-reverse
),
"flex-grow": (
  	responsive: true,
  	property: flex-grow,
  	class: flex,
 	values: (
		grow-0: 0,
		grow-1: 1,
  	)
),
"flex-shrink": (
  	responsive: true,
  	property: flex-shrink,
  	class: flex,
  	values: (
		shrink-0: 0,
		shrink-1: 1,
  )
),
"flex-wrap": (
  	responsive: true,
  	property: flex-wrap,
  	class: flex,
  	values: wrap nowrap wrap-reverse
),
"gap": (
  	responsive: true,
  	property: gap,
  	class: gap,
  	values: $spacers
),
"justify-content": (
  	responsive: true,
  	property: justify-content,
  	values: (
		start: flex-start,
		end: flex-end,
		center: center,
		between: space-between,
		around: space-around,
		evenly: space-evenly,
  	)
),
"align-items": (
  	responsive: true,
  	property: align-items,
  	values: (
		start: flex-start,
		end: flex-end,
		center: center,
		baseline: baseline,
		stretch: stretch,
  	)
),
"align-content": (
  	responsive: true,
  	property: align-content,
  	values: (
		start: flex-start,
		end: flex-end,
		center: center,
		between: space-between,
		around: space-around,
		stretch: stretch,
  	)
),
"align-self": (
  	responsive: true,
  	property: align-self,
  	values: (
		auto: auto,
		start: flex-start,
		end: flex-end,
		center: center,
		baseline: baseline,
		stretch: stretch,
  	)
),
"order": (
  	responsive: true,
  	property: order,
  	values: (
		first: -1,
		0: 0,
		1: 1,
		2: 2,
		3: 3,
		4: 4,
		5: 5,
		last: 6,
  	),
),`;

	return (
		<PageWrapper title={componentsMenu.utilities.subMenu.flex.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Utilities', to: '/utilities' },
							{ title: 'Flex', to: '/utilities/flex' },
						]}
					/>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12 my-4'>
						<h1>Flex</h1>
						<p className='lead'>
							Quickly manage the layout, alignment, and sizing of grid columns,
							navigation, components, and more with a full suite of responsive flexbox
							utilities. For more complex implementations, custom CSS may be
							necessary.
						</p>
					</div>

					<div className='col-12'>
						<Card id='enable-flex-behaviors' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Enable flex behaviors</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Apply <code>display</code> utilities to create a flexbox
									container and transform{' '}
									<strong>direct children elements</strong> into flex items. Flex
									containers and items are able to be modified further with
									additional flex properties.
								</p>
								<CommonCodePreview code={_enableFlex}>
									<div className={classNames('d-flex', 'p-2', classes.example)}>
										I'm a flexbox container!
									</div>
								</CommonCodePreview>
								<CommonCodePreview code={_enableFlex2}>
									<div
										className={classNames(
											'd-inline-flex',
											'p-2',
											classes.example,
										)}>
										I'm an inline flexbox container!
									</div>
								</CommonCodePreview>
								<p>
									Responsive variations also exist for <code>.d-flex</code> and{' '}
									<code>.d-inline-flex</code>.
								</p>
								<ul>
									<li>
										<code>.d-flex</code>
									</li>
									<li>
										<code>.d-inline-flex</code>
									</li>
									<li>
										<code>.d-sm-flex</code>
									</li>
									<li>
										<code>.d-sm-inline-flex</code>
									</li>
									<li>
										<code>.d-md-flex</code>
									</li>
									<li>
										<code>.d-md-inline-flex</code>
									</li>
									<li>
										<code>.d-lg-flex</code>
									</li>
									<li>
										<code>.d-lg-inline-flex</code>
									</li>
									<li>
										<code>.d-xl-flex</code>
									</li>
									<li>
										<code>.d-xl-inline-flex</code>
									</li>
									<li>
										<code>.d-xxl-flex</code>
									</li>
									<li>
										<code>.d-xxl-inline-flex</code>
									</li>
								</ul>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='direction' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Direction</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Set the direction of flex items in a flex container with
									direction utilities. In most cases you can omit the horizontal
									class here as the browser default is <code>row</code>. However,
									you may encounter situations where you needed to explicitly set
									this value (like responsive layouts).
								</p>
								<p>
									Use <code>.flex-row</code> to set a horizontal direction (the
									browser default), or <code>.flex-row-reverse</code> to start the
									horizontal direction from the opposite side.
								</p>
								<CommonCodePreview code={_direction}>
									<div
										className={classNames(
											'd-flex',
											'flex-row',
											'mb-3',
											classes.example,
										)}>
										<div>Flex item 1</div>
										<div>Flex item 2</div>
										<div>Flex item 3</div>
									</div>
									<div
										className={classNames(
											'd-flex',
											'flex-row-reverse',
											'mb-3',
											classes.example,
										)}>
										<div>Flex item 1</div>
										<div>Flex item 2</div>
										<div>Flex item 3</div>
									</div>
								</CommonCodePreview>
								<p>
									Use <code>.flex-column</code> to set a vertical direction, or{' '}
									<code>.flex-column-reverse</code> to start the vertical
									direction from the opposite side.
								</p>
								<CommonCodePreview code={_direction2}>
									<div
										className={classNames(
											'd-flex',
											'flex-column',
											'mb-3',
											classes.example,
										)}>
										<div>Flex item 1</div>
										<div>Flex item 2</div>
										<div>Flex item 3</div>
									</div>
									<div
										className={classNames(
											'd-flex',
											'flex-column-reverse',
											'mb-3',
											classes.example,
										)}>
										<div>Flex item 1</div>
										<div>Flex item 2</div>
										<div>Flex item 3</div>
									</div>
								</CommonCodePreview>
								<p>
									Responsive variations also exist for <code>flex-direction</code>
									.
								</p>
								<ul>
									<li>
										<code>.flex-row</code>
									</li>
									<li>
										<code>.flex-row-reverse</code>
									</li>
									<li>
										<code>.flex-column</code>
									</li>
									<li>
										<code>.flex-column-reverse</code>
									</li>
									<li>
										<code>.flex-sm-row</code>
									</li>
									<li>
										<code>.flex-sm-row-reverse</code>
									</li>
									<li>
										<code>.flex-sm-column</code>
									</li>
									<li>
										<code>.flex-sm-column-reverse</code>
									</li>
									<li>
										<code>.flex-md-row</code>
									</li>
									<li>
										<code>.flex-md-row-reverse</code>
									</li>
									<li>
										<code>.flex-md-column</code>
									</li>
									<li>
										<code>.flex-md-column-reverse</code>
									</li>
									<li>
										<code>.flex-lg-row</code>
									</li>
									<li>
										<code>.flex-lg-row-reverse</code>
									</li>
									<li>
										<code>.flex-lg-column</code>
									</li>
									<li>
										<code>.flex-lg-column-reverse</code>
									</li>
									<li>
										<code>.flex-xl-row</code>
									</li>
									<li>
										<code>.flex-xl-row-reverse</code>
									</li>
									<li>
										<code>.flex-xl-column</code>
									</li>
									<li>
										<code>.flex-xl-column-reverse</code>
									</li>
									<li>
										<code>.flex-xxl-row</code>
									</li>
									<li>
										<code>.flex-xxl-row-reverse</code>
									</li>
									<li>
										<code>.flex-xxl-column</code>
									</li>
									<li>
										<code>.flex-xxl-column-reverse</code>
									</li>
								</ul>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='justify-content' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Justify content</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Use <code>justify-content</code> utilities on flexbox containers
									to change the alignment of flex items on the main axis (the
									x-axis to start, y-axis if <code>flex-direction: column</code>).
									Choose from <code>start</code> (browser default),{' '}
									<code>end</code>, <code>center</code>, <code>between</code>,{' '}
									<code>around</code>, or <code>evenly</code>.
								</p>
								<CommonCodePreview code={_justifyContent}>
									<div
										className={classNames(
											'd-flex',
											'justify-content-start',
											'mb-3',
											classes.example,
										)}>
										{_flexItems3}
									</div>
									<div
										className={classNames(
											'd-flex',
											'justify-content-end',
											'mb-3',
											classes.example,
										)}>
										{_flexItems3}
									</div>
									<div
										className={classNames(
											'd-flex',
											'justify-content-center',
											'mb-3',
											classes.example,
										)}>
										{_flexItems3}
									</div>
									<div
										className={classNames(
											'd-flex',
											'justify-content-between',
											'mb-3',
											classes.example,
										)}>
										{_flexItems3}
									</div>
									<div
										className={classNames(
											'd-flex',
											'justify-content-around',
											'mb-3',
											classes.example,
										)}>
										{_flexItems3}
									</div>
									<div
										className={classNames(
											'd-flex',
											'justify-content-evenly',
											'mb-3',
											classes.example,
										)}>
										{_flexItems3}
									</div>
								</CommonCodePreview>
								<p>
									Responsive variations also exist for{' '}
									<code>justify-content</code>.
								</p>
								<ul>
									<li>
										<code>.justify-content-start</code>
									</li>
									<li>
										<code>.justify-content-end</code>
									</li>
									<li>
										<code>.justify-content-center</code>
									</li>
									<li>
										<code>.justify-content-between</code>
									</li>
									<li>
										<code>.justify-content-around</code>
									</li>
									<li>
										<code>.justify-content-evenly</code>
									</li>
									<li>
										<code>.justify-content-sm-start</code>
									</li>
									<li>
										<code>.justify-content-sm-end</code>
									</li>
									<li>
										<code>.justify-content-sm-center</code>
									</li>
									<li>
										<code>.justify-content-sm-between</code>
									</li>
									<li>
										<code>.justify-content-sm-around</code>
									</li>
									<li>
										<code>.justify-content-sm-evenly</code>
									</li>
									<li>
										<code>.justify-content-md-start</code>
									</li>
									<li>
										<code>.justify-content-md-end</code>
									</li>
									<li>
										<code>.justify-content-md-center</code>
									</li>
									<li>
										<code>.justify-content-md-between</code>
									</li>
									<li>
										<code>.justify-content-md-around</code>
									</li>
									<li>
										<code>.justify-content-md-evenly</code>
									</li>
									<li>
										<code>.justify-content-lg-start</code>
									</li>
									<li>
										<code>.justify-content-lg-end</code>
									</li>
									<li>
										<code>.justify-content-lg-center</code>
									</li>
									<li>
										<code>.justify-content-lg-between</code>
									</li>
									<li>
										<code>.justify-content-lg-around</code>
									</li>
									<li>
										<code>.justify-content-lg-evenly</code>
									</li>
									<li>
										<code>.justify-content-xl-start</code>
									</li>
									<li>
										<code>.justify-content-xl-end</code>
									</li>
									<li>
										<code>.justify-content-xl-center</code>
									</li>
									<li>
										<code>.justify-content-xl-between</code>
									</li>
									<li>
										<code>.justify-content-xl-around</code>
									</li>
									<li>
										<code>.justify-content-xl-evenly</code>
									</li>
									<li>
										<code>.justify-content-xxl-start</code>
									</li>
									<li>
										<code>.justify-content-xxl-end</code>
									</li>
									<li>
										<code>.justify-content-xxl-center</code>
									</li>
									<li>
										<code>.justify-content-xxl-between</code>
									</li>
									<li>
										<code>.justify-content-xxl-around</code>
									</li>
									<li>
										<code>.justify-content-xxl-evenly</code>
									</li>
								</ul>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='align-items' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Align items</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Use <code>align-items</code> utilities on flexbox containers to
									change the alignment of flex items on the cross axis (the y-axis
									to start, x-axis if <code>flex-direction: column</code>). Choose
									from <code>start</code>, <code>end</code>, <code>center</code>,{' '}
									<code>baseline</code>, or <code>stretch</code> (browser
									default).
								</p>
								<CommonCodePreview code={_alignItems}>
									<div className='bd-example'>
										<div
											className={classNames(
												'd-flex',
												'align-items-start',
												'mb-3',
												classes.example,
											)}
											style={{ height: 100 }}>
											{_flexItems3}
										</div>
										<div
											className={classNames(
												'd-flex',
												'align-items-end',
												'mb-3',
												classes.example,
											)}
											style={{ height: 100 }}>
											{_flexItems3}
										</div>
										<div
											className={classNames(
												'd-flex',
												'align-items-center',
												'mb-3',
												classes.example,
											)}
											style={{ height: 100 }}>
											{_flexItems3}
										</div>
										<div
											className={classNames(
												'd-flex',
												'align-items-baseline',
												'mb-3',
												classes.example,
											)}
											style={{ height: 100 }}>
											{_flexItems3}
										</div>
										<div
											className={classNames(
												'd-flex',
												'align-items-stretch',
												'mb-3',
												classes.example,
											)}
											style={{ height: 100 }}>
											{_flexItems3}
										</div>
									</div>
								</CommonCodePreview>
								<p>
									Responsive variations also exist for <code>align-items</code>.
								</p>
								<ul>
									<li>
										<code>.align-items-start</code>
									</li>
									<li>
										<code>.align-items-end</code>
									</li>
									<li>
										<code>.align-items-center</code>
									</li>
									<li>
										<code>.align-items-baseline</code>
									</li>
									<li>
										<code>.align-items-stretch</code>
									</li>
									<li>
										<code>.align-items-sm-start</code>
									</li>
									<li>
										<code>.align-items-sm-end</code>
									</li>
									<li>
										<code>.align-items-sm-center</code>
									</li>
									<li>
										<code>.align-items-sm-baseline</code>
									</li>
									<li>
										<code>.align-items-sm-stretch</code>
									</li>
									<li>
										<code>.align-items-md-start</code>
									</li>
									<li>
										<code>.align-items-md-end</code>
									</li>
									<li>
										<code>.align-items-md-center</code>
									</li>
									<li>
										<code>.align-items-md-baseline</code>
									</li>
									<li>
										<code>.align-items-md-stretch</code>
									</li>
									<li>
										<code>.align-items-lg-start</code>
									</li>
									<li>
										<code>.align-items-lg-end</code>
									</li>
									<li>
										<code>.align-items-lg-center</code>
									</li>
									<li>
										<code>.align-items-lg-baseline</code>
									</li>
									<li>
										<code>.align-items-lg-stretch</code>
									</li>
									<li>
										<code>.align-items-xl-start</code>
									</li>
									<li>
										<code>.align-items-xl-end</code>
									</li>
									<li>
										<code>.align-items-xl-center</code>
									</li>
									<li>
										<code>.align-items-xl-baseline</code>
									</li>
									<li>
										<code>.align-items-xl-stretch</code>
									</li>
									<li>
										<code>.align-items-xxl-start</code>
									</li>
									<li>
										<code>.align-items-xxl-end</code>
									</li>
									<li>
										<code>.align-items-xxl-center</code>
									</li>
									<li>
										<code>.align-items-xxl-baseline</code>
									</li>
									<li>
										<code>.align-items-xxl-stretch</code>
									</li>
								</ul>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='align-self' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Align self</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Use <code>align-self</code> utilities on flexbox items to
									individually change their alignment on the cross axis (the
									y-axis to start, x-axis if <code>flex-direction: column</code>).
									Choose from the same options as <code>align-items</code>:{' '}
									<code>start</code>, <code>end</code>, <code>center</code>,{' '}
									<code>baseline</code>, or <code>stretch</code> (browser
									default).
								</p>
								<CommonCodePreview code={_alignSelf}>
									<div
										className={classNames('d-flex', 'mb-3', classes.example)}
										style={{ height: 100 }}>
										{_flexItem}
										<div className='align-self-start'>Aligned flex item</div>
										{_flexItem}
									</div>
									<div
										className={classNames('d-flex', 'mb-3', classes.example)}
										style={{ height: 100 }}>
										{_flexItem}
										<div className='align-self-end'>Aligned flex item</div>
										{_flexItem}
									</div>
									<div
										className={classNames('d-flex', 'mb-3', classes.example)}
										style={{ height: 100 }}>
										{_flexItem}
										<div className='align-self-center'>Aligned flex item</div>
										{_flexItem}
									</div>
									<div
										className={classNames('d-flex', 'mb-3', classes.example)}
										style={{ height: 100 }}>
										{_flexItem}
										<div className='align-self-baseline'>Aligned flex item</div>
										{_flexItem}
									</div>
									<div
										className={classNames('d-flex', classes.example)}
										style={{ height: 100 }}>
										{_flexItem}
										<div className='align-self-stretch'>Aligned flex item</div>
										{_flexItem}
									</div>
								</CommonCodePreview>
								<p>
									Responsive variations also exist for <code>align-self</code>.
								</p>
								<ul>
									<li>
										<code>.align-self-start</code>
									</li>
									<li>
										<code>.align-self-end</code>
									</li>
									<li>
										<code>.align-self-center</code>
									</li>
									<li>
										<code>.align-self-baseline</code>
									</li>
									<li>
										<code>.align-self-stretch</code>
									</li>
									<li>
										<code>.align-self-sm-start</code>
									</li>
									<li>
										<code>.align-self-sm-end</code>
									</li>
									<li>
										<code>.align-self-sm-center</code>
									</li>
									<li>
										<code>.align-self-sm-baseline</code>
									</li>
									<li>
										<code>.align-self-sm-stretch</code>
									</li>
									<li>
										<code>.align-self-md-start</code>
									</li>
									<li>
										<code>.align-self-md-end</code>
									</li>
									<li>
										<code>.align-self-md-center</code>
									</li>
									<li>
										<code>.align-self-md-baseline</code>
									</li>
									<li>
										<code>.align-self-md-stretch</code>
									</li>
									<li>
										<code>.align-self-lg-start</code>
									</li>
									<li>
										<code>.align-self-lg-end</code>
									</li>
									<li>
										<code>.align-self-lg-center</code>
									</li>
									<li>
										<code>.align-self-lg-baseline</code>
									</li>
									<li>
										<code>.align-self-lg-stretch</code>
									</li>
									<li>
										<code>.align-self-xl-start</code>
									</li>
									<li>
										<code>.align-self-xl-end</code>
									</li>
									<li>
										<code>.align-self-xl-center</code>
									</li>
									<li>
										<code>.align-self-xl-baseline</code>
									</li>
									<li>
										<code>.align-self-xl-stretch</code>
									</li>
									<li>
										<code>.align-self-xxl-start</code>
									</li>
									<li>
										<code>.align-self-xxl-end</code>
									</li>
									<li>
										<code>.align-self-xxl-center</code>
									</li>
									<li>
										<code>.align-self-xxl-baseline</code>
									</li>
									<li>
										<code>.align-self-xxl-stretch</code>
									</li>
								</ul>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='fill' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Fill</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Use the <code>.flex-fill</code> class on a series of sibling
									elements to force them into widths equal to their content (or
									equal widths if their content does not surpass their
									border-boxes) while taking up all available horizontal space.
								</p>
								<CommonCodePreview code={_fill}>
									<div className={classNames('d-flex', classes.example)}>
										<div className='flex-fill'>
											Flex item with a lot of content
										</div>
										<div className='flex-fill'>Flex item</div>
										<div className='flex-fill'>Flex item</div>
									</div>
								</CommonCodePreview>
								<p>
									Responsive variations also exist for <code>flex-fill</code>.
								</p>
								<ul>
									<li>
										<code>.flex-fill</code>
									</li>
									<li>
										<code>.flex-sm-fill</code>
									</li>
									<li>
										<code>.flex-md-fill</code>
									</li>
									<li>
										<code>.flex-lg-fill</code>
									</li>
									<li>
										<code>.flex-xl-fill</code>
									</li>
									<li>
										<code>.flex-xxl-fill</code>
									</li>
								</ul>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='grow-and-shrink' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Grow and shrink</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Use <code>.flex-grow-*</code> utilities to toggle a flex item’s
									ability to grow to fill available space. In the example below,
									the <code>.flex-grow-1</code> elements uses all available space
									it can, while allowing the remaining two flex items their
									necessary space.
								</p>
								<CommonCodePreview code={_growShrink}>
									<div className={classNames('d-flex', classes.example)}>
										<div className='flex-grow-1'>Flex item</div>
										<div>Flex item</div>
										<div>Third flex item</div>
									</div>
								</CommonCodePreview>
								<p>
									Use <code>.flex-shrink-*</code> utilities to toggle a flex
									item’s ability to shrink if necessary. In the example below, the
									second flex item with <code>.flex-shrink-1</code> is forced to
									wrap its contents to a new line, “shrinking” to allow more space
									for the previous flex item with <code>.w-100</code>.
								</p>
								<CommonCodePreview code={_growShrink2}>
									<div className={classNames('d-flex', classes.example)}>
										<div className='w-100'>Flex item</div>
										<div className='flex-shrink-1'>Flex item</div>
									</div>
								</CommonCodePreview>
								<p>
									Responsive variations also exist for <code>flex-grow</code> and{' '}
									<code>flex-shrink</code>.
								</p>
								<ul>
									<li>
										<code>{`.flex-{grow | shrink}-0`}</code>
									</li>
									<li>
										<code>{`.flex-{grow | shrink}-1`}</code>
									</li>
									<li>
										<code>{`.flex-sm-{grow | shrink}-0`}</code>
									</li>
									<li>
										<code>{`.flex-sm-{grow | shrink}-1`}</code>
									</li>
									<li>
										<code>{`.flex-md-{grow | shrink}-0`}</code>
									</li>
									<li>
										<code>{`.flex-md-{grow | shrink}-1`}</code>
									</li>
									<li>
										<code>{`.flex-lg-{grow | shrink}-0`}</code>
									</li>
									<li>
										<code>{`.flex-lg-{grow | shrink}-1`}</code>
									</li>
									<li>
										<code>{`.flex-xl-{grow | shrink}-0`}</code>
									</li>
									<li>
										<code>{`.flex-xl-{grow | shrink}-1`}</code>
									</li>
									<li>
										<code>{`.flex-xxl-{grow | shrink}-0`}</code>
									</li>
									<li>
										<code>{`.flex-xxl-{grow | shrink}-1`}</code>
									</li>
								</ul>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='auto-margins' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Auto margins</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Flexbox can do some pretty awesome things when you mix flex
									alignments with auto margins. Shown below are three examples of
									controlling flex items via auto margins: default (no auto
									margin), pushing two items to the right (<code>.me-auto</code>),
									and pushing two items to the left (<code>.ms-auto</code>).
								</p>
								<CommonCodePreview code={_autoMargin}>
									<div className={classNames('d-flex', 'mb-3', classes.example)}>
										{_flexItems3}
									</div>
									<div className={classNames('d-flex', 'mb-3', classes.example)}>
										<div className='me-auto'>Flex item</div>
										{_flexItem}
										{_flexItem}
									</div>
									<div className={classNames('d-flex', classes.example)}>
										{_flexItem}
										{_flexItem}
										<div className='ms-auto'>Flex item</div>
									</div>
								</CommonCodePreview>
								<Card id='with-align-items' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>With align-items</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Vertically move one flex item to the top or bottom of a
											container by mixing <code>align-items</code>,{' '}
											<code>flex-direction: column</code>, and{' '}
											<code>margin-top: auto</code> or{' '}
											<code>margin-bottom: auto</code>.
										</p>
										<CommonCodePreview code={_autoMargin2}>
											<div
												className={classNames(
													'd-flex',
													'align-items-start',
													'flex-column',
													'mb-3',
													classes.example,
												)}
												style={{ height: 200 }}>
												<div className='mb-auto'>Flex item</div>
												{_flexItem}
												{_flexItem}
											</div>
											<div
												className={classNames(
													'd-flex',
													'align-items-end',
													'flex-column',
													classes.example,
												)}
												style={{ height: 200 }}>
												{_flexItem}
												{_flexItem}
												<div className='mt-auto'>Flex item</div>
											</div>
										</CommonCodePreview>
									</CardBody>
								</Card>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='wrap' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Wrap</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Change how flex items wrap in a flex container. Choose from no
									wrapping at all (the browser default) with{' '}
									<code>.flex-nowrap</code>, wrapping with <code>.flex-wrap</code>
									, or reverse wrapping with <code>.flex-wrap-reverse</code>.
								</p>
								<CommonCodePreview code={_wrap}>
									<div
										className={classNames(
											'd-flex',
											'flex-nowrap',
											classes.example,
										)}
										style={{ width: '8rem' }}>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
									</div>
								</CommonCodePreview>
								<CommonCodePreview code={_wrap2}>
									<div
										className={classNames(
											'd-flex',
											'flex-wrap',
											classes.example,
										)}>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
									</div>
								</CommonCodePreview>
								<CommonCodePreview code={_wrap3}>
									<div
										className={classNames(
											'd-flex',
											'flex-wrap-reverse',
											classes.example,
										)}>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
										<div>Flex item</div>
									</div>
								</CommonCodePreview>
								<p>
									Responsive variations also exist for <code>flex-wrap</code>.
								</p>
								<ul>
									<li>
										<code>.flex-nowrap</code>
									</li>
									<li>
										<code>.flex-wrap</code>
									</li>
									<li>
										<code>.flex-wrap-reverse</code>
									</li>
									<li>
										<code>.flex-sm-nowrap</code>
									</li>
									<li>
										<code>.flex-sm-wrap</code>
									</li>
									<li>
										<code>.flex-sm-wrap-reverse</code>
									</li>
									<li>
										<code>.flex-md-nowrap</code>
									</li>
									<li>
										<code>.flex-md-wrap</code>
									</li>
									<li>
										<code>.flex-md-wrap-reverse</code>
									</li>
									<li>
										<code>.flex-lg-nowrap</code>
									</li>
									<li>
										<code>.flex-lg-wrap</code>
									</li>
									<li>
										<code>.flex-lg-wrap-reverse</code>
									</li>
									<li>
										<code>.flex-xl-nowrap</code>
									</li>
									<li>
										<code>.flex-xl-wrap</code>
									</li>
									<li>
										<code>.flex-xl-wrap-reverse</code>
									</li>
									<li>
										<code>.flex-xxl-nowrap</code>
									</li>
									<li>
										<code>.flex-xxl-wrap</code>
									</li>
									<li>
										<code>.flex-xxl-wrap-reverse</code>
									</li>
								</ul>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='order' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Order</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Change the <em>visual</em> order of specific flex items with a
									handful of <code>order</code> utilities. We only provide options
									for making an item first or last, as well as a reset to use the
									DOM order. As <code>order</code> takes any integer value from 0
									to 5, add custom CSS for any additional values needed.
								</p>
								<CommonCodePreview code={_order}>
									<div
										className={classNames(
											'd-flex',
											'flex-nowrap',
											classes.example,
										)}>
										<div className='order-3'>First flex item</div>
										<div className='order-2'>Second flex item</div>
										<div className='order-1'>Third flex item</div>
									</div>
								</CommonCodePreview>
								<p>
									Responsive variations also exist for <code>order</code>.
								</p>
								<ul>
									<li>
										<code>.order-0</code>
									</li>
									<li>
										<code>.order-1</code>
									</li>
									<li>
										<code>.order-2</code>
									</li>
									<li>
										<code>.order-3</code>
									</li>
									<li>
										<code>.order-4</code>
									</li>
									<li>
										<code>.order-5</code>
									</li>
									<li>
										<code>.order-sm-0</code>
									</li>
									<li>
										<code>.order-sm-1</code>
									</li>
									<li>
										<code>.order-sm-2</code>
									</li>
									<li>
										<code>.order-sm-3</code>
									</li>
									<li>
										<code>.order-sm-4</code>
									</li>
									<li>
										<code>.order-sm-5</code>
									</li>
									<li>
										<code>.order-md-0</code>
									</li>
									<li>
										<code>.order-md-1</code>
									</li>
									<li>
										<code>.order-md-2</code>
									</li>
									<li>
										<code>.order-md-3</code>
									</li>
									<li>
										<code>.order-md-4</code>
									</li>
									<li>
										<code>.order-md-5</code>
									</li>
									<li>
										<code>.order-lg-0</code>
									</li>
									<li>
										<code>.order-lg-1</code>
									</li>
									<li>
										<code>.order-lg-2</code>
									</li>
									<li>
										<code>.order-lg-3</code>
									</li>
									<li>
										<code>.order-lg-4</code>
									</li>
									<li>
										<code>.order-lg-5</code>
									</li>
									<li>
										<code>.order-xl-0</code>
									</li>
									<li>
										<code>.order-xl-1</code>
									</li>
									<li>
										<code>.order-xl-2</code>
									</li>
									<li>
										<code>.order-xl-3</code>
									</li>
									<li>
										<code>.order-xl-4</code>
									</li>
									<li>
										<code>.order-xl-5</code>
									</li>
									<li>
										<code>.order-xxl-0</code>
									</li>
									<li>
										<code>.order-xxl-1</code>
									</li>
									<li>
										<code>.order-xxl-2</code>
									</li>
									<li>
										<code>.order-xxl-3</code>
									</li>
									<li>
										<code>.order-xxl-4</code>
									</li>
									<li>
										<code>.order-xxl-5</code>
									</li>
								</ul>
								<p>
									Additionally there are also responsive <code>.order-first</code>{' '}
									and <code>.order-last</code> classes that change the{' '}
									<code>order</code> of an element by applying{' '}
									<code>order: -1</code> and <code>order: 6</code>, respectively.
								</p>
								<ul>
									<li>
										<code>.order-first</code>
									</li>
									<li>
										<code>.order-last</code>
									</li>
									<li>
										<code>.order-sm-first</code>
									</li>
									<li>
										<code>.order-sm-last</code>
									</li>
									<li>
										<code>.order-md-first</code>
									</li>
									<li>
										<code>.order-md-last</code>
									</li>
									<li>
										<code>.order-lg-first</code>
									</li>
									<li>
										<code>.order-lg-last</code>
									</li>
									<li>
										<code>.order-xl-first</code>
									</li>
									<li>
										<code>.order-xl-last</code>
									</li>
									<li>
										<code>.order-xxl-first</code>
									</li>
									<li>
										<code>.order-xxl-last</code>
									</li>
								</ul>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='align-content' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Align content</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Use <code>align-content</code> utilities on flexbox containers
									to align flex items <em>together</em> on the cross axis. Choose
									from <code>start</code> (browser default), <code>end</code>,{' '}
									<code>center</code>, <code>between</code>, <code>around</code>,
									or <code>stretch</code>. To demonstrate these utilities, we’ve
									enforced <code>flex-wrap: wrap</code> and increased the number
									of flex items.
								</p>
								<p>
									<strong>Heads up!</strong> This property has no effect on single
									rows of flex items.
								</p>

								<CommonCodePreview code={_alignContent}>
									<div
										className={classNames(
											'd-flex',
											'align-content-start',
											'flex-wrap',
											classes.example,
										)}
										style={{ height: 200 }}>
										{_flexItems15}
									</div>
								</CommonCodePreview>
								<CommonCodePreview code={_alignContent2}>
									<div
										className={classNames(
											'd-flex',
											'align-content-end',
											'flex-wrap',
											classes.example,
										)}
										style={{ height: 200 }}>
										{_flexItems15}
									</div>
								</CommonCodePreview>
								<CommonCodePreview code={_alignContent3}>
									<div
										className={classNames(
											'd-flex',
											'align-content-center',
											'flex-wrap',
											classes.example,
										)}
										style={{ height: 200 }}>
										{_flexItems15}
									</div>
								</CommonCodePreview>
								<CommonCodePreview code={_alignContent4}>
									<div
										className={classNames(
											'd-flex',
											'align-content-between',
											'flex-wrap',
											classes.example,
										)}
										style={{ height: 200 }}>
										{_flexItems15}
									</div>
								</CommonCodePreview>
								<CommonCodePreview code={_alignContent5}>
									<div
										className={classNames(
											'd-flex',
											'align-content-around',
											'flex-wrap',
											classes.example,
										)}
										style={{ height: 200 }}>
										{_flexItems15}
									</div>
								</CommonCodePreview>
								<CommonCodePreview code={_alignContent6}>
									<div
										className={classNames(
											'd-flex',
											'align-content-stretch',
											'flex-wrap',
											classes.example,
										)}
										style={{ height: 200 }}>
										{_flexItems15}
									</div>
								</CommonCodePreview>

								<p>
									Responsive variations also exist for <code>align-content</code>.
								</p>
								<ul>
									<li>
										<code>.align-content-start</code>
									</li>
									<li>
										<code>.align-content-end</code>
									</li>
									<li>
										<code>.align-content-center</code>
									</li>
									<li>
										<code>.align-content-around</code>
									</li>
									<li>
										<code>.align-content-stretch</code>
									</li>
									<li>
										<code>.align-content-sm-start</code>
									</li>
									<li>
										<code>.align-content-sm-end</code>
									</li>
									<li>
										<code>.align-content-sm-center</code>
									</li>
									<li>
										<code>.align-content-sm-around</code>
									</li>
									<li>
										<code>.align-content-sm-stretch</code>
									</li>
									<li>
										<code>.align-content-md-start</code>
									</li>
									<li>
										<code>.align-content-md-end</code>
									</li>
									<li>
										<code>.align-content-md-center</code>
									</li>
									<li>
										<code>.align-content-md-around</code>
									</li>
									<li>
										<code>.align-content-md-stretch</code>
									</li>
									<li>
										<code>.align-content-lg-start</code>
									</li>
									<li>
										<code>.align-content-lg-end</code>
									</li>
									<li>
										<code>.align-content-lg-center</code>
									</li>
									<li>
										<code>.align-content-lg-around</code>
									</li>
									<li>
										<code>.align-content-lg-stretch</code>
									</li>
									<li>
										<code>.align-content-xl-start</code>
									</li>
									<li>
										<code>.align-content-xl-end</code>
									</li>
									<li>
										<code>.align-content-xl-center</code>
									</li>
									<li>
										<code>.align-content-xl-around</code>
									</li>
									<li>
										<code>.align-content-xl-stretch</code>
									</li>
									<li>
										<code>.align-content-xxl-start</code>
									</li>
									<li>
										<code>.align-content-xxl-end</code>
									</li>
									<li>
										<code>.align-content-xxl-center</code>
									</li>
									<li>
										<code>.align-content-xxl-around</code>
									</li>
									<li>
										<code>.align-content-xxl-stretch</code>
									</li>
								</ul>
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
											Flexbox utilities are declared in our utilities API in{' '}
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

export default FlexPage;
