import React, { cloneElement } from 'react';
import Tooltips from '../../../../components/bootstrap/Tooltips';
import Button from '../../../../components/bootstrap/Button';

export default {
	title: `Components/<Tooltips>`,
	component: Tooltips,
	argTypes: {
		title: { control: 'text' },
		children: {},
		placement: { control: 'inline-radio' },
		flip: {},
		delay: {},
		isDisplayInline: { control: 'boolean' },
		isDisableElements: { control: 'boolean' },
		modifiers: {},
	},
	parameters: {
		layout: 'centered',
	},
};

// eslint-disable-next-line react/prop-types
const Template = ({ ...args }) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Tooltips {...args}>
		{args.isDisableElements ? cloneElement(args.children, { isDisable: true }) : args.children}
	</Tooltips>
);

export const Default = Template.bind({});
Default.args = {
	children: (
		<Button color='primary' isLight>
			Example
		</Button>
	),
	title: 'Tooltip is here!',
	placement: 'top',
	flip: ['top', 'bottom'],
	delay: 100,
	isDisplayInline: false,
	isDisableElements: false,
};
