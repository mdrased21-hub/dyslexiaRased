import React, { useRef, useState, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import {
	omit,
	pick,
	TransitionTimeouts,
	TransitionPropTypeKeys,
	TransitionStatuses,
	tagPropType,
} from './utils';

const transitionStatusToClassHash = {
	[TransitionStatuses.ENTERING]: 'collapsing',
	[TransitionStatuses.ENTERED]: 'collapse show',
	[TransitionStatuses.EXITING]: 'collapsing',
	[TransitionStatuses.EXITED]: 'collapse',
};

const getTransitionClass = (status) => {
	return transitionStatusToClassHash[status] || 'collapse';
};

const getHeight = (node) => {
	return node.scrollHeight;
};

const Collapse = ({ tag: Tag, isOpen, className, isNavbar, children, isChildClone, ...props }) => {
	const ref = useRef(null);
	const _node = ref.current;

	const [height, setHeight] = useState(null);

	const onEntering = (isAppearing) => {
		setHeight(getHeight(_node));
		props.onEntering(_node, isAppearing);
	};

	const onEntered = (isAppearing) => {
		setHeight(null);
		props.onEntered(_node, isAppearing);
	};

	const onExit = () => {
		setHeight(getHeight(_node));
		props.onExit(_node);
	};

	const onExiting = () => {
		// getting this variable triggers a reflow
		const _unused = _node.offsetHeight; // eslint-disable-line no-unused-vars
		setHeight(0);
		// eslint-disable-next-line react/destructuring-assignment
		props.onExiting(_node);
	};

	const onExited = () => {
		setHeight(null);
		props.onExited(_node);
	};

	const transitionProps = pick(props, TransitionPropTypeKeys);
	const childProps = omit(props, TransitionPropTypeKeys);

	return (
		<Transition
			nodeRef={ref}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...transitionProps}
			in={isOpen}
			onEntering={onEntering}
			onEntered={onEntered}
			onExit={onExit}
			onExiting={onExiting}
			onExited={onExited}>
			{(status) => {
				const collapseClass = getTransitionClass(status);
				const classes = classNames(className, collapseClass, isNavbar && 'navbar-collapse');
				const style = height === null ? null : { height };
				if (isChildClone) {
					return cloneElement(children, {
						ref,
						style: { ...childProps.style, ...style },
						className: classNames(classes, children.props.className),
						...childProps,
					});
				}
				return (
					<Tag
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...childProps}
						style={{ ...childProps.style, ...style }}
						className={classes}
						ref={ref}>
						{children}
					</Tag>
				);
			}}
		</Transition>
	);
};
Collapse.propTypes = {
	// eslint-disable-next-line react/forbid-foreign-prop-types
	...Transition.propTypes,
	isOpen: PropTypes.bool,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	tag: tagPropType,
	className: PropTypes.node,
	isNavbar: PropTypes.bool,
	isChildClone: PropTypes.bool,
};
Collapse.defaultProps = {
	...Transition.defaultProps,
	isOpen: false,
	appear: false,
	enter: true,
	exit: true,
	tag: 'div',
	timeout: TransitionTimeouts.Collapse,
	isChildClone: false,
	isNavbar: false,
};

export default Collapse;
