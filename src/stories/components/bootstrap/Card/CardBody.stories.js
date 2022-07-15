import React from 'react';

import { CardBody } from '../../../../components/bootstrap/Card';

export default {
	title: `Components/<Card>/Sub Component/<CardBody>`,
	component: CardBody,
	argTypes: {
		className: {
			control: { type: 'text' },
			table: { category: 'Card', subcategory: 'CardBody' },
		},
		tag: {
			control: { type: 'text' },
			table: { category: 'Card', subcategory: 'CardBody' },
		},
		children: {
			control: { type: 'text' },
			table: { category: 'Card', subcategory: 'CardBody' },
		},
	},
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <CardBody {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Card Body',
};
