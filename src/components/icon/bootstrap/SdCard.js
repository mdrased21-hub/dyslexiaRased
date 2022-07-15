import * as React from 'react';

function SvgSdCard(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M6.25 3.5a.75.75 0 00-1.5 0v2a.75.75 0 001.5 0v-2zm2 0a.75.75 0 00-1.5 0v2a.75.75 0 001.5 0v-2zm2 0a.75.75 0 00-1.5 0v2a.75.75 0 001.5 0v-2zm2 0a.75.75 0 00-1.5 0v2a.75.75 0 001.5 0v-2z' />
			<path
				fillRule='evenodd'
				d='M5.914 0H12.5A1.5 1.5 0 0114 1.5v13a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 14.5V3.914c0-.398.158-.78.44-1.06L4.853.439A1.5 1.5 0 015.914 0zM13 1.5a.5.5 0 00-.5-.5H5.914a.5.5 0 00-.353.146L3.146 3.561A.5.5 0 003 3.914V14.5a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-13z'
			/>
		</svg>
	);
}

export default SvgSdCard;
