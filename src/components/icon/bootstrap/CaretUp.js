import * as React from 'react';

function SvgCaretUp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659l4.796-5.48a1 1 0 011.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 01-.753-1.659z' />
		</svg>
	);
}

export default SvgCaretUp;
