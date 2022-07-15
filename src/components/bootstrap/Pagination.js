import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon/Icon';

export const PaginationItem = forwardRef(
	(
		{
			className,
			isDisabled,
			isActive,
			isPrev,
			isFirst,
			isNext,
			isLast,
			children,
			onClick,
			...props
		},
		ref,
	) => {
		return (
			<li
				ref={ref}
				className={classNames(
					'page-item',
					{
						disabled: isDisabled,
						active: isActive,
					},
					className,
				)}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...props}>
				<span
					role='button'
					onClick={onClick}
					onKeyDown={onClick}
					className='page-link'
					tabIndex={isDisabled ? '-1' : null}
					aria-disabled={isDisabled ? 'true' : null}
					aria-label={
						(isPrev && 'First Page') || (isNext && 'Last Page') || `${children} page`
					}>
					{isPrev && <Icon icon='ChevronLeft' />}
					{isFirst && <Icon icon='FirstPage' />}
					{isNext && <Icon icon='ChevronRight' />}
					{isLast && <Icon icon='LastPage' />}
					{children}
				</span>
			</li>
		);
	},
);
PaginationItem.propTypes = {
	className: PropTypes.string,
	isDisabled: PropTypes.bool,
	isActive: PropTypes.bool,
	isPrev: PropTypes.bool,
	isFirst: PropTypes.bool,
	isNext: PropTypes.bool,
	isLast: PropTypes.bool,
	children: PropTypes.node,
	onClick: PropTypes.func,
};
PaginationItem.defaultProps = {
	className: null,
	isDisabled: false,
	isActive: false,
	isPrev: false,
	isFirst: false,
	isNext: false,
	isLast: false,
	children: null,
	onClick: null,
};

const Pagination = forwardRef(({ ariaLabel, className, children, size, ...props }, ref) => {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<nav ref={ref} aria-label={ariaLabel} className={className} {...props}>
			<ul className={classNames('pagination', { [`pagination-${size}`]: size }, 'm-0')}>
				{children}
			</ul>
		</nav>
	);
});
Pagination.propTypes = {
	ariaLabel: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	size: PropTypes.oneOf(['sm', 'lg']),
};
Pagination.defaultProps = {
	className: null,
	size: null,
};

export default Pagination;
