import React from 'react';

import Alert from '../../../../components/bootstrap/Alert';
import * as AlertStories from './Alert.stories';

export default {
	title: `Components/<Alert>/PROPS/isDismissible`,
	component: Alert,
	argTypes: { ...AlertStories.default.argTypes },
};

const TemplateAlert = (args) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Alert {...args} />
);

export const True = TemplateAlert.bind({});
True.args = {
	...AlertStories.Default.args,
	isLight: true,
	isDismissible: true,
};
True.storyName = 'true';

export const False = TemplateAlert.bind({});
False.args = {
	...True.args,
	isDismissible: false,
};
False.storyName = 'false';
