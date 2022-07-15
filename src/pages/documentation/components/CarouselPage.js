import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Carousel from '../../../components/bootstrap/Carousel';
import { componentsMenu } from '../../../menu';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import Card, {
	CardActions,
	CardBody,
	CardCodeView,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../components/bootstrap/Card';
import CommonHowToUse from '../../../components/common/CommonHowToUse';
import CommonDesc from '../../../components/common/CommonDesc';
import showNotification from '../../../components/extras/showNotification';
import CarouselSlide from '../../../components/bootstrap/CarouselSlide';
import CarouselCaption from '../../../components/bootstrap/CarouselCaption';

const CarouselPage = () => {
	const _generalUsage = `
<Carousel
	items={ Array } // Example: [{src: '...', altText: '...', captionHeader: '...', captionText: '...',}, ...]
	activeItemIndex={ Number }
	id={ String }
	className={ String }
	isKeyboardControl={ Boolean }
	isHoverPause={ Boolean }
	isRide={ Boolean }
	interval={ String || Number || Boolean } // Examples: 5000, false
	mouseEnter={ Function }
	mouseLeave={ Function }
	isSlide={ Boolean }
	isDark={ Boolean }
	isEnableTouch={ Boolean }
	isFade={ Boolean }
	isIndicators={ Boolean }
	isControl={ Boolean }
	rounded={ Number } // 0, 1, 2, 3
	isFluid={ Boolean }
	height={ Number }
/>`;

	const _generalUsage2 = `
<Carousel
	items={ null }
	activeItemIndex={ Number }
	id={ String }
	className={ String }
	isKeyboardControl={ Boolean }
	isHoverPause={ Boolean }
	isRide={ Boolean }
	interval={ String || Number || Boolean } // Examples: 5000, false
	mouseEnter={ Function }
	mouseLeave={ Function }
	isSlide={ Boolean }
	isDark={ Boolean }
	isEnableTouch={ Boolean }
	isFade={ Boolean }
	isIndicators={ Boolean }
	isControl={ Boolean }
	rounded={ Number } // 0, 1, 2, 3
	isFluid={ Boolean }
	height={ Number }
>
	<CarouselSlide
		background={ String }>
		<CarouselCaption 
			captionHeader={ String }
			captionText={ String }
			className={ String } />
	</CarouselSlide>
	...
</Carousel>`;

	const items = [
		{
			src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
			altText: 'Slide 1',
			captionHeader: 'Slide 1 title',
			captionText: 'Slide 1 text',
		},
		{
			src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
			altText: 'Slide 2',
			captionHeader: 'Slide 2 title',
			captionText: 'Slide 2 text',
		},
		{
			src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
			altText: 'Slide 3',
			captionHeader: 'Slide 3 title',
			captionText: 'Slide 3 text',
		},
	];

	return (
		<PageWrapper title={componentsMenu.components.subMenu.carousel.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{
								title: componentsMenu.components.text,
								to: `/${componentsMenu.components.path}`,
							},
							{
								title: componentsMenu.components.subMenu.carousel.text,
								to: `/${componentsMenu.components.subMenu.carousel.path}`,
							},
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/docs/components-carousel--default' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					{/* General Usage */}
					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='Assignment'>
									<CardTitle>General Usage</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='row'>
									<div className='col-xl-6'>
										<CardCodeView className='h-100'>
											{_generalUsage}
										</CardCodeView>
									</div>
									<div className='col-xl-6'>
										<CardCodeView className='h-100'>
											{_generalUsage2}
										</CardCodeView>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Fingerprint' iconColor='info'>
									<CardTitle>activeItemIndex</CardTitle>
									<CardSubTitle>Carousel</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-carousel--default&args=activeItemIndex:1' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>activeItemIndex: PropTypes.number,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Carousel
									items={items}
									rounded={1}
									activeItemIndex={1}
									isRide={false}
								/>
								<CommonDesc className='mt-4'>
									You can enter the index number of the element you want to be at
									the beginning.
								</CommonDesc>
							</CardBody>
						</Card>
					</div>
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Keyboard' iconColor='secondary'>
									<CardTitle>isKeyboardControl</CardTitle>
									<CardSubTitle>Carousel</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-carousel--default&args=isKeyboardControl:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isKeyboardControl: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Carousel
									items={items}
									rounded={1}
									isKeyboardControl
									isRide={false}
								/>
								<CommonDesc className='mt-4'>
									If its value is set to true, it can be moved with the arrow keys
									on the keyboard.
								</CommonDesc>
							</CardBody>
						</Card>
					</div>

					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Mouse' iconColor='warning'>
									<CardTitle>isHoverPause</CardTitle>
									<CardSubTitle>Carousel</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-carousel--default&args=isHoverPause:true;isRide:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isHoverPause: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Carousel items={items} rounded={1} isHoverPause />
								<CommonDesc className='mt-4'>
									If its value is set to true, it will pause when hovering over
									it.
								</CommonDesc>
							</CardBody>
						</Card>
					</div>
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='DirectionsRun' iconColor='danger'>
									<CardTitle>isRide</CardTitle>
									<CardSubTitle>Carousel</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-carousel--default&args=isRide:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isRide: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-xl-6'>
										<Carousel items={items} rounded={1} />
									</div>
									<div className='col-xl-6'>
										<Carousel items={items} rounded={1} isRide={false} />
									</div>
								</div>
								<CommonDesc className='mt-4'>
									Autoplays the carousel after the user manually cycles the first
									item. If its value is set to "true", autoplays the carousel on
									load.
								</CommonDesc>
							</CardBody>
						</Card>
					</div>

					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Timer' iconColor='success'>
									<CardTitle>interval</CardTitle>
									<CardSubTitle>Carousel</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-carousel--default&args=interval:1000' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									interval: PropTypes.oneOfType([PropTypes.number,
									PropTypes.string, PropTypes.bool]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Carousel items={items} rounded={1} interval={1000} />
							</CardBody>
						</Card>
					</div>
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Mouse' iconColor='primary'>
									<CardTitle>mouseEnter & mouseEnter</CardTitle>
									<CardSubTitle>Carousel</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-carousel--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									<div>mouseEnter: PropTypes.func,</div>
									<div>mouseLeave: PropTypes.func,</div>
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Carousel
									items={items}
									rounded={1}
									mouseEnter={() => {
										showNotification('mouseEnter', 'Trigger mouseEnter');
									}}
									mouseLeave={() => {
										showNotification('mouseLeave', 'Trigger mouseLeave');
									}}
								/>
							</CardBody>
						</Card>
					</div>

					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ViewCarousel' iconColor='secondary'>
									<CardTitle>isSlide</CardTitle>
									<CardSubTitle>Carousel</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-carousel--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isSlide: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-lg-6'>
										<p className='lead fw-bold'>false</p>
										<Carousel items={items} rounded={1} isSlide={false} />
									</div>
									<div className='col-lg-6'>
										<p className='lead fw-bold'>true</p>
										<Carousel items={items} rounded={1} isSlide />
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Animation' iconColor='info'>
									<CardTitle>isFade</CardTitle>
									<CardSubTitle>Carousel</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-carousel--default&args=isFade:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isFade: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-lg-6'>
										<p className='lead fw-bold'>false</p>
										<Carousel items={items} rounded={1} isFade={false} />
									</div>
									<div className='col-lg-6'>
										<p className='lead fw-bold'>true</p>
										<Carousel items={items} rounded={1} isFade />
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='DarkMode' iconColor='warning'>
									<CardTitle>isDark</CardTitle>
									<CardSubTitle>Carousel</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-carousel--default&args=isDark:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isDark: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-lg-6'>
										<p className='lead fw-bold'>false</p>
										<Carousel items={items} rounded={1} isDark={false} />
									</div>
									<div className='col-lg-6'>
										<p className='lead fw-bold'>true</p>
										<Carousel items={items} rounded={1} isDark />
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Swipe' iconColor='success'>
									<CardTitle>isEnableTouch</CardTitle>
									<CardSubTitle>Carousel</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-carousel--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isEnableTouch: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-lg-6'>
										<p className='lead fw-bold'>false</p>
										<Carousel items={items} rounded={1} isEnableTouch={false} />
									</div>
									<div className='col-lg-6'>
										<p className='lead fw-bold'>true</p>
										<Carousel items={items} rounded={1} isEnableTouch />
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='LinearScale' iconColor='info'>
									<CardTitle>isIndicators</CardTitle>
									<CardSubTitle>Carousel</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-carousel--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isIndicators: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-lg-6'>
										<p className='lead fw-bold'>false</p>
										<Carousel items={items} rounded={1} isIndicators={false} />
									</div>
									<div className='col-lg-6'>
										<p className='lead fw-bold'>true</p>
										<Carousel items={items} rounded={1} isIndicators />
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ArrowForwardIos' iconColor='danger'>
									<CardTitle>isControl</CardTitle>
									<CardSubTitle>Carousel</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-carousel--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isControl: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-lg-6'>
										<p className='lead fw-bold'>false</p>
										<Carousel items={items} rounded={1} isControl={false} />
									</div>
									<div className='col-lg-6'>
										<p className='lead fw-bold'>true</p>
										<Carousel items={items} rounded={1} isControl />
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ContentCopy' iconColor='info'>
									<CardTitle>rounded</CardTitle>
									<CardSubTitle>Carousel</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-carousel--default&args=rounded:1' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									rounded: PropTypes.oneOf([0, 1, 2, 3]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									{[null, 0, 1, 2, 3].map((item) => (
										<div key={item || 'null'} className='col-md-6'>
											<p className='lead fw-bold'>
												{item || (item === 0 && '0') || 'null'}
											</p>
											<Carousel
												items={items}
												rounded={item}
												isControl={false}
											/>
										</div>
									))}
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Fingerprint' iconColor='info'>
									<CardTitle>background & children</CardTitle>
									<CardSubTitle>CarouselSlide</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									<div>background: PropTypes.string,</div>
									<div>children: PropTypes.node,</div>
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Carousel className='bg-light rounded-3' height={300}>
									<CarouselSlide>
										<div className='row align-items-center h-100'>
											<div
												className='col-6 carousel-slide-bg'
												style={{
													backgroundImage: `url(${items[0].src})`,
												}}
											/>
											<div className='col-6'>Sample Text</div>
										</div>
									</CarouselSlide>
									<CarouselSlide background={items[1].src}>
										<CarouselCaption
											captionText={items[1].captionText}
											captionHeader={items[1].captionHeader}
										/>
									</CarouselSlide>
								</Carousel>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default CarouselPage;
