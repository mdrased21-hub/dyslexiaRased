import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../../components/bootstrap/Dropdown';

import * as DropdownStories from './Dropdown.stories';

export default {
	title: `Components/<Dropdown>/Sub Components/<DropdownToggle>/PROPS`,
	component: Dropdown,
	subcomponents: { DropdownToggle, DropdownMenu, DropdownItem },
	argTypes: { ...DropdownStories.default.argTypes },
	args: { ...DropdownStories.default.args },
};

export const HasIcon = DropdownStories.DropdownTemplate.bind({});
HasIcon.args = {};
HasIcon.storyName = 'hasIcon';
