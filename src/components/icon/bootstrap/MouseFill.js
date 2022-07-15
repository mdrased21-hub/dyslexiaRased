import * as React from 'react';

function SvgMouseFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M3 5a5 5 0 0110 0v6a5 5 0 01-10 0V5zm5.5-1.5a.5.5 0 00-1 0v2a.5.5 0 001 0v-2z' />
		</svg>
	);
}

export default SvgMouseFill;
