import * as React from 'react';

function SvgDice1Fill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M3 0a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3H3zm5 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z' />
		</svg>
	);
}

export default SvgDice1Fill;
