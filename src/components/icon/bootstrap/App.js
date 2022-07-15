import * as React from 'react';

function SvgApp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M11 2a3 3 0 013 3v6a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h6zM5 1a4 4 0 00-4 4v6a4 4 0 004 4h6a4 4 0 004-4V5a4 4 0 00-4-4H5z' />
		</svg>
	);
}

export default SvgApp;
