import * as React from 'react';

function SvgBroadcast(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M3.05 3.05a7 7 0 000 9.9.5.5 0 01-.707.707 8 8 0 010-11.314.5.5 0 01.707.707zm2.122 2.122a4 4 0 000 5.656.5.5 0 11-.708.708 5 5 0 010-7.072.5.5 0 01.708.708zm5.656-.708a.5.5 0 01.708 0 5 5 0 010 7.072.5.5 0 11-.708-.708 4 4 0 000-5.656.5.5 0 010-.708zm2.122-2.12a.5.5 0 01.707 0 8 8 0 010 11.313.5.5 0 01-.707-.707 7 7 0 000-9.9.5.5 0 010-.707zM10 8a2 2 0 11-4 0 2 2 0 014 0z' />
		</svg>
	);
}

export default SvgBroadcast;
