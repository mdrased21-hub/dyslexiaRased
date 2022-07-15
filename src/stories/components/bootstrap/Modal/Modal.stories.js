import React, { useEffect, useState } from 'react';

import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from '../../../../components/bootstrap/Modal';
import Button from '../../../../components/bootstrap/Button';

export default {
	title: `Components/<Modal>`,
	component: Modal,
	subcomponents: { ModalHeader, ModalTitle, ModalBody, ModalFooter, Button },
	argTypes: {
		id: {},
		titleId: {},
		isStaticBackdrop: {},
		isScrollable: {},
		isCentered: {},
		size: { control: { type: 'inline-radio' } },
		fullScreen: {
			control: {
				type: 'inline-radio',
				options: ['sm', 'md', 'lg', 'xl', 'xxl', true, false],
			},
		},
		isAnimation: {},
	},
};

const Template = ({ ...args }) => {
	const [state, setState] = useState(false);
	useEffect(() => {
		setState(args.isOpen);
		return () => {};
	}, [args.isOpen]);
	return (
		<>
			<Button color='primary' icon='Send' onClick={() => setState(true)}>
				Click
			</Button>
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<Modal {...args} isOpen={state} setIsOpen={setState}>
				<ModalHeader>
					<ModalTitle id='example-title'>Title</ModalTitle>
				</ModalHeader>
				<ModalBody>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
						ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
						ac, vestibulum at eros.
					</p>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
						sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
					</p>
					<p>
						Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
						magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
						ullamcorper nulla non metus auctor fringilla.
					</p>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
						ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
						ac, vestibulum at eros.
					</p>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
						sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
					</p>
					<p>
						Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
						magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
						ullamcorper nulla non metus auctor fringilla.
					</p>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
						ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
						ac, vestibulum at eros.
					</p>
				</ModalBody>
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
	id: 'example-modal',
	titleId: 'example-title',
};
