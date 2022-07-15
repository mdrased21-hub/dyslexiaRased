import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PlaceholderImage = ({ width, height, text, className, ariaLabel }) => {
	return (
		<svg
			className={classNames('placeholder-img', className)}
			width={width}
			height={height}
			xmlns='http://www.w3.org/2000/svg'
			role='img'
			aria-label={ariaLabel || `Example placeholder image: ${width}x${height}`}
			preserveAspectRatio='xMidYMid slice'
			focusable='false'>
			<title>Example placeholder image</title>
			<rect width='100%' height='100%' fill='var(--bs-gray)' />
			<text
				x='50%'
				y='50%'
				dominantBaseline='middle'
				textAnchor='middle'
				fill='#dee2e6'
				fontSize='1.25rem'
				dy='.1rem'>
				{text || `${width}x${height}`}
			</text>
		</svg>
	);
};
PlaceholderImage.propTypes = {
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	text: PropTypes.string,
	className: PropTypes.string,
	ariaLabel: PropTypes.string,
};
PlaceholderImage.defaultProps = {
	width: 75,
	height: 75,
	text: null,
	className: null,
	ariaLabel: null,
};

export default PlaceholderImage;
