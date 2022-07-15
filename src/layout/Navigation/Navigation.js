import React, { useContext, forwardRef, useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { useWindowSize } from 'react-use';
import { NavHashLink } from 'react-router-hash-link';
import { Manager, Popper, Reference } from 'react-popper';
import useEventOutside from '@omtanke/react-use-event-outside';
import { useTranslation } from 'react-i18next';
import Icon from '../../components/icon/Icon';
import ThemeContext from '../../contexts/themeContext';
import Collapse from '../../components/bootstrap/Collapse';
import useDarkMode from '../../hooks/useDarkMode';

export const List = forwardRef(
	({ id, children, className, ariaLabelledby, parentId, rootId, horizontal, ...props }, ref) => {
		return (
			<ul
				ref={ref}
				id={id}
				className={classNames('navigation', { 'navigation-menu': horizontal }, className)}
				aria-labelledby={ariaLabelledby}
				data-bs-parent={
					parentId === `${rootId}__${rootId}`
						? `#${rootId}`
						: (parentId && `#${parentId}`) || null
				}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...props}>
				{children}
			</ul>
		);
	},
);
List.propTypes = {
	id: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
	ariaLabelledby: PropTypes.string,
	parentId: PropTypes.string,
	rootId: PropTypes.string,
	horizontal: PropTypes.bool,
};
List.defaultProps = {
	id: null,
	children: null,
	className: null,
	ariaLabelledby: null,
	parentId: null,
	rootId: null,
	horizontal: false,
};

export const Item = ({
	children,
	to,
	title,
	icon,
	id,
	parentId,
	rootId,
	isHorizontal,
	notification,
	isMore,
	hide,
	...props
}) => {
	const { darkModeStatus } = useDarkMode();
	const { width } = useWindowSize();
	const { setAsideStatus, setLeftMenuStatus, setRightMenuStatus } = useContext(ThemeContext);

	// eslint-disable-next-line react/prop-types
	const _active = props.activeItem === id;

	const handleClick = () => {
		// eslint-disable-next-line react/prop-types,no-unused-expressions
		_active ? props.setActiveItem(null) : props.setActiveItem(id);
	};

	const linkHandleClick = () => {
		// For Mobile Design
		if (width < process.env.REACT_APP_MOBILE_BREAKPOINT_SIZE) setAsideStatus(false);
		setLeftMenuStatus(false);
		setRightMenuStatus(false);
	};

	const _anchorLinkPattern = /^#/i;
	const location = useLocation();

	// For aside menu
	const here = to !== '/' && location.pathname.includes(to);
	// For top menu
	const match = to !== '/' && location.pathname === to;

	const { t } = useTranslation('menu');

	const _LinkClass = classNames('navigation-link', 'navigation-link-pill', {
		collapsed: !!children && !isHorizontal,
		active: isHorizontal ? match : here,
	});

	const _Inner = (
		<>
			<span className='navigation-link-info'>
				{icon && <Icon className='navigation-icon' icon={icon} />}
				<span className='navigation-text'>{t(title)}</span>
			</span>
			{(!!children || !!notification) && (
				<span className='navigation-link-extra'>
					{!!notification && (
						<Icon
							icon='Circle'
							className={classNames(
								'navigation-notification',
								{
									[`text-${notification}`]: typeof notification === 'string',
									'text-danger': typeof notification !== 'string',
								},
								'animate__animated animate__heartBeat animate__infinite animate__slower',
							)}
						/>
					)}
					{!!children && <Icon className='navigation-arrow' icon='ChevronRight' />}
				</span>
			)}
		</>
	);

	const _withoutChild =
		!children &&
		!hide &&
		((_anchorLinkPattern.test(to) && (
			<NavHashLink className={_LinkClass} to={to} onClick={linkHandleClick}>
				{_Inner}
			</NavHashLink>
		)) || (
			<NavLink
				className={classNames(_LinkClass, ({ isActive }) => (isActive ? 'active' : ''))}
				to={`../${to}`}
				onClick={linkHandleClick}>
				{_Inner}
			</NavLink>
		));

	// Dropdown
	const dropdownRef = useRef(null);

	const dropdownButtonRef = useRef(null);
	const setButtonRef = useCallback((node, ref) => {
		dropdownButtonRef.current = node;
		return ref(node);
	}, []);

	const dropdownListRef = useRef(null);
	const setListRef = useCallback((node, ref) => {
		dropdownListRef.current = node;
		return ref(node);
	}, []);

	const [dropdownStatus, setDropdownStatus] = useState(false);

	const dropdownButtonHandleClick = () => {
		setDropdownStatus(!dropdownStatus);
	};

	// Clicking outside to close
	const closeMenu = useCallback(() => {
		setDropdownStatus(false);
	}, []);
	useEventOutside(dropdownRef, 'mousedown', closeMenu);
	useEventOutside(dropdownRef, 'touchstart', closeMenu);

	if (children) {
		// submenu && in header
		if (isHorizontal) {
			return (
				<Manager>
					<li
						ref={dropdownRef}
						className={classNames('navigation-item', 'dropdown', {
							'navigation-item-more': isMore,
						})}>
						<Reference>
							{({ ref }) => (
								<span
									ref={(node) => setButtonRef(node, ref)}
									id={`${rootId}__${id}--link`}
									className={_LinkClass}
									// data-bs-toggle='dropdown'
									// data-bs-target={`#${rootId}__${id}`}
									aria-expanded={dropdownStatus}
									aria-controls={`${rootId}__${id}`}
									role='button'
									tabIndex='-1'
									onClick={dropdownButtonHandleClick}
									onKeyDown={dropdownButtonHandleClick}>
									{_Inner}
								</span>
							)}
						</Reference>
						{dropdownStatus && (
							<Popper
								placement='bottom-start'
								modifiers={[
									{
										name: 'flip',
										options: {
											fallbackPlacements: [`bottom-end`, `bottom-start`],
										},
									},
								]}>
								{({ ref, style, placement }) => (
									<List
										ref={(node) => setListRef(node, ref)}
										style={style}
										data-placement={placement}
										id={`${rootId}__${id}`}
										className={classNames(
											'dropdown-menu',
											{
												'dropdown-menu-dark': darkModeStatus,
											},
											'show',
										)}
										ariaLabelledby={`${rootId}__${id}--link`}
										rootId={rootId}
										parentId={`${rootId}__${parentId}`}
										onMouseLeave={() => setDropdownStatus(false)}>
										{children}
									</List>
								)}
							</Popper>
						)}
					</li>
				</Manager>
			);
		}
		// submenu && in aside
		return (
			<li className='navigation-item'>
				<span
					id={`${rootId}__${id}--link`}
					className={_LinkClass}
					// data-bs-toggle='collapse'
					// data-bs-target={`#${rootId}__${id}`}
					aria-expanded={_active}
					aria-controls={`${rootId}__${id}`}
					role='button'
					tabIndex='-1'
					onClick={handleClick}
					onKeyDown={handleClick}>
					{_Inner}
				</span>
				<Collapse isOpen={_active} isChildClone>
					<List
						id={`${rootId}__${id}`}
						ariaLabelledby={`${rootId}__${id}--link`}
						rootId={rootId}
						parentId={`${rootId}__${parentId}`}
						onMouseLeave={closeMenu}>
						{children}
					</List>
				</Collapse>
			</li>
		);
	}
	// without submenu
	return <li className='navigation-item'>{_withoutChild}</li>;
};
Item.propTypes = {
	children: PropTypes.node,
	to: PropTypes.string,
	title: PropTypes.string,
	icon: PropTypes.string,
	id: PropTypes.string,
	parentId: PropTypes.string,
	rootId: PropTypes.string.isRequired,
	isHorizontal: PropTypes.bool,
	notification: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	isMore: PropTypes.bool,
	hide: PropTypes.bool,
};
Item.defaultProps = {
	children: null,
	to: null,
	title: null,
	icon: null,
	id: null,
	parentId: null,
	isHorizontal: false,
	notification: false,
	isMore: false,
	hide: false,
};

