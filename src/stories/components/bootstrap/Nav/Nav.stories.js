import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav, { NavItem, NavLinkDropdown } from '../../../../components/bootstrap/Nav';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../../components/bootstrap/Dropdown';

export default {
	title: `Components/<Nav>`,
	component: Nav,
	subcomponent: { NavItem, NavLinkDropdown },
	argTypes: {
		tag: { control: 'inline-radio' },
		design: { control: 'inline-radio' },
		isFill: { control: 'boolean' },
		isJustified: { control: 'boolean' },
		isVertical: { control: 'boolean' },
		verticalBreakpoint: { control: 'inline-radio' },
		className: { control: 'text' },
		children: { control: false },
	},
};

// eslint-disable-next-line react/prop-types
const Template = ({ ...args }) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Nav {...args}>
		<NavItem>
			<NavLink to='/?path=/story/components-nav--default&args=design:pills'>Active</NavLink>
		</NavItem>
		<NavItem>
			{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
			<a href='#'>Link</a>
		</NavItem>
		<NavItem>
			{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
			<a href='#'>Much longer nav link</a>
		</NavItem>
		<NavItem isDisable>
			{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
			<a href='#'>Disabled</a>
		</NavItem>
		<NavItem>
			<Dropdown>
				<DropdownToggle>
					<NavLinkDropdown>Drop</NavLinkDropdown>
				</DropdownToggle>
				<DropdownMenu>
					<DropdownItem>
						<NavLink to='component'>nav link 2</NavLink>
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</NavItem>
	</Nav>
);

export const Default = Template.bind({});
Default.args = {
	tag: 'ul',
	design: 'pills',
	isFill: false,
	isJustified: false,
	isVertical: false,
};
