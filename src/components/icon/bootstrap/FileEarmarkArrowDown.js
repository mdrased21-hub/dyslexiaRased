import * as React from 'react';

function SvgFileEarmarkArrowDown(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M8.5 6.5a.5.5 0 00-1 0v3.793L6.354 9.146a.5.5 0 10-.708.708l2 2a.5.5 0 00.708 0l2-2a.5.5 0 00-.708-.708L8.5 10.293V6.5z' />
			<path d='M14 14V4.5L9.5 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2zM9.5 3A1.5 1.5 0 0011 4.5h2V14a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1h5.5v2z' />
		</svg>
	);
}

export default SvgFileEarmarkArrowDown;
