import React from 'react';

import Button from '../../../../components/bootstrap/Button';
import * as ButtonStories from './Button.stories';

export default {
	...ButtonStories,
	title: `Components/<Button>/PROPS/shadow`,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Button {...args} />;

export const None = Template.bind({});
None.args = {
	...ButtonStories.Default.args,
	color: 'light',
	shadow: null,
};

export const Small = Template.bind({});
Small.args = {
	...None.args,
	shadow: 'sm',
};

export const DefaultOrTrue = Template.bind({});
DefaultOrTrue.args = {
	...None.args,
	shadow: 'default',
};

export const Large = Template.bind({});
Large.args = {
	...None.args,
	shadow: 'lg',
};
