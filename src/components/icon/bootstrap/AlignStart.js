import * as React from 'react';

function SvgAlignStart(props) {
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
				d='M1.5 1a.5.5 0 01.5.5v13a.5.5 0 01-1 0v-13a.5.5 0 01.5-.5z'
			/>
			<path d='M3 7a1 1 0 011-1h10a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V7z' />
		</svg>
	);
}

export default SvgAlignStart;
