import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Breadcrumb, { BreadcrumbItem } from '../../../../components/bootstrap/Breadcrumb';
import Icon from '../../../../components/icon/Icon';

export default {
	title: `Components/<Breadcrumb>/Sub Components/<BreadcrumbItem>`,
	component: BreadcrumbItem,
	argTypes: {
		tag: { control: { type: 'text' } },
		children: { control: 'text' },
		to: { control: 'text' },
		ariaLabel: { control: 'text' },
		isActive: { control: 'boolean' },
		className: { control: 'text' },
	},
	decorators: [
		(Story) => (
			<Router>
				<Breadcrumb>
					<BreadcrumbItem to='/page' divider={<Icon icon='ChevronRight' />}>
						Page
					</BreadcrumbItem>
					<Story />
				</Breadcrumb>
			</Router>
		),
	],
};

// eslint-disable-next-line react/prop-types
const Template = ({ ...args }) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<BreadcrumbItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
	tag: 'li',
	children: 'Sub Page',
	to: '/page/sub-page',
	ariaLabel: 'sub page',
	divider: <Icon icon='ChevronRight' />,
	isActive: true,
};
