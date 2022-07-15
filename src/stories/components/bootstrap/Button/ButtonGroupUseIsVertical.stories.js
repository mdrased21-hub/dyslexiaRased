import React from 'react';

import Button, { ButtonGroup } from '../../../../components/bootstrap/Button';
import * as ButtonGroupStories from './ButtonGroup.stories';

export default {
	title: `Components/<ButtonGroup>/PROPS/isVertical`,
	component: ButtonGroup,
	subcomponents: { Button },
	argTypes: { ...ButtonGroupStories.default.argTypes },
	parameters: { ...ButtonGroupStories.default.parameters },
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

export const True = Template.bind({});
True.args = {
	...ButtonGroupStories.Default.args,
	isVertical: true,
};
True.storyName = 'true';

export const False = Template.bind({});
False.args = {
	...True.args,
	isVertical: false,
};
False.storyName = 'false';
