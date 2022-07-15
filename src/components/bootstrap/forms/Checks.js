import React, { Children, cloneElement, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Validation from './Validation';

export const ChecksGroup = forwardRef(
	(
		{
			id,
			className,
			children,
			isInline,
			isValid,
			isTouched,
			invalidFeedback,
			validFeedback,
			isTooltipFeedback,
			...props
		},
		ref,
	) => {
		return (
			<>
				<div
					ref={ref}
					id={id}
					className={classNames(
						{
							'is-invalid': !isValid && isTouched && invalidFeedback,
							'is-valid': !isValid && isTouched && !invalidFeedback,
						},
						className,
					)}
					// eslint-disable-next-line react/jsx-props-no-spreading
					{...props}>
					{Children.map(children, (child) =>
						cloneElement(child, {
							isInline: child.props.isInline || isInline,
							isValid,
							isTouched,
							invalidFeedback,
							validFeedback,
							isTooltipFeedback,
							isValidMessage: false,
						}),
					)}
				</div>
				<Validation
					isTouched={isTouched}
					invalidFeedback={invalidFeedback}
					validFeedback={validFeedback}
					isTooltip={isTooltipFeedback}
				/>
			</>
		);
	},
);
ChecksGroup.propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	isInline: PropTypes.bool,
	isTouched: PropTypes.bool,
	isValid: PropTypes.bool,
	invalidFeedback: PropTypes.string,
	validFeedback: PropTypes.string,
	isTooltipFeedback: PropTypes.bool,
};
ChecksGroup.defaultProps = {
	id: null,
	className: null,
	isInline: false,
	isTouched: false,
	isValid: false,
	invalidFeedback: null,
	validFeedback: null,
	isTooltipFeedback: false,
};

const Checks = forwardRef(
	(
		{
			id,
			className,
			name,
			type,
			label,
			value,
			checked,
			disabled,
			isInline,
			isFormCheckInput,
			isValid,
			isTouched,
			invalidFeedback,
			validFeedback,
			isValidMessage,
			isTooltipFeedback,
			onBlur,
			onChange,
			onFocus,
			onInput,
			onInvalid,
			onSelect,
			ariaLabel,
			...props
		},
		ref,
	) => {
		const _inner = (
			<input
				ref={ref}
				className={classNames(
					'form-check-input',
					{
						'mt-0': isFormCheckInput,
						'is-invalid': !isValid && isTouched && invalidFeedback,
						'is-valid': !isValid && isTouched && !invalidFeedback,
					},
					className,
				)}
				name={name === null ? id : name}
				type={type === 'radio' ? 'radio' : 'checkbox'}
				id={id}
				value={value}
				checked={type === 'radio' ? checked === value : checked}
				disabled={disabled}
				onBlur={onBlur}
				onChange={onChange}
				onFocus={onFocus}
				onInput={onInput}
				onInvalid={onInvalid}
				onSelect={onSelect}
				aria-label={ariaLabel}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...props}
			/>
		);

		if (isFormCheckInput) {
			return _inner;
		}
		return (
			<div
				className={classNames('form-check', {
					'form-switch': type === 'switch',
					'form-check-inline': isInline,
				})}>
				{_inner}
				{label && (
					<label className='form-check-label' htmlFor={id}>
						{label}
					</label>
				)}
				{isValidMessage && (
					<Validation
						isTouched={isTouched}
						invalidFeedback={invalidFeedback}
						validFeedback={validFeedback}
						isTooltip={isTooltipFeedback}
					/>
				)}
			</div>
		);
	},
);
Checks.propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
	name: PropTypes.string,
	type: PropTypes.oneOf(['checkbox', 'radio', 'switch']),
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	// eslint-disable-next-line react/require-default-props
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	checked: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	disabled: PropTypes.bool,
	isInline: PropTypes.bool,
	isFormCheckInput: PropTypes.bool,
	isTouched: PropTypes.bool,
	isValid: PropTypes.bool,
	invalidFeedback: PropTypes.string,
	validFeedback: PropTypes.string,
	isValidMessage: PropTypes.bool,
	isTooltipFeedback: PropTypes.bool,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	onInput: PropTypes.func,
	onInvalid: PropTypes.func,
	onSelect: PropTypes.func,
	ariaLabel: PropTypes.string,
};
Checks.defaultProps = {
	id: null,
	className: null,
	name: null,
	type: 'checkbox',
	label: null,
	checked: false,
	disabled: false,
	isInline: false,
	isFormCheckInput: false,
	isTouched: false,
	isValid: false,
	invalidFeedback: null,
	validFeedback: null,
	isValidMessage: true,
	isTooltipFeedback: false,
	onBlur: null,
	onChange: null,
	onFocus: null,
	onInput: null,
	onInvalid: null,
	onSelect: null,
	ariaLabel: null,
};

export default Checks;
