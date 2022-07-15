import * as React from 'react';

function SvgFilterSquareFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm.5 5h11a.5.5 0 010 1h-11a.5.5 0 010-1zM4 8.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm2 3a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5z' />
		</svg>
	);
}

export default SvgFilterSquareFill;
