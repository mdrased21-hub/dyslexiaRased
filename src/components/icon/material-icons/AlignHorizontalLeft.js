import * as React from 'react';

function SvgAlignHorizontalLeft(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M4 22H2V2h2v20zM22 7H6v3h16V7zm-6 7H6v3h10v-3z' />
		</svg>
	);
}

export default SvgAlignHorizontalLeft;
