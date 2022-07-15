import * as React from 'react';

function SvgBucketFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M2.522 5H2a.5.5 0 00-.494.574l1.372 9.149A1.5 1.5 0 004.36 16h7.278a1.5 1.5 0 001.483-1.277l1.373-9.149A.5.5 0 0014 5h-.522A5.5 5.5 0 002.522 5zm1.005 0a4.5 4.5 0 018.945 0H3.527z' />
		</svg>
	);
}

export default SvgBucketFill;
