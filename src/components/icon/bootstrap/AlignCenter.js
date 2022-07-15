import * as React from 'react';

function SvgAlignCenter(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M8 1a.5.5 0 01.5.5V6h-1V1.5A.5.5 0 018 1zm0 14a.5.5 0 01-.5-.5V10h1v4.5a.5.5 0 01-.5.5zM2 7a1 1 0 011-1h10a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V7z' />
		</svg>
	);
}

export default SvgAlignCenter;
