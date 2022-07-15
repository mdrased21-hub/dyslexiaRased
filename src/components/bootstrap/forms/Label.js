import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Label = ({
	htmlFor,
	className,
	children,
	isColForLabel,
	isHidden,
	size,
	title,
	ariaLabelledby,
	ariaLabel,
	...props
}) => {
	return (
		<label
			htmlFor={htmlFor}
			className={classNames(
				'form-label',
				{
					'col-form-label': isColForLabel,
					[`col-form-label-${size}`]: isColForLabel && !!size,
					'visually-hidden': isHidden,
				},
				className,
			)}
			title={title}
			aria-label={ariaLabel}
			aria-labelledby={ariaLabelledby}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}>
			{children}
		</label>
	);
};
Label.propTypes = {
	htmlFor: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node,
	isColForLabel: PropTypes.bool,
	isHidden: PropTypes.bool,
	size: PropTypes.oneOf(['sm', null, 'lg']),
	title: PropTypes.string,
	ariaLabelledby: PropTypes.string,
	ariaLabel: PropTypes.string,
};
Label.defaultProps = {
	htmlFor: null,
	className: null,
	children: null,
	isColForLabel: false,
	isHidden: false,
	size: null,
	title: null,
	ariaLabelledby: null,
	ariaLabel: null,
};

export default Label;
