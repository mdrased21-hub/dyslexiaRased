import * as React from 'react';

function SvgWest(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M9 19l1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z' />
		</svg>
	);
}

export default SvgWest;
