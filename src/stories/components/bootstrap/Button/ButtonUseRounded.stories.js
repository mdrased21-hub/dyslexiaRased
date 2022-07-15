import React from 'react';

import Button from '../../../../components/bootstrap/Button';
import * as ButtonStories from './Button.stories';

export default {
	...ButtonStories,
	title: `Components/<Button>/PROPS/rounded`,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	...ButtonStories.Default.args,
	rounded: 'default',
};

export const Zero = Template.bind({});
Zero.args = {
	...ButtonStories.Default.args,
	rounded: '0',
};

export const One = Template.bind({});
One.args = {
	...ButtonStories.Default.args,
	rounded: '1',
};

export const Two = Template.bind({});
Two.args = {
	...ButtonStories.Default.args,
	rounded: '2',
};

export const Three = Template.bind({});
Three.args = {
	...ButtonStories.Default.args,
	rounded: '3',
};

export const Bottom = Template.bind({});
Bottom.args = {
	...ButtonStories.Default.args,
	rounded: 'bottom',
};

export const Top = Template.bind({});
Top.args = {
	...ButtonStories.Default.args,
	rounded: 'top',
};

export const Circle = Template.bind({});
Circle.args = {
	...ButtonStories.Default.args,
	rounded: 'circle',
};

export const End = Template.bind({});
End.args = {
	...ButtonStories.Default.args,
	rounded: 'end',
};

export const Start = Template.bind({});
Start.args = {
	...ButtonStories.Default.args,
	rounded: 'start',
};

export const Pill = Template.bind({});
Pill.args = {
	...ButtonStories.Default.args,
	rounded: 'pill',
};
