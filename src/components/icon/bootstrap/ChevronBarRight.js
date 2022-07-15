import * as React from 'react';

function SvgChevronBarRight(props) {
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
				d='M4.146 3.646a.5.5 0 000 .708L7.793 8l-3.647 3.646a.5.5 0 00.708.708l4-4a.5.5 0 000-.708l-4-4a.5.5 0 00-.708 0zM11.5 1a.5.5 0 01.5.5v13a.5.5 0 01-1 0v-13a.5.5 0 01.5-.5z'
			/>
		</svg>
	);
}

export default SvgChevronBarRight;
