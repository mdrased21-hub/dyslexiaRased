import * as React from 'react';

function SvgCircleHalf(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M8 15A7 7 0 108 1v14zm0 1A8 8 0 118 0a8 8 0 010 16z' />
		</svg>
	);
}

export default SvgCircleHalf;
