import React, { cloneElement, forwardRef, useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Manager, Popper, Reference } from 'react-popper';
import classNames from 'classnames';
import useEventOutside from '@omtanke/react-use-event-outside';
import useDarkMode from '../../hooks/useDarkMode';

export const DropdownToggle = ({ children, isOpen, setIsOpen, hasIcon }) => {
	const dropdownButtonRef = useRef(null);

	const setButtonRef = useCallback((node, ref) => {
		dropdownButtonRef.current = node;
		return ref(node);
	}, []);

	return (
		<Reference>
			{({ ref }) =>
				React.cloneElement(
					children.props.isButtonGroup ? (
						<span className='visually-hidden'>Toggle Dropdown</span>
					) : (
						children
					),
					{
						ref: (node) => setButtonRef(node, ref),
						onClick: () => {
							// eslint-disable-next-line no-unused-expressions
							children?.props?.onClick ? children.props.onClick() : null;
							setIsOpen(!isOpen);
						},
						className: classNames(
							{
								'dropdown-toggle': hasIcon,
								'dropdown-toggle-split': children.props.isButtonGroup,
								// Only presentation
								show: isOpen,
							},
							children?.props?.className,
						),
						'aria-expanded': isOpen,
					},
				)
			}
		</Reference>
	);
};
DropdownToggle.propTypes = {
	children: PropTypes.node.isRequired,
	isOpen: PropTypes.bool,
	setIsOpen: PropTypes.func,
	hasIcon: PropTypes.bool,
};
DropdownToggle.defaultProps = {
	isOpen: false,
	setIsOpen: null,
	hasIcon: true,
};
DropdownToggle.displayName = 'DropdownToggle';

export const DropdownMenu = ({
	isOpen,
	setIsOpen,
	children,
	className,
	isAlignmentEnd,
	breakpoint,
	size,
	direction,
	isCloseAfterLeave,
	...props
}) => {
	const dropdownListRef = useRef(null);

	const setListRef = useCallback((node, ref) => {
		dropdownListRef.current = node;
		return ref(node);
	}, []);

	const yAxis =
		(direction === 'up' && 'top') ||
		(direction === 'end' && 'right') ||
		(direction === 'start' && 'left') ||
		'bottom';

	const xAxis = isAlignmentEnd ? 'end' : 'start';

	const { darkModeStatus } = useDarkMode();

	if (isOpen) {
		return (
			<Popper
				placement={breakpoint ? 'bottom-start' : `${yAxis}-${xAxis}`}
				modifiers={[
					{
						name: 'flip',
						options: {
							fallbackPlacements: [`top-${xAxis}`, `bottom-${xAxis}`],
						},
					},
				]}>
				{({ ref, style, placement }) => (
					<ul
						role='presentation'
						ref={(node) => setListRef(node, ref)}
						// dynamic positioning must be disabled for responsive alignment
						style={!breakpoint ? style : null}
						data-placement={placement}
						className={classNames(
							'dropdown-menu',
							// For Bootstrap
							'show',
							{ 'dropdown-menu-dark': darkModeStatus },
							{
								[`dropdown-menu-${size}`]: size,
								'dropdown-menu-end': !isAlignmentEnd && breakpoint,
								[`dropdown-menu${breakpoint ? `-${breakpoint}` : ''}-${
									isAlignmentEnd ? 'end' : 'start'
								}`]: isAlignmentEnd || breakpoint,
							},
							className,
						)}
						data-bs-popper={breakpoint ? 'static' : null}
						onMouseLeave={isCloseAfterLeave ? () => setIsOpen(false) : null}
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...props}>
						{children}
					</ul>
				)}
			</Popper>
		);
	}
	return null;
};
DropdownMenu.propTypes = {
	isOpen: PropTypes.bool,
	setIsOpen: PropTypes.func,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	isAlignmentEnd: PropTypes.bool,
	breakpoint: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
	size: PropTypes.oneOf(['sm', 'md', 'lg']),
	direction: PropTypes.string,
	isCloseAfterLeave: PropTypes.bool,
};
DropdownMenu.defaultProps = {
	isOpen: false,
	setIsOpen: null,
	className: null,
	isAlignmentEnd: false,
	breakpoint: null,
	size: null,
	direction: null,
	isCloseAfterLeave: true,
};
DropdownMenu.displayName = 'DropdownMenu';

