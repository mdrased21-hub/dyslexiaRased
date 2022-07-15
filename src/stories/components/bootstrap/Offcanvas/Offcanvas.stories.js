import React, { useEffect, useState } from 'react';
import OffCanvas, {
	OffCanvasBody,
	OffCanvasHeader,
	OffCanvasTitle,
} from '../../../../components/bootstrap/OffCanvas';
import Button from '../../../../components/bootstrap/Button';

export default {
	title: `Components/<OffCanvas>`,
	component: OffCanvas,
	subcomponent: { OffCanvasHeader, OffCanvasTitle, OffCanvasBody },
	argTypes: {
		isOpen: { control: 'boolean' },
		setOpen: { control: false },
		id: { control: 'text' },
		tag: { control: 'inline-radio' },
		titleId: { control: 'text' },
		placement: { control: 'inline-radio' },
		isBodyScroll: { control: 'boolean' },
		isBackdrop: { control: 'boolean' },
		isModalStyle: { control: 'boolean' },
		isRightPanel: { control: 'boolean' },
		children: { control: false },
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
			<Button color='info' isLight onClick={() => setState(!state)}>
				Toggle offcanvas
			</Button>
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<OffCanvas {...args} placement={args.placement} isOpen={state} setOpen={setState}>
				<OffCanvasHeader className='...' setOpen={setState}>
					<OffCanvasTitle id='...'>Title</OffCanvasTitle>
				</OffCanvasHeader>
				<OffCanvasBody className='...'>Body</OffCanvasBody>
			</OffCanvas>
		</>
	);
};

export const Default = Template.bind({});
Default.args = {
	isOpen: false,
	id: 'example',
	titleId: 'exampleTitle',
	placement: 'end',
	isBodyScroll: false,
	isBackdrop: true,
	isModalStyle: false,
	isRightPanel: false,
};
