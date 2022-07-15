import React from 'react';
import { HashLink } from 'react-router-hash-link';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, { SubHeaderLeft } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import CommonCodePreview from '../../../components/common/CommonCodePreview';
import PlaceholderImage from '../../../components/extras/PlaceholderImage';
import { componentsMenu } from '../../../menu';

const FiguresPage = () => {
	const _figure = `
<figure className='figure'>
	<img src='...' className='figure-img img-fluid rounded' alt='...' />
	<figcaption className='figure-caption'>A caption for the above image.</figcaption>
</figure>`;
	const _figure2 = `
<figure className='figure'>
	<img src='...' className='figure-img img-fluid rounded' alt='...' />
	<figcaption className='figure-caption text-end'>A caption for the above image.</figcaption>
</figure>`;

	return (
		<PageWrapper title={componentsMenu.content.subMenu.figures.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Content', to: '/content' },
							{ title: 'Figures', to: '/content/figures' },
						]}
					/>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12 my-4'>
						<h1>Figures</h1>
						<p className='lead'>
							Documentation and examples for displaying related images and text with
							the figure component in Bootstrap.
						</p>
					</div>

					<div className='col-12'>
						<Card>
							<CardBody>
								<p>
									Anytime you need to display a piece of content—like an image
									with an optional caption, consider using a{' '}
									<code>{`<figure>`}</code>.
								</p>
								<p>
									Use the included <code>.figure</code>, <code>.figure-img</code>{' '}
									and <code>.figure-caption</code> classes to provide some
									baseline styles for the HTML5 <code>{`<figure>`}</code> and{' '}
									<code>{`<figcaption>`}</code> elements. Images in figures have
									no explicit size, so be sure to add the{' '}
									<code>.figure-caption</code> class to your{' '}
									<code>{`<img>`}</code> to make it responsive.
								</p>
								<CommonCodePreview code={_figure}>
									<figure className='figure'>
										<PlaceholderImage
											width={400}
											height={300}
											className='figure-img img-fluid rounded'
											alt='...'
										/>
										<figcaption className='figure-caption'>
											A caption for the above image.
										</figcaption>
									</figure>
								</CommonCodePreview>
								<p>
									Aligning the figure’s caption is easy with our{' '}
									<HashLink to='../utilities/text/#text-alignment'>
										text utilities.
									</HashLink>
								</p>
								<CommonCodePreview code={_figure2}>
									<figure className='figure'>
										<PlaceholderImage
											width={400}
											height={300}
											className='figure-img img-fluid rounded'
											alt='...'
										/>
										<figcaption className='figure-caption text-end'>
											A caption for the above image.
										</figcaption>
									</figure>
								</CommonCodePreview>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default FiguresPage;
