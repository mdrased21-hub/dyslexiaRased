import React from 'react';

import Label from '../../../../components/bootstrap/forms/Label';

export default {
	title: 'Forms/<Label>',
	component: Label,
	argTypes: {
		children: { control: { type: 'text' } },
		htmlFor: { control: { type: 'text' } },
		className: { control: { type: 'text' } },
		isColForLabel: { control: { type: 'boolean' } },
		isHidden: { control: { type: 'boolean' } },
		size: { control: { type: 'inline-radio' } },
		title: { control: { type: 'text' } },
		ariaLabelledby: { control: { type: 'text' } },
		ariaLabel: { control: { type: 'text' } },
	},
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Label',
};

export const Hidden = Template.bind({});
Hidden.args = {
	...Default.args,
	isHidden: true,
};
