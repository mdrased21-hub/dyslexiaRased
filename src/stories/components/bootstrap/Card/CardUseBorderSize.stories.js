import Card from '../../../../components/bootstrap/Card';

import * as CardStories from './Card.stories';

export default {
	title: `Components/<Card>/PROPS/borderSize`,
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

export const Zero = CardStories.CardTemplate.bind({});
Zero.args = {
	borderSize: '0',
};
Zero.storyName = '0';

export const One = CardStories.CardTemplate.bind({});
One.args = {
	borderSize: '1',
};
One.storyName = '1';

export const Two = CardStories.CardTemplate.bind({});
Two.args = {
	borderSize: '2',
};
Two.storyName = '2';

export const Three = CardStories.CardTemplate.bind({});
Three.args = {
	borderSize: '3',
};
Three.storyName = '3';

export const Four = CardStories.CardTemplate.bind({});
Four.args = {
	borderSize: '4',
};
Four.storyName = '4';

export const Five = CardStories.CardTemplate.bind({});
Five.args = {
	borderSize: '5',
};
Five.storyName = '5';
