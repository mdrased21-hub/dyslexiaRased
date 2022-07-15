import React from 'react';

import * as CardStories from './Card.stories';

import Card, { CardTabItem } from '../../../../components/bootstrap/Card';

export default {
	title: `Components/<Card>/PROPS/tabButtonColor`,
	component: Card,
	subcomponents: {
		...CardStories.default.subcomponents,
	},
	argTypes: {
		...CardStories.default.argTypes,
		children: { control: null, table: { category: 'Card' } },
	},
};

const Template = (args) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Card {...args} />
);

export const Default = Template.bind({});
Default.args = {
	hasTab: true,
	children: [
		<CardTabItem id='tab-one' title='Tab One'>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a augue ac velit
				porttitor auctor. Orci varius natoque penatibus et magnis dis parturient montes,
				nascetur ridiculus mus. Etiam libero mauris, sodales at aliquet ut, sagittis eget
				libero. Suspendisse dictum dignissim lectus at commodo. Aenean porttitor nisi et
				efficitur consequat. Etiam nec dolor vitae felis vestibulum placerat vel eget
				mauris. Maecenas ac nisl dapibus, fermentum massa vel, imperdiet orci. Aenean
				vulputate aliquam velit, nec gravida tellus volutpat sed. Nunc justo eros, vulputate
				id dictum quis, sollicitudin at turpis. Mauris quis tortor fermentum, fringilla
				velit non, placerat sapien. Duis iaculis imperdiet massa at cursus. Praesent
				efficitur ultricies eros at tempus.
			</p>
		</CardTabItem>,
		<CardTabItem id='tab-two' title='Tab Two'>
			<p>
				Mauris tincidunt magna et scelerisque maximus. Donec eget turpis sed turpis accumsan
				congue non a quam. Ut molestie nibh at ligula convallis posuere. Nullam at placerat
				mi. Nulla non diam condimentum, congue odio eu, posuere dolor. Phasellus convallis
				turpis turpis, semper posuere justo aliquet euismod. Sed convallis sollicitudin
				neque ac cursus. Aliquam porta mauris vitae erat congue fringilla. Morbi nec est
				mattis, pretium ante nec, venenatis velit. Aenean pulvinar gravida porta. Aliquam
				erat volutpat. Aenean et semper nunc. Vivamus sit amet finibus tellus. Praesent
				posuere porta tortor eget facilisis.
			</p>
		</CardTabItem>,
	],
};

export const primary = Template.bind({});
primary.args = {
	...Default.args,
	tabButtonColor: 'primary',
};
primary.storyName = 'primary';

export const secondary = Template.bind({});
secondary.args = {
	...Default.args,
	tabButtonColor: 'secondary',
};
secondary.storyName = 'secondary';

export const success = Template.bind({});
success.args = {
	...Default.args,
	tabButtonColor: 'success',
};
success.storyName = 'success';

export const info = Template.bind({});
info.args = {
	...Default.args,
	tabButtonColor: 'info',
};
info.storyName = 'info';

export const warning = Template.bind({});
warning.args = {
	...Default.args,
	tabButtonColor: 'warning',
};
warning.storyName = 'warning';

export const danger = Template.bind({});
danger.args = {
	...Default.args,
	tabButtonColor: 'danger',
};
danger.storyName = 'danger';

export const light = Template.bind({});
light.args = {
	...Default.args,
	tabButtonColor: 'light',
};
light.storyName = 'light';

export const dark = Template.bind({});
dark.args = {
	...Default.args,
	tabButtonColor: 'dark',
};
dark.storyName = 'dark';
