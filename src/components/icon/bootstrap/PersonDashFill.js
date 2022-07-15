import * as React from 'react';

function SvgPersonDashFill(props) {
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
				d='M11 7.5a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z'
			/>
			<path d='M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 100-6 3 3 0 000 6z' />
		</svg>
	);
}

export default SvgPersonDashFill;
