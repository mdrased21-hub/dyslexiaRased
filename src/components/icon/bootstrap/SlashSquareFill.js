import * as React from 'react';

function SvgSlashSquareFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm9.354 5.354l-6 6a.5.5 0 01-.708-.708l6-6a.5.5 0 01.708.708z' />
		</svg>
	);
}

export default SvgSlashSquareFill;
