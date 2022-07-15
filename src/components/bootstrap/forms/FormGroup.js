import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TagWrapper from '../../TagWrapper';
import Label from './Label';
import FormText from './FormText';

const FormGroup = ({
	children,
	tag,
	className,
	labelClassName,
	childWrapperClassName,
	label,
	id,
	isFloating,
	size,
	isColForLabel,
	isHiddenLabel,
	formText,
	...props
}) => {
	const _label = (
		<Label
			className={labelClassName}
			htmlFor={id}
			isHidden={isHiddenLabel}
			isColForLabel={isColForLabel}
			size={size}>
			{label}
		</Label>
	);

	const _children = id
		? cloneElement(children, {
				id,
				size: size || children.props.size,
				placeholder: isFloating ? label : children.props.placeholder,
				'aria-describedby': formText ? `${id}-text` : null,
		  })
		: children;

	const _formText = formText && <FormText id={`${id}-text`}>{formText}</FormText>;
	return (
		<TagWrapper
			tag={tag}
			className={classNames({ 'form-floating': isFloating, row: isColForLabel }, className)}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}>
			{label && !isFloating && _label}

			{childWrapperClassName ? (
				<div className={childWrapperClassName}>
					{_children}
					{_formText}
				</div>
			) : (
				_children
			)}

			{label && isFloating && _label}

			{!childWrapperClassName && _formText}
		</TagWrapper>
	);
};
FormGroup.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	labelClassName: PropTypes.string,
	childWrapperClassName: PropTypes.string,
	tag: PropTypes.oneOf(['div', 'section']),
	isFloating: PropTypes.bool,
	id: PropTypes.string,
	label: PropTypes.string,
	size: PropTypes.oneOf([null, 'lg', 'sm']),
	isHiddenLabel: PropTypes.bool,
	isColForLabel: PropTypes.bool,
	// eslint-disable-next-line react/require-default-props
	formText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
FormGroup.defaultProps = {
	className: null,
	labelClassName: null,
	childWrapperClassName: null,
	tag: 'div',
	isFloating: false,
	id: null,
	label: null,
	size: null,
	isHiddenLabel: false,
	isColForLabel: false,
	formText: null,
};

export default FormGroup;
