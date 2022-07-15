import React from 'react';
import { NavLink } from 'react-router-dom';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Card, {
	CardActions,
	CardBody,
	CardCodeView,
	CardFooter,
	CardFooterLeft,
	CardFooterRight,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTabItem,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Pose from '../../../assets/img/pose.png';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Button, { ButtonGroup } from '../../../components/bootstrap/Button';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import Icon from '../../../components/icon/Icon';
import CommonHowToUse from '../../../components/common/CommonHowToUse';
import CommonDesc from '../../../components/common/CommonDesc';
import Popovers from '../../../components/bootstrap/Popovers';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

const CardPage = () => {
	const _generalUsage = `
<Card
	tag={ String }
	className={ String }
	shadow={ String } // null || 'none' || 'sm' || 'md' || 'lg' || '3d'
	borderSize={ Number } // null || 0 || 1 || 2 || 3 || 4 || 5
	borderColor={ String } // null || 'primary' || 'secondary' || 'success' || 'info' || 'warning' || 'danger' || 'light' || 'dark'
	stretch={ Boolean || String } // false || true || 'semi'
	hasTab={ Boolean }
	tabButtonColor={ String } // 'primary' || 'secondary' || 'success' || 'info' || 'warning' || 'danger' || 'light' || 'dark'
	tabBodyClassName={ String }
	{...props}>
	
	{
		// If hasTab is false
	}
	<CardHeader
		tag={ String }
		className={ String }
		size={ String } // null || 'sm' || 'lg'
		borderSize={ Number } // null || 0 || 1 || 2 || 3 || 4 || 5
		borderColor={ String } // null || 'primary' || 'secondary' || 'success' || 'info' || 'warning' || 'danger' || 'light' || 'dark'
		{...props}>
		
		<CardLabel
			tag={ String }
			className={ String }
			icon={ String }
			iconColor={ String } // null || 'primary' || 'secondary' || 'success' || 'info' || 'warning' || 'danger' || 'light' || 'dark'
			>
			
			<CardTitle
				tag={ String }
				className={ String }
				{...props}>
				... <small>...</small>
			</CardTitle>
			<CardSubTitle
				tag={ String }
				className={ String }
				{...props}>
				...
			</CardSubTitle>
			
		</CardLabel>
		<CardActions
			tag={ String }
			className={ String }
			{...props}>
			...	{ // Button, Dropdown etc. }
		</CardActions>
		or ...
		
	</CardHeader>
	{ // You can use more than one }
	
	<CardBody
		tag={ String }
		className={ String }
		{...props}>
		...
	</CardBody>
	
	<CardFooter
		tag={ String }
		className={ String }
		size={ String } // null || 'sm' || 'lg'
		borderSize={ Number } // null || 0 || 1 || 2 || 3 || 4 || 5
		borderColor={ String } // null || 'primary' || 'secondary' || 'success' || 'info' || 'warning' || 'danger' || 'light' || 'dark'
		{...props}>
		
		<CardFooterLeft
			tag={ String }
			className={ String }
			{...props}>
			...	{ // Button, Dropdown etc. }
		</CardFooterLeft>
		<CardFooterRight
			tag={ String }
			className={ String }
			{...props}>
			...	{ // Button, Dropdown etc. }
		</CardFooterRight>
		or ...
	</CardFooter>
	{ // You can use more than one }
	
	{
		// If hasTab is true
	}
	<CardTabItem 
		id={ String }
		title={ String }
		icon={ String }
		>
		...
	</CardTabItem>
</Card>`;

	const shadows = [null, 'none', 'sm', 'md', 'lg'];
	const borders = [null, 0, 1, 2, 3, 4, 5];
	const colors = [
		null,
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
		'light',
		'dark',
	];
	const size = ['sm', null, 'lg'];
	const sampleIcons = [
		'Alarm',
		'DataExploration',
		'NightsStayTwoTOne',
		'Style',
		'Celebration',
		'Vibration',
		'StoreMallDirectory',
		'VerifiedUser',
		'QrCodeScanner',
	];

	return (
		<PageWrapper title={componentsMenu.components.subMenu.card.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{
								title: componentsMenu.components.text,
								to: `/${componentsMenu.components.path}`,
							},
							{
								title: componentsMenu.components.subMenu.card.text,
								to: `/${componentsMenu.components.subMenu.card.path}`,
							},
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<Dropdown>
						<DropdownToggle>
							<Button color='info' isLight icon='CustomReact'>
								Quick Links
							</Button>
						</DropdownToggle>
						<DropdownMenu isAlignmentEnd>
							<DropdownItem isHeader>Header</DropdownItem>
							<DropdownItem>
								<a href='#card-header'>CardHeader</a>
							</DropdownItem>
							<DropdownItem>
								<a href='#card-cardLabel'>CardLabel</a>
							</DropdownItem>
							<DropdownItem>
								<a href='#card-cardHeader-inner'>CardTitle</a>
							</DropdownItem>
							<DropdownItem>
								<a href='#card-cardHeader-inner'>CardSubTitle</a>
							</DropdownItem>
							<DropdownItem>
								<a href='#card-cardHeader-inner'>CardActions</a>
							</DropdownItem>
							<DropdownItem isDivider />
							<DropdownItem isHeader>Footer</DropdownItem>
							<DropdownItem>
								<a href='#card-cardFooter'>CardFooter</a>
							</DropdownItem>
							<DropdownItem>
								<a href='#card-cardFooter-inner'>CardFooterLeft</a>
							</DropdownItem>
							<DropdownItem>
								<a href='#card-cardFooter-inner'>CardFooterRight</a>
							</DropdownItem>
							<DropdownItem isDivider />
							<DropdownItem>
								<a href='#card-hasTab'>hasTab</a>
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
					<CommonStoryBtn to='/docs/components-card--card-template' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					{/* General Usage */}
					<div className='col-12' data-tour='card'>
						<Card>
							<CardHeader>
								<CardLabel icon='Assignment'>
									<CardTitle>General Usage</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<CardCodeView>{_generalUsage}</CardCodeView>
							</CardBody>
						</Card>
					</div>

					{/*	shadow */}
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ContentCopy' iconColor='dark'>
									<CardTitle>shadow</CardTitle>
									<CardSubTitle>Card</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/docs/components-card-props-shadow--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									shadow: PropTypes.oneOf(['none', 'sm', 'md', 'lg', '3d'])
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									{shadows.map((item) => (
										<div key={item} className='col-lg-6'>
											<Card shadow={item} className='mb-0'>
												<CardHeader>
													<CardLabel>
														<CardTitle>
															shadow <small>{item}</small>
														</CardTitle>
														<CardSubTitle>Card</CardSubTitle>
													</CardLabel>
												</CardHeader>
												<CardBody>
													Lorem ipsum dolor sit amet, consectetur
													adipiscing elit. Nunc ut tempus arcu.
												</CardBody>
											</Card>
										</div>
									))}
								</div>
							</CardBody>
						</Card>
					</div>
					{/*	shadow */}
					<div className='col-xl-6'>
						<CardHeader className='px-0'>
							<CardLabel icon='ContentCopy' iconColor='dark'>
								<CardTitle>
									shadow <small>Out of the card</small>
								</CardTitle>
								<CardSubTitle>Card</CardSubTitle>
							</CardLabel>
							<CardActions>
								<CommonStoryBtn to='/docs/components-card-props-shadow--default' />
							</CardActions>
						</CardHeader>
						<CardHeader className='px-0'>
							<CommonHowToUse>
								shadow: PropTypes.oneOf(['none', 'sm', 'md', 'lg', '3d'])
							</CommonHowToUse>
						</CardHeader>
						<CardBody className='px-0 pb-0'>
							<div className='row'>
								{shadows.map((item) => (
									<div key={item} className='col-lg-6'>
										<Card shadow={item}>
											<CardHeader>
												<CardLabel>
													<CardTitle>
														shadow <small>{item}</small>
													</CardTitle>
													<CardSubTitle>Card</CardSubTitle>
												</CardLabel>
											</CardHeader>
											<CardBody>
												Lorem ipsum dolor sit amet, consectetur adipiscing
												elit. Nunc ut tempus arcu.
											</CardBody>
										</Card>
									</div>
								))}
							</div>
						</CardBody>
					</div>

					{/*	borderSize */}
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='BorderStyle'>
									<CardTitle>borderSize</CardTitle>
									<CardSubTitle>Card</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/docs/components-card-props-bordersize--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									borderSize: PropTypes.oneOf([null, 0, 1, 2, 3, 4, 5])
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									{borders.map((item) => (
										<div key={item} className='col-md-4'>
											<Card
												shadow='none'
												borderSize={item}
												stretch
												className='mb-0'>
												<CardHeader>
													<CardLabel>
														<CardTitle>
															borderSize{' '}
															<small>
																{item === null ? 'null' : item}
															</small>
														</CardTitle>
														<CardSubTitle>Card</CardSubTitle>
													</CardLabel>
												</CardHeader>
												<CardBody>
													Lorem ipsum dolor sit amet, consectetur
													adipiscing elit. Nunc ut tempus arcu.
												</CardBody>
											</Card>
										</div>
									))}
								</div>
							</CardBody>
						</Card>
					</div>
					{/*	borderColor */}
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Palette' iconColor='success'>
									<CardTitle>borderColor</CardTitle>
									<CardSubTitle>Card</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/docs/components-card-props-bordercolor--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									borderColor: PropTypes.oneOf([ null, 'primary', 'secondary',
									'success', 'info', 'warning', 'danger', 'light', 'dark', ]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									{colors.map((item) => (
										<div key={item} className='col-md-4'>
											<Card
												shadow='none'
												borderSize={1}
												borderColor={item}
												stretch
												className='mb-0'>
												<CardHeader>
													<CardLabel>
														<CardTitle>
															borderColor{' '}
															<small>
																{item === null ? 'null' : item}
															</small>
														</CardTitle>
														<CardSubTitle>Card</CardSubTitle>
													</CardLabel>
												</CardHeader>
												<CardBody>
													Lorem ipsum dolor sit amet, consectetur
													adipiscing elit. Nunc ut tempus arcu.
												</CardBody>
											</Card>
										</div>
									))}
								</div>
							</CardBody>
						</Card>
					</div>

					{/* stretch */}
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ViewStream' iconColor='warning'>
									<CardTitle>
										stretch <small>true</small>
									</CardTitle>
									<CardSubTitle>Card</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-card-props-stretch--stretch' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									stretch: PropTypes.oneOfType([PropTypes.bool,
									PropTypes.oneOf(['full', 'semi'])]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
									dignissim sapien ac varius elementum. Phasellus interdum
									bibendum sodales. Proin augue lacus, bibendum non maximus et,
									auctor at mi. Cras condimentum turpis et ultricies rhoncus. Nunc
									consectetur dui vitae nisi facilisis lacinia. Proin ultrices vel
									dui vel rutrum. Donec fringilla mi eu convallis elementum. Donec
									maximus velit eu scelerisque interdum. Vivamus purus risus,
									lacinia eu lectus ut, placerat egestas tellus. Cras fermentum
									dapibus laoreet. Pellentesque eu diam sit amet neque posuere
									porta. Aenean quis odio eu augue semper consequat quis ut lacus.
								</p>
								<p>
									Ut ac eros faucibus, iaculis lacus at, volutpat sem. Etiam ac
									ullamcorper sem. Donec turpis dolor, suscipit vehicula magna
									rhoncus, vestibulum pellentesque nulla. Ut id turpis sem.
									Curabitur id hendrerit nisi. Vestibulum semper velit et finibus
									bibendum. Curabitur a nibh suscipit augue convallis ultrices.
									Quisque ornare magna vel aliquet imperdiet. Cras urna massa,
									congue sed magna eget, mollis sagittis ante. Praesent dapibus
									risus feugiat, sodales nisi vel, venenatis turpis. Aliquam nec
									elit a sem tincidunt sollicitudin.
								</p>
								<p>
									Sed dignissim a ante in aliquet. Morbi arcu sem, egestas ac
									varius ac, efficitur sed elit. Etiam porttitor neque sed urna
									sollicitudin placerat. Ut dui mauris, semper vel sodales vel,
									molestie non odio. Mauris a neque lacinia, molestie quam ut,
									egestas mi. Proin enim diam, interdum et dapibus vitae,
									elementum quis massa. Phasellus nisl turpis, rhoncus nec massa
									id, cursus fermentum erat. Curabitur maximus ullamcorper metus,
									ut efficitur orci accumsan a. Nulla eget laoreet ligula. Class
									aptent taciti sociosqu ad litora torquent per conubia nostra,
									per inceptos himenaeos.
								</p>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									<Popovers trigger='hover' desc={<code>boolean</code>}>
										<code>true</code>
									</Popovers>{' '}
									or{' '}
									<Popovers trigger='hover' desc={<code>string</code>}>
										<code>full</code>
									</Popovers>{' '}
									can be used to make full.
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>
					<div className='col-xl-6'>
						<Card stretch='semi'>
							<CardHeader>
								<CardLabel icon='ViewStream' iconColor='warning'>
									<CardTitle>
										stretch <small>semi</small>
									</CardTitle>
									<CardSubTitle>Card</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-card-props-stretch--stretch-semi' />
								</CardActions>
							</CardHeader>
							<CardBody>
								<p>
									Suspendisse vel diam eget eros ullamcorper dignissim. Quisque
									quis urna eu enim pharetra interdum. Phasellus non porta neque.
									Nulla non urna venenatis purus rhoncus eleifend ac in diam.
									Aliquam convallis sit amet metus at accumsan. Lorem ipsum dolor
									sit amet, consectetur adipiscing elit. Praesent tincidunt augue
									placerat eros fermentum ullamcorper.
								</p>
							</CardBody>
						</Card>
						<Card stretch='semi'>
							<CardHeader>
								<CardLabel icon='ViewStream' iconColor='warning'>
									<CardTitle>
										stretch <small>semi</small>
									</CardTitle>
									<CardSubTitle>Card</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Proin in libero ut massa consequat viverra sit amet eget nisl.
									Aenean leo mauris, mattis id sollicitudin eu, lobortis quis
									augue. Pellentesque volutpat aliquam erat sit amet posuere.
									Morbi viverra, tellus in mattis eleifend, purus purus tincidunt
									elit, id ultrices erat quam at lorem. Donec feugiat ut arcu
									fringilla scelerisque. Cras rhoncus velit eu ex pretium, a
									pharetra tellus ultrices. Nullam id elementum lectus. Aliquam
									non ex sit amet risus volutpat venenatis. Vivamus tincidunt
									consectetur nibh, a efficitur enim cursus vel. Praesent libero
									metus, aliquam ut ultricies a, lobortis ac neque. Vestibulum
									euismod lobortis lectus at posuere. Etiam tristique diam id
									mauris dictum euismod. Fusce ac imperdiet neque.
								</p>
							</CardBody>
						</Card>
					</div>

					<div className='col-12 mt-5 mb-3'>
						<h2 id='card-header' className='scroll-margin'>
							CardHeader
						</h2>
					</div>
					{/* header -> size */}
					{size.map((item) => (
						<div key={item} className='col-md-4'>
							<Card stretch>
								<CardHeader size={item} borderSize={1}>
									<CardLabel icon='TableChart' iconColor='info'>
										<CardTitle>
											size <small>{item}</small>
										</CardTitle>
										<CardSubTitle>CardHeader</CardSubTitle>
									</CardLabel>
									{item && (
										<CardActions>
											<CommonStoryBtn
												to={`/story/components-card-sub-component-cardheader-props-size--${item}`}
											/>
										</CardActions>
									)}
								</CardHeader>
								{item === 'sm' && (
									<CardHeader>
										<CommonHowToUse>
											size: PropTypes.oneOf([null, 'sm', 'lg']),
										</CommonHowToUse>
									</CardHeader>
								)}
								<CardBody>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Aenean dignissim sapien ac varius elementum. Phasellus
										interdum bibendum sodales. Proin augue lacus, bibendum non
										maximus et, auctor at mi. Cras condimentum turpis et
										ultricies rhoncus.
									</p>
								</CardBody>
							</Card>
						</div>
					))}

					{/* header -> borderSize */}
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='BorderStyle' iconColor='success'>
									<CardTitle>borderSize</CardTitle>
									<CardSubTitle>CardHeader</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-card-sub-component-cardheader-props-bordersize--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									borderSize: PropTypes.oneOf([null, 0, 1, 2, 3, 4, 5])
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									{borders.map((item) => (
										<div key={item} className='col-md-4'>
											<Card stretch className='mb-0'>
												<CardHeader borderSize={item}>
													<CardLabel>
														<CardTitle>
															borderSize{' '}
															<small>
																{item === null ? 'null' : item}
															</small>
														</CardTitle>
														<CardSubTitle>CardHeader</CardSubTitle>
													</CardLabel>
												</CardHeader>
												<CardBody>
													Lorem ipsum dolor sit amet, consectetur
													adipiscing elit. Nunc ut tempus arcu.
												</CardBody>
											</Card>
										</div>
									))}
								</div>
							</CardBody>
						</Card>
					</div>
					{/* header -> borderColor */}
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Palette' iconColor='info'>
									<CardTitle>borderColor</CardTitle>
									<CardSubTitle>CardHeader</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-card-sub-component-cardheader-props-bordercolor--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									borderColor: PropTypes.oneOf([ null, 'primary', 'secondary',
									'success', 'info', 'warning', 'danger', 'light', 'dark', ]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									{colors.map((item) => (
										<div key={item} className='col-md-4'>
											<Card stretch className='mb-0'>
												<CardHeader borderSize={3} borderColor={item}>
													<CardLabel>
														<CardTitle>
															borderColor{' '}
															<small>
																{item === null ? 'null' : item}
															</small>
														</CardTitle>
														<CardSubTitle>CardHeader</CardSubTitle>
													</CardLabel>
												</CardHeader>
												<CardBody>
													Lorem ipsum dolor sit amet, consectetur
													adipiscing elit. Nunc ut tempus arcu.
												</CardBody>
											</Card>
										</div>
									))}
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-12 mt-5 mb-3'>
						<h3 id='card-cardLabel' className='scroll-margin'>
							CardLabel
						</h3>
					</div>
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='BorderStyle' iconColor='danger'>
									<CardTitle>icon</CardTitle>
									<CardSubTitle>CardLabel</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-card-sub-component-cardheader-sub-component-cardlabel-props-icon--clock' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>icon: PropTypes.string,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									{sampleIcons.map((item) => (
										<div key={item} className='col-md-4'>
											<Card stretch className='mb-0'>
												<CardHeader>
													<CardLabel icon={item}>
														<CardTitle>
															icon <small>{item}</small>
														</CardTitle>
														<CardSubTitle>CardLabel</CardSubTitle>
													</CardLabel>
												</CardHeader>
												<CardBody>
													<p>
														Lorem ipsum dolor sit amet, consectetur
														adipiscing elit.
													</p>
												</CardBody>
											</Card>
										</div>
									))}
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Palette' iconColor='secondary'>
									<CardTitle>iconColor</CardTitle>
									<CardSubTitle>CardLabel</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-card-sub-component-cardheader-sub-component-cardlabel-props-iconcolor--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									iconColor: PropTypes.oneOf([ null, 'primary', 'secondary',
									'success', 'info', 'warning', 'danger', 'light', 'dark', ]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									{colors.map((item, index) => (
										<div key={item} className='col-md-4'>
											<Card stretch className='mb-0'>
												<CardHeader>
													<CardLabel
														icon={sampleIcons[index]}
														iconColor={item || 'primary'}>
														<CardTitle>
															iconColor <small>{item}</small>
														</CardTitle>
														<CardSubTitle>CardLabel</CardSubTitle>
													</CardLabel>
												</CardHeader>
												<CardBody>
													<p>
														Lorem ipsum dolor sit amet, consectetur
														adipiscing elit.
													</p>
												</CardBody>
											</Card>
										</div>
									))}
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-12 mt-5 mb-3'>
						<h3 id='card-cardHeader-inner' className='scroll-margin'>
							CardHeader inner components
						</h3>
					</div>
					<div className='col-xl-4'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='FormatSize' iconColor='primary'>
									<CardTitle>children</CardTitle>
									<CardSubTitle>CardTitle</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-card-sub-component-cardheader-sub-component-cardlabel-sub-component-cardtitle--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									children: PropTypes.node.isRequired,
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<h4 className='ps-4'>Example:</h4>
								<Card>
									<CardHeader>
										<CardLabel>
											<CardTitle>
												This is a card title{' '}
												<small>This is a small card title</small>
											</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Quisque volutpat sodales purus, nec pharetra turpis
											imperdiet quis.
										</p>
									</CardBody>
								</Card>
							</CardBody>
						</Card>
					</div>
					<div className='col-xl-4'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='FormatSize' iconColor='primary'>
									<CardTitle>children</CardTitle>
									<CardSubTitle>CardSubTitle</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-card-sub-component-cardheader-sub-component-cardlabel-sub-component-cardsubtitle--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									children: PropTypes.node.isRequired,
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<h4 className='ps-4'>Example:</h4>
								<Card>
									<CardHeader>
										<CardLabel>
											<CardSubTitle>This is card sub title</CardSubTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Quisque volutpat sodales purus, nec pharetra turpis
											imperdiet quis.
										</p>
									</CardBody>
								</Card>
							</CardBody>
						</Card>
					</div>
					<div className='col-xl-4'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Bolt' iconColor='warning'>
									<CardTitle>children</CardTitle>
									<CardSubTitle>CardActions</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn
										to='/story/components-card-sub-component-cardheader-sub-component-cardactions--default'
										color='success'
									/>
									<ButtonGroup>
										<Dropdown>
											<DropdownToggle hasIcon={false}>
												<Button
													color='success'
													isLight
													hoverShadow='default'
													icon='MoreVert'
												/>
											</DropdownToggle>
											<DropdownMenu isAlignmentEnd>
												<DropdownItem isHeader>Other Actions</DropdownItem>
												<DropdownItem>
													<NavLink to='/components/popovers'>
														<Icon icon='Send' /> Popover
													</NavLink>
												</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</ButtonGroup>
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									children: PropTypes.node.isRequired,
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
									volutpat sodales purus, nec pharetra turpis imperdiet quis.
								</p>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									You can use Button, Dropdown etc. in CardActions.
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>

					<div className='col-12 mt-5 mb-3'>
						<h3 id='card-cardFooter' className='scroll-margin'>
							CardFooter
						</h3>
					</div>
					{/* footer -> size */}
					{size.map((item) => (
						<div key={item} className='col-lg-4'>
							<Card stretch>
								<CardHeader>
									<CardLabel icon='Straighten' iconColor='info'>
										<CardTitle>
											size <small>{item}</small>
										</CardTitle>
										<CardSubTitle>CardFooter</CardSubTitle>
									</CardLabel>
									{item && (
										<CardActions>
											<CommonStoryBtn
												to={`/story/components-card-sub-component-cardfooter-props-size--${item}`}
											/>
										</CardActions>
									)}
								</CardHeader>
								{item === 'sm' && (
									<CardHeader>
										<CommonHowToUse>
											size: PropTypes.oneOf([null, 'sm', 'lg']),
										</CommonHowToUse>
									</CardHeader>
								)}
								<CardBody>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Aenean dignissim sapien ac varius elementum. Phasellus
										interdum bibendum sodales. Proin augue lacus, bibendum non
										maximus et, auctor at mi. Cras condimentum turpis et
										ultricies rhoncus.
									</p>
								</CardBody>
								<CardFooter borderSize={1} size={item}>
									<CardFooterLeft>
										<Button color='primary' isLink>
											Button
										</Button>
									</CardFooterLeft>
									<CardFooterRight>
										<Button color='primary' isOutline>
											Button
										</Button>
									</CardFooterRight>
								</CardFooter>
							</Card>
						</div>
					))}
					{/* footer -> borderSize */}
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='BorderStyle' iconColor='success'>
									<CardTitle>borderSize</CardTitle>
									<CardSubTitle>CardFooter</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-card-sub-component-cardfooter-props-bordersize--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									borderSize: PropTypes.oneOf([null, 0, 1, 2, 3, 4, 5])
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									{borders.map((item) => (
										<div key={item} className='col-md-4'>
											<Card stretch className='mb-0'>
												<CardHeader>
													<CardLabel>
														<CardTitle>
															borderSize{' '}
															<small>
																{item === null ? 'null' : item}
															</small>
														</CardTitle>
														<CardSubTitle>CardFooter</CardSubTitle>
													</CardLabel>
												</CardHeader>
												<CardBody>
													Lorem ipsum dolor sit amet, consectetur
													adipiscing elit. Nunc ut tempus arcu.
												</CardBody>
												<CardFooter borderSize={item}>
													<CardFooterLeft>
														<Button color='primary' isLink>
															Button
														</Button>
													</CardFooterLeft>
													<CardFooterRight>
														<Button color='primary' isOutline>
															Button
														</Button>
													</CardFooterRight>
												</CardFooter>
											</Card>
										</div>
									))}
								</div>
							</CardBody>
						</Card>
					</div>
					{/* footer -> borderColor */}
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Palette' iconColor='info'>
									<CardTitle>borderColor</CardTitle>
									<CardSubTitle>CardHeader</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-card-sub-component-cardfooter-props-bordercolor--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									borderColor: PropTypes.oneOf([ null, 'primary', 'secondary',
									'success', 'info', 'warning', 'danger', 'light', 'dark', ]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									{colors.map((item) => (
										<div key={item} className='col-md-4'>
											<Card stretch className='mb-0'>
												<CardHeader>
													<CardLabel>
														<CardTitle>
															borderColor{' '}
															<small>
																{item === null ? 'null' : item}
															</small>
														</CardTitle>
														<CardSubTitle>CardFooter</CardSubTitle>
													</CardLabel>
												</CardHeader>
												<CardBody>
													Lorem ipsum dolor sit amet, consectetur
													adipiscing elit. Nunc ut tempus arcu.
												</CardBody>
												<CardFooter borderSize={3} borderColor={item}>
													<CardFooterLeft>
														<Button color='primary' isLink>
															Button
														</Button>
													</CardFooterLeft>
													<CardFooterRight>
														<Button color='primary' isOutline>
															Button
														</Button>
													</CardFooterRight>
												</CardFooter>
											</Card>
										</div>
									))}
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-12 mt-5 mb-3'>
						<h3 id='card-cardFooter-inner' className='scroll-margin'>
							CardFooter inner components
						</h3>
					</div>
					<div className='col-md-4'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ViewStream' iconColor='secondary'>
									<CardTitle>children</CardTitle>
									<CardSubTitle>CardFooterLeft</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-card-sub-component-cardfooter-sub-component-cardfooterleft--default' />
								</CardActions>
							</CardHeader>
							<CardFooter>
								<CardFooterLeft>
									<Button color='primary' isLink>
										Button
									</Button>
								</CardFooterLeft>
							</CardFooter>
						</Card>
					</div>
					<div className='col-md-4'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ViewStream' iconColor='secondary'>
									<CardTitle>children</CardTitle>
									<CardSubTitle>CardFooterLeft</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-card-sub-component-cardfooter-sub-component-cardfooterright--default' />
								</CardActions>
							</CardHeader>
							<CardFooter>
								<CardFooterRight>
									<Button color='primary' isOutline>
										Button
									</Button>
								</CardFooterRight>
							</CardFooter>
						</Card>
					</div>
					<div className='col-md-4'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ViewStream' iconColor='secondary'>
									<CardTitle>children</CardTitle>
									<CardSubTitle>CardFooterLeft & CardFooterRight</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardFooter>
								<CardFooterLeft>
									<Button color='primary' isLink>
										Button
									</Button>
								</CardFooterLeft>
								<CardFooterRight>
									<Button color='primary' isOutline>
										Button
									</Button>
								</CardFooterRight>
							</CardFooter>
						</Card>
					</div>

					<div className='col-12 mt-5 mb-3'>
						<h3 id='card-hasTab' className='scroll-margin'>
							Card hasTab
						</h3>
					</div>
					<div className='col-xl-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ViewColumn'>
									<CardTitle>hasTab & tabButtonColor</CardTitle>
									<CardSubTitle>Card</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-card-props-hastab--default' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									<div>hasTab: PropTypes.bool,</div>
									<div>
										tabButtonColor: PropTypes.oneOf([ 'primary', 'secondary',
										'success', 'info', 'warning', 'danger', 'light', 'dark', ]),
									</div>
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Card hasTab tabButtonColor='info'>
									<CardTabItem
										id='tab-item-1'
										title='Tab Item 1'
										icon='Architecture'>
										<Card shadow='none' className='border-0'>
											<CardHeader className='px-0 pt-0'>
												<CardLabel icon='Engineering' iconColor='danger'>
													<CardTitle>
														Title <small>Small</small>
													</CardTitle>
													<CardSubTitle>Subtitle</CardSubTitle>
												</CardLabel>
												<CardActions>
													<Button
														color='danger'
														isLight
														hoverShadow='default'>
														Button
													</Button>
													<ButtonGroup>
														<Dropdown>
															<DropdownToggle hasIcon={false}>
																<Button
																	color='danger'
																	isLight
																	hoverShadow='default'
																	icon='MoreVert'
																/>
															</DropdownToggle>
															<DropdownMenu isAlignmentEnd>
																<DropdownItem isHeader>
																	Other Actions
																</DropdownItem>
																<DropdownItem>
																	<NavLink to='/components/popovers'>
																		<Icon icon='Send' /> Popover
																	</NavLink>
																</DropdownItem>
															</DropdownMenu>
														</Dropdown>
													</ButtonGroup>
												</CardActions>
											</CardHeader>
											<CardBody className='px-0'>
												<div className='row'>
													<div className='col-md-4'>
														<img
															className='w-100'
															src={Pose}
															alt='Pose'
														/>
													</div>
													<div className='col-md-8'>
														<p>
															Lorem ipsum dolor sit amet, consectetur
															adipiscing elit. Nunc ut tempus arcu.
															Vivamus cursus tortor vel gravida
															tincidunt. Sed feugiat turpis tellus, et
															ultricies arcu scelerisque ac. Mauris
															tortor metus, pulvinar ac leo eget,
															iaculis consectetur nibh. Mauris
															fringilla odio at malesuada aliquam.
															Proin tincidunt enim a luctus egestas.
														</p>
													</div>
												</div>
											</CardBody>
											<CardFooter className='px-0 pb-0'>
												<CardFooterLeft>
													<Button
														color='info'
														isOutline
														icon='DocumentScanner'>
														Action
													</Button>
												</CardFooterLeft>
												<CardFooterRight>
													<Button color='info' icon='CleaningServices'>
														Other Action
													</Button>
												</CardFooterRight>
											</CardFooter>
										</Card>
									</CardTabItem>
									<CardTabItem id='tab-item-2' title='Tab Item 2' icon='Archive'>
										<div className='row'>
											<div className='col-md-4'>
												<img className='w-100' src={Pose} alt='Pose' />
											</div>
											<div className='col-md-8'>
												Lorem ipsum dolor sit amet, consectetur adipiscing
												elit. Nunc ut tempus arcu. Vivamus cursus tortor vel
												gravida tincidunt. Sed feugiat turpis tellus, et
												ultricies arcu scelerisque ac. Mauris tortor metus,
												pulvinar ac leo eget, iaculis consectetur nibh.
												Mauris fringilla odio at malesuada aliquam. Proin
												tincidunt enim a luctus egestas.
											</div>
										</div>
									</CardTabItem>
								</Card>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									If hasTab is active, only <code>CardTabItems</code> should be
									used as <b>children</b> for the <code>Card</code>.
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>
					<div className='col-xl-6'>
						<Card stretch hasTab>
							<CardTabItem id='id' title='id' icon='Fingerprint'>
								<CardHeader className='px-0'>
									<CardLabel icon='Fingerprint' iconColor='danger'>
										<CardTitle>id</CardTitle>
										<CardSubTitle>CardTabItem</CardSubTitle>
									</CardLabel>
									<CardActions>
										<CommonStoryBtn to='/story/components-card-sub-component-cardtabitem--default' />
									</CardActions>
								</CardHeader>
								<CardHeader className='px-0'>
									<CommonHowToUse>
										id: PropTypes.string.isRequired,
									</CommonHowToUse>
								</CardHeader>
							</CardTabItem>
							<CardTabItem id='title' title='title' icon='FormatSize'>
								<CardHeader className='px-0'>
									<CardLabel icon='FormatSize'>
										<CardTitle>title</CardTitle>
										<CardSubTitle>CardTabItem</CardSubTitle>
									</CardLabel>
									<CardActions>
										<CommonStoryBtn to='/story/components-card-sub-component-cardtabitem--default' />
									</CardActions>
								</CardHeader>
								<CardHeader className='px-0'>
									<CommonHowToUse>
										title: PropTypes.string.isRequired,
									</CommonHowToUse>
								</CardHeader>
							</CardTabItem>
							<CardTabItem id='icon' title='icon' icon='Lightbulb'>
								<CardHeader className='px-0'>
									<CardLabel icon='Lightbulb'>
										<CardTitle>icon</CardTitle>
										<CardSubTitle>CardTabItem</CardSubTitle>
									</CardLabel>
									<CardActions>
										<CommonStoryBtn to='/story/components-card-sub-component-cardtabitem--default' />
									</CardActions>
								</CardHeader>
								<CardHeader className='px-0'>
									<CommonHowToUse>
										<div>
											icon: PropTypes.oneOfType([ PropTypes.string,
											PropTypes.oneOf(...)])
										</div>
										{/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
										<div>
											// <NavLink to='/icons/material'>Material</NavLink> or{' '}
											<NavLink to='/icons/bootstrap-icon'>Bootstrap</NavLink>{' '}
											to see the icon names and previews.
										</div>
									</CommonHowToUse>
								</CardHeader>
							</CardTabItem>
							<CardTabItem id='children' title='children' icon='CallSplit'>
								<CardHeader className='px-0'>
									<CardLabel icon='CallSplit'>
										<CardTitle>children</CardTitle>
										<CardSubTitle>CardTabItem</CardSubTitle>
									</CardLabel>
									<CardActions>
										<CommonStoryBtn to='/story/components-card-sub-component-cardtabitem--default' />
									</CardActions>
								</CardHeader>
								<CardHeader className='px-0'>
									<CommonHowToUse>
										children: PropTypes.node.isRequired,
									</CommonHowToUse>
								</CardHeader>
							</CardTabItem>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default CardPage;
