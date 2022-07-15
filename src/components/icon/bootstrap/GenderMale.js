import * as React from 'react';

function SvgGenderMale(props) {
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
				d='M9.5 2a.5.5 0 010-1h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V2.707L9.871 6.836a5 5 0 11-.707-.707L13.293 2H9.5zM6 6a4 4 0 100 8 4 4 0 000-8z'
			/>
		</svg>
	);
}

export default SvgGenderMale;
