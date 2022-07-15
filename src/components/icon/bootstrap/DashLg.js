import * as React from 'react';

function SvgDashLg(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path fillRule='evenodd' d='M2 8a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11A.5.5 0 012 8z' />
		</svg>
	);
}

export default SvgDashLg;
