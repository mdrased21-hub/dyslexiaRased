import * as React from 'react';

function SvgArrowBarRight(props) {
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
				d='M6 8a.5.5 0 00.5.5h5.793l-2.147 2.146a.5.5 0 00.708.708l3-3a.5.5 0 000-.708l-3-3a.5.5 0 00-.708.708L12.293 7.5H6.5A.5.5 0 006 8zm-2.5 7a.5.5 0 01-.5-.5v-13a.5.5 0 011 0v13a.5.5 0 01-.5.5z'
			/>
		</svg>
	);
}

export default SvgArrowBarRight;
