import React from 'react';

import { AlertLink } from '../../../../components/bootstrap/Alert';

export default {
	title: `Components/<Alert>/Sub Components/<AlertLink>`,
	component: AlertLink,
	argTypes: {
		href: {
			control: { type: 'text' },
			table: { category: 'Alert', subcategory: 'AlertLink' },
		},
		to: {
			control: { type: 'text' },
			table: { category: 'Alert', subcategory: 'AlertLink' },
		},
		tag: {
			table: { category: 'Alert', subcategory: 'AlertLink' },
		},
		className: {
			control: { type: 'text' },
			table: { category: 'Alert', subcategory: 'AlertLink' },
		},
		children: {
			table: { category: 'Alert', subcategory: 'AlertLink' },
		},
	},
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <AlertLink {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Well Done!',
};
