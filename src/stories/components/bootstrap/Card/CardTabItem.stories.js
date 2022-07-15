import React from 'react';

import Card, { CardTabItem } from '../../../../components/bootstrap/Card';

export default {
	title: `Components/<Card>/Sub Component/<CardTabItem>`,
	component: CardTabItem,
	argTypes: {
		id: {
			control: { type: 'text' },
			table: { category: 'Card', subcategory: 'CardTabItem' },
		},
		title: {
			control: { type: 'text' },
			table: { category: 'Card', subcategory: 'CardTabItem' },
		},
		icon: {
			control: { type: 'text' },
			description: 'Material Icons, Bootstrap Icon or custom svg icons',
			table: {
				type: {
					summary: 'Example',
					detail: `Star, Group, VerifiedUser, Info, Warning, ...`,
				},
				category: 'Card',
				subcategory: 'CardTabItem',
			},
		},
		className: {
			control: { type: 'text' },
			table: { category: 'Card', subcategory: 'CardTabItem' },
		},
		children: {
			control: { type: 'text' },
			table: { category: 'Card', subcategory: 'CardTabItem' },
		},
	},
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => (
	<Card hasTab>
		{/* eslint-disable-next-line react/jsx-props-no-spreading */}
		<CardTabItem {...args} />
		<CardTabItem id='tab-demo' title='Tab Demo'>
			<p>
				Mauris tincidunt magna et scelerisque maximus. Donec eget turpis sed turpis accumsan
				congue non a quam. Ut molestie nibh at ligula convallis posuere. Nullam at placerat
				mi. Nulla non diam condimentum, congue odio eu, posuere dolor. Phasellus convallis
				turpis turpis, semper posuere justo aliquet euismod. Sed convallis sollicitudin
				neque ac cursus. Aliquam porta mauris vitae erat congue fringilla. Morbi nec est
				mattis, pretium ante nec, venenatis velit. Aenean pulvinar gravida porta. Aliquam
				erat volutpat. Aenean et semper nunc. Vivamus sit amet finibus tellus. Praesent
				posuere porta tortor eget facilisis.
			</p>
		</CardTabItem>
	</Card>
);

export const Default = Template.bind({});
Default.args = {
	id: 'tab',
	title: 'Tab Title',
	children: 'Card Tab Item Body',
};
