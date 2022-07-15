import * as React from 'react';

function SvgBorderWidth(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M0 3.5A.5.5 0 01.5 3h15a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-2zm0 5A.5.5 0 01.5 8h15a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-1zm0 4a.5.5 0 01.5-.5h15a.5.5 0 010 1H.5a.5.5 0 01-.5-.5z' />
		</svg>
	);
}

export default SvgBorderWidth;
