import React from 'react';

import Button from '../../../../components/bootstrap/Button';

import * as ButtonStories from './Button.stories';

export default {
	title: `Components/<Button>/PROPS/isLink`,
	component: Button,
	subcomponents: { ...ButtonStories.default.subcomponents },
	argTypes: { ...ButtonStories.default.argTypes },
	parameters: { ...ButtonStories.default.parameters },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	isLink: true,
	children: 'Button',
};

export const primary = Template.bind({});
primary.args = {
	...Default.args,
	color: 'primary',
};
primary.storyName = 'primary';

export const secondary = Template.bind({});
secondary.args = {
	...Default.args,
	color: 'secondary',
};
secondary.storyName = 'secondary';

export const success = Template.bind({});
success.args = {
	...Default.args,
	color: 'success',
};
success.storyName = 'success';

export const info = Template.bind({});
info.args = {
	...Default.args,
	color: 'info',
};
info.storyName = 'info';

export const warning = Template.bind({});
warning.args = {
	...Default.args,
	color: 'warning',
};
warning.storyName = 'warning';

export const danger = Template.bind({});
danger.args = {
	...Default.args,
	color: 'danger',
};
danger.storyName = 'danger';

export const light = Template.bind({});
light.args = {
	...Default.args,
	color: 'light',
};
light.storyName = 'light';

export const dark = Template.bind({});
dark.args = {
	...Default.args,
	color: 'dark',
};
dark.storyName = 'dark';

export const link = Template.bind({});
link.args = {
	...Default.args,
	color: 'link',
};
link.storyName = 'link';
