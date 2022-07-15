import React from 'react';

import { CardActions } from '../../../../components/bootstrap/Card';
import Button, { ButtonGroup } from '../../../../components/bootstrap/Button';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../../components/bootstrap/Dropdown';
import Icon from '../../../../components/icon/Icon';
import Badge from '../../../../components/bootstrap/Badge';

export default {
	title: `Components/<Card>/Sub Component/<CardHeader>/Sub Component/CardActions`,
	component: CardActions,
	subcomponents: { Button, ButtonGroup, Dropdown },
	argTypes: {
		className: {
			control: { type: 'text' },
			table: { category: 'CardHeader', subcategory: 'CardActions' },
		},
		tag: {
			control: { type: 'text' },
			table: { category: 'CardHeader', subcategory: 'CardActions' },
		},
		children: {
			control: { type: 'text' },
			table: { category: 'CardHeader', subcategory: 'CardActions' },
		},
	},
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <CardActions {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Card Actions',
};

export const WithButton = Template.bind({});
WithButton.args = {
	children: (
		<Button icon='Save' color='info' isLight>
			Save
		</Button>
	),
};

export const WithMultipleButton = Template.bind({});
WithMultipleButton.args = {
	children: (
		<>
			<Button icon='Delete' color='danger' isLight>
				Delete
			</Button>
			<Button icon='Save' color='info' isLight>
				Save
			</Button>
		</>
	),
};

export const WithButtonGroup = Template.bind({});
WithButtonGroup.args = {
	children: (
		<ButtonGroup>
			<Button icon='Save' color='info' isLight>
				Save & New
			</Button>
			<Button icon='Save' color='info' isLight>
				Save
			</Button>
		</ButtonGroup>
	),
};

export const WithDropdown = Template.bind({});
WithDropdown.args = {
	children: (
		<ButtonGroup>
			<Dropdown>
				<DropdownToggle>
					<Button color='info' isLight icon='Public'>
						Dropdown Menu
					</Button>
				</DropdownToggle>
				<DropdownMenu>
					<DropdownItem isHeader>Header</DropdownItem>
					<DropdownItem isDivider />
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
					<DropdownItem>
						<a href='/'>
							<Icon icon='Send' /> Link Item
						</a>
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</ButtonGroup>
	),
};
