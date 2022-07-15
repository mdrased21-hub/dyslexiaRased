import * as React from 'react';

function SvgMonitor(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z' />
			<path opacity={0.3} d='M4 5h16v11H4z' />
		</svg>
	);
}

export default SvgMonitor;
