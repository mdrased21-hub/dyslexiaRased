import React from 'react';

import Button, { ButtonGroup } from '../../../../components/bootstrap/Button';
import TagWrapper from '../../../../components/TagWrapper';
// eslint-disable-next-line no-unused-vars
import * as ButtonStories from './Button.stories';

export default {
	title: `Components/<ButtonGroup>`,
	component: ButtonGroup,
	subcomponents: { Button, TagWrapper },
	argTypes: {
		isToolbar: { control: { type: 'boolean' } },
		isVertical: { control: { type: 'boolean' } },
		size: { control: { type: 'inline-radio' } },
		ariaLabel: { control: { type: 'text' } },
	},
	parameters: {
		docs: {
			description: {
				component: 'Button component',
			},
		},
	},
};

const Template = (args) => {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<ButtonGroup {...args}>
			{/* eslint-disable-next-line react/destructuring-assignment */}
			{args.children.map((item) => (
				// eslint-disable-next-line react/jsx-props-no-spreading
				<Button key={item.children} {...item} />
			))}
		</ButtonGroup>
	);
};

export const Default = Template.bind({});
Default.args = {
	children: [
		{ ...ButtonStories.Default.args },
		{ ...ButtonStories.Default.args, children: 'Button 2' },
		{ ...ButtonStories.Default.args, children: 'Button 3' },
	],
};
