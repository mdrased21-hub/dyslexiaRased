import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../../components/bootstrap/Dropdown';

import * as DropdownStories from './Dropdown.stories';

export default {
	title: `Components/<Dropdown>/Sub Components/<DropdownMenu>/Sub Components/<DropdownItem>/PROPS`,
	component: Dropdown,
	subcomponents: { DropdownToggle, DropdownMenu, DropdownItem },
	argTypes: { ...DropdownStories.default.argTypes },
	args: { ...DropdownStories.default.args },
};

export const IsHeader = DropdownStories.DropdownTemplate.bind({});
IsHeader.args = {
	isHeaderDropdownItem: true,
	childrenDropdownItem: 'This is a Header',
};
IsHeader.storyName = 'isHeader';

export const IsDivider = DropdownStories.DropdownTemplate.bind({});
IsDivider.args = {
	isDividerDropdownItem: true,
};
IsDivider.storyName = 'isDivider';

export const IsText = DropdownStories.DropdownTemplate.bind({});
IsText.args = {
	isTextDropdownItem: true,
	childrenDropdownItem: 'This is a Text',
};
IsText.storyName = 'isText';
