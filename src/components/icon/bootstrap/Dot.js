import * as React from 'react';

function SvgDot(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
		</svg>
	);
}

export default SvgDot;
