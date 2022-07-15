import * as React from 'react';

function SvgCalendar3RangeFill(props) {
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
				d='M2 0a2 2 0 00-2 2h16a2 2 0 00-2-2H2zM0 8V3h16v2h-6a1 1 0 100 2h6v7a2 2 0 01-2 2H2a2 2 0 01-2-2v-4h6a1 1 0 100-2H0z'
			/>
		</svg>
	);
}

export default SvgCalendar3RangeFill;
