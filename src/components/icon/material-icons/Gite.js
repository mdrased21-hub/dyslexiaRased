import * as React from 'react';

function SvgGite(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M4 12h10v5H4v-5zm16 5h-4v-6.17l2-2 2 2V17z' opacity={0.3} />
			<path d='M18 6H9V4H7v2H6l-4 4v9h20v-9l-4-4zM4 12h10v5H4v-5zm16 5h-4v-6.17l2-2 2 2V17z' />
		</svg>
	);
}

export default SvgGite;
