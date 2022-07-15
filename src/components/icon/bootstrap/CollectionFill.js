import * as React from 'react';

function SvgCollectionFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M0 13a1.5 1.5 0 001.5 1.5h13A1.5 1.5 0 0016 13V6a1.5 1.5 0 00-1.5-1.5h-13A1.5 1.5 0 000 6v7zM2 3a.5.5 0 00.5.5h11a.5.5 0 000-1h-11A.5.5 0 002 3zm2-2a.5.5 0 00.5.5h7a.5.5 0 000-1h-7A.5.5 0 004 1z' />
		</svg>
	);
}

export default SvgCollectionFill;
