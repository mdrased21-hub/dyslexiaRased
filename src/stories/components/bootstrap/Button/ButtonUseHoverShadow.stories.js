import React from 'react';

import Button from '../../../../components/bootstrap/Button';
import ButtonStories from './Button.stories';

export default {
	...ButtonStories,
	title: `Components/<Button>/PROPS/hoverShadow`,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Button {...args} />;

export const None = Template.bind({});
None.args = {
	children: 'Default lg, hover none',
	color: 'info',
	isLight: true,
	shadow: 'lg',
	hoverShadow: 'none',
};

export const Small = Template.bind({});
Small.args = {
	...None.args,
	children: 'Default none, hover sm',
	shadow: 'none',
	hoverShadow: 'sm',
};

export const DefaultOrTrue = Template.bind({});
DefaultOrTrue.args = {
	...None.args,
	children: 'Default none, hover default',
	shadow: 'none',
	hoverShadow: 'default',
};

export const Large = Template.bind({});
Large.args = {
	...None.args,
	children: 'Default sm, hover lg',
	shadow: 'sm',
	hoverShadow: 'lg',
};
