import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TagWrapper from '../TagWrapper';

export const ListGroupItem = forwardRef(
	({ tag, children, className, color, isActive, isDisable, ...props }, ref) => {
		return (
			<TagWrapper
				ref={ref}
				tag={tag}
				className={classNames(
					'list-group-item',
					{
						'list-group-item-action': tag === 'a' || tag === 'button',
						[`list-group-item-${color}`]: color,
						active: isActive,
						disabled: isDisable,
					},
					className,
				)}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...props}>
				{children}
			</TagWrapper>
		);
	},
);
ListGroupItem.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	tag: PropTypes.oneOf(['section', 'div', 'li', 'a', 'button', 'label']),
	color: PropTypes.oneOf([
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
		'light',
		'dark',
	]),
	isActive: PropTypes.bool,
	isDisable: PropTypes.bool,
};
ListGroupItem.defaultProps = {
	className: null,
	tag: 'li',
	color: null,
	isActive: false,
	isDisable: false,
};

const ListGroup = forwardRef(
	({ children, className, tag, isHorizontal, isFlush, isNumbered, ...props }, ref) => {
		return (
			<TagWrapper
				ref={ref}
				tag={tag}
				className={classNames(
					'list-group',
					{
						'list-group-flush': isFlush,
					},
					{ 'list-group-numbered': isNumbered },
					{
						[`list-group-horizontal${
							typeof isHorizontal === 'string' ? `-${isHorizontal}` : ''
						}`]: isHorizontal,
					},
					className,
				)}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...props}>
				{children}
			</TagWrapper>
		);
	},
);
ListGroup.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	tag: PropTypes.oneOf(['section', 'div', 'ol', 'ul']),
	isFlush: PropTypes.bool,
	isHorizontal: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
	]),
	isNumbered: PropTypes.bool,
};
ListGroup.defaultProps = {
	className: null,
	tag: 'ul',
	isHorizontal: false,
	isFlush: false,
	isNumbered: false,
};

export default ListGroup;
