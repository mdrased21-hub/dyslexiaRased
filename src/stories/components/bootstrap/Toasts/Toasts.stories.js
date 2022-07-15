import React from 'react';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import Toasts, { Toast, ToastContainer } from '../../../../components/bootstrap/Toasts';
import Button from '../../../../components/bootstrap/Button';

export default {
	title: `Components/<Toasts>`,
	component: Toasts,
	argTypes: {
		icon: {
			control: { type: 'text' },
			description: 'Material Icons, Bootstrap Icon or custom svg icons',
			table: {
				type: {
					summary: 'Example',
					detail: `VerifiedUser, Info, Warning, Bolt, ...`,
				},
			},
		},
		iconColor: { control: 'inline-radio' },
		title: { control: 'text' },
		time: { control: 'text' },
		isDismiss: { control: 'boolean' },
		children: { control: 'text' },
		className: { control: 'text' },
		autoDismiss: {
			control: 'boolean',
			table: {
				category: 'useToasts()',
				subcategory: 'addToast',
				type: { summary: 'string' },
			},
		},
		autoDismissTimeout: {
			control: 'number',
			table: {
				category: 'useToasts()',
				subcategory: 'addToast',
				type: { summary: 'string' },
			},
		},
	},
	decorators: [
		(Story) => (
			<ToastProvider components={{ ToastContainer, Toast }}>
				<Story />
			</ToastProvider>
		),
	],
};

// eslint-disable-next-line react/prop-types,react/jsx-props-no-spreading
const Template = ({ autoDismiss, autoDismissTimeout, ...args }) => {
	const { addToast } = useToasts();
	return (
		<Button
			color='primary'
			isLight
			icon='BreakfastDining'
			onClick={() => {
				// eslint-disable-next-line react/jsx-props-no-spreading
				addToast(<Toasts {...args} />, {
					autoDismiss,
					autoDismissTimeout,
				});
			}}>
			Click
		</Button>
	);
};
export const Default = Template.bind({});
Default.args = {
	icon: 'VerifiedUser',
	iconColor: 'success',
	title: 'This is a title.',
	time: '11 mins ago',
	children: 'This is a children.',
	isDismiss: true,
	autoDismiss: true,
	autoDismissTimeout: 5000,
};
