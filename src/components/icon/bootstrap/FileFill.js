import * as React from 'react';

function SvgFileFill(props) {
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
				d='M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'
			/>
		</svg>
	);
}

export default SvgFileFill;
