import React from 'react';

import Popovers from '../../../../components/bootstrap/Popovers';

export default {
	title: `Components/<Popovers>`,
	component: Popovers,
	argTypes: {
		trigger: { control: { type: 'inline-radio' } },
		placement: { control: { type: 'inline-radio' } },
		flip: {},
		delay: {},
		isDisplayInline: {},
		modifiers: {},
	},
	parameters: {
		layout: 'centered',
	},
};

const Template = (args) => {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <Popovers {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	children: 'Popovers lorem ipsum dolor sit',
	title: 'This is a title',
	desc: 'This is a description',
};
