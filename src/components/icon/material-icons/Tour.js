import * as React from 'react';

function SvgTour(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path opacity={0.3} d='M7 12V6h11.05l-1.2 3 1.2 3z' />
			<path d='M21 4H7V2H5v20h2v-8h14l-2-5 2-5zM7 12V6h11.05l-1.2 3 1.2 3H7zm7-3c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z' />
		</svg>
	);
}

export default SvgTour;
