import * as React from 'react';

function SvgEast(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z' />
		</svg>
	);
}

export default SvgEast;
