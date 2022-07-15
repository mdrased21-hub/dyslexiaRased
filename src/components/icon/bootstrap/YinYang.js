import * as React from 'react';

function SvgYinYang(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M9.167 4.5a1.167 1.167 0 11-2.334 0 1.167 1.167 0 012.334 0z' />
			<path d='M8 0a8 8 0 100 16A8 8 0 008 0zM1 8a7 7 0 017-7 3.5 3.5 0 110 7 3.5 3.5 0 100 7 7 7 0 01-7-7zm7 4.667a1.167 1.167 0 110-2.334 1.167 1.167 0 010 2.334z' />
		</svg>
	);
}

export default SvgYinYang;
