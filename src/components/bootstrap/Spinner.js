import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import TagWrapper from '../TagWrapper';

const useStyles = createUseStyles({
	// stylelint-disable-next-line selector-type-no-unknown
	dynamicSize: (props) => ({
		height: props.size,
		width: props.size,
	}),
});

const Spinner = forwardRef(
	({ tag, color, isGrow, isSmall, size, children, inButton, className, ...props }, ref) => {
		const classes = useStyles({ size });

		const _hiddenText = <span className='visually-hidden'>{children}</span>;
		return (
			<>
				<TagWrapper
					ref={ref}
					tag={inButton ? 'span' : tag}
					className={classNames(
						{ 'spinner-border': !isGrow, 'spinner-grow': isGrow },
						{
							'spinner-border-sm': !isGrow && isSmall,
							'spinner-grow-sm': isGrow && isSmall,
						},
						{ [`text-${color}`]: color },
						{ [classes.dynamicSize]: size },
						{ 'me-2': inButton !== 'onlyIcon' && !!inButton },
						className,
					)}
					role='status'
					aria-hidden={inButton ? 'true' : null}
					// eslint-disable-next-line react/jsx-props-no-spreading
					{...props}>
					{inButton !== 'onlyIcon' && !!inButton ? _hiddenText : null}
				</TagWrapper>
				{inButton === 'onlyIcon' ? _hiddenText : null}
			</>
		);
	},
);
Spinner.propTypes = {
	children: PropTypes.node,
	tag: PropTypes.oneOf(['div', 'span']),
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
	isGrow: PropTypes.bool,
	isSmall: PropTypes.bool,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	inButton: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['onlyIcon'])]),
	className: PropTypes.string,
};
Spinner.defaultProps = {
	children: 'Loading...',
	tag: 'div',
	color: null,
	isGrow: false,
	isSmall: false,
	size: null,
	inButton: false,
	className: null,
};

export default Spinner;
