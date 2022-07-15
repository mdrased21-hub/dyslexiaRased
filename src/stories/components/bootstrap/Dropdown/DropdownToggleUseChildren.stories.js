import React from 'react';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../../components/bootstrap/Dropdown';
import Icon from '../../../../components/icon/Icon';
import * as DropdownStories from './Dropdown.stories';

export default {
	title: `Components/<Dropdown>/Sub Components/<DropdownToggle>/PROPS/children*`,
	component: Dropdown,
	subcomponents: { DropdownToggle, DropdownMenu, DropdownItem },
	argTypes: { ...DropdownStories.default.argTypes },
	args: { ...DropdownStories.default.args },
};

export const WithButton = DropdownStories.DropdownTemplate.bind({});
WithButton.args = {};
WithButton.storyName = '<Button>';

export const WithIcon = DropdownStories.DropdownTemplate.bind({});
WithIcon.args = {
	childrenDropdownToggle: <Icon icon='Bolt' color='primary' size='2x' />,
};
WithIcon.storyName = '<Icon>';

export const Div = DropdownStories.DropdownTemplate.bind({});
Div.args = {
	childrenDropdownToggle: <div>Dropdown</div>,
};
Div.storyName = '<div>';
