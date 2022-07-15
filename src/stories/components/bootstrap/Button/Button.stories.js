import React from 'react';

import Button from '../../../../components/bootstrap/Button';
import TagWrapper from '../../../../components/TagWrapper';
import Icon from '../../../../components/icon/Icon';

export default {
	title: `Components/<Button>`,
	component: Button,
	subcomponents: { TagWrapper, Icon },
	argTypes: {
		color: { control: { type: 'select' } },
		isOutline: { control: { type: 'boolean' } },
		isLink: { control: { type: 'boolean' } },
		isLight: { control: { type: 'boolean' } },
		rounded: { control: { type: 'inline-radio' } },
		size: { control: { type: 'inline-radio' } },
		shadow: { control: { type: 'inline-radio' } },
		hoverShadow: { control: { type: 'inline-radio' } },
		isActive: { control: { type: 'boolean' } },
		isDisable: { control: { type: 'boolean' } },
		children: { control: { type: 'text' } },
		tag: { control: { type: 'inline-radio' } },
		type: { control: { type: 'inline-radio' } },
		icon: {
			control: { type: 'text' },
			description: 'Material Icons, Bootstrap Icon or custom svg icons',
			table: {
				type: {
					summary: 'Example',
					detail: `Star, Group, VerifiedUser, Info, Warning, ...`,
				},
			},
		},
	},
	parameters: {
		docs: {
			description: {
				component:
					'Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.',
			},
		},
	},
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Button',
	icon: 'DocumentScanner',
	color: 'primary',
};
