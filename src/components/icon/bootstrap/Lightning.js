import * as React from 'react';

function SvgLightning(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M5.52.359A.5.5 0 016 0h4a.5.5 0 01.474.658L8.694 6H12.5a.5.5 0 01.395.807l-7 9a.5.5 0 01-.873-.454L6.823 9.5H3.5a.5.5 0 01-.48-.641l2.5-8.5zM6.374 1L4.168 8.5H7.5a.5.5 0 01.478.647L6.78 13.04 11.478 7H8a.5.5 0 01-.474-.658L9.306 1H6.374z' />
		</svg>
	);
}

export default SvgLightning;
