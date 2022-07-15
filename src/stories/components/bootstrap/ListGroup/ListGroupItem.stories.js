import React from 'react';
import ListGroup, { ListGroupItem } from '../../../../components/bootstrap/ListGroup';

export default {
	title: `Components/<ListGroup>/Sub Components/<ListGroupItem>`,
	component: ListGroupItem,
	argTypes: {
		tag: { control: 'inline-radio' },
		children: { control: 'text' },
		className: { control: 'text' },
		color: { control: 'inline-radio' },
		isActive: { control: 'boolean' },
		isDisable: { control: 'boolean' },
	},
	decorators: [
		(Story) => (
			<ListGroup>
				<Story />
				<ListGroupItem>A second item</ListGroupItem>
				<ListGroupItem>A third item</ListGroupItem>
				<ListGroupItem>A fourth item</ListGroupItem>
				<ListGroupItem>And a fifth one</ListGroupItem>
			</ListGroup>
		),
	],
};

// eslint-disable-next-line react/prop-types
const Template = ({ ...args }) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<ListGroupItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
	children: 'An item',
	tag: 'li',
	isActive: false,
	isDisable: false,
};
