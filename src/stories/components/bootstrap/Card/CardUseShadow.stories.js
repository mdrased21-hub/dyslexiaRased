import Card from '../../../../components/bootstrap/Card';

import * as CardStories from './Card.stories';

export default {
	title: `Components/<Card>/PROPS/shadow`,
	component: Card,
	subcomponents: {
		...CardStories.default.subcomponents,
	},
	argTypes: {
		...CardStories.default.argTypes,
	},
};

export const Default = CardStories.CardTemplate.bind({});
Default.args = {};

export const None = CardStories.CardTemplate.bind({});
None.args = {
	shadow: 'none',
};
None.storyName = 'none';

export const Sm = CardStories.CardTemplate.bind({});
Sm.args = {
	shadow: 'sm',
};
Sm.storyName = 'sm';

export const Md = CardStories.CardTemplate.bind({});
Md.args = {
	shadow: 'md',
};
Md.storyName = 'md';

export const Lg = CardStories.CardTemplate.bind({});
Lg.args = {
	shadow: 'lg',
};
Lg.storyName = 'lg';
