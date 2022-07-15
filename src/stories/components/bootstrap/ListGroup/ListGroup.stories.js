import React from 'react';
import ListGroup, { ListGroupItem } from '../../../../components/bootstrap/ListGroup';

export default {
	title: `Components/<ListGroup>`,
	component: ListGroup,
	subcomponents: { ListGroupItem },
	argTypes: {
		tag: { control: 'inline-radio' },
		isFlush: { control: 'boolean' },
		isNumbered: { control: 'boolean' },
		isHorizontal: {},
		children: { control: false },
		className: { control: 'text' },
	},
};

// eslint-disable-next-line react/prop-types
const Template = ({ ...args }) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<ListGroup {...args}>
		<ListGroupItem>An item</ListGroupItem>
		<ListGroupItem>A second item</ListGroupItem>
		<ListGroupItem>A third item</ListGroupItem>
		<ListGroupItem>A fourth item</ListGroupItem>
		<ListGroupItem>And a fifth one</ListGroupItem>
	</ListGroup>
);

export const Default = Template.bind({});
Default.args = {
	tag: 'ul',
	isFlush: false,
	isNumbered: false,
	isHorizontal: false,
};
