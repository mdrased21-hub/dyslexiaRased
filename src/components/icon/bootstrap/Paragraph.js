import * as React from 'react';

function SvgParagraph(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M10.5 15a.5.5 0 01-.5-.5V2H9v12.5a.5.5 0 01-1 0V9H7a4 4 0 110-8h5.5a.5.5 0 010 1H11v12.5a.5.5 0 01-.5.5z' />
		</svg>
	);
}

export default SvgParagraph;
