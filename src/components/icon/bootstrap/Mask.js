import * as React from 'react';

function SvgMask(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M6.225 1.227A7.5 7.5 0 0110.5 8a7.5 7.5 0 01-4.275 6.773 7 7 0 100-13.546zM4.187.966a8 8 0 117.627 14.069A8 8 0 014.186.964z' />
		</svg>
	);
}

export default SvgMask;
