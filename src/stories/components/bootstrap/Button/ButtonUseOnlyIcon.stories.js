import React from 'react';

import Button from '../../../../components/bootstrap/Button';
import * as ButtonStories from './Button.stories';

export default {
	...ButtonStories,
	title: `Components/<Button>/PROPS/icon/(Only Icon) Examples`,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Button {...args} />;

export const ColorButton = Template.bind({});
ColorButton.args = {
	...ButtonStories.Default.args,
	children: null,
	icon: 'Star',
};
export const ColorButtonSmall = Template.bind({});
ColorButtonSmall.args = {
	...ColorButton.args,
	size: 'sm',
};
export const ColorButtonLarge = Template.bind({});
ColorButtonLarge.args = {
	...ColorButton.args,
	size: 'lg',
};

export const OutlineButton = Template.bind({});
OutlineButton.args = {
	...ColorButton.args,
	isOutline: true,
};
export const OutlineButtonSmall = Template.bind({});
OutlineButtonSmall.args = {
	...OutlineButton.args,
	size: 'sm',
};
export const OutlineButtonLarge = Template.bind({});
OutlineButtonLarge.args = {
	...OutlineButton.args,
	size: 'lg',
};

export const LinkButton = Template.bind({});
LinkButton.args = {
	...ColorButton.args,
	isLink: true,
};
export const LinkButtonSmall = Template.bind({});
LinkButtonSmall.args = {
	...LinkButton.args,
	size: 'sm',
};
export const LinkButtonLarge = Template.bind({});
LinkButtonLarge.args = {
	...LinkButton.args,
	size: 'lg',
};

export const LightButton = Template.bind({});
LightButton.args = {
	...ColorButton.args,
	isLight: true,
};
export const LightButtonSmall = Template.bind({});
LightButtonSmall.args = {
	...LightButton.args,
	size: 'sm',
};
export const LightButtonLarge = Template.bind({});
LightButtonLarge.args = {
	...LightButton.args,
	size: 'lg',
};
