import React, { useState } from 'react';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from '../../../components/bootstrap/Modal';
import Card, {
	CardActions,
	CardBody,
	CardCodeView,
	CardFooter,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Button from '../../../components/bootstrap/Button';
import Icon from '../../../components/icon/Icon';
import CommonDesc from '../../../components/common/CommonDesc';
import CommonHowToUse from '../../../components/common/CommonHowToUse';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

const ModalPage = () => {
	const [state, setState] = useState(false);

	const [staticBackdropStatus, setStaticBackdropStatus] = useState(false);
	const [scrollableStatus, setScrollableStatus] = useState(false);
	const [centeredStatus, setCenteredStatus] = useState(false);
	const [sizeStatus, setSizeStatus] = useState(null);
	const [fullScreenStatus, setFullScreenStatus] = useState(null);
	const [animationStatus, setAnimationStatus] = useState(true);
	const [longContentStatus, setLongContentStatus] = useState(false);
	const [headerCloseStatus, setHeaderCloseStatus] = useState(true);

	const initialStatus = () => {
		setStaticBackdropStatus(false);
		setScrollableStatus(false);
		setCenteredStatus(false);
		setSizeStatus(null);
		setFullScreenStatus(null);
		setAnimationStatus(true);
		setLongContentStatus(false);
		setHeaderCloseStatus(true);
	};

	const _content = longContentStatus ? (
		<>
			<p>
				Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
				facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
				vestibulum at eros.
			</p>
			<p>
				Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
				lacus vel augue laoreet rutrum faucibus dolor auctor.
			</p>
			<p>
				Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
				scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
				metus auctor fringilla.
			</p>
			<p>
				Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
				facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
				vestibulum at eros.
			</p>
			<p>
				Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
				lacus vel augue laoreet rutrum faucibus dolor auctor.
			</p>
			<p>
				Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
				scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
				metus auctor fringilla.
			</p>
			<p>
				Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
				facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
				vestibulum at eros.
			</p>
			<p>
				Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
				lacus vel augue laoreet rutrum faucibus dolor auctor.
			</p>
			<p>
				Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
				scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
				metus auctor fringilla.
			</p>
			<p>
				Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
				facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
				vestibulum at eros.
			</p>
			<p>
				Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
				lacus vel augue laoreet rutrum faucibus dolor auctor.
			</p>
			<p>
				Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
				scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
				metus auctor fringilla.
			</p>
			<p>
				Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
				facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
				vestibulum at eros.
			</p>
			<p>
				Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
				lacus vel augue laoreet rutrum faucibus dolor auctor.
			</p>
			<p>
				Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
				scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
				metus auctor fringilla.
			</p>
			<p>
				Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
				facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
				vestibulum at eros.
			</p>
			<p>
				Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
				lacus vel augue laoreet rutrum faucibus dolor auctor.
			</p>
			<p>
				Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
				scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
				metus auctor fringilla.
			</p>
		</>
	) : (
		<p>
			Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
			in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
		</p>
	);

	const _generalUsage = `const [state, setState] = useState(false);`;

	const _generalUsage2 = `
<Button 
	onClick={ Function} // Example: () => setState(true)
	{...props}>
	...
</Button>

<Modal 
	id={ String } 
	titleId={ String }
	isOpen={ Boolean } // Example: state
	setIsOpen={ Function } // Example: setState
	isStaticBackdrop={ Boolean } 
	isScrollable={ Boolean } 
	isCentered={ Boolean } 
	size={ String } // 'sm' || 'lg' || 'xl' 
	fullScreen={ Boolean || String } // true || 'sm' || 'md' || 'lg' || 'xl' || 'xxl' 
	isAnimation={ Boolean }>
	<ModalHeader 
		className={ String }
		setIsOpen={ Function} // Example: setState
		>
		<ModalTitle id={ String }>...</ModalTitle>
	</ModalHeader>
	<ModalBody className={ String } {...props}>...</ModalBody>
	<ModalFooter className={ String } {...props}>...</ModalFooter>
</Modal>`;

	return (
		<PageWrapper title={componentsMenu.components.subMenu.modal.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{
								title: componentsMenu.components.text,
								to: `/${componentsMenu.components.path}`,
							},
							{
								title: componentsMenu.components.subMenu.modal.text,
								to: `/${componentsMenu.components.subMenu.modal.path}`,
							},
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/docs/components-modal--default' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Assignment'>
									<CardTitle>General Usage</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<CardCodeView className='mb-4'>{_generalUsage}</CardCodeView>
								<CardCodeView>{_generalUsage2}</CardCodeView>
							</CardBody>
						</Card>
					</div>

					{/* onClick */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Fingerprint' iconColor='info'>
									<CardTitle>onClick</CardTitle>
									<CardSubTitle>Button, Icon or html</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-modal-triggers-button--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>onClick: PropTypes.func,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4 d-flex align-items-center'>
									<div className='col-auto'>
										<Button
											color='primary'
											isLight
											icon='Send'
											onClick={() => {
												initialStatus();
												setState(true);
											}}>
											Open Modal
										</Button>
									</div>
									<div className='col-auto'>
										<Icon
											icon='PersonAdd'
											className='mb-0 text-info h2'
											onClick={() => {
												initialStatus();
												setState(true);
											}}
										/>
									</div>
									<div className='col-auto'>
										<span
											role='presentation'
											onClick={() => {
												initialStatus();
												setState(true);
											}}>
											Open Modal
										</span>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					{/* isStaticBackdrop */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='AutoFixHigh' iconColor='warning'>
									<CardTitle>isStaticBackdrop</CardTitle>
									<CardSubTitle>Modal</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-modal--default&args=isStaticBackdrop:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isStaticBackdrop: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Button
									color='warning'
									isLight
									icon='Send'
									onClick={() => {
										initialStatus();
										setStaticBackdropStatus(true);
										setState(true);
									}}>
									Open Modal
								</Button>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									When backdrop is set to static, the modal will not close when
									clicking outside it. Click the button above to try it.
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>

					{/* isScrollable */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Mouse' iconColor='secondary'>
									<CardTitle>isScrollable</CardTitle>
									<CardSubTitle>Modal</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-modal--default&args=isScrollable:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isScrollable: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-auto'>
										<Button
											color='secondary'
											isLight
											icon='Send'
											onClick={() => {
												initialStatus();
												setLongContentStatus(true);
												setState(true);
											}}>
											Open Modal (isScrollable is false)
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='success'
											isLight
											icon='Send'
											onClick={() => {
												initialStatus();
												setLongContentStatus(true);
												setScrollableStatus(true);
												setState(true);
											}}>
											Open Modal (isScrollable is true)
										</Button>
									</div>
								</div>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									When modals become too long for the user’s viewport or device,
									they scroll independent of the page itself. Try the demo above
									to see what we mean.
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>
					{/* isCentered */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='CenterFocusStrong'>
									<CardTitle>isCentered</CardTitle>
									<CardSubTitle>Modal</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-modal--default&args=isCentered:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isCentered: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Button
									className='me-4'
									color='primary'
									isLight
									icon='Send'
									onClick={() => {
										initialStatus();
										setCenteredStatus(true);
										setState(true);
									}}>
									Open Modal
								</Button>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									Add isCentered to vertically center the modal.
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>

					{/* size */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Straighten' iconColor='danger'>
									<CardTitle>size</CardTitle>
									<CardSubTitle>Modal</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-modal--default&args=size:xl' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									size: PropTypes.oneOf(['sm', 'lg', 'xl']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-auto'>
										<Button
											color='info'
											isLight
											icon='Send'
											onClick={() => {
												initialStatus();
												setSizeStatus('sm');
												setState(true);
											}}>
											Open Modal (size is sm)
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='primary'
											isLight
											icon='Send'
											onClick={() => {
												initialStatus();
												setState(true);
											}}>
											Open Modal
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='success'
											isLight
											icon='Send'
											onClick={() => {
												initialStatus();
												setSizeStatus('lg');
												setState(true);
											}}>
											Open Modal (size is lg)
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='warning'
											isLight
											icon='Send'
											onClick={() => {
												initialStatus();
												setSizeStatus('xl');
												setState(true);
											}}>
											Open Modal (size is xl)
										</Button>
									</div>
								</div>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									When modals become too long for the user’s viewport or device,
									they scroll independent of the page itself. Try the demo above
									to see what we mean.
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>
					{/* fullScreen */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Fullscreen' iconColor='success'>
									<CardTitle>fullScreen</CardTitle>
									<CardSubTitle>Modal</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-modal--default&args=fullScreen:xxl' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									fullScreen: PropTypes.oneOfType([ PropTypes.oneOf(['sm', 'md',
									'lg', 'xl', 'xxl']), PropTypes.bool, ]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row row-cols-lg-3 row-cols-md-1 g-4'>
									<div className='col-auto'>
										<Button
											className='w-100'
											color='primary'
											isLight
											icon='Send'
											onClick={() => {
												initialStatus();
												setFullScreenStatus(true);
												setState(true);
											}}>
											Open Modal (fullScreen)
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											className='w-100'
											color='secondary'
											isLight
											icon='Send'
											onClick={() => {
												initialStatus();
												setFullScreenStatus('sm');
												setState(true);
											}}>
											Open Modal (fullScreen is sm)
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											className='w-100'
											color='info'
											isLight
											icon='Send'
											onClick={() => {
												initialStatus();
												setFullScreenStatus('md');
												setState(true);
											}}>
											Open Modal (fullScreen is md)
										</Button>
									</div>

									<div className='col-auto'>
										<Button
											className='w-100'
											color='success'
											isLight
											icon='Send'
											onClick={() => {
												initialStatus();
												setFullScreenStatus('lg');
												setState(true);
											}}>
											Open Modal (fullScreen is lg)
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											className='w-100'
											color='danger'
											isLight
											icon='Send'
											onClick={() => {
												initialStatus();
												setFullScreenStatus('xl');
												setState(true);
											}}>
											Open Modal (fullScreen is xl)
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											className='w-100'
											color='dark'
											isLight
											icon='Send'
											onClick={() => {
												initialStatus();
												setFullScreenStatus('xxl');
												setState(true);
											}}>
											Open Modal (fullScreen is xxl)
										</Button>
									</div>
								</div>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									Another override is the option to pop up a modal that covers the
									user viewport, available via modifier classes that are placed on
									a Modal
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>

					{/* isAnimation */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Animation' iconColor='info'>
									<CardTitle>isAnimation</CardTitle>
									<CardSubTitle>Modal</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-modal--default&args=isAnimation:false' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isAnimation: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Button
									color='info'
									isLight
									icon='Send'
									onClick={() => {
										initialStatus();
										setAnimationStatus(false);
										setState(true);
									}}>
									Open Modal
								</Button>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									For modals that simply appear rather than fade in to view, add
									the <code>isAnimation=&#123;false&#125;</code> props from your
									Modal component.
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>
					{/* setIsOpen */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Close' iconColor='danger'>
									<CardTitle>setIsOpen</CardTitle>
									<CardSubTitle>ModalHeader</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-modal-sub-component-modalheader--default&args=isCloseButton:false' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>setIsOpen: PropTypes.func,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-auto'>
										<Button
											onClick={() => {
												initialStatus();
												setState(true);
											}}
											color='success'
											isLight
											icon='Send'>
											Open Modal
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='danger'
											isLight
											icon='Send'
											onClick={() => {
												initialStatus();
												setHeaderCloseStatus(false);
												setState(true);
											}}>
											Open Modal (setIsOpen={`{null}`})
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
				</div>

				<Modal
					isOpen={state}
					setIsOpen={setState}
					titleId='exampleModalLabel'
					isStaticBackdrop={staticBackdropStatus}
					isScrollable={scrollableStatus}
					isCentered={centeredStatus}
					size={sizeStatus}
					fullScreen={fullScreenStatus}
					isAnimation={animationStatus}>
					<ModalHeader setIsOpen={headerCloseStatus ? setState : null}>
						<ModalTitle id='exampleModalLabel'>Modal title</ModalTitle>
					</ModalHeader>
					<ModalBody>{_content}</ModalBody>
					<ModalFooter>
						<Button
							color='info'
							isOutline
							className='border-0'
							onClick={() => setState(false)}>
							Close
						</Button>
						<Button color='info' icon='Save'>
							Save changes
						</Button>
					</ModalFooter>
				</Modal>
			</Page>
		</PageWrapper>
	);
};

export default ModalPage;
