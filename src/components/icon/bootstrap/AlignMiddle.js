import * as React from 'react';

function SvgAlignMiddle(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M6 13a1 1 0 001 1h2a1 1 0 001-1V3a1 1 0 00-1-1H7a1 1 0 00-1 1v10zM1 8a.5.5 0 00.5.5H6v-1H1.5A.5.5 0 001 8zm14 0a.5.5 0 01-.5.5H10v-1h4.5a.5.5 0 01.5.5z' />
		</svg>
	);
}

export default SvgAlignMiddle;
