import * as React from 'react';

function SvgPentagonFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M8 0l8 6.5-3 9.5H3L0 6.5 8 0z' />
		</svg>
	);
}

export default SvgPentagonFill;
