import React from 'react';

import Popovers from '../../../../components/bootstrap/Popovers';
import * as PopoversStories from './Popovers.stories';
import Button from '../../../../components/bootstrap/Button';

export default {
	title: `Components/<Popovers>/PROPS/children`,
	component: Popovers,
	argTypes: { ...PopoversStories.default.argTypes },
	parameters: { ...PopoversStories.default.parameters },
};

const Template = (args) => {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <Popovers {...args} />;
};

export const String = Template.bind({});
String.args = {
	...PopoversStories.Default.args,
};
String.storyName = 'string';

export const Html = Template.bind({});
Html.args = {
	...PopoversStories.Default.args,
	children: <strong>strong</strong>,
};
Html.storyName = 'HTML';

export const ReactComponent = Template.bind({});
ReactComponent.args = {
	...PopoversStories.Default.args,
	children: (
		<Button color='primary' isLight icon='Send' size='lg'>
			Button
		</Button>
	),
	trigger: 'hover',
};
ReactComponent.storyName = 'React Component';
