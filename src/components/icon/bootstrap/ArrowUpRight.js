import * as React from 'react';

function SvgArrowUpRight(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path
				fillRule='evenodd'
				d='M14 2.5a.5.5 0 00-.5-.5h-6a.5.5 0 000 1h4.793L2.146 13.146a.5.5 0 00.708.708L13 3.707V8.5a.5.5 0 001 0v-6z'
			/>
		</svg>
	);
}

export default SvgArrowUpRight;
