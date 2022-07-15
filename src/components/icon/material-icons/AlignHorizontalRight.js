import * as React from 'react';

function SvgAlignHorizontalRight(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M20 2h2v20h-2V2zM2 10h16V7H2v3zm6 7h10v-3H8v3z' />
		</svg>
	);
}

export default SvgAlignHorizontalRight;
