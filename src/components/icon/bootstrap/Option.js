import * as React from 'react';

function SvgOption(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M1 2.5a.5.5 0 01.5-.5h3.797a.5.5 0 01.439.26L11 13h3.5a.5.5 0 010 1h-3.797a.5.5 0 01-.439-.26L5 3H1.5a.5.5 0 01-.5-.5zm10 0a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5z' />
		</svg>
	);
}

export default SvgOption;
