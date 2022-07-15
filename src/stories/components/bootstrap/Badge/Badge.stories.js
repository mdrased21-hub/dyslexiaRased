import React from 'react';

import Badge from '../../../../components/bootstrap/Badge';

export default {
	title: `Components/<Badge>`,
	component: Badge,
	argTypes: {
		color: {
			control: { type: 'select' },
			table: { category: 'Badge' },
		},
		rounded: { control: { type: 'inline-radio' }, table: { category: 'Badge' } },
		shadow: { control: { type: 'inline-radio' }, table: { category: 'Badge' } },
		className: { control: { type: 'text' }, table: { category: 'Badge' } },
		children: { table: { category: 'Badge' } },
	},
};

const Template = (args) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Badge {...args} />
);

export const Default = Template.bind({});
Default.args = {
	children: 'Badge',
};
