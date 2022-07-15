import * as React from 'react';

function SvgUpc(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M3 4.5a.5.5 0 011 0v7a.5.5 0 01-1 0v-7zm2 0a.5.5 0 011 0v7a.5.5 0 01-1 0v-7zm2 0a.5.5 0 011 0v7a.5.5 0 01-1 0v-7zm2 0a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-7zm3 0a.5.5 0 011 0v7a.5.5 0 01-1 0v-7z' />
		</svg>
	);
}

export default SvgUpc;
