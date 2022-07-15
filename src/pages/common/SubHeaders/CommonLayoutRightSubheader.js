import React from 'react';
import { NavLink } from 'react-router-dom';
import Button, { ButtonGroup } from '../../../components/bootstrap/Button';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import Icon from '../../../components/icon/Icon';
import { SubHeaderRight } from '../../../layout/SubHeader/SubHeader';

const CommonLayoutRightSubheader = () => {
	return (
		<SubHeaderRight>
			<ButtonGroup>
				<Dropdown>
					<DropdownToggle>
						<Button color='primary' isLight>
							Other Layouts
						</Button>
					</DropdownToggle>
					<DropdownMenu isAlignmentEnd>
						<DropdownItem isHeader>Header incl.</DropdownItem>
						<DropdownItem>
							<NavLink to='/page-layouts/header-and-subheader'>
								<Icon icon='LayoutTopPanel5' />
								Header & Subheader
							</NavLink>
						</DropdownItem>
						<DropdownItem>
							<NavLink to='/page-layouts/only-header'>
								<Icon icon='LayoutTopPanel2' />
								Only Header
							</NavLink>
						</DropdownItem>
						<DropdownItem isHeader>Subheader incl.</DropdownItem>
						<DropdownItem>
							<NavLink to='/page-layouts/header-and-subheader'>
								<Icon icon='LayoutTopPanel5' />
								Header & Subheader
							</NavLink>
						</DropdownItem>
						<DropdownItem>
							<NavLink to='/page-layouts/only-subheader'>
								<Icon icon='LayoutRightPanel2' />
								Only Subheader
							</NavLink>
						</DropdownItem>
						<DropdownItem isHeader>Header & Subheader excl.</DropdownItem>
						<DropdownItem>
							<NavLink to='/page-layouts/only-content'>
								<Icon icon='LayoutLeftPanel1' />
								Only Content
							</NavLink>
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</ButtonGroup>
		</SubHeaderRight>
	);
};

export default CommonLayoutRightSubheader;
