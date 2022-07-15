import React from 'react';

import { CardTitle } from '../../../../components/bootstrap/Card';

export default {
	title: `Components/<Card>/Sub Component/<CardHeader>/Sub Component/<CardLabel>/Sub Component/<CardTitle>`,
	component: CardTitle,
	argTypes: {
		className: {
			control: { type: 'text' },
			table: { category: 'CardLabel', subcategory: 'CardTitle' },
		},
		tag: {
			control: { type: 'text' },
			table: { category: 'CardLabel', subcategory: 'CardTitle' },
		},
		children: {
			control: { type: 'text' },
			table: { category: 'CardLabel', subcategory: 'CardTitle' },
		},
	},
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <CardTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Card Title',
};

export const WithSmall = Template.bind({});
WithSmall.args = {
	children: (
		<>
			Card Title <small>Small</small>
		</>
	),
};
