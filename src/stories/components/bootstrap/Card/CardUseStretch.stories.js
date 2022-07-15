import React from 'react';

import * as CardStories from './Card.stories';

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
	title: `Components/<Card>/PROPS/stretch`,
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
	<div className='row'>
		<div className='col-md-6'>
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<Card {...args}>
				<CardHeader>
					<CardLabel icon='ViewStream' iconColor='warning'>
						<CardTitle>stretch</CardTitle>
						<CardSubTitle>Card</CardSubTitle>
					</CardLabel>
					<CardActions>
						<Button color='warning' isLight icon='Save'>
							Actions - Button
						</Button>
					</CardActions>
				</CardHeader>
				<CardBody>
					<p>
						<strong>This is body</strong>, consectetur adipiscing elit. Pellentesque
						pulvinar ac augue quis imperdiet. Nunc in ante sit amet ante vestibulum
						auctor.
					</p>
				</CardBody>
				<CardFooter>
					<CardFooterLeft>
						<Button color='warning' isOutline icon='Save'>
							Footer Left - Button
						</Button>
					</CardFooterLeft>
					<CardFooterRight>
						<Button color='warning' icon='Save'>
							Footer Right - Button
						</Button>
					</CardFooterRight>
				</CardFooter>
			</Card>
		</div>
		<div className='col-md-6'>
			<Card>
				<CardHeader>
					<CardLabel icon='FilterNone'>
						<CardTitle>
							Card Title <small>Small</small>
						</CardTitle>
						<CardSubTitle>Sub Title</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					<p>
						<strong>This is body</strong>, consectetur adipiscing elit. Pellentesque
						pulvinar ac augue quis imperdiet. Nunc in ante sit amet ante vestibulum
						auctor. Praesent ut turpis mauris. Nulla lobortis odio sit amet imperdiet
						fermentum. Nunc cursus ex vel massa consequat semper. Maecenas mattis
						hendrerit luctus. Curabitur varius pulvinar enim, eget dictum metus rhoncus
						vitae. Suspendisse eros dui, interdum vitae ante at, viverra efficitur nisl.
						Aliquam at consectetur eros.
					</p>
					<p>
						Mauris viverra imperdiet dui, a placerat justo blandit in. Aliquam nec eros
						a mauris auctor pharetra eget ut turpis. Donec quis hendrerit nisi, et
						tempus metus. Donec metus velit, porttitor eget tincidunt at, lacinia quis
						leo. Pellentesque viverra mattis massa, ut mollis justo faucibus vitae.
						Fusce eu finibus erat. Nam iaculis orci ac ex laoreet consequat. Donec ac
						enim turpis. Phasellus sed lacinia purus. Aliquam vehicula tincidunt
						faucibus. Quisque eget ullamcorper magna, id ullamcorper nunc. Sed sagittis
						urna at ultricies ultricies.
					</p>
					<p>
						Maecenas pretium, dolor eu tristique dapibus, ipsum nulla euismod odio, sed
						iaculis quam arcu at sem. Nunc in eros semper est egestas volutpat. Mauris
						nec tortor eu nisl ornare interdum. Vestibulum non consequat dui, ac tempus
						risus. Pellentesque laoreet libero et nunc condimentum, quis faucibus quam
						cursus. Vestibulum viverra rutrum velit, id tempor est ullamcorper dapibus.
						Vestibulum elementum faucibus ligula, vel venenatis massa vehicula vel.
						Curabitur vulputate, ex eu posuere porttitor, tellus justo euismod nisi, eu
						consequat arcu velit a turpis. Nunc id tortor in justo ultrices pharetra at
						et eros. Quisque quam nunc, euismod ut quam vitae, porttitor facilisis
						massa. Etiam ex mi, mollis eget risus vel, eleifend luctus sem. Maecenas
						ultrices porta iaculis.
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
		</div>
	</div>
);

export const Stretch = Template.bind({});
Stretch.args = {
	stretch: true,
};

export const StretchSemi = Template.bind({});
StretchSemi.args = {
	stretch: 'semi',
};
