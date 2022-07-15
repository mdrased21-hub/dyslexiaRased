import React from 'react';

import { CardFooterRight } from '../../../../components/bootstrap/Card';

export default {
	title: `Components/<Card>/Sub Component/<CardFooter>/Sub Component/<CardFooterRight>`,
	component: CardFooterRight,
	argTypes: {
		className: {
			control: { type: 'text' },
			table: { category: 'CardFooter', subcategory: 'CardFooterRight' },
		},
		tag: {
			control: { type: 'text' },
			table: { category: 'CardFooter', subcategory: 'CardFooterRight' },
		},
		children: {
			control: { type: 'text' },
			table: { category: 'CardFooter', subcategory: 'CardFooterRight' },
		},
	},
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <CardFooterRight {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Card Footer Right',
};
