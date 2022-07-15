import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Page = forwardRef(({ children, className, container, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={classNames('page', className, {
				[`container${typeof container === 'string' ? `-${container}` : ''}`]: container,
			})}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}>
			{children}
		</div>
	);
});
Page.propTypes = {
	children: PropTypes.node.isRequired,
	container: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.oneOf([null, 'sm', 'md', 'lg', 'xl', 'xxl', 'fluid']),
	]),
	className: PropTypes.string,
};
Page.defaultProps = {
	container: 'xxl',
	className: null,
};

export default Page;
