import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import TagWrapper from '../TagWrapper';
import Icon from '../icon/Icon';

export const ButtonGroup = forwardRef(
	({ children, className, isToolbar, isVertical, size, ariaLabel, ...props }, ref) => {
		const _prefix = isToolbar ? 'toolbar' : 'group';
		return (
			<div
				ref={ref}
				className={classNames(
					{
						[`btn-${_prefix}`]: !isVertical,
						'btn-group-vertical': isVertical && _prefix === 'group',
						[`btn-group-${size}`]: size,
					},
					className,
				)}
				role={_prefix}
				aria-label={ariaLabel}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...props}>
				{children}
			</div>
		);
	},
);
ButtonGroup.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	isToolbar: PropTypes.bool,
	isVertical: PropTypes.bool,
	size: PropTypes.oneOf(['sm', 'lg']),
	ariaLabel: PropTypes.string,
};
ButtonGroup.defaultProps = {
	className: null,
	isToolbar: false,
	isVertical: false,
	size: null,
	ariaLabel: null,
};

const Button = forwardRef(
	(
		{
			children,
			tag,
			type,
			to,
			href,
			isActive,
			color,
			isOutline,
			isLight,
			isLink,
			className,
			icon,
			rounded,
			size,
			isDisable,
			shadow,
			hoverShadow,
			target,
			isVisuallyHidden,
			...props
		},
		ref,
	) => {
		const _btnClass = classNames(
			'btn',
			{
				[`btn-${isOutline || isLink ? `outline-${color}` : color}`]:
					(color && !isLight) || (color && isLink),
				'border-transparent': isLink,
				[`btn-${size}`]: size,
				[`btn-hover-shadow${hoverShadow !== 'default' ? `-${hoverShadow}` : ''}`]:
					hoverShadow,
				[`btn-light-${color}`]: isLight,
				[`shadow${shadow !== 'default' ? `-${shadow}` : ''}`]: !!shadow,
				[`rounded${rounded !== 'default' ? `-${rounded}` : ''}`]: rounded,
				'rounded-0':
					rounded === 'bottom' ||
					rounded === 'top' ||
					rounded === 'end' ||
					rounded === 'start' ||
					rounded === 0 ||
					rounded === '0',
				'btn-only-icon': !children || isVisuallyHidden,
				disabled: isDisable,
				active: isActive,
			},
			className,
		);

		const _Inner = (
			<>
				{icon && <Icon icon={icon} className='btn-icon' />}
				{isVisuallyHidden ? (
					<span className='visually-hidden'>Toggle Dropdown</span>
				) : (
					children
				)}
			</>
		);

		const _anchorLinkPattern = /^#/i;

		const disableProps = isDisable && {
			tabIndex: '-1',
			'aria-disabled': 'true',
			disabled: true,
		};

		if (tag === 'a') {
			if (_anchorLinkPattern.test(to)) {
				return (
					<HashLink
						ref={ref}
						className={_btnClass}
						to={to}
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...disableProps}
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...props}>
						{_Inner}
					</HashLink>
				);
			}
			if (to) {
				return (
					<Link
						ref={ref}
						className={_btnClass}
						to={to}
						rel='noopener'
						target={target}
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...disableProps}
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...props}>
						{_Inner}
					</Link>
				);
			}
			return (
				<a
					ref={ref}
					className={_btnClass}
					href={href}
					role='button'
					rel='noopener'
					target={target}
					// eslint-disable-next-line react/jsx-props-no-spreading
					{...disableProps}
					// eslint-disable-next-line react/jsx-props-no-spreading
					{...props}>
					{_Inner}
				</a>
			);
		}
		return (
			<TagWrapper
				ref={ref}
				tag={tag}
				type={type}
				className={_btnClass}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...disableProps}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...props}>
				{_Inner}
			</TagWrapper>
		);
	},
);
Button.propTypes = {
	children: PropTypes.node,
	/**
	 * Button HTML tag
	 */
	tag: PropTypes.oneOf(['button', 'a', 'input', 'link']),
	/**
	 * Change button type attribute
	 */
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
	/**
	 * If tag is "a", the page you want to go to using react router dom.
	 */
	to: PropTypes.string,
	/**
	 * If tag is "a" and to is null
	 */
	href: PropTypes.string,
	/**
	 * change active status
	 */
	isActive: PropTypes.bool,
	/**
	 * Theme colors
	 */
	color: PropTypes.oneOf([
		null,
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
	 * if isOutline is true isLight and isLink must be false
	 */
	isOutline: PropTypes.bool,
	/**
	 * if isLight is true isOutline and isLink must be false
	 */
	isLight: PropTypes.bool,
	/**
	 * if isLink is true isOutline and isLight must be false
	 */
	isLink: PropTypes.bool,
	className: PropTypes.string,
	icon: PropTypes.string,
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
	size: PropTypes.oneOf(['sm', null, 'lg']),
	/**
	 * Disabled buttons have ***pointer-events: none*** applied to, preventing hover and active states from triggering.
	 */
	isDisable: PropTypes.bool,
	shadow: PropTypes.oneOf([null, 'none', 'sm', 'default', 'lg']),
	hoverShadow: PropTypes.oneOf([null, 'none', 'sm', 'default', 'lg']),
	/**
	 * If tag is "a", the target attribute specifies where to open the linked document.
	 */
	target: PropTypes.oneOfType([
		PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
		PropTypes.string,
	]),
	isVisuallyHidden: PropTypes.bool,
};
Button.defaultProps = {
	children: null,
	tag: 'button',
	type: 'button',
	to: null,
	href: null,
	isActive: false,
	color: null,
	isOutline: false,
	isLight: false,
	isLink: false,
	className: null,
	icon: null,
	rounded: null,
	size: null,
	isDisable: false,
	shadow: null,
	hoverShadow: null,
	target: null,
	isVisuallyHidden: false,
};

export default Button;