export const NavigationLine = ({ className }) => {
	return <hr className={classNames('navigation-line', className)} />;
};
NavigationLine.propTypes = {
	className: PropTypes.string,
};
NavigationLine.defaultProps = {
	className: null,
};

export const NavigationTitle = ({ className, children, ...props }) => {
	return (
		<li className='navigation-item'>
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<span className={classNames('navigation-title', className)} {...props}>
				{children}
			</span>
		</li>
	);
};
NavigationTitle.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
NavigationTitle.defaultProps = {
	className: null,
};

const Navigation = forwardRef(({ menu, horizontal, id, className, ...props }, ref) => {
	const [activeItem, setActiveItem] = useState(null);

	const { t } = useTranslation('menu');

	function fillMenu(data, parentId, rootId, isHorizontal, isMore) {
		return Object.keys(data).map((item) =>
			data[item].path ? (
				<Item
					key={data[item].id}
					rootId={rootId}
					id={data[item].id}
					title={data[item].text}
					icon={data[item].icon}
					to={`${data[item].path}`}
					parentId={parentId}
					isHorizontal={isHorizontal}
					setActiveItem={setActiveItem}
					activeItem={activeItem}
					notification={data[item].notification}
					hide={data[item].hide}>
					{!!data[item].subMenu &&
						fillMenu(data[item].subMenu, data[item].id, rootId, isHorizontal)}
				</Item>
			) : (
				!isMore &&
				!isHorizontal && (
					<NavigationTitle key={data[item].id}>{t(data[item].text)}</NavigationTitle>
				)
			),
		);
	}

	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<nav ref={ref} aria-label={id} className={className} {...props}>
			<List id={id} horizontal={horizontal}>
				{fillMenu(menu, id, id, horizontal)}
				{horizontal && (
					<Item
						rootId={`other-${id}`}
						title={t('More')}
						icon='MoreHoriz'
						isHorizontal
						isMore>
						{fillMenu(menu, `other-${id}`, `other-${id}`, false, true)}
					</Item>
				)}
			</List>
		</nav>
	);
});
Navigation.propTypes = {
	horizontal: PropTypes.bool,
	menu: PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		text: PropTypes.string,
		path: PropTypes.string,
		icon: PropTypes.string,
		isDisable: PropTypes.bool,
		subMenu: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
				text: PropTypes.string,
				path: PropTypes.string,
				icon: PropTypes.string,
				isDisable: PropTypes.bool,
			}),
		),
	}).isRequired,
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	className: PropTypes.string,
};
Navigation.defaultProps = {
	horizontal: false,
	className: null,
};

export default Navigation;
