import * as React from 'react';

function SvgSlashCircleFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M16 8A8 8 0 110 8a8 8 0 0116 0zm-4.646-2.646a.5.5 0 00-.708-.708l-6 6a.5.5 0 00.708.708l6-6z' />
		</svg>
	);
}

export default SvgSlashCircleFill;
