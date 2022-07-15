import * as React from 'react';

function SvgBookshelf(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M2.5 0a.5.5 0 01.5.5V2h10V.5a.5.5 0 011 0v15a.5.5 0 01-1 0V15H3v.5a.5.5 0 01-1 0V.5a.5.5 0 01.5-.5zM3 14h10v-3H3v3zm0-4h10V7H3v3zm0-4h10V3H3v3z' />
		</svg>
	);
}

export default SvgBookshelf;
