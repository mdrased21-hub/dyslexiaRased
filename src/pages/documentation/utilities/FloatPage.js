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

const FloatPage = () => {
	const _overview = `
<div className='float-start'>Float start on all viewport sizes</div><br />
<div className='float-end'>Float end on all viewport sizes</div><br />
<div className='float-none'>Don't float on all viewport sizes</div>`;
	const _responsive = `
<div className='float-sm-start'>Float start on viewports sized SM (small) or wider</div><br />
<div className='float-md-start'>Float start on viewports sized MD (medium) or wider</div><br />
<div className='float-lg-start'>Float start on viewports sized LG (large) or wider</div><br />
<div className='float-xl-start'>Float start on viewports sized XL (extra-large) or wider</div><br />`;

	const _utilitiesApi = `
"float": (
  	responsive: true,
  	property: float,
  	values: (
		start: left,
		end: right,
		none: none,
  	)
),`;

	return (
		<PageWrapper title={componentsMenu.utilities.subMenu.float.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Utilities', to: '/utilities' },
							{ title: 'Float', to: '/utilities/float' },
						]}
					/>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12 my-4'>
						<h1>Float</h1>
						<p className='lead'>
							Toggle floats on any element, across any breakpoint, using our
							responsive float utilities.
						</p>
					</div>

					<div className='col-12'>
						<Card id='overview' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Overview</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									These utility classes float an element to the left or right, or
									disable floating, based on the current viewport size using the{' '}
									<a
										href='https://developer.mozilla.org/en-US/docs/Web/CSS/float'
										target='_blank'
										rel='noreferrer'>
										CSS <code>float</code> property
									</a>
									. <code>!important</code> is included to avoid specificity
									issues. These use the same viewport breakpoints as our grid
									system. Please be aware float utilities have no effect on flex
									items.
								</p>
								<CommonCodePreview code={_overview}>
									<div className='float-start'>
										Float start on all viewport sizes
									</div>
									<br />
									<div className='float-end'>Float end on all viewport sizes</div>
									<br />
									<div className='float-none'>
										Don't float on all viewport sizes
									</div>
								</CommonCodePreview>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='responsive' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Responsive</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Responsive variations also exist for each <code>float</code>{' '}
									value.
								</p>
								<CommonCodePreview code={_responsive}>
									<div className='float-sm-start'>
										Float start on viewports sized SM (small) or wider
									</div>
									<br />
									<div className='float-md-start'>
										Float start on viewports sized MD (medium) or wider
									</div>
									<br />
									<div className='float-lg-start'>
										Float start on viewports sized LG (large) or wider
									</div>
									<br />
									<div className='float-xl-start'>
										Float start on viewports sized XL (extra-large) or wider
									</div>
									<br />
								</CommonCodePreview>
								<p>Here are all the support classes:</p>
								<ul>
									<li>
										<code>.float-start</code>
									</li>
									<li>
										<code>.float-end</code>
									</li>
									<li>
										<code>.float-none</code>
									</li>
									<li>
										<code>.float-sm-start</code>
									</li>
									<li>
										<code>.float-sm-end</code>
									</li>
									<li>
										<code>.float-sm-none</code>
									</li>
									<li>
										<code>.float-md-start</code>
									</li>
									<li>
										<code>.float-md-end</code>
									</li>
									<li>
										<code>.float-md-none</code>
									</li>
									<li>
										<code>.float-lg-start</code>
									</li>
									<li>
										<code>.float-lg-end</code>
									</li>
									<li>
										<code>.float-lg-none</code>
									</li>
									<li>
										<code>.float-xl-start</code>
									</li>
									<li>
										<code>.float-xl-end</code>
									</li>
									<li>
										<code>.float-xl-none</code>
									</li>
									<li>
										<code>.float-xxl-start</code>
									</li>
									<li>
										<code>.float-xxl-end</code>
									</li>
									<li>
										<code>.float-xxl-none</code>
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
											Float utilities are declared in our utilities API in{' '}
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

export default FloatPage;
