import React from 'react';

import FormText from '../../../../components/bootstrap/forms/FormText';

export default {
	title: 'Forms/<FormText>',
	component: FormText,
	argTypes: {
		id: { control: { type: 'text' } },
		className: { control: { type: 'text' } },
		children: { control: { type: 'text' } },
	},
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <FormText {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'This is a form text',
};
