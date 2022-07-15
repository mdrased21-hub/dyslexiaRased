import * as React from 'react';

function SvgSquareHalf(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M8 15V1h6a1 1 0 011 1v12a1 1 0 01-1 1H8zm6 1a2 2 0 002-2V2a2 2 0 00-2-2H2a2 2 0 00-2 2v12a2 2 0 002 2h12z' />
		</svg>
	);
}

export default SvgSquareHalf;
