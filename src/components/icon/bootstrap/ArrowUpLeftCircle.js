import * as React from 'react';

function SvgArrowUpLeftCircle(props) {
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
				d='M1 8a7 7 0 1014 0A7 7 0 001 8zm15 0A8 8 0 110 8a8 8 0 0116 0zm-5.904 2.803a.5.5 0 10.707-.707L6.707 6h2.768a.5.5 0 100-1H5.5a.5.5 0 00-.5.5v3.975a.5.5 0 001 0V6.707l4.096 4.096z'
			/>
		</svg>
	);
}

export default SvgArrowUpLeftCircle;
