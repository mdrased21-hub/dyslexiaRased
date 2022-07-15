import React from 'react';

import Badge from '../../../../components/bootstrap/Badge';
import * as BadgeStories from './Badge.stories';

export default {
	title: `Components/<Badge>/PROPS/rounded`,
	component: Badge,
	argTypes: { ...BadgeStories.default.argTypes },
};

const Template = (args) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Badge {...args} />
);

export const Zero = Template.bind({});
Zero.args = {
	children: 'Badge',
	rounded: '0',
};
Zero.storyName = '0';

export const One = Template.bind({});
One.args = {
	...Zero.args,
	rounded: '1',
};
One.storyName = '1';

export const Two = Template.bind({});
Two.args = {
	...Zero.args,
	rounded: '2',
};
Two.storyName = '2';

export const Three = Template.bind({});
Three.args = {
	...Zero.args,
	rounded: '3',
};
Three.storyName = '3';

export const Bottom = Template.bind({});
Bottom.args = {
	...Zero.args,
	rounded: 'bottom',
};
Bottom.storyName = 'bottom';

export const Top = Template.bind({});
Top.args = {
	...Zero.args,
	rounded: 'top',
};
Top.storyName = 'top';

export const Circle = Template.bind({});
Circle.args = {
	...Zero.args,
	rounded: 'circle',
};
Circle.storyName = 'circle';

export const End = Template.bind({});
End.args = {
	...Zero.args,
	rounded: 'end',
};
End.storyName = 'end';

export const Start = Template.bind({});
Start.args = {
	...Zero.args,
	rounded: 'start',
};
Start.storyName = 'start';

export const Pill = Template.bind({});
Pill.args = {
	...Zero.args,
	rounded: 'pill',
};
Pill.storyName = 'pill';
