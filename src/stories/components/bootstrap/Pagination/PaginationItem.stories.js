import React from 'react';
import Pagination, { PaginationItem } from '../../../../components/bootstrap/Pagination';

export default {
	title: `Components/<Pagination>/Sub Components/<PaginationItem>`,
	component: PaginationItem,
	argTypes: {
		isPrev: { control: 'boolean' },
		isNext: { control: 'boolean' },
		isDisabled: { control: 'boolean' },
		isActive: { control: 'boolean' },
		className: { control: 'text' },
		children: { control: 'text' },
	},
	decorators: [
		(Story) => (
			<Pagination ariaLabel='pagination'>
				<Story />
				<PaginationItem isActive>1</PaginationItem>
				<PaginationItem>2</PaginationItem>
				<PaginationItem>3</PaginationItem>
				<PaginationItem isNext />
			</Pagination>
		),
	],
};

// eslint-disable-next-line react/prop-types
const Template = ({ ...args }) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<PaginationItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
	isPrev: true,
	isNext: false,
	isDisabled: false,
	isActive: false,
};
