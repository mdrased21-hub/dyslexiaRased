import * as React from 'react';

function SvgPinMap(props) {
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
				d='M3.1 11.2a.5.5 0 01.4-.2H6a.5.5 0 010 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 010-1h2.5a.5.5 0 01.4.2l3 4a.5.5 0 01-.4.8H.5a.5.5 0 01-.4-.8l3-4z'
			/>
			<path
				fillRule='evenodd'
				d='M8 1a3 3 0 100 6 3 3 0 000-6zM4 4a4 4 0 114.5 3.969V13.5a.5.5 0 01-1 0V7.97A4 4 0 014 3.999z'
			/>
		</svg>
	);
}

export default SvgPinMap;
