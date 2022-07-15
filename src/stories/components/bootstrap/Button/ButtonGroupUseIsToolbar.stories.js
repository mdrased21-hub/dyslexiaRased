import React from 'react';

import Button, { ButtonGroup } from '../../../../components/bootstrap/Button';
import * as ButtonGroupStories from './ButtonGroup.stories';

export default {
	title: `Components/<ButtonGroup>/PROPS/isToolbar`,
	component: ButtonGroup,
	subcomponents: { Button },
	argTypes: {
		...ButtonGroupStories.default.argTypes,
		size: { control: null },
		children: { control: null },
	},
	parameters: { ...ButtonGroupStories.default.parameters },
};

const Template = (args) => {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<ButtonGroup {...args}>
			<ButtonGroup>
				<Button color='primary'>Button</Button>
				<Button color='primary'>Button</Button>
				<Button color='primary'>Button</Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button color='info'>Button</Button>
				<Button color='info'>Button</Button>
			</ButtonGroup>
		</ButtonGroup>
	);
};

export const True = Template.bind({});
True.args = {
	isToolbar: true,
};
True.storyName = 'true';
