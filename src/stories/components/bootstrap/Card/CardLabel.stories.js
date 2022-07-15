import React from 'react';

import {
	CardActions,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Button from '../../../../components/bootstrap/Button';

export default {
	title: `Components/<Card>/Sub Component/<CardHeader>/Sub Component/CardLabel`,
	component: CardLabel,
	subcomponents: { CardTitle, CardSubTitle, CardActions, Button },
	argTypes: {
		icon: {
			control: { type: 'text' },
			description: 'Material Icons, Bootstrap Icon or custom svg icons',
			table: {
				type: {
					summary: 'Example',
					detail: `Star, Group, VerifiedUser, Info, Warning, ...`,
				},
				category: 'CardHeader',
				subcategory: 'CardLabel',
			},
		},
		iconColor: {
			control: { type: 'select' },
			table: { category: 'CardHeader', subcategory: 'CardLabel' },
		},
		className: {
			control: { type: 'text' },
			table: { category: 'CardHeader', subcategory: 'CardLabel' },
		},
		tag: {
			control: { type: 'text' },
			table: { category: 'CardHeader', subcategory: 'CardLabel' },
		},
		children: {
			control: { type: 'text' },
			table: { category: 'CardHeader', subcategory: 'CardLabel' },
		},
	},
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <CardLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Card Label',
};
