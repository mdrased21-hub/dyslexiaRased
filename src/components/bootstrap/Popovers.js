import React, { cloneElement, useState } from 'react';
import { usePopper } from 'react-popper';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Portal from '../../layout/Portal/Portal';

const Popovers = ({
	children,
	className,
	bodyClassName,
	title,
	desc,
	placement,
	flip,
	trigger,
	delay,
	isDisplayInline,
	modifiers,
	...props
}) => {
	const [referenceElement, setReferenceElement] = useState(null);
	const [popperElement, setPopperElement] = useState(null);
	const [arrowElement, setArrowElement] = useState(null);
	const { styles, attributes } = usePopper(referenceElement, popperElement, {
		placement,
		modifiers: [
			{
				name: 'offset',
				options: {
					offset: [0, 6.5],
				},
			},
			{
				name: 'flip',
				enabled: true,
				options: {
					fallbackPlacements: flip,
				},
			},
			{
				name: 'arrow',
				options: {
					element: arrowElement,
				},
			},
			{ ...modifiers },
		],
	});

	const [popoverOpen, setPopoverOpen] = useState(false);

	const _onClick = () => {
		if (trigger === 'click') setPopoverOpen(!popoverOpen);
		if (children?.props?.onClick) children.props.onClick();
	};

	const _onMouseOver = () => {
		if (trigger === 'hover') setPopoverOpen(true);
		if (children?.props?.onMouseOver) children.props.onMouseOver();
	};

	const _onMouseLeave = () => {
		if (trigger === 'hover') setTimeout(() => setPopoverOpen(false), delay);
		if (children?.props?.onMouseLeave) children.props.onMouseLeave();
	};

	const _props = {
		className: classNames(
			{ 'd-inline-block': isDisplayInline, 'popover-string': typeof children === 'string' },
			children?.props?.className,
		),
		onClick: _onClick,
		onMouseOver: _onMouseOver,
		onMouseLeave: _onMouseLeave,
	};

	return (
		<>
			{cloneElement(
				typeof children === 'string' ? (
					// eslint-disable-next-line react/jsx-props-no-spreading
					<span ref={setReferenceElement} {..._props}>
						{children}
					</span>
				) : (
					children
				),
				{
					ref: setReferenceElement,
					..._props,
				},
			)}
			{popoverOpen && (
				<Portal>
					<div
						ref={setPopperElement}
						role='tooltip'
						className={classNames('popover', 'bs-popover-auto', className)}
						style={styles.popper}
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...props}
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...attributes.popper}>
						<div ref={setArrowElement} className='popover-arrow' style={styles.arrow} />
						{title && <h3 className='popover-header'>{title}</h3>}
						{desc && (
							<div className={classNames('popover-body', bodyClassName)}>{desc}</div>
						)}
					</div>
				</Portal>
			)}
		</>
	);
};
Popovers.propTypes = {
	/**
	 * String, HTML or React Component (`<Component {...props} />`)
	 */
	children: PropTypes.node.isRequired,
	title: PropTypes.string,
	/**
	 * String, HTML or React Component
	 */
	desc: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	/**
	 * Position of popovers
	 */
	placement: PropTypes.oneOf([
		'auto',
		'auto-start',
		'auto-end',
		'top',
		'top-start',
		'top-end',
		'bottom',
		'bottom-start',
		'bottom-end',
		'right',
		'right-start',
		'right-end',
		'left',
		'left-start',
		'left-end',
	]),
	/**
	 * For situations where there is not enough space to place
	 */
	flip: PropTypes.arrayOf(
		PropTypes.oneOf([
			'auto',
			'auto-start',
			'auto-end',
			'top',
			'top-start',
			'top-end',
			'bottom',
			'bottom-start',
			'bottom-end',
			'right',
			'right-start',
			'right-end',
			'left',
			'left-start',
			'left-end',
		]),
	),
	trigger: PropTypes.oneOf(['click', 'hover']),
	/**
	 * The value entered is in milliseconds
	 */
	delay: PropTypes.number,
	/**
	 * Adds style: `display: inline-block;`
	 */
	isDisplayInline: PropTypes.bool,
	className: PropTypes.string,
	bodyClassName: PropTypes.string,
	/**
	 * More information, [Popper.js](https://popper.js.org/docs/v2/modifiers/)
	 */
	// eslint-disable-next-line react/forbid-prop-types
	modifiers: PropTypes.object,
};
Popovers.defaultProps = {
	title: null,
	desc: null,
	placement: 'top',
	flip: ['top', 'bottom'],
	trigger: 'click',
	delay: 0,
	isDisplayInline: false,
	className: null,
	bodyClassName: null,
	modifiers: {
		name: 'example',
		enabled: false,
		phase: 'read',
		fn: () => {},
	},
};

export default Popovers;
