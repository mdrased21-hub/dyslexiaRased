import React from 'react';

import Alert from '../../../../components/bootstrap/Alert';
import * as AlertStories from './Alert.stories';

export default {
	title: `Components/<Alert>/PROPS/icon`,
	component: Alert,
	argTypes: { ...AlertStories.default.argTypes },
};

const TemplateAlert = (args) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Alert {...args} />
);

export const Star = TemplateAlert.bind({});
Star.args = {
	...AlertStories.Default.args,
	isLight: true,
	isDismissible: true,
	icon: 'Star',
};

export const Group = TemplateAlert.bind({});
Group.args = {
	...Star.args,
	icon: 'Group',
};
