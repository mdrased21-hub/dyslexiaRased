import React, { useState } from 'react';

import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from '../../../../components/bootstrap/Modal';
import Button from '../../../../components/bootstrap/Button';

export default {
	title: `Components/<Modal>/Sub Component/<ModalHeader>/Sub Component/<ModalTitle>`,
	component: ModalTitle,
	argTypes: {},
};

const Template = ({ ...args }) => {
	const [state, setState] = useState(false);
	return (
		<>
			<Button color='primary' icon='Send' onClick={() => setState(true)}>
				Click
			</Button>
			<Modal isOpen={state} setIsOpen={setState} titleId={args.id}>
				<ModalHeader>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					<ModalTitle {...args} />
				</ModalHeader>
				<ModalBody>Modal body text goes here.</ModalBody>,
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
	id: 'example-title',
	children: 'Title',
};
