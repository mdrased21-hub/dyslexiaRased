import React from 'react';

import Badge from '../../../../components/bootstrap/Badge';
import * as BadgeStories from './Badge.stories';
import TagWrapper from '../../../../components/TagWrapper';

export default {
	title: `Components/<Badge>/PROPS/size`,
	component: Badge,
	argTypes: {
		tag: {
			control: { type: 'text' },
			table: {
				category: 'Wrapper',
				type: { summary: 'h1, h2, h3, h4, h5, h6, etc.' },
				defaultValue: { summary: "'h1'" },
			},
			description: 'HTML tags',
		},
		tagClassName: {
			name: 'className',
			control: { type: 'text' },
			table: {
				category: 'Wrapper',
				type: { summary: 'h1, h2, h3, h4, h5, h6, etc.' },
			},
		},
		...BadgeStories.default.argTypes,
	},
};

// eslint-disable-next-line react/prop-types
const Template = ({ tag, ...args }) => (
	<TagWrapper tag={tag}>
		{/* eslint-disable-next-line react/jsx-props-no-spreading */}
		<Badge {...args} />
	</TagWrapper>
);

export const Default = Template.bind({});
Default.args = {
	children: 'Badge',
	tag: 'h1',
};
