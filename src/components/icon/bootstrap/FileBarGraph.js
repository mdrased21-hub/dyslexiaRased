import * as React from 'react';

function SvgFileBarGraph(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M4.5 12a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-1zm3 0a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-1zm3 0a.5.5 0 01-.5-.5v-6a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v6a.5.5 0 01-.5.5h-1z' />
			<path d='M4 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H4zm0 1h8a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z' />
		</svg>
	);
}

export default SvgFileBarGraph;
