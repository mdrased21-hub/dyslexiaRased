import * as React from 'react';

function SvgLayoutSidebar(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M0 3a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm5-1v12h9a1 1 0 001-1V3a1 1 0 00-1-1H5zM4 2H2a1 1 0 00-1 1v10a1 1 0 001 1h2V2z' />
		</svg>
	);
}

export default SvgLayoutSidebar;
