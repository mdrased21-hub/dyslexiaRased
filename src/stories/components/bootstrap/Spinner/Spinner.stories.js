import React from 'react';
import Spinner from '../../../../components/bootstrap/Spinner';
import Button from '../../../../components/bootstrap/Button';

export default {
	title: `Components/<Spinner>`,
	component: Spinner,
	argTypes: {
		color: { control: 'inline-radio' },
		isGrow: { control: 'boolean' },
		isSmall: { control: 'boolean' },
		size: {},
		inButton: {
			control: {
				type: 'inline-radio',
				labels: {
					true: 'true',
					false: 'false',
					onlyIcon: "'onlyIcon'",
				},
			},
			options: [true, false, 'onlyIcon'],
		},
		className: { control: 'text' },
		tag: { control: 'inline-radio' },
		children: { control: false },
	},
};

// eslint-disable-next-line react/prop-types
const Template = ({ ...args }) => {
	if (args.inButton) {
		return (
			<Button color='primary' isLight>
				{/* eslint-disable-next-line react/jsx-props-no-spreading */}
				<Spinner {...args} />
				{args.inButton !== 'onlyIcon' ? 'Saving...' : null}
			</Button>
		);
	}
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<Spinner {...args} />
	);
};

export const Default = Template.bind({});
Default.args = { tag: 'div', color: 'primary', isGrow: false, isSmall: false, inButton: false };
