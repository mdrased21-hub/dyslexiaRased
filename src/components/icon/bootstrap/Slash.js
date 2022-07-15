import * as React from 'react';

function SvgSlash(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M11.354 4.646a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708l6-6a.5.5 0 01.708 0z' />
		</svg>
	);
}

export default SvgSlash;
