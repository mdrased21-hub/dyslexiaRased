import * as React from 'react';

function SvgDistributeVertical(props) {
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
				d='M1 1.5a.5.5 0 00.5.5h13a.5.5 0 000-1h-13a.5.5 0 00-.5.5zm0 13a.5.5 0 00.5.5h13a.5.5 0 000-1h-13a.5.5 0 00-.5.5z'
			/>
			<path d='M2 7a1 1 0 011-1h10a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V7z' />
		</svg>
	);
}

export default SvgDistributeVertical;
