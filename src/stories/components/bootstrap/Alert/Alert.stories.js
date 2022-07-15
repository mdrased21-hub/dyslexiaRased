import React from 'react';

import Alert, { AlertHeading } from '../../../../components/bootstrap/Alert';

export default {
	title: `Components/<Alert>`,
	component: Alert,
	subcomponents: { AlertHeading },
	argTypes: {
		color: {
			control: { type: 'select' },
			table: {
				category: 'Alert',
			},
		},
		isLight: {
			control: 'boolean',
			table: {
				category: 'Alert',
			},
		},
		isOutline: {
			control: 'boolean',
			table: {
				category: 'Alert',
			},
		},
		borderWidth: {
			control: { type: 'inline-radio' },
			table: {
				category: 'Alert',
			},
		},
		rounded: {
			control: { type: 'inline-radio' },
			table: {
				category: 'Alert',
			},
		},
		shadow: {
			control: { type: 'inline-radio' },
			table: {
				category: 'Alert',
			},
		},
		isDismissible: {
			description: 'After closing the alert, you must refresh the page',
			control: 'boolean',
			table: {
				category: 'Alert',
			},
		},
		children: {
			control: { type: 'text' },
			table: {
				category: 'Alert',
			},
		},
		icon: {
			control: { type: 'text' },
			description: 'Material Icons, Bootstrap Icon or custom svg icons',
			table: {
				type: {
					summary: 'Example',
					detail: `Star, Group, VerifiedUser, Info, Warning, ...`,
				},
				category: 'Alert',
			},
		},
		className: {
			control: { type: 'text' },
			table: {
				category: 'Alert',
			},
		},
	},
};

const TemplateAlert = (args) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Alert {...args} />
);

export const Default = TemplateAlert.bind({});
Default.args = {
	children: 'A simple alert—check it out!',
};
