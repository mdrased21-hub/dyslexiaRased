import React from 'react';

import * as CardFooterStories from './CardFooter.stories';

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
	title: `Components/<Card>/Sub Component/<CardFooter>/PROPS/borderColor`,
	component: CardFooter,
	subcomponents: {
		...CardFooterStories.default.subcomponents,
	},
	argTypes: {
		...CardFooterStories.default.argTypes,
		children: { control: null, table: { category: 'Card', subcategory: 'CardFooter' } },
	},
};

const Template = (args) => (
	<Card>
		<CardHeader>
			<CardLabel icon='FilterNone'>
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
		{/* eslint-disable-next-line react/jsx-props-no-spreading */}
		<CardFooter {...args}>
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
	borderSize: '1',
};

export const Primary = Template.bind({});
Primary.args = {
	...Default.args,
	borderColor: 'primary',
};
Primary.storyName = 'primary';

export const Secondary = Template.bind({});
Secondary.args = {
	...Default.args,
	borderColor: 'secondary',
};
Secondary.storyName = 'secondary';

export const success = Template.bind({});
success.args = {
	...Default.args,
	borderColor: 'success',
};
success.storyName = 'success';

export const info = Template.bind({});
info.args = {
	...Default.args,
	borderColor: 'info',
};
info.storyName = 'info';

export const warning = Template.bind({});
warning.args = {
	...Default.args,
	borderColor: 'warning',
};
warning.storyName = 'warning';

export const danger = Template.bind({});
danger.args = {
	...Default.args,
	borderColor: 'danger',
};
danger.storyName = 'danger';

export const light = Template.bind({});
light.args = {
	...Default.args,
	borderColor: 'light',
};
light.storyName = 'light';

export const dark = Template.bind({});
dark.args = {
	...Default.args,
	borderColor: 'dark',
};
dark.storyName = 'dark';
