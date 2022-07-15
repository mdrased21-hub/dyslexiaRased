import React from 'react';

import * as CardHeaderStories from './CardHeader.stories';

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
	title: `Components/<Card>/Sub Component/<CardHeader>/PROPS/borderSize`,
	component: CardHeader,
	subcomponents: {
		...CardHeaderStories.default.subcomponents,
	},
	argTypes: {
		...CardHeaderStories.default.argTypes,
		children: { control: null, table: { category: 'Card', subcategory: 'CardHeader' } },
	},
};

const Template = (args) => (
	<Card>
		{/* eslint-disable-next-line react/jsx-props-no-spreading */}
		<CardHeader {...args}>
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
Default.args = {};

export const Zero = Template.bind({});
Zero.args = {
	borderSize: '0',
};
Zero.storyName = '0';

export const One = Template.bind({});
One.args = {
	borderSize: '1',
};
One.storyName = '1';

export const Two = Template.bind({});
Two.args = {
	borderSize: '2',
};
Two.storyName = '2';

export const Three = Template.bind({});
Three.args = {
	borderSize: '3',
};
Three.storyName = '3';

export const Four = Template.bind({});
Four.args = {
	borderSize: '4',
};
Four.storyName = '4';

export const Five = Template.bind({});
Five.args = {
	borderSize: '5',
};
Five.storyName = '5';
