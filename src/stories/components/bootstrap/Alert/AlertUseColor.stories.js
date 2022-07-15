import React from 'react';

import Alert from '../../../../components/bootstrap/Alert';
import * as AlertStories from './Alert.stories';

export default {
	title: `Components/<Alert>/PROPS/color`,
	component: Alert,
	argTypes: {
		...AlertStories.default.argTypes,
	},
};

const TemplateAlert = (args) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Alert {...args} />
);

export const primary = TemplateAlert.bind({});
primary.args = {
	...AlertStories.Default.args,
};
primary.storyName = 'primary';

export const secondary = TemplateAlert.bind({});
secondary.args = {
	...AlertStories.Default.args,
	color: 'secondary',
};
secondary.storyName = 'secondary';

export const success = TemplateAlert.bind({});
success.args = {
	...AlertStories.Default.args,
	color: 'success',
};
success.storyName = 'success';

export const info = TemplateAlert.bind({});
info.args = {
	...AlertStories.Default.args,
	color: 'info',
};
info.storyName = 'info';

export const warning = TemplateAlert.bind({});
warning.args = {
	...AlertStories.Default.args,
	color: 'warning',
};
warning.storyName = 'warning';

export const danger = TemplateAlert.bind({});
danger.args = {
	...AlertStories.Default.args,
	color: 'danger',
};
danger.storyName = 'danger';

export const light = TemplateAlert.bind({});
light.args = {
	...AlertStories.Default.args,
	color: 'light',
};
light.storyName = 'light';

export const dark = TemplateAlert.bind({});
dark.args = {
	...AlertStories.Default.args,
	color: 'dark',
};
dark.storyName = 'dark';
