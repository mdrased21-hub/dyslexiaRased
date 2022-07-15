import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon/Icon';
import Popovers from '../bootstrap/Popovers';

export const TimelineItem = forwardRef(({ className, color, label, children, ...props }, ref) => {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<div ref={ref} className={classNames('timeline-item', className)} {...props}>
			<div className='timeline-label text-truncate d-inline-block fw-bold'>
				<Popovers desc={label} trigger='hover'>
					<span>{label}</span>
				</Popovers>
			</div>
			<div className='timeline-badge'>
				<Icon icon='Circle' color={color} size='lg' />
			</div>
			<div className='timeline-content ps-3'>{children}</div>
		</div>
	);
});
TimelineItem.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	color: PropTypes.oneOf([
		null,
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
		'light',
		'dark',
	]),
	label: PropTypes.string.isRequired,
};
TimelineItem.defaultProps = {
	className: null,
	color: 'primary',
};

const Timeline = forwardRef(({ className, children, ...props }, ref) => {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<div ref={ref} className={classNames('timeline', className)} {...props}>
			{children}
		</div>
	);
});
Timeline.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
Timeline.defaultProps = {
	className: null,
};

export default Timeline;
