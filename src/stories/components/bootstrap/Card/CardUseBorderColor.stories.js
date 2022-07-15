import Card from '../../../../components/bootstrap/Card';

import * as CardStories from './Card.stories';

export default {
	title: `Components/<Card>/PROPS/borderColor`,
	component: Card,
	subcomponents: {
		...CardStories.default.subcomponents,
	},
	argTypes: {
		...CardStories.default.argTypes,
	},
};

export const Default = CardStories.CardTemplate.bind({});
Default.args = {
	borderSize: '1',
};

export const Primary = CardStories.CardTemplate.bind({});
Primary.args = {
	...Default.args,
	borderColor: 'primary',
};
Primary.storyName = 'primary';

export const Secondary = CardStories.CardTemplate.bind({});
Secondary.args = {
	...Default.args,
	borderColor: 'secondary',
};
Secondary.storyName = 'secondary';

export const success = CardStories.CardTemplate.bind({});
success.args = {
	...Default.args,
	borderColor: 'success',
};
success.storyName = 'success';

export const info = CardStories.CardTemplate.bind({});
info.args = {
	...Default.args,
	borderColor: 'info',
};
info.storyName = 'info';

export const warning = CardStories.CardTemplate.bind({});
warning.args = {
	...Default.args,
	borderColor: 'warning',
};
warning.storyName = 'warning';

export const danger = CardStories.CardTemplate.bind({});
danger.args = {
	...Default.args,
	borderColor: 'danger',
};
danger.storyName = 'danger';

export const light = CardStories.CardTemplate.bind({});
light.args = {
	...Default.args,
	borderColor: 'light',
};
light.storyName = 'light';

export const dark = CardStories.CardTemplate.bind({});
dark.args = {
	...Default.args,
	borderColor: 'dark',
};
dark.storyName = 'dark';
