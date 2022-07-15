import React, { Children, cloneElement, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TagWrapper from '../../TagWrapper';
import Validation from './Validation';

export const InputGroupText = forwardRef(({ tag, id, className, children, ...props }, ref) => {
	return (
		<TagWrapper
			tag={tag}
			ref={ref}
			id={id}
			className={classNames('input-group-text', className)}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}>
			{children?.props?.type ? cloneElement(children, { isFormCheckInput: true }) : children}
		</TagWrapper>
	);
});
InputGroupText.propTypes = {
	tag: PropTypes.oneOf(['span', 'div', 'label']),
	children: PropTypes.node.isRequired,
	id: PropTypes.string,
	className: PropTypes.string,
};
InputGroupText.defaultProps = {
	tag: 'span',
	id: null,
	className: null,
};

const InputGroup = forwardRef(({ id, className, children, isWrap, size, ...props }, ref) => {
	let _isValid = false;
	let _isTouched = false;
	let _invalidFeedback = null;
	let _validFeedback = null;
	let _isTooltipFeedback = false;

	const validClass = (child) => {
		for (let i = 0; i < child?.length; i += 1) {
			if (child[i].props.isValid) {
				_isValid = true;
			}
			if (child[i].props.isTouched) {
				_isTouched = true;
			}
			if (child[i].props.invalidFeedback) {
				_invalidFeedback = child[i].props.invalidFeedback;
			}
			if (child[i].props.validFeedback) {
				_validFeedback = child[i].props.validFeedback;
			}
			if (child[i].props.isTooltipFeedback) {
				_isTooltipFeedback = true;
				break;
			}
		}
	};
	validClass(children);

	return (
		<div
			ref={ref}
			id={id}
			className={classNames(
				'input-group',
				{
					'flex-nowrap': !isWrap,
					[`input-group-${size}`]: size,
					'has-validation':
						(!_isValid && _isTouched && (_invalidFeedback || _validFeedback)) ||
						(_isValid && _validFeedback),
				},
				className,
			)}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}>
			{Children.map(children, (item, index) =>
				item?.props?.isValidMessage
					? // eslint-disable-next-line react/no-array-index-key
					  cloneElement(item, { key: index, isValidMessage: false })
					: // eslint-disable-next-line react/no-array-index-key
					  cloneElement(item, { key: index }),
			)}
			<Validation
				isTouched={_isTouched}
				validFeedback={_validFeedback}
				invalidFeedback={_invalidFeedback}
				isTooltip={_isTooltipFeedback}
			/>
		</div>
	);
});
InputGroup.propTypes = {
	children: PropTypes.node.isRequired,
	id: PropTypes.string,
	className: PropTypes.string,
	/**
	 * Input groups wrap by default via wrap in order to accommodate custom form field validation within an input group. You may disable this with `isWrap={false}`.
	 */
	isWrap: PropTypes.bool,
	size: PropTypes.oneOf(['sm', 'lg']),
};
InputGroup.defaultProps = {
	id: null,
	className: null,
	isWrap: true,
	size: null,
};

export default InputGroup;
