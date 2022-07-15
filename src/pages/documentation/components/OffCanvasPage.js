import React, { useState } from 'react';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
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
import OffCanvas, {
	OffCanvasBody,
	OffCanvasHeader,
	OffCanvasTitle,
} from '../../../components/bootstrap/OffCanvas';
import Alert from '../../../components/bootstrap/Alert';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

const ModalPage = () => {
	const [offcanvasStatus, setOffcanvasStatus] = useState(false);

	const [backdropStatus, setBackdropStatus] = useState(true);
	const [bodyScrollStatus, setBodyScrollStatus] = useState(false);
	const [placement, setPlacement] = useState('end');

	const [headerClose, setHeaderClose] = useState(true);

	const initialStatus = () => {
		setBackdropStatus(true);
		setBodyScrollStatus(false);
		setPlacement('end');
		setHeaderClose(true);
	};

	const _generalUsage = `const [state, setState] = useState(false);`;

	const _generalUsage2 = `
<Button 
	onClick={ Function} // Example: () => setState(true)
	{...props}>
	...
</Button>

<OffCanvas
	tag={ String } // 'div' || 'section' || 'form'
	id={ String }
	titleId={ String }
	isBackdrop={ Boolean } 
	isBodyScroll={ Boolean } 
	placement={ String } // 'start || end || bottom'
	isOpen={ Boolean} // Example: state 
	setOpen={ Function } // Example: setState
	> 
	<OffCanvasHeader 
		className={ String }
		setOpen={ Function } // Example: setState
		>
		<OffCanvasTitle id={ String }>...</OffCanvasTitle>
	</OffCanvasHeader>
	<OffCanvasBody className={ String } {...props}>...</OffCanvasBody>
</OffCanvas>`;

	return (
		<PageWrapper title={componentsMenu.components.subMenu.offcanvas.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{
								title: componentsMenu.components.text,
								to: `/${componentsMenu.components.path}`,
							},
							{
								title: componentsMenu.components.subMenu.offcanvas.text,
								to: `/${componentsMenu.components.subMenu.offcanvas.path}`,
							},
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/docs/components-offcanvas--default' />
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
									<CardSubTitle>event</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-offcanvas--default' />
								</CardActions>
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
												setOffcanvasStatus(true);
											}}
											aria-controls='exampleOffcanvas'>
											Open offcanvas
										</Button>
									</div>
									<div className='col-auto'>
										<Icon
											icon='PersonAdd'
											className='mb-0 text-info h2'
											onClick={() => {
												initialStatus();
												setOffcanvasStatus(true);
											}}
											aria-controls='exampleOffcanvas'
										/>
									</div>
									<div className='col-auto'>
										<span
											onClick={() => {
												initialStatus();
												setOffcanvasStatus(true);
											}}
											role='presentation'
											aria-controls='exampleOffcanvas'>
											Open offcanvas
										</span>
									</div>
								</div>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									You can use any event to make the state <code>true</code>.
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>

					{/* isBackdrop */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='AutoFixHigh' iconColor='warning'>
									<CardTitle>isBackdrop</CardTitle>
									<CardSubTitle>OffCanvas</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-offcanvas--default&args=isBackdrop:false' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isBackdrop: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									<div className='col-auto'>
										<Button
											color='success'
											isLight
											icon='Send'
											onClick={() => {
												initialStatus();
												setOffcanvasStatus(true);
											}}
											aria-controls='exampleOffcanvas'>
											isBackdrop="true"
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='danger'
											isLight
											icon='Send'
											onClick={() => {
												initialStatus();
												setBackdropStatus(false);
												setOffcanvasStatus(true);
											}}
											aria-controls='exampleOffcanvas'>
											isBackdrop="false"
										</Button>
									</div>
								</div>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									The default value of isBackdrop is <code>"true"</code>. If you
									do not want it to put shadow on <code>body</code>, set its value
									to <code>"false"</code>.
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>
					{/* isBodyScroll */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Mouse' iconColor='secondary'>
									<CardTitle>isBodyScroll</CardTitle>
									<CardSubTitle>OffCanvas</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-offcanvas--default&args=isBodyScroll:true' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isBodyScroll: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									<div className='col-auto'>
										<Button
											color='success'
											isLight
											icon='Send'
											onClick={() => {
												initialStatus();
												setOffcanvasStatus(true);
											}}
											aria-controls='exampleOffcanvas'>
											isBodyScroll="false"
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='danger'
											isLight
											icon='Send'
											onClick={() => {
												initialStatus();
												setBodyScrollStatus(true);
												setOffcanvasStatus(true);
											}}
											aria-controls='exampleOffcanvas'>
											isBodyScroll="true"
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='warning'
											isLight
											icon='Send'
											onClick={() => {
												initialStatus();
												setBackdropStatus(false);
												setBodyScrollStatus(true);
												setOffcanvasStatus(true);
											}}
											aria-controls='exampleOffcanvas'>
											isBodyScroll="true" & isBackdrop="false"
										</Button>
									</div>
								</div>
							</CardBody>
							<CardFooter>
								<CommonDesc>You can enable scrolling except offcanvas.</CommonDesc>
							</CardFooter>
						</Card>
					</div>

					{/* placement */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ControlCamera'>
									<CardTitle>placement</CardTitle>
									<CardSubTitle>OffCanvas</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-offcanvas--default&args=placement:start' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									placement: PropTypes.oneOf(['start', 'top', 'end', 'bottom']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-auto'>
										<Button
											color='info'
											isLight
											icon='East'
											onClick={() => {
												initialStatus();
												setPlacement('start');
												setOffcanvasStatus(true);
											}}
											aria-controls='exampleOffcanvas'>
											placement="start"
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='warning'
											isLight
											icon='South'
											onClick={() => {
												initialStatus();
												setPlacement('top');
												setOffcanvasStatus(true);
											}}
											aria-controls='exampleOffcanvas'>
											placement="top"
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='success'
											isLight
											icon='North'
											onClick={() => {
												initialStatus();
												setPlacement('bottom');
												setOffcanvasStatus(true);
											}}
											aria-controls='exampleOffcanvas'>
											placement="bottom"
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='secondary'
											isLight
											icon='West'
											onClick={() => {
												initialStatus();
												setPlacement('end');
												setOffcanvasStatus(true);
											}}
											aria-controls='exampleOffcanvas'>
											placement="end"
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					{/* setOpen */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Close' iconColor='danger'>
									<CardTitle>setOpen</CardTitle>
									<CardSubTitle>OffCanvasHeader</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>setOpen: PropTypes.func,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-auto'>
										<Button
											color='success'
											isLight
											icon='Send'
											onClick={() => {
												initialStatus();
												setOffcanvasStatus(true);
											}}
											aria-controls='exampleOffcanvas'>
											isCloseButton="true"
										</Button>
									</div>
									<div className='col-auto'>
										<Button
											color='danger'
											isLight
											icon='Send'
											onClick={() => {
												initialStatus();
												setHeaderClose(false);
												setOffcanvasStatus(true);
											}}
											aria-controls='exampleOffcanvas'>
											isCloseButton="false"
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					<OffCanvas
						id='exampleOffcanvas'
						titleId='offcanvasExampleLabel'
						isOpen={offcanvasStatus}
						setOpen={setOffcanvasStatus}
						isBackdrop={backdropStatus}
						isBodyScroll={bodyScrollStatus}
						placement={placement}>
						<OffCanvasHeader setOpen={headerClose && setOffcanvasStatus}>
							<OffCanvasTitle id='offcanvasExampleLabel'>
								Notifications
							</OffCanvasTitle>
						</OffCanvasHeader>
						<OffCanvasBody>
							<Alert icon='ViewInAr' isLight color='info' className='flex-nowrap'>
								4 new components added.
							</Alert>
							<Alert icon='ThumbUp' isLight color='warning' className='flex-nowrap'>
								New products added to stock.
							</Alert>
							<Alert icon='Inventory2' isLight color='danger' className='flex-nowrap'>
								There are products that need to be packaged.
							</Alert>
							<Alert
								icon='BakeryDining'
								isLight
								color='success'
								className='flex-nowrap'>
								Your food order is waiting for you at the consultation.
							</Alert>
							<Alert icon='Escalator' isLight color='primary' className='flex-nowrap'>
								Escalator will turn off at 6:00 pm.
							</Alert>
						</OffCanvasBody>
					</OffCanvas>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ModalPage;
