import React from 'react';

import * as CardLabelStories from './CardLabel.stories';

import Card, {
	CardActions,
	CardBody,
	CardFooter,
	CardFooterLeft,
	CardFooterRight,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Button from '../../../../components/bootstrap/Button';

export default {
	title: `Components/<Card>/Sub Component/<CardHeader>/Sub Component/<CardLabel>/PROPS/iconColor`,
	component: CardLabel,
	subcomponents: {
		...CardLabelStories.default.subcomponents,
	},
	argTypes: {
		...CardLabelStories.default.argTypes,
		children: { control: null, table: { category: 'CardHeader', subcategory: 'CardLabel' } },
	},
};

const Template = (args) => (
	<Card>
		{/* eslint-disable-next-line react/jsx-props-no-spreading */}
		<CardHeader>
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<CardLabel {...args}>
				<CardTitle>
					Card Title <small>Small</small>
				</CardTitle>
				<CardSubTitle>Sub Title</CardSubTitle>
			</CardLabel>
			<CardActions>
				<Button color='info' isLight icon='Save'>
					Actions - Button
				</Button>
			</CardActions>
		</CardHeader>
		<CardBody>
			<p>
				<strong>This is body</strong>, consectetur adipiscing elit. Pellentesque pulvinar ac
				augue quis imperdiet. Nunc in ante sit amet ante vestibulum auctor. Praesent ut
				turpis mauris. Nulla lobortis odio sit amet imperdiet fermentum. Nunc cursus ex vel
				massa consequat semper. Maecenas mattis hendrerit luctus. Curabitur varius pulvinar
				enim, eget dictum metus rhoncus vitae. Suspendisse eros dui, interdum vitae ante at,
				viverra efficitur nisl. Aliquam at consectetur eros.
			</p>
			<p>
				Mauris viverra imperdiet dui, a placerat justo blandit in. Aliquam nec eros a mauris
				auctor pharetra eget ut turpis. Donec quis hendrerit nisi, et tempus metus. Donec
				metus velit, porttitor eget tincidunt at, lacinia quis leo. Pellentesque viverra
				mattis massa, ut mollis justo faucibus vitae. Fusce eu finibus erat. Nam iaculis
				orci ac ex laoreet consequat. Donec ac enim turpis. Phasellus sed lacinia purus.
				Aliquam vehicula tincidunt faucibus. Quisque eget ullamcorper magna, id ullamcorper
				nunc. Sed sagittis urna at ultricies ultricies.
			</p>
		</CardBody>
		<CardFooter>
			<CardFooterLeft>
				<Button color='info' isOutline icon='Save'>
					Footer Left - Button
				</Button>
			</CardFooterLeft>
			<CardFooterRight>
				<Button color='info' icon='Save'>
					Footer Right - Button
				</Button>
			</CardFooterRight>
		</CardFooter>
	</Card>
);

export const Default = Template.bind({});
Default.args = {
	icon: 'Clock',
};

export const Primary = Template.bind({});
Primary.args = {
	...Default.args,
	iconColor: 'primary',
};
Primary.storyName = 'primary';

export const Secondary = Template.bind({});
Secondary.args = {
	...Default.args,
	iconColor: 'secondary',
};
Secondary.storyName = 'secondary';

export const success = Template.bind({});
success.args = {
	...Default.args,
	iconColor: 'success',
};
success.storyName = 'success';

export const info = Template.bind({});
info.args = {
	...Default.args,
	iconColor: 'info',
};
info.storyName = 'info';

export const warning = Template.bind({});
warning.args = {
	...Default.args,
	iconColor: 'warning',
};
warning.storyName = 'warning';

export const danger = Template.bind({});
danger.args = {
	...Default.args,
	iconColor: 'danger',
};
danger.storyName = 'danger';

export const light = Template.bind({});
light.args = {
	...Default.args,
	iconColor: 'light',
};
light.storyName = 'light';

export const dark = Template.bind({});
dark.args = {
	...Default.args,
	iconColor: 'dark',
};
dark.storyName = 'dark';
