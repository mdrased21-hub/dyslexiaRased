import * as React from 'react';

function SvgViewCarousel(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path opacity={0.3} d='M9 7h6v10H9z' />
			<path d='M2 7h4v10H2V7zm5 12h10V5H7v14zM9 7h6v10H9V7zm9 0h4v10h-4V7z' />
		</svg>
	);
}

export default SvgViewCarousel;
