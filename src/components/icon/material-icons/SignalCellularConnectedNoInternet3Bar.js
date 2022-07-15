import * as React from 'react';

function SvgSignalCellularConnectedNoInternet3Bar(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M22 8V2L2 22h16V8h4z' fillOpacity={0.3} />
			<path d='M18 22V6L2 22h16zm2-12v8h2v-8h-2zm0 12h2v-2h-2v2z' />
		</svg>
	);
}

export default SvgSignalCellularConnectedNoInternet3Bar;
