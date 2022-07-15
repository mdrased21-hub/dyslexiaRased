import React from 'react';

import { CardSubTitle } from '../../../../components/bootstrap/Card';

export default {
	title: `Components/<Card>/Sub Component/<CardHeader>/Sub Component/<CardLabel>/Sub Component/<CardSubTitle>`,
	component: CardSubTitle,
	argTypes: {
		className: {
			control: { type: 'text' },
			table: { category: 'CardLabel', subcategory: 'CardSubTitle' },
		},
		tag: {
			control: { type: 'text' },
			table: { category: 'CardLabel', subcategory: 'CardSubTitle' },
		},
		children: {
			control: { type: 'text' },
			table: { category: 'CardLabel', subcategory: 'CardSubTitle' },
		},
	},
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <CardSubTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Card Sub Title',
};
