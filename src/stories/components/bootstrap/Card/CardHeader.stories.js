import React from 'react';

import {
	CardActions,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Button from '../../../../components/bootstrap/Button';

export default {
	title: `Components/<Card>/Sub Component/<CardHeader>`,
	component: CardHeader,
	subcomponents: { CardLabel, CardTitle, CardSubTitle, CardActions, Button },
	argTypes: {
		size: {
			control: { type: 'inline-radio' },
			table: { category: 'Card', subcategory: 'CardHeader' },
		},
		borderSize: {
			control: { type: 'inline-radio' },
			table: { category: 'Card', subcategory: 'CardHeader' },
		},
		borderColor: {
			control: { type: 'select' },
			table: { category: 'Card', subcategory: 'CardHeader' },
		},
		className: {
			control: { type: 'text' },
			table: { category: 'Card', subcategory: 'CardHeader' },
		},
		children: {
			control: { type: 'text' },
			table: { category: 'Card', subcategory: 'CardHeader' },
		},
		tag: { control: { type: 'text' }, table: { category: 'Card', subcategory: 'CardHeader' } },
	},
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <CardHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Card Header',
};

export const WithTitle = Template.bind({});
WithTitle.args = {
	children: (
		<CardLabel>
			<CardTitle>Card Title</CardTitle>
		</CardLabel>
	),
};

export const WithTitleAndSmall = Template.bind({});
WithTitleAndSmall.args = {
	children: (
		<CardLabel>
			<CardTitle>
				Card Title <small>Small</small>
			</CardTitle>
		</CardLabel>
	),
};

export const WithTitleAndSubTitle = Template.bind({});
WithTitleAndSubTitle.args = {
	children: (
		<CardLabel>
			<CardTitle>
				Card Title <small>Small</small>
			</CardTitle>
			<CardSubTitle>Sub Title</CardSubTitle>
		</CardLabel>
	),
};
