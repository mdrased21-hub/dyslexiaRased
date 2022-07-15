import * as React from 'react';

function SvgOpenInFull(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10z' />
		</svg>
	);
}

export default SvgOpenInFull;
