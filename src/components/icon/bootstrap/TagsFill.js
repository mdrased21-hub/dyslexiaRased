import * as React from 'react';

function SvgTagsFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M2 2a1 1 0 011-1h4.586a1 1 0 01.707.293l7 7a1 1 0 010 1.414l-4.586 4.586a1 1 0 01-1.414 0l-7-7A1 1 0 012 6.586V2zm3.5 4a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
			<path d='M1.293 7.793A1 1 0 011 7.086V2a1 1 0 00-1 1v4.586a1 1 0 00.293.707l7 7a1 1 0 001.414 0l.043-.043-7.457-7.457z' />
		</svg>
	);
}

export default SvgTagsFill;
