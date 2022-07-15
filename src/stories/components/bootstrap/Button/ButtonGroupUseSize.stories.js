import React from 'react';

import Button, { ButtonGroup } from '../../../../components/bootstrap/Button';
import * as ButtonGroupStories from './ButtonGroup.stories';

export default {
	title: `Components/<ButtonGroup>/PROPS/size`,
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

export const Default = Template.bind({});
Default.args = {
	...ButtonGroupStories.Default.args,
};

export const Small = Template.bind({});
Small.args = {
	...Default.args,
	size: 'sm',
};
Small.storyName = 'sm';

export const Large = Template.bind({});
Large.args = {
	...Default.args,
	size: 'lg',
};
Large.storyName = 'lg';
