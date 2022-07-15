import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useDarkMode from '../../hooks/useDarkMode';

const Badge = ({ children, className, color, shadow, rounded, isLight, ...props }) => {
	const { darkModeStatus } = useDarkMode();
	return (
		<span
			className={classNames(
				'badge',
				{
					[`bg-${color}`]: !isLight,
					[`bg-l${darkModeStatus ? 'o25' : '10'}-${color}`]: isLight,
					[`text-${color}`]: isLight,
					[`shadow${shadow !== 'default' ? `-${shadow}` : ''}`]: !!shadow,
					[`rounded${rounded !== 'default' ? `-${rounded}` : ''}`]: rounded,
					'rounded-0':
						rounded === 'bottom' ||
						rounded === 'top' ||
						rounded === 'end' ||
						rounded === 'start' ||
						rounded === 0 ||
						rounded === '0',
				},
				className,
			)}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}>
			{children}
		</span>
	);
};
Badge.propTypes = {
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
	rounded: PropTypes.oneOf([
		'default',
		0,
		1,
		2,
		3,
		'bottom',
		'top',
		'circle',
		'end',
		'start',
		'pill',
	]),
	shadow: PropTypes.oneOf([null, 'none', 'sm', 'default', 'lg']),
	isLight: PropTypes.bool,
};
Badge.defaultProps = {
	className: null,
	color: 'primary',
	rounded: null,
	shadow: null,
	isLight: false,
};

export default Badge;
