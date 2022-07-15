import * as React from 'react';

function SvgArrowBarDown(props) {
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
				d='M1 3.5a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zM8 6a.5.5 0 01.5.5v5.793l2.146-2.147a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 01.708-.708L7.5 12.293V6.5A.5.5 0 018 6z'
			/>
		</svg>
	);
}

export default SvgArrowBarDown;
