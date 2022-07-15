import React, { Children, forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import TagWrapper from '../TagWrapper';
import Icon from '../icon/Icon';
import Button from './Button';
import PrismCode from '../extras/PrismCode';

export const CardLabel = forwardRef(
	({ tag, className, children, icon, iconColor, pre, ...props }, ref) => {
		return (
			<TagWrapper
				ref={ref}
				tag={tag}
				className={classNames('card-label', className)}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...props}>
				{pre}
				{icon && (
					<Icon
						icon={icon}
						className={classNames('card-icon', { [`text-${iconColor}`]: iconColor })}
					/>
				)}
				<div className='card-title-wrapper'>{children}</div>
			</TagWrapper>
		);
	},
);
CardLabel.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	tag: PropTypes.string,
	icon: PropTypes.string,
	iconColor: PropTypes.oneOf([
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
	pre: PropTypes.node,
};
CardLabel.defaultProps = {
	className: null,
	tag: 'div',
	icon: null,
	iconColor: 'primary',
	pre: null,
};

export const CardActions = forwardRef(({ tag, className, children, ...props }, ref) => {
	return (
		<TagWrapper
			ref={ref}
			tag={tag}
			className={classNames('card-actions', className)}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}>
			{children}
		</TagWrapper>
	);
});
CardActions.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	tag: PropTypes.string,
};
CardActions.defaultProps = {
	className: null,
	tag: 'div',
};

export const CardTitle = forwardRef(({ tag, className, children, ...props }, ref) => {
	return (
		<TagWrapper
			ref={ref}
			tag={tag}
			className={classNames('card-title', className)}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}>
			{children}
		</TagWrapper>
	);
});
CardTitle.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	tag: PropTypes.string,
};
CardTitle.defaultProps = {
	className: null,
	tag: 'h5',
};

export const CardSubTitle = forwardRef(({ tag, className, children, ...props }, ref) => {
	return (
		<TagWrapper
			ref={ref}
			tag={tag}
			className={classNames('card-subtitle', className)}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}>
			{children}
		</TagWrapper>
	);
});
CardSubTitle.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	tag: PropTypes.string,
};
CardSubTitle.defaultProps = {
	className: null,
	tag: 'h6',
};

