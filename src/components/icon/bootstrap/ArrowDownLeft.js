import * as React from 'react';

function SvgArrowDownLeft(props) {
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
				d='M2 13.5a.5.5 0 00.5.5h6a.5.5 0 000-1H3.707L13.854 2.854a.5.5 0 00-.708-.708L3 12.293V7.5a.5.5 0 00-1 0v6z'
			/>
		</svg>
	);
}

export default SvgArrowDownLeft;
