import * as React from 'react';

function SvgFileDownload(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path opacity={0.3} d='M14.17 11H13V5h-2v6H9.83L12 13.17z' />
			<path d='M5 18h14v2H5zM19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11z' />
		</svg>
	);
}

export default SvgFileDownload;