export const CardHeader = forwardRef(
	({ tag, className, children, size, borderSize, borderColor, ...props }, ref) => {
		return (
			<TagWrapper
				ref={ref}
				tag={tag}
				className={classNames(
					'card-header',
					{
						[`card-header-${size}`]: size,
						[`card-header-border-${borderSize}`]: borderSize,
						[`card-header-border-${borderColor}`]: borderColor,
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
CardHeader.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	tag: PropTypes.string,
	borderSize: PropTypes.oneOf([null, 0, 1, 2, 3, 4, 5]),
	borderColor: PropTypes.oneOf([
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
	size: PropTypes.oneOf([null, 'sm', 'lg']),
};
CardHeader.defaultProps = {
	className: null,
	tag: 'div',
	borderSize: null,
	borderColor: null,
	size: null,
};

export const CardBody = forwardRef(({ tag, className, isScrollable, children, ...props }, ref) => {
	return (
		<TagWrapper
			ref={ref}
			tag={tag}
			className={classNames('card-body', { 'card-body-scrollable': isScrollable }, className)}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}>
			{children}
		</TagWrapper>
	);
});
CardBody.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	tag: PropTypes.string,
	isScrollable: PropTypes.bool,
};
CardBody.defaultProps = {
	className: null,
	tag: 'div',
	isScrollable: false,
};

export const CardCodeView = React.memo(
	// eslint-disable-next-line react/prop-types
	({ children, language, customStyle, isPrismJs, className }) => {
		if (isPrismJs) {
			return (
				<PrismCode
					code={children}
					language={language}
					className={classNames('my-0', className)}
					style={customStyle}
				/>
			);
		}
		return (
			<SyntaxHighlighter
				language={language}
				style={atomOneLight}
				customStyle={{
					borderRadius: 13,
					backgroundColor: 'var(--bs-light)',
					fontSize: '1rem',
					padding: '1.5rem 2rem',
					...customStyle,
				}}
				wrapLongLines
				PreTag='code'
				className={classNames('shadow-sm', className)}>
				{children}
			</SyntaxHighlighter>
		);
	},
);
CardCodeView.propTypes = {
	children: PropTypes.node.isRequired,
	language: PropTypes.string,
	isPrismJs: PropTypes.bool,
	className: PropTypes.string,
};
CardCodeView.defaultProps = {
	language: 'jsx',
	isPrismJs: true,
	className: null,
};

export const CardFooterLeft = forwardRef(({ tag, className, children, ...props }, ref) => {
	return (
		<TagWrapper
			ref={ref}
			tag={tag}
			className={classNames('card-footer-left', className)}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}>
			{children}
		</TagWrapper>
	);
});
CardFooterLeft.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	tag: PropTypes.string,
};
CardFooterLeft.defaultProps = {
	className: null,
	tag: 'div',
};

export const CardFooterRight = forwardRef(({ tag, className, children, ...props }, ref) => {
	return (
		<TagWrapper
			ref={ref}
			tag={tag}
			className={classNames('card-footer-right', className)}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}>
			{children}
		</TagWrapper>
	);
});
CardFooterRight.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	tag: PropTypes.string,
};
CardFooterRight.defaultProps = {
	className: null,
	tag: 'div',
};

export const CardFooter = forwardRef(
	({ tag, className, children, size, borderSize, borderColor, ...props }, ref) => {
		return (
			<TagWrapper
				ref={ref}
				tag={tag}
				className={classNames(
					'card-footer',
					{
						[`card-footer-${size}`]: size,
						[`card-footer-border-${borderSize}`]: borderSize,
						[`card-footer-border-${borderColor}`]: borderColor,
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
CardFooter.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	tag: PropTypes.string,
	borderSize: PropTypes.oneOf([null, 0, 1, 2, 3, 4, 5]),
	borderColor: PropTypes.oneOf([
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
	size: PropTypes.oneOf([null, 'sm', 'lg']),
};
CardFooter.defaultProps = {
	className: null,
	tag: 'div',
	borderSize: null,
	borderColor: null,
	size: null,
};

export const CardTabItem = ({ id, title, icon, children }) => {
	throw new Error(
		`Title ${title} component should be used as a child in the component Card.Id: ${id}, Icon Name: ${icon}, Children: ${children},`,
	);
};
CardTabItem.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
	children: PropTypes.node.isRequired,
};
CardTabItem.defaultProps = {
	icon: null,
};

const Card = forwardRef(
	(
		{
			tag,
			className,
			children,
			hasTab,
			tabButtonColor,
			tabBodyClassName,
			shadow,
			borderSize,
			borderColor,
			stretch,
			isCompact,
			...props
		},
		ref,
	) => {
		const [activeTab, setActiveTab] = useState(0);
		return (
			<TagWrapper
				ref={ref}
				tag={tag}
				className={classNames(
					'card',
					{
						[`card-stretch-${stretch === 'semi' ? 'semi' : 'full'}`]: stretch,
						'card-compact': isCompact,
						[`shadow${shadow !== 'md' ? `-${shadow}` : ''}`]:
							!!shadow && shadow !== '3d',
						[`u-shadow-3d--primary-sm`]: shadow === '3d',
						[`border-${borderSize}`]: borderSize || borderSize === 0,
						[`border-${borderColor}`]: borderColor,
					},
					className,
				)}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...props}>
				{!hasTab ? (
					children
				) : (
					<>
						<CardHeader borderSize={1}>
							<CardActions>
								{Children.map(children, (item, index) => (
									<Button
										key={item.props.id}
										isLight
										color={index === activeTab ? tabButtonColor : 'light'}
										role='tab'
										aria-controls={item.props.id}
										aria-selected={index === activeTab}
										isActive={index === activeTab}
										icon={item.props.icon || null}
										onClick={() => setActiveTab(index)}>
										{item.props.title}
									</Button>
								))}
							</CardActions>
						</CardHeader>
						{Children.map(children, (item, index) => {
							if (activeTab === index) {
								return (
									<CardBody
										key={item.props.id}
										role='tabpanel'
										aria-labelledby={item.props.id}
										className={tabBodyClassName}>
										{item.props.children}
									</CardBody>
								);
							}
							return null;
						})}
					</>
				)}
			</TagWrapper>
		);
	},
);
Card.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	shadow: PropTypes.oneOf([null, 'none', 'sm', 'md', 'lg', '3d']),
	borderSize: PropTypes.oneOf([null, 0, 1, 2, 3, 4, 5]),
	borderColor: PropTypes.oneOf([
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
	tag: PropTypes.string,
	hasTab: PropTypes.bool,
	tabButtonColor: PropTypes.oneOf([
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
		'light',
		'dark',
	]),
	tabBodyClassName: PropTypes.string,
	stretch: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['full', 'semi'])]),
	isCompact: PropTypes.bool,
};
Card.defaultProps = {
	className: null,
	shadow: null,
	borderSize: null,
	borderColor: null,
	tag: 'div',
	hasTab: false,
	tabButtonColor: 'primary',
	tabBodyClassName: null,
	stretch: false,
	isCompact: false,
};

export default Card;
