import * as React from 'react';

function SvgDashSquare(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z' />
			<path d='M4 8a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 014 8z' />
		</svg>
	);
}

export default SvgDashSquare;
