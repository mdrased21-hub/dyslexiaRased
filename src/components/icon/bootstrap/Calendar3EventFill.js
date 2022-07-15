import * as React from 'react';

function SvgCalendar3EventFill(props) {
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
				d='M2 0a2 2 0 00-2 2h16a2 2 0 00-2-2H2zM0 14V3h16v11a2 2 0 01-2 2H2a2 2 0 01-2-2zm12-8a1 1 0 102 0 1 1 0 00-2 0z'
			/>
		</svg>
	);
}

export default SvgCalendar3EventFill;
