import * as React from 'react';

function SvgArrow90DegDown(props) {
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
				d='M4.854 14.854a.5.5 0 01-.708 0l-4-4a.5.5 0 01.708-.708L4 13.293V3.5A2.5 2.5 0 016.5 1h8a.5.5 0 010 1h-8A1.5 1.5 0 005 3.5v9.793l3.146-3.147a.5.5 0 01.708.708l-4 4z'
			/>
		</svg>
	);
}

export default SvgArrow90DegDown;
