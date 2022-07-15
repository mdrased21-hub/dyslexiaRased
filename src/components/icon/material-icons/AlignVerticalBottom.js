import * as React from 'react';

function SvgAlignVerticalBottom(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M22 22H2v-2h20v2zM10 2H7v16h3V2zm7 6h-3v10h3V8z' />
		</svg>
	);
}

export default SvgAlignVerticalBottom;
