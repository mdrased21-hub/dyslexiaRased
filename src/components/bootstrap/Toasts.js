import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/Icon';

const ToastHeader = ({ icon, iconColor, title, time, isDismiss, ...props }) => {
	// eslint-disable-next-line react/prop-types
	const { onDismiss } = props;
	return (
		<div className='toast-header'>
			{icon && <Icon icon={icon} size='lg' color={iconColor} className='me-2' />}
			{title && <strong className='me-auto'>{title}</strong>}
			{time && <small>{time}</small>}
			{/* eslint-disable-next-line react/prop-types */}
			{isDismiss && onDismiss}
		</div>
	);
};
ToastHeader.propTypes = {
	icon: PropTypes.string,
	iconColor: PropTypes.string,
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
	time: PropTypes.string,
	isDismiss: PropTypes.bool,
};
ToastHeader.defaultProps = {
	icon: null,
	iconColor: null,
	time: null,
	isDismiss: false,
};

const ToastBody = ({ children }) => {
	return <div className='toast-body'>{children}</div>;
};
ToastBody.propTypes = {
	children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react/prop-types
export const Toast = ({ children, onDismiss }) => {
	return (
		<div className='toast show' role='alert' aria-live='assertive' aria-atomic='true'>
			{Children.map(children, (child, index) =>
				cloneElement(child, {
					// eslint-disable-next-line react/no-array-index-key
					key: index,
					onDismiss: (
						<button
							type='button'
							className='btn-close'
							aria-label='Close'
							onClick={onDismiss}
						/>
					),
				}),
			)}
		</div>
	);
};
Toast.propTypes = {
	children: PropTypes.node.isRequired,
};

export const ToastContainer = ({ children }) => {
	return (
		<div className='position-fixed top-0 end-0 p-3' style={{ zIndex: 9999 }}>
			<div className='toast-container'>{children}</div>
		</div>
	);
};
ToastContainer.propTypes = {
	children: PropTypes.node.isRequired,
};

const Toasts = ({ icon, iconColor, title, time, isDismiss, children, ...props }) => {
	// eslint-disable-next-line react/prop-types
	const { onDismiss } = props;
	return (
		<>
			<ToastHeader
				icon={icon}
				iconColor={iconColor}
				title={title}
				time={time}
				isDismiss={isDismiss}
				onDismiss={onDismiss}
			/>
			<ToastBody>{children}</ToastBody>
		</>
	);
};
Toasts.propTypes = {
	title: PropTypes.node.isRequired,
	children: PropTypes.node.isRequired,
	icon: PropTypes.string,
	iconColor: PropTypes.oneOf([
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
		'light',
		'dark',
	]),
	time: PropTypes.string,
	isDismiss: PropTypes.bool,
};
Toasts.defaultProps = {
	icon: null,
	iconColor: null,
	time: null,
	isDismiss: true,
};

export default Toasts;
