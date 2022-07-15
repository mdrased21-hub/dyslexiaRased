import * as React from 'react';

function SvgHeadphones(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M8 3a5 5 0 00-5 5v1h1a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1V8a6 6 0 1112 0v5a1 1 0 01-1 1h-1a1 1 0 01-1-1v-3a1 1 0 011-1h1V8a5 5 0 00-5-5z' />
		</svg>
	);
}

export default SvgHeadphones;
