import * as React from 'react';

function SvgAlignEnd(props) {
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
				d='M14.5 1a.5.5 0 00-.5.5v13a.5.5 0 001 0v-13a.5.5 0 00-.5-.5z'
			/>
			<path d='M13 7a1 1 0 00-1-1H2a1 1 0 00-1 1v2a1 1 0 001 1h10a1 1 0 001-1V7z' />
		</svg>
	);
}

export default SvgAlignEnd;
