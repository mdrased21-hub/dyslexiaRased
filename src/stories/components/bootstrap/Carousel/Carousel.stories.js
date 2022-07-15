import React from 'react';
import Carousel from '../../../../components/bootstrap/Carousel';

export default {
	title: `Components/<Carousel>`,
	component: Carousel,
	argTypes: {
		items: {},
		id: { control: 'text' },
		activeItemIndex: { control: 'number' },
		isKeyboardControl: {},
		isHoverPause: {},
		isRide: {},
		interval: { control: 'number' },
		isSlide: {},
		isDark: {},
		isEnableTouch: {},
		isFade: {},
		isIndicators: {},
		isControl: {},
		className: { control: 'text' },
		rounded: { control: 'inline-radio', options: [null, 0, 1, 2, 3] },
		mouseEnter: { action: 'mouseEnter' },
		mouseLeave: { action: 'mouseLeave' },
	},
	decorators: [
		(Story) => (
			<div className='row'>
				<div className='col-xl-6 col-lg-8 col-md-10 mx-auto'>
					<Story />
				</div>
			</div>
		),
	],
};

// eslint-disable-next-line react/prop-types
const Template = ({ ...args }) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Carousel {...args} />
);

export const Default = Template.bind({});
Default.args = {
	items: [
		{
			src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
			altText: 'Slide 1',
			captionHeader: 'Slide 1 title',
			captionText: 'Slide 1 text',
		},
		{
			src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
			altText: 'Slide 2',
			captionHeader: 'Slide 2 title',
			captionText: 'Slide 2 text',
		},
		{
			src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
			altText: 'Slide 3',
			captionHeader: 'Slide 3 title',
			captionText: 'Slide 3 text',
		},
	],
	id: 'exampleCarousel',
	activeItemIndex: 0,
	isKeyboardControl: false,
	isHoverPause: false,
	isRide: false,
	interval: 5000,
	isSlide: true,
	isDark: false,
	isEnableTouch: true,
	isFade: false,
	isIndicators: true,
	isControl: true,
};
