import React from 'react';
import Breadcrumb, { BreadcrumbItem } from '../../../../components/bootstrap/Breadcrumb';
import Icon from '../../../../components/icon/Icon';

export default {
	title: `Components/<Breadcrumb>`,
	component: Breadcrumb,
	subcomponents: { BreadcrumbItem },
	argTypes: {
		tag: { control: { type: 'inline-radio' } },
		list: {},
		children: { control: false },
		listTag: { control: { type: 'inline-radio' } },
		itemTag: { control: { type: 'inline-radio' } },
		ariaLabel: { control: 'text' },
		autoActive: { control: 'boolean' },
		isToHome: {},
		divider: {},
	},
};

// eslint-disable-next-line react/prop-types
const Template = ({ ...args }) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Breadcrumb {...args} />
);

export const Default = Template.bind({});
Default.args = {
	tag: 'nav',
	list: [
		{ title: 'Page', to: '/page' },
		{ title: 'Sub Page', to: '/page/sub-page' },
		{ title: 'Sub sub Page', to: '/page/sub-page/sub-sub-page' },
	],
	listTag: 'ol',
	itemTag: 'li',
	autoActive: true,
	ariaLabel: 'breadcrumb',
	isToHome: <Icon icon='HolidayVillage' />,
	divider: <Icon icon='ChevronRight' />,
};
