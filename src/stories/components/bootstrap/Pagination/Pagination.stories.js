import React from 'react';
import Pagination, { PaginationItem } from '../../../../components/bootstrap/Pagination';

export default {
	title: `Components/<Pagination>`,
	component: Pagination,
	subcomponent: { PaginationItem },
	argTypes: {
		size: { control: 'inline-radio' },
		className: { control: 'text' },
		children: { control: false },
	},
};

// eslint-disable-next-line react/prop-types
const Template = ({ ...args }) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Pagination {...args}>
		<PaginationItem isPrev />
		<PaginationItem isActive>1</PaginationItem>
		<PaginationItem>2</PaginationItem>
		<PaginationItem>3</PaginationItem>
		<PaginationItem isNext />
	</Pagination>
);

export const Default = Template.bind({});
Default.args = {
	ariaLabel: 'pagination',
};
