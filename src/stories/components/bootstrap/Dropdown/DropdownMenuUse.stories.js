import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../../components/bootstrap/Dropdown';

import * as DropdownStories from './Dropdown.stories';

export default {
	title: `Components/<Dropdown>/Sub Components/<DropdownMenu>/PROPS`,
	component: Dropdown,
	subcomponents: { DropdownToggle, DropdownMenu, DropdownItem },
	argTypes: { ...DropdownStories.default.argTypes },
	args: { ...DropdownStories.default.args },
};

export const IsAlignmentEnd = DropdownStories.DropdownTemplate.bind({});
IsAlignmentEnd.args = {
	isAlignmentEndDropdownMenu: true,
};
IsAlignmentEnd.storyName = 'isAlignmentEnd';

export const Breakpoint = DropdownStories.DropdownTemplate.bind({});
Breakpoint.args = {
	breakpointDropdownMenu: 'xl',
};
Breakpoint.storyName = 'breakpoint';

export const Size = DropdownStories.DropdownTemplate.bind({});
Size.args = {
	sizeDropdownMenu: 'lg',
};
Size.storyName = 'size';
