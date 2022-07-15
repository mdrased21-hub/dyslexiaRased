import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useMeasure } from 'react-use';

export const SubHeaderLeft = ({ children, className }) => {
	return <div className={classNames('subheader-left', 'col-sm', className)}>{children}</div>;
};
SubHeaderLeft.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
SubHeaderLeft.defaultProps = {
	className: null,
};

export const SubHeaderRight = ({ children, className }) => {
	return (
		<div className={classNames('subheader-right', 'col-sm-auto', className)}>{children}</div>
	);
};
SubHeaderRight.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
SubHeaderRight.defaultProps = {
	className: null,
};

export const SubheaderSeparator = ({ className }) => {
	return <div className={classNames('subheader-separator', className)} />;
};
SubheaderSeparator.propTypes = {
	className: PropTypes.string,
};
SubheaderSeparator.defaultProps = {
	className: null,
};

const SubHeader = ({ children, className }) => {
	const [ref, { height }] = useMeasure();

	const root = document.documentElement;
	root.style.setProperty('--subheader-height', `${height}px`);

	useLayoutEffect(() => {
		document.body.classList.add('subheader-enabled');
		return () => {
			document.body.classList.remove('subheader-enabled');
		};
	});

	return (
		<div ref={ref} className={classNames('subheader', 'row', className)}>
			{children}
		</div>
	);
};
SubHeader.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
SubHeader.defaultProps = {
	className: null,
};

export default SubHeader;
