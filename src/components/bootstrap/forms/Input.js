import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import InputMask from 'react-input-mask';
import classNames from 'classnames';
import Portal from '../../../layout/Portal/Portal';
import Validation from './Validation';

const Input = forwardRef(
	(
		{
			type,
			id,
			name,
			className,
			required,
			placeholder,
			autoComplete,
			ariaDescribedby,
			ariaLabelledby,
			ariaLabel,
			list,
			title,
			size,
			disabled,
			readOnly,
			multiple,
			value,
			min,
			max,
			step,
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
			component,
			// InputMask & NumberFormat props
			mask,
			// NumberFormat props
			format,
			// InputMask props
			...props
		},
		ref,
	) => {
		const _props = {
			id,
			name: name === null ? id : name,
			type: !list ? type : null,
			className: classNames(
				{
					'form-control': readOnly !== 'plaintext' && type !== 'range',
					'form-range': type === 'range',
					'form-control-plaintext': readOnly === 'plaintext',
					'form-control-color': type === 'color',
					[`form-control-${size}`]: size,
					'is-invalid': !isValid && isTouched && invalidFeedback,
					'is-valid': !isValid && isTouched && !invalidFeedback,
				},
				className,
			),
			required,
			placeholder,
			title,
			list: list ? `${id}-list` : null,
			disabled,
			readOnly: !!readOnly,
			multiple,
			autoComplete,
			'aria-describedby': ariaDescribedby,
			'aria-label': ariaLabel,
			'aria-labelledby': ariaLabelledby,
			value,
			min,
			max,
			step,
			onBlur,
			onChange: readOnly ? null : onChange,
			onFocus,
			onInput,
			onInvalid,
			onSelect,
			...props,
		};
		const _numberFormatProps = {
			mask,
			format,
			onBlur: () => onBlur,
			onChange: readOnly ? null : () => onChange,
			onFocus: () => onFocus,
			onInput: () => onInput,
			onInvalid: () => onInvalid,
			onSelect: () => onSelect,
		};
		const _maskProps = { mask };

		const _list = list && (
			<Portal>
				<datalist id={`${id}-list`}>
					{list.map((option) => (
						<option key={option} aria-labelledby={option} value={option} />
					))}
				</datalist>
			</Portal>
		);

		const _validation = isValidMessage && (
			<Validation
				isTouched={isTouched}
				invalidFeedback={invalidFeedback}
				validFeedback={validFeedback}
				isTooltip={isTooltipFeedback}
			/>
		);

		if (component === 'NumberFormat' || format) {
			return (
				<>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					<NumberFormat ref={ref} {..._props} {..._numberFormatProps} />
					{_list}
					{_validation}
				</>
			);
		}
		if (component === 'InputMask' || mask) {
			return (
				<>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					<InputMask ref={ref} {..._props} {..._maskProps} />
					{_list}
					{_validation}
				</>
			);
		}
		return (
			<>
				{/* eslint-disable-next-line react/jsx-props-no-spreading */}
				<input ref={ref} {..._props} />
				{_list}
				{_validation}
			</>
		);
	},
);
Input.propTypes = {
	component: PropTypes.oneOf(['NumberFormat', 'InputMask']),
	type: PropTypes.oneOf([
		'text',
		'email',
		'password',
		'file',
		'color',
		'date',
		'datetime-local',
		'hidden',
		'month',
		'number',
		'range',
		'search',
		'tel',
		'time',
		'url',
		'week',
	]),
	id: PropTypes.string,
	/**
	 * If the name value is left blank, the id value is assigned.
	 */
	name: PropTypes.string,
	size: PropTypes.oneOf(['lg', 'sm']),
	className: PropTypes.string,
	required: PropTypes.bool,
	placeholder: PropTypes.string,
	/**
	 * The *title* global attribute contains text representing advisory information related to the element it belongs to.
	 */
	title: PropTypes.string,
	/**
	 * Contains pre-defined options for an *Input* component.
	 */
	list: PropTypes.arrayOf(PropTypes.string),
	autoComplete: PropTypes.string,
	/**
	 * A *disabled* element isn't editable and isn't sent on submit.
	 */
	disabled: PropTypes.bool,
	/**
	 * The multiple attribute works with the following input types: email, and file.
	 */
	multiple: PropTypes.bool,
	/**
	 * A *readOnly* element is just not editable, but gets sent when the according *form* submits.
	 */
	readOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['plaintext'])]),
	ariaDescribedby: PropTypes.string,
	ariaLabelledby: PropTypes.string,
	ariaLabel: PropTypes.string,
	/**
	 * For formik ***`formik.values.ID_OR_NAME`***
	 */
	// eslint-disable-next-line react/require-default-props
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
	/**
	 * For formik ***`formik.touched.ID_OR_NAME`***
	 */
	isTouched: PropTypes.bool,
	/**
	 * For formik ***`formik.isValid`***
	 */
	isValid: PropTypes.bool,
	/**
	 * For formik ***`formik.errors.ID_OR_NAME`***
	 */
	invalidFeedback: PropTypes.string,
	validFeedback: PropTypes.string,
	isValidMessage: PropTypes.bool,
	isTooltipFeedback: PropTypes.bool,
	/**
	 * Fires the moment that the element loses focus. For formik ***`formik.handleBlur`***
	 */
	onBlur: PropTypes.func,
	/**
	 * Fires the moment when the value of the element is changed. For formik ***`formik.handleChange`***
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
	/**
	 * More information, [react-input-mask](https://github.com/sanniassin/react-input-mask#react-input-mask).
	 */
	mask: PropTypes.string,
	/**
	 * More information, [react-number-format](https://github.com/s-yadav/react-number-format#readme).
	 */
	format: PropTypes.string,
};
Input.defaultProps = {
	component: null,
	type: 'text',
	id: null,
	name: null,
	size: null,
	className: null,
	required: false,
	placeholder: null,
	title: null,
	list: null,
	autoComplete: null,
	disabled: false,
	multiple: false,
	readOnly: false,
	ariaDescribedby: null,
	ariaLabelledby: null,
	ariaLabel: null,
	value: undefined,
	min: null,
	max: null,
	step: null,
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
	mask: null,
	format: null,
};

export default Input;
