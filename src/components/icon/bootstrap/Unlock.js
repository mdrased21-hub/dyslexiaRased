import * as React from 'react';

function SvgUnlock(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M11 1a2 2 0 00-2 2v4a2 2 0 012 2v5a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2h5V3a3 3 0 016 0v4a.5.5 0 01-1 0V3a2 2 0 00-2-2zM3 8a1 1 0 00-1 1v5a1 1 0 001 1h6a1 1 0 001-1V9a1 1 0 00-1-1H3z' />
		</svg>
	);
}

export default SvgUnlock;
