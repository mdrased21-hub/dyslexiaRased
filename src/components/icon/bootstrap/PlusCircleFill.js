import * as React from 'react';

function SvgPlusCircleFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M16 8A8 8 0 110 8a8 8 0 0116 0zM8.5 4.5a.5.5 0 00-1 0v3h-3a.5.5 0 000 1h3v3a.5.5 0 001 0v-3h3a.5.5 0 000-1h-3v-3z' />
		</svg>
	);
}

export default SvgPlusCircleFill;
