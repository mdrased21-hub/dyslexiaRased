import * as React from 'react';

function SvgWebcamFill(props) {
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
				d='M6.644 11.094a.5.5 0 01.356-.15h2a.5.5 0 01.356.15c.175.177.39.347.603.496a7.166 7.166 0 00.752.456l.01.006h.003A.5.5 0 0110.5 13h-5a.5.5 0 01-.224-.947l.002-.001.01-.006a3.517 3.517 0 00.214-.116 7.5 7.5 0 00.539-.34c.214-.15.428-.319.603-.496z'
			/>
			<path d='M7 6.5a1 1 0 112 0 1 1 0 01-2 0z' />
			<path
				fillRule='evenodd'
				d='M2 3a2 2 0 00-2 2v3a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H2zm6 1.5a2 2 0 100 4 2 2 0 000-4zM12.5 7a.5.5 0 100-1 .5.5 0 000 1z'
			/>
		</svg>
	);
}

export default SvgWebcamFill;
