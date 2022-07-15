import * as React from 'react';

function SvgBattery(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M0 6a2 2 0 012-2h10a2 2 0 012 2v4a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm2-1a1 1 0 00-1 1v4a1 1 0 001 1h10a1 1 0 001-1V6a1 1 0 00-1-1H2zm14 3a1.5 1.5 0 01-1.5 1.5v-3A1.5 1.5 0 0116 8z' />
		</svg>
	);
}

export default SvgBattery;
