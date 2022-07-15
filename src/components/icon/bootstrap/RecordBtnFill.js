import * as React from 'react';

function SvgRecordBtnFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M0 12V4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2zm8-1a3 3 0 100-6 3 3 0 000 6z' />
		</svg>
	);
}

export default SvgRecordBtnFill;
