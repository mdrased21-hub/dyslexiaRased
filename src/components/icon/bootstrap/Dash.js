import * as React from 'react';

function SvgDash(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M4 8a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 014 8z' />
		</svg>
	);
}

export default SvgDash;
