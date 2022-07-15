import React from 'react';

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

import Button, { ButtonGroup } from '../../../../components/bootstrap/Button';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../../components/bootstrap/Dropdown';
import Icon from '../../../../components/icon/Icon';

export default {
	title: `Components/<Card>`,
	component: Card,
	subcomponents: {
		CardHeader,
		CardLabel,
		CardTitle,
		CardSubTitle,
		CardActions,
		CardBody,
		CardFooter,
		CardFooterLeft,
		CardFooterRight,
		Button,
	},
	argTypes: {
		className: { control: { type: 'text' }, table: { category: 'Card' } },
		shadow: { control: { type: 'inline-radio' }, table: { category: 'Card' } },
		borderSize: { control: { type: 'inline-radio' }, table: { category: 'Card' } },
		borderColor: { control: { type: 'select' }, table: { category: 'Card' } },
		tag: { table: { category: 'Card' } },
		stretch: { table: { category: 'Card' } },
		isCompact: { table: { category: 'Card' } },
		children: { table: { category: 'Card' } },
		hasTab: { table: { category: 'Card (With Tab)' } },
		tabButtonColor: { table: { category: 'Card (With Tab)' } },
		tabBodyClassName: { table: { category: 'Card (With Tab)' } },
	},
};

export const CardTemplate = (args) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Card {...args}>
		<CardHeader>
			<CardLabel icon='Public'>
				<CardTitle>
					Card Title <small>Small Title</small>
				</CardTitle>
				<CardSubTitle>Card Subtitle</CardSubTitle>
			</CardLabel>
			<CardActions>
				<Button icon='Save' color='info' hoverShadow='default' isLight>
					Save
				</Button>
				<ButtonGroup>
					<Dropdown>
						<DropdownToggle hasIcon={false}>
							<Button
								color='light'
								isLight
								hoverShadow='default'
								icon='MoreVert'
								aria-label='Extra Menu'
							/>
						</DropdownToggle>
						<DropdownMenu isAlignmentEnd>
							<DropdownItem isHeader>Other Actions</DropdownItem>
							<DropdownItem>
								<div>
									<Icon icon='Delete' /> Delete
								</div>
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</ButtonGroup>
			</CardActions>
		</CardHeader>
		<CardBody>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ex nisi, gravida
				nec sem ac, eleifend commodo orci. In hac habitasse platea dictumst. Sed feugiat
				pellentesque volutpat. In ullamcorper et diam nec rhoncus. Pellentesque in vulputate
				tortor. Aliquam iaculis ligula ut vestibulum mollis. Etiam at fringilla velit,
				sagittis feugiat enim. Praesent cursus urna nec nunc imperdiet, suscipit sodales
				nibh condimentum. Donec dignissim purus in augue varius, ut gravida diam
				consectetur. Nulla facilisi. Sed sollicitudin odio a ante ullamcorper venenatis.
				Vestibulum aliquam placerat est, et condimentum justo. Aliquam vel ultrices nisl,
				vitae posuere velit. Cras sed vulputate odio. In hac habitasse platea dictumst.
			</p>
			<p>
				Etiam luctus pharetra orci et dapibus. Sed nec posuere elit. Morbi suscipit nisl ac
				magna sodales, sit amet mattis purus pulvinar. Curabitur iaculis ultricies aliquam.
				Fusce iaculis libero libero, non convallis dui bibendum vitae. Quisque et sem porta,
				ornare purus posuere, hendrerit nunc. Cras leo leo, vehicula tempor condimentum nec,
				rutrum id tellus.
			</p>
			<p>
				Nunc viverra at massa ac molestie. Morbi viverra hendrerit nibh at iaculis. Nam
				dapibus congue erat. Ut leo arcu, dapibus non venenatis et, euismod eu massa.
				Suspendisse potenti. Curabitur luctus sodales congue. Vestibulum ante ipsum primis
				in faucibus orci luctus et ultrices posuere cubilia curae; Sed tempus urna at nisi
				sollicitudin placerat. Mauris vehicula iaculis diam vitae porta. Cras fringilla
				dapibus facilisis. Fusce sapien arcu, fermentum dapibus auctor vitae, rutrum at
				libero. Cras diam turpis, auctor ac elementum nec, malesuada vel diam. Etiam at
				lorem facilisis, dignissim ligula id, euismod tortor. Vestibulum luctus egestas
				nulla, sit amet iaculis lacus consequat at. Phasellus ligula purus, maximus eu porta
				at, semper sed augue.
			</p>
		</CardBody>
		<CardFooter>
			<CardFooterLeft>
				<Button color='danger' icon='Close' isLink>
					Cancel
				</Button>
				<Button color='warning' icon='Update' isLink>
					Reset
				</Button>
			</CardFooterLeft>
			<CardFooterRight>
				<Button icon='Save' color='info' isLight>
					Save
				</Button>
			</CardFooterRight>
		</CardFooter>
	</Card>
);
CardTemplate.storyName = 'Default';
