import * as React from 'react';

function SvgAmpStories(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M9 6h6v11H9z' opacity={0.3} />
			<path d='M7 19h10V4H7v15zM9 6h6v11H9V6zM3 6h2v11H3zM19 6h2v11h-2z' />
		</svg>
	);
}

export default SvgAmpStories;
