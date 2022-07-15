import React from 'react';

import Alert from '../../../../components/bootstrap/Alert';
import * as AlertStories from './Alert.stories';

export default {
	title: `Components/<Alert>/PROPS/rounded`,
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
	isOutline: true,
};

export const Zero = TemplateAlert.bind({});
Zero.args = {
	...Default.args,
	rounded: '0',
};
Zero.storyName = '0';

export const One = TemplateAlert.bind({});
One.args = {
	...Default.args,
	rounded: '1',
};
One.storyName = '1';

export const Two = TemplateAlert.bind({});
Two.args = {
	...Default.args,
	rounded: '2',
};
Two.storyName = '2';

export const Three = TemplateAlert.bind({});
Three.args = {
	...Default.args,
	rounded: '3',
};
Three.storyName = '3';

export const Pill = TemplateAlert.bind({});
Pill.args = {
	...Default.args,
	rounded: 'pill',
};
Pill.storyName = 'pill';
