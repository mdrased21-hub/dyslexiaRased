import * as React from 'react';

function SvgPauseCircle(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z' />
			<path d='M5 6.25a1.25 1.25 0 112.5 0v3.5a1.25 1.25 0 11-2.5 0v-3.5zm3.5 0a1.25 1.25 0 112.5 0v3.5a1.25 1.25 0 11-2.5 0v-3.5z' />
		</svg>
	);
}

export default SvgPauseCircle;
