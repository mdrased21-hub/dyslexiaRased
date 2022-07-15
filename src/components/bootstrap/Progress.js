import React, { Children, cloneElement, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	// stylelint-disable-next-line selector-type-no-unknown
	dynamicHeight: (props) => ({
		height: props.height,
	}),
});

const Progress = forwardRef(
	(
		{
			value,
			min,
			max,
			height,
			isStriped,
			isAnimated,
			isAutoColor,
			color,
			children,
			className,
			// eslint-disable-next-line react/prop-types
			isOnlyBar,
			...props
		},
		ref,
	) => {
		const _value = (100 * (value - min)) / (max - min);
		const classes = useStyles({ height });

		const _onlyBar = (
			<div
				style={{
					width: `${_value}%`,
				}}
				className={classNames(
					'progress-bar',
					{
						'bg-danger': _value < 25 && isAutoColor,
						'bg-warning': _value >= 25 && _value < 50 && isAutoColor,
						'bg-info': _value >= 50 && _value < 75 && isAutoColor,
						'bg-success': _value >= 75 && isAutoColor,
					},
					{
						[`bg-${color}`]: color && !isAutoColor,
						'progress-bar-striped': isStriped || isAnimated,
						'progress-bar-animated': isAnimated,
					},
				)}
				role='progressbar'
				aria-label={`${value}%`}
				aria-valuenow={value}
				aria-valuemin={min}
				aria-valuemax={max}
			/>
		);

		if (isOnlyBar) {
			return _onlyBar;
		}
		return (
			<div
				ref={ref}
				className={classNames('progress', { [classes.dynamicHeight]: !!height }, className)}
				style={{
					// eslint-disable-next-line react/prop-types
					...props.style,
				}}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...props}>
				{children
					? Children.map(children, (child) => cloneElement(child, { isOnlyBar: true }))
					: _onlyBar}
			</div>
		);
	},
);
Progress.propTypes = {
	value: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number,
	/**
	 * If the value is a number, it is automatically used as px. Example: 10, '1rem', '5vh', etc.
	 */
	height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	isStriped: PropTypes.bool,
	isAnimated: PropTypes.bool,
	isAutoColor: PropTypes.bool,
	color: PropTypes.oneOf([
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
		'light',
		'dark',
		'link',
		'brand',
		'brand-two',
		'storybook',
	]),
	/**
	 * To use more than one `<Progress />`
	 */
	children: PropTypes.node,
	className: PropTypes.string,
};
Progress.defaultProps = {
	value: 0,
	min: 0,
	max: 100,
	height: null,
	isStriped: false,
	isAnimated: false,
	isAutoColor: false,
	color: null,
	children: null,
	className: null,
};

export default Progress;
