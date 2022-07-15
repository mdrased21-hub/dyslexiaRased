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
import PrismCode from '../../../components/extras/PrismCode';
import CommonCodePreview from '../../../components/common/CommonCodePreview';
import { componentsMenu } from '../../../menu';

const useStyles = createUseStyles({
	// stylelint-disable-next-line selector-type-no-unknown
	example: {
		height: 200,
		backgroundColor: '#f5f5f5',

		// stylelint-disable-next-line scss/selector-no-redundant-nesting-selector
		'& .position-absolute': {
			width: '2em',
			height: '2em',
			backgroundColor: '#212529',
			borderRadius: '0.25rem',
		},
	},
});

const PositionPage = () => {
	const classes = useStyles();

	const _positionValues = `
<div className='position-static'>...</div>
<div className='position-relative'>...</div>
<div className='position-absolute'>...</div>
<div className='position-fixed'>...</div>
<div className='position-sticky'>...</div>`;
	const _arrange = `
<div className='position-relative'>
	<div className='position-absolute top-0 start-0' />
	<div className='position-absolute top-0 end-0' />
	<div className='position-absolute top-50 start-50' />
	<div className='position-absolute bottom-50 end-50' />
	<div className='position-absolute bottom-0 start-0' />
	<div className='position-absolute bottom-0 end-0' />
</div>`;

	const _center = `

<div className='position-relative'>
	<div className='position-absolute top-0 start-0 translate-middle' />
	<div className='position-absolute top-0 start-50 translate-middle' />
	<div className='position-absolute top-0 start-100 translate-middle' />
	<div className='position-absolute top-50 start-0 translate-middle' />
	<div className='position-absolute top-50 start-50 translate-middle' />
	<div className='position-absolute top-50 start-100 translate-middle' />
	<div className='position-absolute top-100 start-0 translate-middle' />
	<div className='position-absolute top-100 start-50 translate-middle' />
	<div className='position-absolute top-100 start-100 translate-middle' />
</div>`;
	const _center2 = `
<div className='position-relative'>
	<div className='position-absolute top-0 start-0' />
	<div className='position-absolute top-0 start-50 translate-middle-x' />
	<div className='position-absolute top-0 end-0' />
	<div className='position-absolute top-50 start-0 translate-middle-y' />
	<div className='position-absolute top-50 start-50 translate-middle' />
	<div className='position-absolute top-50 end-0 translate-middle-y' />
	<div className='position-absolute bottom-0 start-0' />
	<div className='position-absolute bottom-0 start-50 translate-middle-x' />
	<div className='position-absolute bottom-0 end-0' />
</div>`;

	const _example = `
<button
	type='button'
	className='btn btn-primary position-relative'>
	Mails
	<span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary'>
		+99 <span className='visually-hidden'>unread messages</span>
	</span>
</button>

<button
	type='button'
	className='btn btn-dark position-relative'>
	Marker
	<svg
		width='1em'
		height='1em'
		viewBox='0 0 16 16'
		className='position-absolute top-100 start-50 translate-middle mt-1 bi bi-caret-down-fill'
		fill='#212529'
		xmlns='http://www.w3.org/2000/svg'>
		<path d='M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
	</svg>
</button>

<button
	type='button'
	className='btn btn-primary position-relative'>
	Alerts
	<span className='position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2'>
		<span className='visually-hidden'>unread messages</span>
	</span>
</button>`;

	const _map = `
$position-values: (
	0: 0,
	5: 5%,
	10: 10%,
	15: 15%,
	20: 20%,
	25: 25%,
	30: 30%,
	35: 35%,
	40: 40%,
	45: 45%,
	50: 50%,
	55: 55%,
	60: 60%,
	65: 65%,
	70: 70%,
	75: 75%,
	80: 80%,
	85: 85%,
	90: 90%,
	95: 95%,
	100: 100%
);`;
	const _utilitiesApi = `
"position": (
  	property: position,
  	values: static relative absolute fixed sticky
),
"top": (
  	property: top,
  	values: $position-values
),
"bottom": (
  	property: bottom,
  	values: $position-values
),
"start": (
  	property: left,
  	class: start,
  	values: $position-values
),
"end": (
  	property: right,
  	class: end,
  	values: $position-values
),
"translate-middle": (
  	property: transform,
  	class: translate-middle,
  	values: (
		null: translate(-50%, -50%),
		x: translateX(-50%),
		y: translateY(-50%),
  	)
),`;

	return (
		<PageWrapper title={componentsMenu.utilities.subMenu.position.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Utilities', to: '/utilities' },
							{ title: 'Position', to: '/utilities/position' },
						]}
					/>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12 my-4'>
						<h1>Position</h1>
						<p className='lead'>
							Use these shorthand utilities for quickly configuring the position of an
							element.
						</p>
					</div>

					<div className='col-12'>
						<Card id='position-values' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Position values</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Quick positioning classes are available, though they are not
									responsive
								</p>
								<PrismCode code={_positionValues} language='jsx' className='my-0' />
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='arrange-elements' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Arrange elements</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Arrange elements easily with the edge positioning utilities. The
									format is <code>{`{property}-{position}`}</code>.
								</p>
								<p>
									Where <em>property</em> is one of:
								</p>
								<ul>
									<li>
										<code>top</code> - for the vertical <code>top</code>{' '}
										position
									</li>
									<li>
										<code>start</code> - for the horizontal <code>left</code>{' '}
										position (in LTR)
									</li>
									<li>
										<code>bottom</code> - for the vertical <code>bottom</code>{' '}
										position
									</li>
									<li>
										<code>end</code> - for the horizontal <code>right</code>{' '}
										position (in LTR)
									</li>
								</ul>
								<p>
									Where <em>position</em> is one of:
								</p>
								<ul>
									<li>
										<code>0</code> - for <code>0</code> edge position
									</li>
									<li>
										<code>50</code> - for <code>50%</code> edge position
									</li>
									<li>
										<code>100</code> - for <code>100%</code> edge position
									</li>
								</ul>
								<p>
									(You can add more position values by adding entries to the{' '}
									<code>$position-values</code> Sass map variable.)
								</p>
								<CommonCodePreview code={_arrange}>
									<div
										className={classNames(
											'position-relative',
											classes.example,
										)}>
										<div className='position-absolute top-0 start-0' />
										<div className='position-absolute top-0 end-0' />
										<div className='position-absolute top-50 start-50' />
										<div className='position-absolute bottom-50 end-50' />
										<div className='position-absolute bottom-0 start-0' />
										<div className='position-absolute bottom-0 end-0' />
									</div>
								</CommonCodePreview>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='center-elements' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Center elements</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									In addition, you can also center the elements with the transform
									utility class <code>.translate-middle</code>.
								</p>
								<p>
									This class applies the transformations{' '}
									<code>translateX(-50%)</code> and <code>translateY(-50%)</code>{' '}
									to the element which, in combination with the edge positioning
									utilities, allows you to absolute center an element.
								</p>
								<CommonCodePreview code={_center}>
									<div
										className={classNames(
											'position-relative',
											classes.example,
										)}>
										<div className='position-absolute top-0 start-0 translate-middle' />
										<div className='position-absolute top-0 start-50 translate-middle' />
										<div className='position-absolute top-0 start-100 translate-middle' />
										<div className='position-absolute top-50 start-0 translate-middle' />
										<div className='position-absolute top-50 start-50 translate-middle' />
										<div className='position-absolute top-50 start-100 translate-middle' />
										<div className='position-absolute top-100 start-0 translate-middle' />
										<div className='position-absolute top-100 start-50 translate-middle' />
										<div className='position-absolute top-100 start-100 translate-middle' />
									</div>
								</CommonCodePreview>
								<p>
									By adding <code>.translate-middle-x</code> or{' '}
									<code>.translate-middle-y</code> classes, elements can be
									positioned only in horizontal or vertical direction.
								</p>
								<CommonCodePreview code={_center2}>
									<div
										className={classNames(
											'position-relative',
											classes.example,
										)}>
										<div className='position-absolute top-0 start-0' />
										<div className='position-absolute top-0 start-50 translate-middle-x' />
										<div className='position-absolute top-0 end-0' />
										<div className='position-absolute top-50 start-0 translate-middle-y' />
										<div className='position-absolute top-50 start-50 translate-middle' />
										<div className='position-absolute top-50 end-0 translate-middle-y' />
										<div className='position-absolute bottom-0 start-0' />
										<div className='position-absolute bottom-0 start-50 translate-middle-x' />
										<div className='position-absolute bottom-0 end-0' />
									</div>
								</CommonCodePreview>
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
								<p>Here are some real life examples of these classes:</p>
								<CommonCodePreview code={_example}>
									<div className='d-flex justify-content-around'>
										<button
											type='button'
											className='btn btn-primary position-relative'>
											Mails{' '}
											<span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary'>
												+99{' '}
												<span className='visually-hidden'>
													unread messages
												</span>
											</span>
										</button>

										<button
											type='button'
											className='btn btn-dark position-relative'>
											Marker{' '}
											<svg
												width='1em'
												height='1em'
												viewBox='0 0 16 16'
												className='position-absolute top-100 start-50 translate-middle mt-1 bi bi-caret-down-fill'
												fill='#212529'
												xmlns='http://www.w3.org/2000/svg'>
												<path d='M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
											</svg>
										</button>

										<button
											type='button'
											className='btn btn-primary position-relative'>
											Alerts{' '}
											<span className='position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2'>
												<span className='visually-hidden'>
													unread messages
												</span>
											</span>
										</button>
									</div>
								</CommonCodePreview>
								<p>
									You can use these classes with existing components to create new
									ones. Remember that you can extend its functionality by adding
									entries to the <code>$position-values</code> variable.
								</p>
								<CommonCodePreview>
									<div className='position-relative m-4'>
										<div className='progress' style={{ height: 1 }}>
											<div
												className='progress-bar'
												role='progressbar'
												style={{ width: '50%' }}
												aria-valuenow='25'
												aria-valuemin='0'
												aria-valuemax='100'
												aria-label='progress'
											/>
										</div>
										<button
											type='button'
											className='position-absolute p-0 top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill'
											style={{
												width: '2rem',
												height: '2rem',
											}}>
											1
										</button>
										<button
											type='button'
											className='position-absolute p-0 top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill'
											style={{
												width: '2rem',
												height: '2rem',
											}}>
											2
										</button>
										<button
											type='button'
											className='position-absolute p-0 top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill'
											style={{
												width: '2rem',
												height: '2rem',
											}}>
											3
										</button>
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
								<Card id='map' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Map</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Default position utility values are declared in a Sass
											map, then used to generate our utilities.
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
											Overflow utilities are declared in our utilities API in{' '}
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

export default PositionPage;
