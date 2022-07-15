import React from 'react';

import { CardFooterLeft } from '../../../../components/bootstrap/Card';

export default {
	title: `Components/<Card>/Sub Component/<CardFooter>/Sub Component/<CardFooterLeft>`,
	component: CardFooterLeft,
	argTypes: {
		className: {
			control: { type: 'text' },
			table: { category: 'CardFooter', subcategory: 'CardFooterLeft' },
		},
		tag: {
			control: { type: 'text' },
			table: { category: 'CardFooter', subcategory: 'CardFooterLeft' },
		},
		children: {
			control: { type: 'text' },
			table: { category: 'CardFooter', subcategory: 'CardFooterLeft' },
		},
	},
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <CardFooterLeft {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Card Footer Left',
};
