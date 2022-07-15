import React, { useState } from 'react';
import ScrollspyNav from '../../../../components/bootstrap/ScrollspyNav';
import Button from '../../../../components/bootstrap/Button';

export default {
	title: `Components/<ScrollspyNav>`,
	component: ScrollspyNav,
	argTypes: {
		className: { control: 'text' },
		children: { control: false },
	},
	decorators: [
		(Story) => (
			<div className='row g-4 position-relative'>
				<div className='col-12 position-sticky top-0'>
					<Story />
				</div>
				<div className='col-12'>
					<div
						id='first'
						className='border border-1 rounded p-4'
						style={{ height: '90vh' }}>
						First
					</div>
				</div>
				<div className='col-12'>
					<div
						id='second'
						className='border border-1 rounded p-4'
						style={{ height: '90vh' }}>
						Second
					</div>
				</div>
				<div className='col-12'>
					<div
						id='third'
						className='border border-1 rounded p-4'
						style={{ height: '90vh' }}>
						Third
					</div>
				</div>
			</div>
		),
	],
};

// eslint-disable-next-line react/prop-types
const Template = ({ ...args }) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<ScrollspyNav {...args}>
		<Button tag='a' to='#first' color='success' isLight className='me-3'>
			First
		</Button>
		<Button tag='a' to='#second' color='success' isLight className='me-3'>
			Second
		</Button>
		<Button tag='a' to='#third' color='success' isLight>
			Third
		</Button>
	</ScrollspyNav>
);

export const Default = Template.bind({});
Default.args = {
	items: ['first', 'second', 'third'],
};
Default.storyName = '1. Way (with children)';

// eslint-disable-next-line react/prop-types
const TemplateTwo = ({ ...args }) => {
	const [state, setState] = useState(null);
	return (
		<div className='bg-light p-2 rounded-3 d-inline-block'>
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<ScrollspyNav setActiveId={setState} {...args} />
			<Button
				tag='a'
				to='#first'
				color={state === 'first' ? 'success' : 'light'}
				className='me-3'>
				First
			</Button>
			<Button
				tag='a'
				to='#second'
				color={state === 'second' ? 'success' : 'light'}
				className='me-3'>
				Second
			</Button>
			<Button tag='a' to='#third' color={state === 'third' ? 'success' : 'light'}>
				Third
			</Button>
		</div>
	);
};

export const WithState = TemplateTwo.bind({});
WithState.args = {
	items: ['first', 'second', 'third'],
};
WithState.storyName = '2. Way (with state)';
