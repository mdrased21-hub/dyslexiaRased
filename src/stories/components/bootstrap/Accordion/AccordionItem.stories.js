import React from 'react';

import Accordion, { AccordionItem } from '../../../../components/bootstrap/Accordion';

export default {
	title: `Components/<Accordion>/Sub Components/<AccordionItem>`,
	component: AccordionItem,
	argTypes: {
		id: {},
		title: {},
		headerTag: { control: { type: 'inline-radio' } },
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
		overWriteColor: { control: { type: 'inline-radio' } },
		isOpen: {},
		children: {},
		tag: { control: { type: 'inline-radio' } },
		parentId: { table: { disable: true } },
	},
};

const Template = (args) => (
	<Accordion id='example-accordion'>
		{/* eslint-disable-next-line react/jsx-props-no-spreading */}
		<AccordionItem {...args} />
		<AccordionItem id='example-item-2' title='Title Two' icon='Assignment'>
			Lorem ipsum dolor sit amet, two.
		</AccordionItem>
		<AccordionItem id='example-item-3' title='Title Three' icon='Assignment'>
			Lorem ipsum dolor sit amet, three.
		</AccordionItem>
		<AccordionItem id='example-item-4' title='Title Four' icon='Assignment'>
			Lorem ipsum dolor sit amet, four.
		</AccordionItem>
		<AccordionItem id='example-item-5' title='Title Five' icon='Assignment'>
			Lorem ipsum dolor sit amet, five.
		</AccordionItem>
	</Accordion>
);

export const DefaultItem = Template.bind({});
DefaultItem.args = {
	id: 'example-item-1',
	title: 'Title One',
	icon: 'Person',
	isOpen: true,
	children: 'Lorem ipsum dolor sit amet.',
};
DefaultItem.storyName = 'Default';
