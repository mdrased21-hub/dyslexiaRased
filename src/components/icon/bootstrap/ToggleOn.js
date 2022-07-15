import * as React from 'react';

function SvgToggleOn(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M5 3a5 5 0 000 10h6a5 5 0 000-10H5zm6 9a4 4 0 110-8 4 4 0 010 8z' />
		</svg>
	);
}

export default SvgToggleOn;
