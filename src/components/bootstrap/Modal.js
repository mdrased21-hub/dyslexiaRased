import React, { forwardRef, useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import Portal from '../../layout/Portal/Portal';
import TagWrapper from '../TagWrapper';
import useEventListener from '../../hooks/useEventListener';

export const ModalTitle = forwardRef(({ tag, id, children, className, ...props }, ref) => {
	return (
		<TagWrapper
			tag={tag}
			ref={ref}
			id={id}
			className={classNames('modal-title', className)}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}>
			{children}
		</TagWrapper>
	);
});
ModalTitle.propTypes = {
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'span']),
};
ModalTitle.defaultProps = {
	className: null,
	tag: 'h5',
};

export const ModalHeader = forwardRef(({ children, className, setIsOpen, ...props }, ref) => {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<div ref={ref} className={classNames('modal-header', className)} {...props}>
			{children}
			{setIsOpen && (
				<button
					type='button'
					className='btn-close'
					data-bs-dismiss='modal'
					aria-label='Close'
					onClick={() => setIsOpen(false)}
				/>
			)}
		</div>
	);
});
ModalHeader.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	/**
	 * Show and hide the close button at the top right.
	 */
	setIsOpen: PropTypes.func,
};
ModalHeader.defaultProps = {
	className: null,
	setIsOpen: null,
};

export const ModalBody = forwardRef(({ children, className, ...props }, ref) => {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<div ref={ref} className={classNames('modal-body', className)} {...props}>
			{children}
		</div>
	);
});
ModalBody.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
ModalBody.defaultProps = {
	className: null,
};

export const ModalFooter = forwardRef(({ children, className, ...props }, ref) => {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<div ref={ref} className={classNames('modal-footer', className)} {...props}>
			{children}
		</div>
	);
});
ModalFooter.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
ModalFooter.defaultProps = {
	className: null,
};

const Modal = ({
	children,
	isOpen,
	setIsOpen,
	id,
	titleId,
	isStaticBackdrop,
	isScrollable,
	isCentered,
	size,
	fullScreen,
	isAnimation,
	...props
}) => {
	const refModal = useRef(null);
	const ref = useRef(null);

	// <body> modal-open class (presentation)
	useLayoutEffect(() => {
		if (isOpen) {
			document.body.classList.add('modal-open');
		}
		return () => {
			document.body.classList.remove('modal-open');
		};
	});

	// Backdrop close function
	const closeModal = (event) => {
		if (ref.current && !ref.current.contains(event.target) && !isStaticBackdrop) {
			setIsOpen(false);
		}
	};
	useEventListener('mousedown', closeModal);
	useEventListener('touchstart', closeModal); // Touchscreen

	// Backdrop static function
	const modalStatic = (event) => {
		if (ref.current && !ref.current.contains(event.target) && isStaticBackdrop) {
			refModal.current.classList.add('modal-static');
			setTimeout(() => refModal.current.classList.remove('modal-static'), 300);
		}
	};
	useEventListener('mousedown', modalStatic);
	useEventListener('touchstart', modalStatic); // Touchscreen

	// Keypress close function
	const escFunction = (event) => {
		if (event.key === 'Escape') {
			setIsOpen(false);
		}
	};
	useEventListener('keydown', escFunction);

	const _animationProps = isAnimation
		? {
				initial: { opacity: 0, y: '-50%' },
				animate: { opacity: 1, x: '0%', y: '0%' },
				exit: { opacity: 0, y: '-50%' },
				transition: { ease: 'easeInOut', duration: 0.3 },
		  }
		: null;

	return (
		<Portal>
			<AnimatePresence exitBeforeEnter>
				{isOpen && (
					<>
						<motion.div
							ref={refModal}
							key='modal'
							className={classNames('modal', { fade: isAnimation }, 'show')}
							role='dialog'
							style={{ display: 'block' }}
							id={id}
							tabIndex='-1'
							aria-labelledby={titleId}
							aria-hidden='true'
							data-bs-backdrop={isStaticBackdrop ? 'static' : null}
							data-bs-keyboard={isStaticBackdrop ? 'false' : null}
							// eslint-disable-next-line react/jsx-props-no-spreading
							{..._animationProps}
							// eslint-disable-next-line react/jsx-props-no-spreading
							{...props}>
							<div
								ref={ref}
								className={classNames('modal-dialog', {
									'modal-dialog-scrollable': isScrollable,
									'modal-dialog-centered': isCentered,
									[`modal-${size}`]: size,
									[`modal-fullscreen${
										typeof fullScreen === 'string' ? `-${fullScreen}-down` : ''
									}`]: fullScreen,
								})}>
								<div className='modal-content'>{children}</div>
							</div>
						</motion.div>
						<div
							className={classNames('modal-backdrop', { fade: isAnimation }, 'show')}
						/>
					</>
				)}
			</AnimatePresence>
		</Portal>
	);
};
Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	setIsOpen: PropTypes.func.isRequired,
	/**
	 * ModalHeader, ModalBody and ModalFooter
	 */
	children: PropTypes.node.isRequired,
	id: PropTypes.string,
	/**
	 * For Accessibility
	 */
	titleId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	/**
	 * When backdrop is set to static, the modal will not close when clicking outside it.
	 */
	isStaticBackdrop: PropTypes.bool,
	/**
	 * When modals become too long for the user’s viewport or device, they scroll independent of the page itself.
	 */
	isScrollable: PropTypes.bool,
	/**
	 * vertically center the modal
	 */
	isCentered: PropTypes.bool,
	/**
	 *  These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.
	 */
	size: PropTypes.oneOf([null, 'sm', 'lg', 'xl']),
	/**
	 * Another override is the option to pop up a modal that covers the user viewport.
	 */
	fullScreen: PropTypes.oneOfType([
		PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
		PropTypes.bool,
	]),
	isAnimation: PropTypes.bool,
};
Modal.defaultProps = {
	id: null,
	titleId: null,
	isStaticBackdrop: false,
	isScrollable: false,
	isCentered: false,
	size: null,
	fullScreen: false,
	isAnimation: true,
};

export default Modal;
