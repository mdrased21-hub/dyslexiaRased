import * as React from 'react';

function SvgFileBreakFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M4 0h8a2 2 0 012 2v7H2V2a2 2 0 012-2zM2 12h12v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zM.5 10a.5.5 0 000 1h15a.5.5 0 000-1H.5z' />
		</svg>
	);
}

export default SvgFileBreakFill;
