import * as React from 'react';

function SvgSegmentedNav(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M0 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm6 3h4V5H6v4zm9-1V6a1 1 0 00-1-1h-3v4h3a1 1 0 001-1z' />
		</svg>
	);
}

export default SvgSegmentedNav;
