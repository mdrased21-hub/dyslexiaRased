import * as React from 'react';

function SvgCircleFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<circle cx={8} cy={8} r={8} />
		</svg>
	);
}

export default SvgCircleFill;
