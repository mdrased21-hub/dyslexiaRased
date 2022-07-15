import React from 'react';

import Badge from '../../../../components/bootstrap/Badge';
import * as BadgeStories from './Badge.stories';

export default {
	title: `Components/<Badge>/PROPS/color`,
	component: Badge,
	argTypes: { ...BadgeStories.default.argTypes },
};

const Template = (args) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Badge {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	children: 'Badge',
};
Primary.storyName = 'primary';

export const Secondary = Template.bind({});
Secondary.args = {
	...Primary.args,
	color: 'secondary',
};
Secondary.storyName = 'secondary';

export const success = Template.bind({});
success.args = {
	...Primary.args,
	color: 'success',
};
success.storyName = 'success';

export const info = Template.bind({});
info.args = {
	...Primary.args,
	color: 'info',
};
info.storyName = 'info';

export const warning = Template.bind({});
warning.args = {
	...Primary.args,
	color: 'warning',
};
warning.storyName = 'warning';

export const danger = Template.bind({});
danger.args = {
	...Primary.args,
	color: 'danger',
};
danger.storyName = 'danger';

export const light = Template.bind({});
light.args = {
	...Primary.args,
	color: 'light',
};
light.storyName = 'light';

export const dark = Template.bind({});
dark.args = {
	...Primary.args,
	color: 'dark',
};
dark.storyName = 'dark';
