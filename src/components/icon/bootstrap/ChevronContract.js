import * as React from 'react';

function SvgChevronContract(props) {
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
				d='M3.646 13.854a.5.5 0 00.708 0L8 10.207l3.646 3.647a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0l-4 4a.5.5 0 000 .708zm0-11.708a.5.5 0 01.708 0L8 5.793l3.646-3.647a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 010-.708z'
			/>
		</svg>
	);
}

export default SvgChevronContract;
