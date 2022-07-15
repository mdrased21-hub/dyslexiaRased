import React from 'react';

import Accordion, { AccordionItem } from '../../../../components/bootstrap/Accordion';
import { DefaultItem } from './AccordionItem.stories';

export default {
	title: `Components/<Accordion>`,
	component: Accordion,
	subcomponents: { AccordionItem },
	argTypes: {
		id: {},
		color: { control: { type: 'inline-radio' } },
		shadow: { control: { type: 'inline-radio' } },
		isFlush: {},
		children: {},
		className: {},
		tag: { control: { type: 'inline-radio' } },
	},
};

// eslint-disable-next-line react/prop-types
const Template = ({ children, ...args }) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Accordion {...args}>
		{/* eslint-disable-next-line react/prop-types */}
		{children.map((item) => (
			// eslint-disable-next-line react/jsx-props-no-spreading
			<AccordionItem {...item} />
		))}
	</Accordion>
);

export const Default = Template.bind({});
Default.args = {
	id: 'example-accordion',
	children: [
		DefaultItem.args,
		{
			id: 'example-item-2',
			title: 'Title Two',
			icon: 'Clipboard',
			children: 'Lorem ipsum dolor sit amet, two.',
		},
		{
			id: 'example-item-3',
			title: 'Title Three',
			icon: 'FormatColorFill',
			children: 'Lorem ipsum dolor sit amet, three.',
		},
		{
			id: 'example-item-4',
			title: 'Title Four',
			icon: 'Opacity',
			children: 'Lorem ipsum dolor sit amet, four.',
		},
		{
			id: 'example-item-5',
			title: 'Title Five',
			icon: 'Palette',
			children: 'Lorem ipsum dolor sit amet, five.',
		},
	],
};
