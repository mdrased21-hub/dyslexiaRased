import * as React from 'react';

function SvgFileEarmarkFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M4 0h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm5.5 1.5v2a1 1 0 001 1h2l-3-3z' />
		</svg>
	);
}

export default SvgFileEarmarkFill;
