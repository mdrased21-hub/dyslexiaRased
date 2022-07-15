import * as React from 'react';

function SvgFilterCircle(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z' />
			<path d='M7 11.5a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z' />
		</svg>
	);
}

export default SvgFilterCircle;
