import React from 'react';

import Button from '../../../../components/bootstrap/Button';
import * as ButtonStories from './Button.stories';

export default {
	...ButtonStories,
	title: `Components/<Button>/PROPS/isActive`,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Button {...args} />;

export const ColorButton = Template.bind({});
ColorButton.args = {
	...ButtonStories.Default.args,
	isActive: true,
};

export const OutlineButton = Template.bind({});
OutlineButton.args = {
	...ColorButton.args,
	isOutline: true,
};

export const LinkButton = Template.bind({});
LinkButton.args = {
	...ColorButton.args,
	isLink: true,
};

export const LightButton = Template.bind({});
LightButton.args = {
	...ColorButton.args,
	isLight: true,
};
