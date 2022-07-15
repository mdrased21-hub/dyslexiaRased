import React from 'react';

import Alert from '../../../../components/bootstrap/Alert';
import * as AlertStories from './Alert.stories';

export default {
	title: `Components/<Alert>/PROPS/shadow`,
	component: Alert,
	argTypes: { ...AlertStories.default.argTypes },
};

const TemplateAlert = (args) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Alert {...args} />
);

export const Default = TemplateAlert.bind({});
Default.args = {
	...AlertStories.Default.args,
	isLight: true,
};

export const Small = TemplateAlert.bind({});
Small.args = {
	...Default.args,
	shadow: 'sm',
};
Small.storyName = 'sm';

export const Medium = TemplateAlert.bind({});
Medium.args = {
	...Default.args,
	shadow: 'md',
};
Medium.storyName = 'md';

export const Large = TemplateAlert.bind({});
Large.args = {
	...Default.args,
	shadow: 'lg',
};
Large.storyName = 'lg';
