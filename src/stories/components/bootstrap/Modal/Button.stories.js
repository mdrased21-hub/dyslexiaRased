import React, { useState } from 'react';

import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from '../../../../components/bootstrap/Modal';
import Button from '../../../../components/bootstrap/Button';

import * as ButtonStories from '../Button/Button.stories';

export default {
	title: `Components/<Modal>/Triggers/<Button>`,
	component: Button,
	argTypes: {
		...ButtonStories.default.argTypes,
	},
};

const Template = ({ ...args }) => {
	const [state, setState] = useState(false);
	return (
		<>
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<Button {...args} isOpen={state} setIsOpen={() => setState(true)} />
			<Modal isOpen={state} setIsOpen={setState} titleId='example-title'>
				<ModalHeader>
					<ModalTitle id='example-title'>Title</ModalTitle>
				</ModalHeader>
				<ModalBody>Modal body text goes here.</ModalBody>
				<ModalFooter>
					<Button color='info' onClick={() => setState(false)}>
						Close
					</Button>
				</ModalFooter>
			</Modal>
		</>
	);
};

export const Default = Template.bind({});
Default.args = {
	children: 'Click',
	color: 'primary',
	icon: 'Chat6',
};
