import React from 'react';

import { CardFooter, CardFooterLeft, CardFooterRight } from '../../../../components/bootstrap/Card';

export default {
	title: `Components/<Card>/Sub Component/<CardFooter>`,
	component: CardFooter,
	subcomponents: { CardFooterLeft, CardFooterRight },
	argTypes: {
		borderSize: {
			control: { type: 'inline-radio' },
			table: { category: 'Card', subcategory: 'CardFooter' },
		},
		borderColor: {
			control: { type: 'select' },
			table: { category: 'Card', subcategory: 'CardFooter' },
		},
		size: {
			control: { type: 'inline-radio' },
			table: { category: 'Card', subcategory: 'CardFooter' },
		},
		className: {
			control: { type: 'text' },
			table: { category: 'Card', subcategory: 'CardFooter' },
		},
		tag: {
			control: { type: 'text' },
			table: { category: 'Card', subcategory: 'CardFooter' },
		},
		children: {
			control: { type: 'text' },
			table: { category: 'Card', subcategory: 'CardFooter' },
		},
	},
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <CardFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Card Footer',
};
