import * as React from 'react';

function SvgPlayBtn(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M6.79 5.093A.5.5 0 006 5.5v5a.5.5 0 00.79.407l3.5-2.5a.5.5 0 000-.814l-3.5-2.5z' />
			<path d='M0 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm15 0a1 1 0 00-1-1H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4z' />
		</svg>
	);
}

export default SvgPlayBtn;
