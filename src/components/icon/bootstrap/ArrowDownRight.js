import * as React from 'react';

function SvgArrowDownRight(props) {
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
				d='M14 13.5a.5.5 0 01-.5.5h-6a.5.5 0 010-1h4.793L2.146 2.854a.5.5 0 11.708-.708L13 12.293V7.5a.5.5 0 011 0v6z'
			/>
		</svg>
	);
}

export default SvgArrowDownRight;
