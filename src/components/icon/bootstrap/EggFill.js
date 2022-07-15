import * as React from 'react';

function SvgEggFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M14 10a6 6 0 01-12 0C2 5.686 5 0 8 0s6 5.686 6 10z' />
		</svg>
	);
}

export default SvgEggFill;
