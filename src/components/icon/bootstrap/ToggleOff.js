import * as React from 'react';

function SvgToggleOff(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M11 4a4 4 0 010 8H8a4.992 4.992 0 002-4 4.992 4.992 0 00-2-4h3zm-6 8a4 4 0 110-8 4 4 0 010 8zM0 8a5 5 0 005 5h6a5 5 0 000-10H5a5 5 0 00-5 5z' />
		</svg>
	);
}

export default SvgToggleOff;
