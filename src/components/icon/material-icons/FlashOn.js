import * as React from 'react';

function SvgFlashOn(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M17 10h-4l3-8H7v11h3v9z' />
		</svg>
	);
}

export default SvgFlashOn;
