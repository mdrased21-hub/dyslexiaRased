import * as React from 'react';

function SvgDoorClosed(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M3 2a1 1 0 011-1h8a1 1 0 011 1v13h1.5a.5.5 0 010 1h-13a.5.5 0 010-1H3V2zm1 13h8V2H4v13z' />
			<path d='M9 9a1 1 0 102 0 1 1 0 00-2 0z' />
		</svg>
	);
}

export default SvgDoorClosed;
