import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import { TransitionTimeouts, TransitionStatuses, tagPropType } from './utils';

class CarouselItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			startAnimation: false,
		};

		this.onEnter = this.onEnter.bind(this);
		this.onEntering = this.onEntering.bind(this);
		this.onExit = this.onExit.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}

	onEnter(node, isAppearing) {
		this.setState({ startAnimation: false });
		// eslint-disable-next-line react/destructuring-assignment
		this.props.onEnter(node, isAppearing);
	}

	onEntering(node, isAppearing) {
		// getting this variable triggers a reflow
		const { offsetHeight } = node;
		this.setState({ startAnimation: true });
		// eslint-disable-next-line react/destructuring-assignment
		this.props.onEntering(node, isAppearing);
		return offsetHeight;
	}

	onExit(node) {
		this.setState({ startAnimation: false });
		// eslint-disable-next-line react/destructuring-assignment
		this.props.onExit(node);
	}

	onExiting(node) {
		this.setState({ startAnimation: true });
		node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
		// eslint-disable-next-line react/destructuring-assignment
		this.props.onExiting(node);
	}

	onExited(node) {
		node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
		// eslint-disable-next-line react/destructuring-assignment
		this.props.onExited(node);
	}

	render() {
		const {
			in: isIn,
			children,
			slide,
			tag: Tag,
			className,
			isFluid,
			...transitionProps
		} = this.props;

		return (
			<Transition
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...transitionProps}
				enter={slide}
				exit={slide}
				in={isIn}
				onEnter={this.onEnter}
				onEntering={this.onEntering}
				onExit={this.onExit}
				onExiting={this.onExiting}
				onExited={this.onExited}>
				{(status) => {
					const { direction } = this.context;
					const isActive =
						status === TransitionStatuses.ENTERED ||
						status === TransitionStatuses.EXITING;
					const directionClassName =
						(status === TransitionStatuses.ENTERING ||
							status === TransitionStatuses.EXITING) &&
						// eslint-disable-next-line react/destructuring-assignment
						this.state.startAnimation &&
						(direction === 'end' ? 'carousel-item-start' : 'carousel-item-end');
					const orderClassName =
						status === TransitionStatuses.ENTERING &&
						(direction === 'end' ? 'carousel-item-next' : 'carousel-item-prev');
					const itemClasses = classNames(
						className,
						'carousel-item',
						isActive && 'active',
						directionClassName,
						orderClassName,
						{ 'h-100': isFluid },
					);

					return <Tag className={itemClasses}>{children}</Tag>;
				}}
			</Transition>
		);
	}
}
CarouselItem.propTypes = {
	...Transition.propTypes,
	tag: tagPropType,
	in: PropTypes.bool,
	children: PropTypes.node,
	slide: PropTypes.bool,
	className: PropTypes.string,
	isFluid: PropTypes.bool,
};
CarouselItem.defaultProps = {
	...Transition.defaultProps,
	tag: 'div',
	timeout: TransitionTimeouts.Carousel,
	slide: true,
	isFluid: false,
};
CarouselItem.contextTypes = {
	direction: PropTypes.string,
};

export default CarouselItem;