const ItemWrapper = forwardRef(({ children, className, ...props }, ref) => {
	return (
		<li
			ref={ref}
			className={classNames('dropdown-item-wrapper', className)}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}>
			{children}
		</li>
	);
});
ItemWrapper.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
ItemWrapper.defaultProps = {
	className: null,
};

export const DropdownItem = forwardRef(
	({ children, isHeader, isDivider, isText, ...props }, ref) => {
		if (isHeader) {
			return (
				// eslint-disable-next-line react/jsx-props-no-spreading
				<ItemWrapper ref={ref} {...props}>
					{cloneElement(typeof children === 'string' ? <h6>{children}</h6> : children, {
						className: classNames('dropdown-header', children?.props?.className),
					})}
				</ItemWrapper>
			);
		}
		if (isDivider) {
			return (
				// eslint-disable-next-line react/jsx-props-no-spreading
				<ItemWrapper ref={ref} {...props}>
					<hr className={classNames('dropdown-divider', children?.props?.className)} />
				</ItemWrapper>
			);
		}
		if (isText) {
			return (
				// eslint-disable-next-line react/jsx-props-no-spreading
				<ItemWrapper ref={ref} {...props}>
					{cloneElement(typeof children === 'string' ? <div>{children}</div> : children, {
						className: classNames(
							'dropdown-item-text',
							'dropdown-item',
							'disabled',
							children?.props?.className,
						),
					})}
				</ItemWrapper>
			);
		}
		return (
			// eslint-disable-next-line react/jsx-props-no-spreading
			<ItemWrapper ref={ref} {...props}>
				{cloneElement(typeof children === 'string' ? <span>{children}</span> : children, {
					className: classNames('dropdown-item', children?.props?.className),
				})}
			</ItemWrapper>
		);
	},
);
DropdownItem.propTypes = {
	children: PropTypes.node,
	isHeader: PropTypes.bool,
	isDivider: PropTypes.bool,
	isText: PropTypes.bool,
};
DropdownItem.defaultProps = {
	children: null,
	isHeader: false,
	isDivider: false,
	isText: false,
};

const Dropdown = ({
	tag: Tag,
	children,
	isOpen,
	setIsOpen,
	direction,
	isButtonGroup,
	className,
}) => {
	const [state, setState] = useState(isOpen !== null && !!setIsOpen ? isOpen : false);

	const dropdownRef = useRef(null);

	// Clicking outside to close
	const closeMenu = useCallback(() => {
		if (isOpen !== null && !!setIsOpen) {
			setIsOpen(false);
		} else {
			setState(false);
		}
	}, [isOpen, setIsOpen]);

	useEventOutside(dropdownRef, 'mousedown', closeMenu);
	useEventOutside(dropdownRef, 'touchstart', closeMenu);

	return (
		<Manager>
			<Tag
				ref={dropdownRef}
				className={classNames(
					{
						[`drop${direction}`]: direction && !isButtonGroup,
						'btn-group': isButtonGroup,
					},
					className,
				)}>
				{/* eslint-disable-next-line react/prop-types */}
				{children.map((child, index) =>
					['DropdownMenu', 'DropdownToggle'].includes(child.type.displayName)
						? React.cloneElement(child, {
								isOpen: isOpen !== null && !!setIsOpen ? isOpen : state,
								setIsOpen: isOpen !== null && !!setIsOpen ? setIsOpen : setState,
								direction,
								// eslint-disable-next-line react/no-array-index-key
								key: index,
						  })
						: child,
				)}
			</Tag>
		</Manager>
	);
};
Dropdown.propTypes = {
	tag: PropTypes.string,
	children: PropTypes.node.isRequired,
	isOpen: PropTypes.bool,
	setIsOpen: PropTypes.func,
	className: PropTypes.string,
	/**
	 * Menu position
	 */
	direction: PropTypes.oneOf(['up', 'end', 'down', 'start']),
	isButtonGroup: PropTypes.bool,
};
Dropdown.defaultProps = {
	tag: 'div',
	isOpen: null,
	setIsOpen: null,
	className: null,
	direction: 'down',
	isButtonGroup: false,
};
Dropdown.displayName = 'Dropdown';

export default Dropdown;
