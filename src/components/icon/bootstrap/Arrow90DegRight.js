import * as React from 'react';

function SvgArrow90DegRight(props) {
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
				d='M14.854 4.854a.5.5 0 000-.708l-4-4a.5.5 0 00-.708.708L13.293 4H3.5A2.5 2.5 0 001 6.5v8a.5.5 0 001 0v-8A1.5 1.5 0 013.5 5h9.793l-3.147 3.146a.5.5 0 00.708.708l4-4z'
			/>
		</svg>
	);
}

export default SvgArrow90DegRight;
