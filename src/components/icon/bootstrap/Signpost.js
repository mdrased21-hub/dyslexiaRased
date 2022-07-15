import * as React from 'react';

function SvgSignpost(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M7 1.414V4H2a1 1 0 00-1 1v4a1 1 0 001 1h5v6h2v-6h3.532a1 1 0 00.768-.36l1.933-2.32a.5.5 0 000-.64L13.3 4.36a1 1 0 00-.768-.36H9V1.414a1 1 0 00-2 0zM12.532 5l1.666 2-1.666 2H2V5h10.532z' />
		</svg>
	);
}

export default SvgSignpost;
