import React from 'react';

import Badge from '../../../../components/bootstrap/Badge';
import * as BadgeStories from './Badge.stories';

export default {
	title: `Components/<Badge>/PROPS/shadow`,
	component: Badge,
	argTypes: { ...BadgeStories.default.argTypes },
};

const Template = (args) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Badge {...args} />
);

export const None = Template.bind({});
None.args = {
	children: 'Badge',
	shadow: 'none',
};
None.storyName = 'none';

export const Small = Template.bind({});
Small.args = {
	...None.args,
	shadow: 'sm',
};
Small.storyName = 'sm';

export const Default = Template.bind({});
Default.args = {
	...None.args,
	shadow: 'default',
};
Default.storyName = 'default';

export const Large = Template.bind({});
Large.args = {
	...None.args,
	shadow: 'lg',
};
Large.storyName = 'lg';
