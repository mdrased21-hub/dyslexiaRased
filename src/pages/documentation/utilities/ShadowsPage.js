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

const ShadowsPage = () => {
	const _shadow = `
<div className='shadow-none p-3 mb-5 bg-light rounded'>No shadow</div>
<div className='shadow-sm p-3 mb-5 bg-body rounded'>Small shadow</div>
<div className='shadow p-3 mb-5 bg-body rounded'>Regular shadow</div>
<div className='shadow-lg p-3 mb-5 bg-body rounded'>Larger shadow</div>`;

	const _variables = `
$box-shadow:                  0 .5rem 1rem rgba($black, .15) !default;
$box-shadow-sm:               0 .125rem .25rem rgba($black, .075) !default;
$box-shadow-lg:               0 1rem 3rem rgba($black, .175) !default;
$box-shadow-inset:            inset 0 1px 2px rgba($black, .075);

// Overwrite src/styles/settings/index.scss
$box-shadow:                  0 1.6rem 3rem rgba($black, 0.1);
$box-shadow-sm:               0 0.8rem 3rem rgba($black, 0.075);
$box-shadow-lg:               0 1.6rem 3rem rgba($black, 0.175);`;
	const _utilitiesApi = `
"shadow": (
	property: box-shadow,
	class: shadow,
	values: (
		null: $box-shadow,
		sm: $box-shadow-sm,
		lg: $box-shadow-lg,
		none: none,
	)
),`;

	return (
		<PageWrapper title={componentsMenu.utilities.subMenu.shadows.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Utilities', to: '/utilities' },
							{ title: 'Shadows', to: '/utilities/shadows' },
						]}
					/>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12 my-4'>
						<h1>Shadows</h1>
						<p className='lead'>
							Add or remove shadows to elements with box-shadow utilities.
						</p>
					</div>

					<div className='col-12'>
						<Card id='examples' className='scroll-margin'>
							<CardHeader>
								<CardLabel>
									<CardTitle tag='h3'>Examples</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									While shadows on components are disabled by default in Bootstrap
									and can be enabled via <code>$enable-shadows</code>, you can
									also quickly add or remove a shadow with our{' '}
									<code>box-shadow</code> utility classes. Includes support for{' '}
									<code>.shadow-none</code> and three default sizes (which have
									associated variables to match).
								</p>
								<CommonCodePreview code={_shadow}>
									<div className='shadow-none p-3 mb-5 bg-light rounded'>
										No shadow
									</div>
									<div className='shadow-sm p-3 mb-5 bg-body rounded'>
										Small shadow
									</div>
									<div className='shadow p-3 mb-5 bg-body rounded'>
										Regular shadow
									</div>
									<div className='shadow-lg p-3 mb-5 bg-body rounded'>
										Larger shadow
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
								<Card id='variables' className='scroll-margin rounded-2'>
									<CardHeader>
										<CardLabel>
											<CardTitle>Variables</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<CommonCodePreview code={_variables} language='scss' />
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
											Shadow utilities are declared in our utilities API in{' '}
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

export default ShadowsPage;
