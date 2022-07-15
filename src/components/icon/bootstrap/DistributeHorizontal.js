import * as React from 'react';

function SvgDistributeHorizontal(props) {
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
				d='M14.5 1a.5.5 0 00-.5.5v13a.5.5 0 001 0v-13a.5.5 0 00-.5-.5zm-13 0a.5.5 0 00-.5.5v13a.5.5 0 001 0v-13a.5.5 0 00-.5-.5z'
			/>
			<path d='M6 13a1 1 0 001 1h2a1 1 0 001-1V3a1 1 0 00-1-1H7a1 1 0 00-1 1v10z' />
		</svg>
	);
}

export default SvgDistributeHorizontal;
