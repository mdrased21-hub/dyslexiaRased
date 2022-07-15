import * as React from 'react';

function SvgDice2Fill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M0 3a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3H3a3 3 0 01-3-3V3zm5.5 1a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
		</svg>
	);
}

export default SvgDice2Fill;
