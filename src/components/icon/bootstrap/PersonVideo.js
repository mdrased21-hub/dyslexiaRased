import * as React from 'react';

function SvgPersonVideo(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M8 9.05a2.5 2.5 0 100-5 2.5 2.5 0 000 5z' />
			<path d='M2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 01-1-1V4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1h-1.202z' />
		</svg>
	);
}

export default SvgPersonVideo;
