import React from 'react';
import { NavLink } from 'react-router-dom';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
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
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import Icon from '../../../components/icon/Icon';
import Badge from '../../../components/bootstrap/Badge';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import CommonHowToUse from '../../../components/common/CommonHowToUse';
import CommonDesc from '../../../components/common/CommonDesc';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

export const _dropdownInner = (
	<>
		<DropdownItem isHeader>Header</DropdownItem>
		<DropdownItem>
			<NavLink to='/components/popovers'>
				<Icon icon='Send' /> Navlink
			</NavLink>
		</DropdownItem>
		<DropdownItem isDivider />
		<DropdownItem isText>Lorem ipsum dolor sit amet.</DropdownItem>
		<DropdownItem>
			<a href='/'>
				<div className='col text-nowrap overflow-hidden text-overflow-ellipsis'>
					<Icon icon='Send' /> Link Item
				</div>
				<div className='col-auto'>
					<Badge>2</Badge>
				</div>
			</a>
		</DropdownItem>
		<DropdownItem>String</DropdownItem>
	</>
);

const DropdownsPage = () => {
	const _generalUsage = `
<Dropdown
	isOpen={ Boolean } // Not required. Example: state
	setIsOpen={ Function } // Not required. Example: setState
	className={ String }
	direction={ String } // 'up' || 'end' || 'down' || 'start'
	isButtonGroup={ Boolean }>
	<DropdownToggle
		hasIcon={ Boolean }>
		<Button {...props}>...</Button> { // component, html tag. }
	</DropdownToggle>
	<DropdownMenu
		className={ String }
		isAlignmentEnd={ Boolean }
		breakpoint={ String } // 'sm' || 'md' || 'lg' || 'xl' || 'xxl'
		size={ String } // 'sm' || 'md' || 'lg'
		>
		<DropdownItem
			isHeader={ Boolean }
			isDivider={ Boolean }
			isText={ Boolean }
			{...props}>
			...
		</DropdownItem>
		...
	</DropdownMenu>
</Dropdown>`;

	const _example = `
<Dropdown
	isOpen={state}
	setIsOpen={setState}
	{...props}>
	<DropdownToggle {...props} />
	<DropdownMenu {...props}>
		<DropdownItem {...props}>
		...
		</DropdownItem>
		...
	</DropdownMenu>
</Dropdown>`;

	const _directions = ['up', 'end', 'down', 'start'];
	const _colors = [
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
		'light',
		'dark',
		'link',
	];

	return (
		<PageWrapper title={componentsMenu.components.subMenu.dropdowns.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{
								title: componentsMenu.components.text,
								to: `/${componentsMenu.components.path}`,
							},
							{
								title: componentsMenu.components.subMenu.dropdowns.text,
								to: `/${componentsMenu.components.subMenu.dropdowns.path}`,
							},
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/docs/components-dropdown--dropdown-template' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='Assignment'>
									<CardTitle>General Usagse</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<CardCodeView>{_generalUsage}</CardCodeView>
							</CardBody>
						</Card>
					</div>

					{/* isOpen */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='HdrStrong' iconColor='danger'>
									<CardTitle>isOpen, setIsOpen</CardTitle>
									<CardSubTitle>Dropdown</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-dropdown--dropdown-template' />
								</CardActions>
							</CardHeader>
							<CardBody>
								<CommonHowToUse>
									<div>isOpen: PropTypes.bool,</div>
									<div>setIsOpen: PropTypes.func,</div>
								</CommonHowToUse>
								<CardCodeView className='mb-3'>
									const [state, setState] = useState(false);
								</CardCodeView>
								<CardCodeView>{_example}</CardCodeView>
							</CardBody>
							<CardBody>
								<div className='row g-4'>
									<div className='col-auto'>
										<Dropdown>
											<DropdownToggle>
												<Button color='success' isLight>
													Dropdown
												</Button>
											</DropdownToggle>
											<DropdownMenu>{_dropdownInner}</DropdownMenu>
										</Dropdown>
									</div>
								</div>
							</CardBody>
							<CardFooter>
								<CommonDesc>
									If you do not want to intervene, there is no need to define the
									state.
								</CommonDesc>
							</CardFooter>
						</Card>
					</div>
					{/* direction */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ControlCamera' iconColor='warning'>
									<CardTitle>direction</CardTitle>
									<CardSubTitle>Dropdown</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-dropdown-props--direction' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									direction: PropTypes.oneOf(['up', 'end', 'down', 'start']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								{_directions.map((item, index) => (
									<div
										key={item}
										className='row g-4 mb-4 d-flex align-items-center'>
										<div className='col-auto'>
											<Dropdown direction={item}>
												<DropdownToggle>
													<Button
														color={_colors[index]}
														isLight
														icon='Public'>
														Drop - {item}
													</Button>
												</DropdownToggle>
												<DropdownMenu>{_dropdownInner}</DropdownMenu>
											</Dropdown>
										</div>
										<div className='col-auto'>
											<Dropdown direction={item}>
												<DropdownToggle hasIcon={false}>
													<Button
														color={_colors[index]}
														isLight
														hoverShadow='default'
														icon='Send'
													/>
												</DropdownToggle>
												<DropdownMenu>{_dropdownInner}</DropdownMenu>
											</Dropdown>
										</div>
										<div className='col-auto'>
											<Dropdown direction={item}>
												<DropdownToggle hasIcon={false}>
													<Button
														color={_colors[index]}
														isOutline
														hoverShadow='default'
														icon='MoreHoriz'
														className='border-0'
													/>
												</DropdownToggle>
												<DropdownMenu>{_dropdownInner}</DropdownMenu>
											</Dropdown>
										</div>
									</div>
								))}
							</CardBody>
						</Card>
					</div>

					{/* isButtonGroup */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ViewInAr' iconColor='danger'>
									<CardTitle>isButtonGroup</CardTitle>
									<CardSubTitle>Dropdown</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isButtonGroup: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-auto'>
										<Dropdown isButtonGroup>
											<Button color='success' isLight icon='Public'>
												Button
											</Button>
											<Button color='success' isLight icon='Public'>
												Button 2
											</Button>
											<DropdownToggle>
												<Button color='success' isLight />
											</DropdownToggle>
											<DropdownMenu>{_dropdownInner}</DropdownMenu>
										</Dropdown>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					{/* hasIcon */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Panorama'>
									<CardTitle>hasIcon</CardTitle>
									<CardSubTitle>DropdownToggle</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-dropdown-sub-components-dropdowntoggle-props--has-icon' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>hasIcon: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4 mb-4 d-flex align-items-center'>
									<div className='col-auto'>
										<Dropdown>
											<DropdownToggle hasIcon={false}>
												<Button color='primary' isLight icon='Public'>
													hasIcon, false
												</Button>
											</DropdownToggle>
											<DropdownMenu>{_dropdownInner}</DropdownMenu>
										</Dropdown>
									</div>
									<div className='col-auto'>
										<Dropdown>
											<DropdownToggle hasIcon={false}>
												<Button color='primary' isLight icon='Public' />
											</DropdownToggle>
											<DropdownMenu>{_dropdownInner}</DropdownMenu>
										</Dropdown>
									</div>
								</div>
								<div className='row g-4 d-flex align-items-center'>
									<div className='col-auto'>
										<Dropdown>
											<DropdownToggle>
												<Button color='success' isLight icon='Public'>
													hasIcon, true
												</Button>
											</DropdownToggle>
											<DropdownMenu>{_dropdownInner}</DropdownMenu>
										</Dropdown>
									</div>
									<div className='col-auto'>
										<Dropdown>
											<DropdownToggle>
												<Button color='success' isLight icon='Public' />
											</DropdownToggle>
											<DropdownMenu>{_dropdownInner}</DropdownMenu>
										</Dropdown>
									</div>
								</div>
							</CardBody>
							<CardFooter>
								<CommonDesc>Sets the visibility of the arrow icon</CommonDesc>
							</CardFooter>
						</Card>
					</div>

					{/* isAlignmentEnd */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='AlignHorizontalRight' iconColor='success'>
									<CardTitle>isAlignmentEnd</CardTitle>
									<CardSubTitle>DropdownMenu</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-dropdown-sub-components-dropdownmenu-props--is-alignment-end' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isAlignmentEnd: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-auto'>
										<Dropdown>
											<DropdownToggle>
												<Button color='success' isLight icon='Public'>
													The menu here is just right side.
												</Button>
											</DropdownToggle>
											<DropdownMenu isAlignmentEnd>
												{_dropdownInner}
											</DropdownMenu>
										</Dropdown>
									</div>
									<div className='col-auto'>
										<Dropdown>
											<DropdownToggle>
												<Button color='danger' isLight icon='Public'>
													The menu here isn't just right side.
												</Button>
											</DropdownToggle>
											<DropdownMenu>{_dropdownInner}</DropdownMenu>
										</Dropdown>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					{/* size */}
					<div className='col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Straighten' iconColor='warning'>
									<CardTitle>size</CardTitle>
									<CardSubTitle>DropdownMenu</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-dropdown-sub-components-dropdownmenu-props--size' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									size: PropTypes.oneOf(['sm', 'md', 'lg']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-auto'>
										<Dropdown>
											<DropdownToggle>
												<Button color='primary' isLight icon='Public'>
													Size Default
												</Button>
											</DropdownToggle>
											<DropdownMenu>{_dropdownInner}</DropdownMenu>
										</Dropdown>
									</div>
									<div className='col-auto'>
										<Dropdown>
											<DropdownToggle>
												<Button color='success' isLight icon='Public'>
													Size sm
												</Button>
											</DropdownToggle>
											<DropdownMenu size='sm'>{_dropdownInner}</DropdownMenu>
										</Dropdown>
									</div>
									<div className='col-auto'>
										<Dropdown>
											<DropdownToggle>
												<Button color='info' isLight icon='Public'>
													Size md
												</Button>
											</DropdownToggle>
											<DropdownMenu size='md'>{_dropdownInner}</DropdownMenu>
										</Dropdown>
									</div>
									<div className='col-auto'>
										<Dropdown>
											<DropdownToggle>
												<Button color='warning' isLight icon='Public'>
													Size lg
												</Button>
											</DropdownToggle>
											<DropdownMenu size='lg'>{_dropdownInner}</DropdownMenu>
										</Dropdown>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					{/* breakpoint */}
					<div className='col-12'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='AspectRatio'>
									<CardTitle>breakpoint</CardTitle>
									<CardSubTitle>DropdownMenu</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-dropdown-sub-components-dropdownmenu-props--breakpoint' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									breakpoint: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-auto'>
										<Dropdown>
											<DropdownToggle isStatic>
												<Button color='primary' isLight icon='Public'>
													Left-aligned but right aligned when large screen
												</Button>
											</DropdownToggle>
											<DropdownMenu breakpoint='xxl'>
												{_dropdownInner}
											</DropdownMenu>
										</Dropdown>
									</div>
									<div className='col-auto'>
										<Dropdown>
											<DropdownToggle isStatic>
												<Button color='success' isLight icon='Public'>
													Right-aligned but left aligned when large screen
												</Button>
											</DropdownToggle>
											<DropdownMenu isAlignmentEnd breakpoint='xxl'>
												{_dropdownInner}
											</DropdownMenu>
										</Dropdown>
									</div>
								</div>
							</CardBody>
							<CardBody>
								<CommonDesc className='mb-4'>This example is for xxl.</CommonDesc>
								<CommonDesc>
									If you want to use responsive alignment, disable dynamic
									positioning by adding the isStatic attribute and use use the
									breakpoint props in the DropdownMenu.
								</CommonDesc>
							</CardBody>
						</Card>
					</div>

					{/* isHeader */}
					<div className='col-md-4'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='DocumentScanner' iconColor='danger'>
									<CardTitle>isHeader</CardTitle>
									<CardSubTitle>DropdownItem</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-dropdown-sub-components-dropdownmenu-sub-components-dropdownitem-props--is-header' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isHeader: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Dropdown>
									<DropdownToggle>
										<Button color='danger' isLight icon='DocumentScanner'>
											Menu
										</Button>
									</DropdownToggle>
									<DropdownMenu>
										<DropdownItem isHeader> This is a Header</DropdownItem>
									</DropdownMenu>
								</Dropdown>
							</CardBody>
						</Card>
					</div>
					{/* isDivider */}
					<div className='col-md-4'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='SafetyDivider' iconColor='info'>
									<CardTitle>isDivider</CardTitle>
									<CardSubTitle>DropdownItem</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-dropdown-sub-components-dropdownmenu-sub-components-dropdownitem-props--is-divider' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isDivider: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Dropdown>
									<DropdownToggle>
										<Button color='info' isLight icon='SafetyDivider'>
											Menu
										</Button>
									</DropdownToggle>
									<DropdownMenu>
										<DropdownItem isHeader>
											The following is a divider
										</DropdownItem>
										<DropdownItem isDivider />
									</DropdownMenu>
								</Dropdown>
							</CardBody>
						</Card>
					</div>
					{/* isText */}
					<div className='col-md-4'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='FormatColorText' iconColor='warning'>
									<CardTitle>isText</CardTitle>
									<CardSubTitle>DropdownItem</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/story/components-dropdown-sub-components-dropdownmenu-sub-components-dropdownitem-props--is-text' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>isText: PropTypes.bool,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Dropdown>
									<DropdownToggle>
										<Button color='warning' isLight icon='FormatColorText'>
											Menu
										</Button>
									</DropdownToggle>
									<DropdownMenu>
										<DropdownItem isText>
											Pellentesque habitant morbi tristique senectus et netus
											et malesuada fames ac turpis egestas. Vestibulum tortor
											quam, feugiat vitae, ultricies eget, tempor sit amet,
											ante.
										</DropdownItem>
									</DropdownMenu>
								</Dropdown>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default DropdownsPage;
