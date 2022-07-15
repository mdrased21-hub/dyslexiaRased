import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../../components/bootstrap/Dropdown';

import * as DropdownStories from './Dropdown.stories';

export default {
	title: `Components/<Dropdown>/PROPS`,
	component: Dropdown,
	subcomponents: { DropdownToggle, DropdownMenu, DropdownItem },
	argTypes: { ...DropdownStories.default.argTypes },
	args: { ...DropdownStories.default.args },
};

export const Direction = DropdownStories.DropdownTemplate.bind({});
Direction.args = {};
Direction.storyName = 'direction';
