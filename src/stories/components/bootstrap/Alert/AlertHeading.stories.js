import React from 'react';

import { AlertHeading } from '../../../../components/bootstrap/Alert';

export default {
	title: `Components/<Alert>/Sub Components/<AlertHeading>`,
	component: AlertHeading,
	argTypes: {
		tag: {
			control: { type: 'inline-radio' },
			table: { category: 'Alert', subcategory: 'AlertHeading' },
		},
		className: {
			control: { type: 'text' },
			table: { category: 'Alert', subcategory: 'AlertHeading' },
		},
		children: {
			table: { category: 'Alert', subcategory: 'AlertHeading' },
		},
	},
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <AlertHeading {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Well Done!',
};
