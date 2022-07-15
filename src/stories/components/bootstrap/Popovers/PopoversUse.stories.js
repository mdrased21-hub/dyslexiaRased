import React from 'react';

import Popovers from '../../../../components/bootstrap/Popovers';
import * as PopoversStories from './Popovers.stories';

export default {
	title: `Components/<Popovers>/PROPS`,
	component: Popovers,
	argTypes: { ...PopoversStories.default.argTypes },
	parameters: { ...PopoversStories.default.parameters },
};

const Template = (args) => {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <Popovers {...args} />;
};

export const Placement = Template.bind({});
Placement.args = {
	...PopoversStories.Default.args,
	placement: 'auto',
};
Placement.storyName = 'placement';

export const Trigger = Template.bind({});
Trigger.args = {
	...PopoversStories.Default.args,
	trigger: 'hover',
};
Trigger.storyName = 'trigger';

export const Flip = Template.bind({});
Flip.args = {
	...PopoversStories.Default.args,
	flip: ['auto-start', 'auto-end', 'bottom'],
};
Flip.storyName = 'flip';

export const Delay = Template.bind({});
Delay.args = {
	...PopoversStories.Default.args,
	delay: 1500,
};
Delay.storyName = 'delay';

export const Modifiers = Template.bind({});
Modifiers.args = {
	...PopoversStories.Default.args,
	modifiers: {
		name: 'offset',
		options: {
			offset: [10, 50],
		},
	},
};
Modifiers.storyName = 'modifiers';

const TemplateSecond = (args) => {
	return (
		<>
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			Before text <Popovers {...args} /> after text.
		</>
	);
};
export const IsDisplayInline = TemplateSecond.bind({});
IsDisplayInline.args = {
	...PopoversStories.Default.args,
	children: (
		<div>
			<b>this is a div</b>
		</div>
	),
	isDisplayInline: true,
	trigger: 'hover',
};
IsDisplayInline.storyName = 'isDisplayInline';
