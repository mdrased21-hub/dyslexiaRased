import * as React from 'react';

function SvgBullseye(props) {
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
			<path d='M8 13A5 5 0 118 3a5 5 0 010 10zm0 1A6 6 0 108 2a6 6 0 000 12z' />
			<path d='M8 11a3 3 0 110-6 3 3 0 010 6zm0 1a4 4 0 100-8 4 4 0 000 8z' />
			<path d='M9.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z' />
		</svg>
	);
}

export default SvgBullseye;
