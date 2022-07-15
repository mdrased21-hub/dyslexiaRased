import React, { useContext, useLayoutEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useMeasure, useWindowSize } from 'react-use';
import ThemeContext from '../../contexts/themeContext';
import Button from '../../components/bootstrap/Button';
import Portal from '../Portal/Portal';
import useDarkMode from '../../hooks/useDarkMode';

export const HeaderLeft = ({ children, className }) => {
	return <div className={classNames('header-left', 'col-md', className)}>{children}</div>;
};
HeaderLeft.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
HeaderLeft.defaultProps = {
	className: null,
};

export const HeaderRight = ({ children, className }) => {
	const [ref, { height }] = useMeasure();

	const root = document.documentElement;
	root.style.setProperty('--header-right-height', `${height}px`);

	return (
		<div ref={ref} className={classNames('header-right', 'col-md-auto', className)}>
			{children}
		</div>
	);
};
HeaderRight.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
HeaderRight.defaultProps = {
	className: null,
};

const Header = ({ children, hasLeftMobileMenu, hasRightMobileMenu }) => {
	const { themeStatus } = useDarkMode();

	const windowsWidth = useWindowSize().width;
	const [refMobileHeader, sizeMobileHeader] = useMeasure();
	const [refHeader, sizeHeader] = useMeasure();

	const root = document.documentElement;
	root.style.setProperty('--mobile-header-height', `${sizeMobileHeader.height}px`);
	root.style.setProperty('--header-height', `${sizeHeader.height}px`);

	const {
		asideStatus,
		setAsideStatus,
		leftMenuStatus,
		setLeftMenuStatus,
		rightMenuStatus,
		setRightMenuStatus,
	} = useContext(ThemeContext);

	useLayoutEffect(() => {
		if (
			(asideStatus || leftMenuStatus || rightMenuStatus) &&
			windowsWidth < process.env.REACT_APP_MOBILE_BREAKPOINT_SIZE
		)
			document.body.classList.add('overflow-hidden');
		return () => {
			document.body.classList.remove('overflow-hidden');
		};
	});

	return (
		<>
			<header ref={refMobileHeader} className='mobile-header'>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col'>
							<Button
								aria-label='Toggle Aside'
								className='mobile-header-toggle'
								size='lg'
								color={asideStatus ? 'primary' : themeStatus}
								isLight={asideStatus}
								icon={asideStatus ? 'FirstPage' : 'LastPage'}
								onClick={() => {
									setAsideStatus(!asideStatus);
									setLeftMenuStatus(false);
									setRightMenuStatus(false);
								}}
							/>
							{hasLeftMobileMenu && (
								<Button
									aria-label='Toggle Left Menu'
									className='mobile-header-toggle'
									size='lg'
									color={leftMenuStatus ? 'primary' : themeStatus}
									isLight={leftMenuStatus}
									icon={leftMenuStatus ? 'MoreVert' : 'MoreHoriz'}
									onClick={() => {
										setAsideStatus(false);
										setLeftMenuStatus(!leftMenuStatus);
										setRightMenuStatus(false);
									}}
								/>
							)}
						</div>
						{hasRightMobileMenu && (
							<div className='col-auto'>
								<Button
									aria-label='Toggle Right Menu'
									className='mobile-header-toggle'
									size='lg'
									color={rightMenuStatus ? 'primary' : themeStatus}
									isLight={rightMenuStatus}
									icon={rightMenuStatus ? 'Menu' : 'MenuOpen'}
									onClick={() => {
										setAsideStatus(false);
										setLeftMenuStatus(false);
										setRightMenuStatus(!rightMenuStatus);
									}}
								/>
							</div>
						)}
					</div>
				</div>
			</header>
			<header
				ref={refHeader}
				className={classNames('header', {
					'header-left-open': leftMenuStatus,
					'header-right-open': rightMenuStatus,
				})}>
				<div className='container-fluid'>
					<div className='row d-flex align-items-center'>
						{children}
						{(leftMenuStatus || rightMenuStatus) && (
							<Portal>
								<div
									role='presentation'
									className={classNames('header-overlay', {
										'header-overlay-left-menu': leftMenuStatus,
										'header-overlay-right-menu': rightMenuStatus,
									})}
									onClick={() => {
										setAsideStatus(false);
										setLeftMenuStatus(false);
										setRightMenuStatus(false);
									}}
								/>
							</Portal>
						)}
					</div>
				</div>
			</header>
		</>
	);
};
Header.propTypes = {
	children: PropTypes.node.isRequired,
	hasLeftMobileMenu: PropTypes.bool,
	hasRightMobileMenu: PropTypes.bool,
};
Header.defaultProps = {
	hasLeftMobileMenu: true,
	hasRightMobileMenu: true,
};

export default Header;
