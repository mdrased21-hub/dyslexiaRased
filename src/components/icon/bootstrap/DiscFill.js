import * as React from 'react';

function SvgDiscFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M16 8A8 8 0 110 8a8 8 0 0116 0zm-6 0a2 2 0 10-4 0 2 2 0 004 0zM4 8a4 4 0 014-4 .5.5 0 000-1 5 5 0 00-5 5 .5.5 0 001 0zm9 0a.5.5 0 10-1 0 4 4 0 01-4 4 .5.5 0 000 1 5 5 0 005-5z' />
		</svg>
	);
}

export default SvgDiscFill;
