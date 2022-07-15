import * as React from 'react';

function SvgRecordFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path fillRule='evenodd' d='M8 13A5 5 0 108 3a5 5 0 000 10z' />
		</svg>
	);
}

export default SvgRecordFill;
