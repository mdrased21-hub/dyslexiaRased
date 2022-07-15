import React from 'react';
import Progress from '../../../../components/bootstrap/Progress';

export default {
	title: `Components/<Progress>`,
	component: Progress,
	argTypes: {
		value: {
			control: { type: 'range', min: 0, max: 100, step: 1 },
		},
		min: { control: 'number' },
		max: { control: 'number' },
		height: {},
		isStriped: { control: 'boolean' },
		isAnimated: { control: 'boolean' },
		isAutoColor: { control: 'boolean' },
		color: { control: 'inline-radio' },
		className: { control: 'text' },
		children: { control: false },
	},
};

// eslint-disable-next-line react/prop-types
const Template = ({ ...args }) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Progress {...args} />
);

export const Default = Template.bind({});
Default.args = {
	value: 50,
	min: 0,
	max: 100,
	isStriped: false,
	isAnimated: false,
	isAutoColor: false,
};

// eslint-disable-next-line react/prop-types
const Multi = ({ ...args }) => (
	<Progress>
		<Progress color='success' value={10} />
		<Progress color='warning' value={30} />
		{/* eslint-disable-next-line react/jsx-props-no-spreading */}
		<Progress {...args} />
	</Progress>
);

export const Multiple = Multi.bind({});
Multiple.args = {
	value: 50,
	min: 0,
	max: 100,
	isStriped: false,
	isAnimated: false,
	isAutoColor: false,
};
