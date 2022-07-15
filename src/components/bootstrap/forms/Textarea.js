import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Validation from './Validation';

const Textarea = ({
	id,
	name,
	className,
	rows,
	placeholder,
	autoComplete,
	ariaDescribedby,
	ariaLabelledby,
	ariaLabel,
	title,
	size,
	disabled,
	readOnly,
	value,
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
	...props
}) => {
	return (
		<>
			<textarea
				id={id}
				className={classNames(
					{
						'form-control': readOnly !== 'plaintext',
						'form-control-plaintext': readOnly === 'plaintext',
						[`form-control-${size}`]: size,
						'is-invalid': !isValid && isTouched && invalidFeedback,
						'is-valid': !isValid && isTouched && !invalidFeedback,
					},
					className,
				)}
				rows={rows}
				name={name}
				title={title}
				disabled={disabled}
				readOnly={!!readOnly}
				placeholder={placeholder}
				autoComplete={autoComplete}
				aria-describedby={ariaDescribedby}
				aria-label={ariaLabel}
				aria-labelledby={ariaLabelledby}
				value={value}
				onBlur={onBlur}
				onChange={onChange}
				onFocus={onFocus}
				onInput={onInput}
				onInvalid={onInvalid}
				onSelect={onSelect}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...props}
			/>
			{isValidMessage && (
				<Validation
					isTouched={isTouched}
					invalidFeedback={invalidFeedback}
					validFeedback={validFeedback}
					isTooltip={isTooltipFeedback}
				/>
			)}
		</>
	);
};
Textarea.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	size: PropTypes.oneOf(['lg', 'sm']),
	className: PropTypes.string,
	rows: PropTypes.number,
	placeholder: PropTypes.string,
	autoComplete: PropTypes.string,
	ariaDescribedby: PropTypes.string,
	ariaLabelledby: PropTypes.string,
	ariaLabel: PropTypes.string,
	title: PropTypes.string,
	/**
	 * A *disabled* element isn't editable and isn't sent on submit.
	 */
	disabled: PropTypes.bool,
	/**
	 * A *readonly* element is just not editable, but gets sent when the according *form* submits.
	 */
	readOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['plaintext'])]),
	// eslint-disable-next-line react/require-default-props
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	isTouched: PropTypes.bool,
	isValid: PropTypes.bool,
	invalidFeedback: PropTypes.string,
	validFeedback: PropTypes.string,
	isValidMessage: PropTypes.bool,
	isTooltipFeedback: PropTypes.bool,
	/**
	 * Fires the moment that the element loses focus
	 */
	onBlur: PropTypes.func,
	/**
	 * Fires the moment when the value of the element is changed
	 */
	onChange: PropTypes.func,
	/**
	 * Fires the moment when the element gets focus
	 */
	onFocus: PropTypes.func,
	/**
	 * Script to be run when an element gets user input
	 */
	onInput: PropTypes.func,
	/**
	 * Script to be run when an element is invalid
	 */
	onInvalid: PropTypes.func,
	/**
	 * Fires after some text has been selected in an element
	 */
	onSelect: PropTypes.func,
};
Textarea.defaultProps = {
	id: null,
	name: null,
	size: null,
	className: null,
	rows: 3,
	placeholder: null,
	autoComplete: null,
	ariaDescribedby: null,
	ariaLabelledby: null,
	ariaLabel: null,
	title: null,
	disabled: false,
	readOnly: false,
	value: undefined,
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
};

export default Textarea;
