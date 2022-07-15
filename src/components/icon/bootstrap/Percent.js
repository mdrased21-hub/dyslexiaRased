import * as React from 'react';

function SvgPercent(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M13.442 2.558a.625.625 0 010 .884l-10 10a.625.625 0 11-.884-.884l10-10a.625.625 0 01.884 0zM4.5 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 1a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm7 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 1a2.5 2.5 0 100-5 2.5 2.5 0 000 5z' />
		</svg>
	);
}

export default SvgPercent;
