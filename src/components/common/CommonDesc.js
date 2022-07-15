import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Alert from '../bootstrap/Alert';

const CommonDesc = ({ children, className, color }) => {
	return (
		<Alert
			color={color}
			isLight
			shadow='md'
			borderWidth={0}
			icon='Info'
			className={classNames('flex-nowrap', 'w-100', 'mb-0', className)}>
			{children}
		</Alert>
	);
};
CommonDesc.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	color: PropTypes.oneOf([
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
		'light',
		'dark',
	]),
};
CommonDesc.defaultProps = {
	className: null,
	color: 'warning',
};

export default CommonDesc;
