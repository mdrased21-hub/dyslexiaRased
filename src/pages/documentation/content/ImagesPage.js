import React from 'react';
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
import PrismCode from '../../../components/extras/PrismCode';
import PlaceholderImage from '../../../components/extras/PlaceholderImage';
import { componentsMenu } from '../../../menu';

const ImagesPage = () => {
	const _alignImage = `
<img src='...' className='rounded float-start' alt='...' />
<img src='...' className='rounded float-end' alt='...' />`;

	const _alignImage2 = `<img src='...' className='rounded mx-auto d-block' alt='...' />`;

	const _alignImage3 = `<div className='text-center'>
	<img src='...' className='rounded' alt='...'>
</div>`;

	const _picture = `<picture>
	<source srcSet='...' type='image/svg+xml' />
	<img src='...' className='img-fluid img-thumbnail' alt='...' />
</picture>`;

	return (
		<PageWrapper title={componentsMenu.content.subMenu.images.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Content', to: '/content' },
							{ title: 'Images', to: '/content/images' },
						]}
					/>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12 my-4'>
						<h1>Images</h1>
						<p className='lead'>
							Documentation and examples for opting images into responsive behavior
							(so they never become larger than their parent elements) and add
							lightweight styles to them—all via classes.
						</p>
					</div>

					<div className='col-lg-6'>
						<Card id='responsive-images' stretch className='scroll-margin'>
							<CardHeader>
								<CardLabel icon='SettingsOverscan'>
									<CardTitle tag='h3'>Responsive images</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Images in Bootstrap are made responsive with{' '}
									<code>.img-fluid</code>. This applies{' '}
									<code>max-width: 100%;</code> and <code>height: auto;</code> to
									the image so that it scales with the parent element.
								</p>
								<PlaceholderImage
									width='100%'
									height={250}
									text='Responsive image'
									ariaLabel='Placeholder: Responsive image'
									className='img-fluid'
								/>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-6'>
						<Card id='image-thumbnails' stretch className='scroll-margin'>
							<CardHeader>
								<CardLabel icon='Panorama'>
									<CardTitle tag='h3'>Image thumbnails</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									In addition to our{' '}
									<Link to='../utilities/borders'>border-radius utilities</Link>,
									you can use <code>.img-thumbnail</code> to give an image a
									rounded 1px border appearance.
								</p>
								<PlaceholderImage
									width={200}
									height={200}
									className='img-thumbnail'
									ariaLabel='A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200'
								/>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card id='aligning-images' className='scroll-margin'>
							<CardHeader>
								<CardLabel icon='Collections'>
									<CardTitle tag='h3'>Aligning images</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Align images with the{' '}
									<Link to='../utilities/float'>helper float classes</Link> or{' '}
									<HashLink to='../utilities/text/#text-alignment'>
										text alignment classes
									</HashLink>
									. <code>block</code>
									-level images can be centered using{' '}
									<HashLink to='../utilities/spacing/#horizontal-centering'>
										the .mx-auto margin utility class
									</HashLink>
									.
								</p>
								<CommonCodePreview code={_alignImage}>
									<div>
										<PlaceholderImage
											width={200}
											height={200}
											className='rounded float-start'
										/>
										<PlaceholderImage
											width={200}
											height={200}
											className='rounded float-end'
										/>
									</div>
								</CommonCodePreview>
								<CommonCodePreview code={_alignImage2}>
									<PlaceholderImage
										width={200}
										height={200}
										className='rounded mx-auto d-block'
									/>
								</CommonCodePreview>
								<CommonCodePreview code={_alignImage3}>
									<div className='text-center'>
										<PlaceholderImage
											width={200}
											height={200}
											className='rounded'
										/>
									</div>
								</CommonCodePreview>
							</CardBody>
						</Card>
					</div>
					<div className='col-12'>
						<Card id='picture' className='scroll-margin'>
							<CardHeader>
								<CardLabel icon='PhotoSizeSelectActual'>
									<CardTitle tag='h3'>Picture</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									If you are using the <code>{`<picture>`}</code> element to
									specify multiple <code>{`<source>`}</code> elements for a
									specific <code>{`<img>`}</code>, make sure to add the{' '}
									<code>.img-*</code> classes to the <code>{`<img>`}</code> and
									not to the <code>{`<picture>`}</code> tag.
								</p>
								<PrismCode code={_picture} language='jsx' className='mb-0' />
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ImagesPage;
