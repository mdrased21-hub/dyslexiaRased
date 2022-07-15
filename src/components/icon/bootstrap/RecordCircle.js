import * as React from 'react';

function SvgRecordCircle(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z' />
			<path d='M11 8a3 3 0 11-6 0 3 3 0 016 0z' />
		</svg>
	);
}

export default SvgRecordCircle;
