import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import TagWrapper from '../TagWrapper';
import Icon from '../icon/Icon';

export const BreadcrumbItem = ({ children, ariaLabel, className, tag, to, isActive, divider }) => {
	return (
		<TagWrapper
			tag={tag}
			className={classNames('breadcrumb-item', { active: isActive }, className)}
			aria-current={isActive ? 'page' : null}
			aria-label={ariaLabel || children}>
			{divider &&
				typeof divider !== 'string' &&
				cloneElement(divider, {
					className: classNames('breadcrumb-icon', divider.props.className),
				})}
			{isActive ? (
				children
			) : (
				<NavLink to={to} aria-label={ariaLabel || children}>
					{children}
				</NavLink>
			)}
		</TagWrapper>
	);
};
BreadcrumbItem.propTypes = {
	children: PropTypes.node.isRequired,
	ariaLabel: PropTypes.string,
	className: PropTypes.string,
	tag: PropTypes.string,
	to: PropTypes.string.isRequired,
	isActive: PropTypes.bool,
	divider: PropTypes.node,
};
BreadcrumbItem.defaultProps = {
	className: null,
	ariaLabel: null,
	tag: 'li',
	isActive: false,
	divider: null,
};

const Breadcrumb = ({
	children,
	list,
	tag,
	listTag,
	itemTag,
	ariaLabel,
	autoActive,
	isToHome,
	divider,
}) => {
	const _divider = divider !== 'string' && divider;
	return (
		<TagWrapper
			tag={tag}
			aria-label={ariaLabel}
			style={
				divider
					? {
							'--bs-breadcrumb-divider':
								typeof divider === 'string' ? `'${divider}'` : 'none',
					  }
					: null
			}>
			<TagWrapper tag={listTag} className='breadcrumb'>
				{isToHome && (
					<BreadcrumbItem to='/' ariaLabel='Home'>
						{isToHome}
					</BreadcrumbItem>
				)}
				{list
					? list.map((item, index) => (
							<BreadcrumbItem
								key={item.title}
								tag={item.tag || itemTag}
								to={item.to}
								isActive={autoActive && list.length === index + 1}
								divider={_divider}>
								{item.title}
							</BreadcrumbItem>
					  ))
					: Children.map(children, (child, index) =>
							cloneElement(child, {
								tag: child.props.tag || itemTag,
								isActive: autoActive && children.length === index + 1,
								divider: child.props.divider || _divider,
							}),
					  )}
			</TagWrapper>
		</TagWrapper>
	);
};
Breadcrumb.propTypes = {
	children: PropTypes.node,
	tag: PropTypes.oneOf(['nav', 'div', 'section']),
	listTag: PropTypes.oneOf(['div', 'ol', 'ul']),
	itemTag: PropTypes.oneOf(['div', 'li']),
	ariaLabel: PropTypes.string,
	list: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			to: PropTypes.string.isRequired,
		}),
	),
	/**
	 * The last element is automatically activated
	 */
	autoActive: PropTypes.bool,
	/**
	 * Icon component or string
	 */
	isToHome: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	/**
	 * Icon component or string
	 */
	divider: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
Breadcrumb.defaultProps = {
	children: null,
	tag: 'nav',
	listTag: 'ol',
	itemTag: 'li',
	ariaLabel: 'breadcrumb',
	list: null,
	autoActive: true,
	isToHome: <Icon icon='HolidayVillage' />,
	divider: <Icon icon='ChevronRight' />,
};

export default Breadcrumb;
