import React, { useEffect } from 'react';

import { useFormik } from 'formik';
import Input from '../../../../components/bootstrap/forms/Input';

export default {
	title: 'Forms/<Input>',
	component: Input,
	argTypes: {
		value: {
			table: {
				type: {
					summary: 'string || Object',
					detail: `... || {file: '...', fileName: '...'} etc.`,
				},
			},
		},
		type: { control: { type: 'inline-radio' } },
		size: { control: { type: 'inline-radio' } },
		disabled: { control: { type: 'boolean' } },
		readOnly: { control: { type: 'inline-radio', options: [false, true, 'plaintext'] } },
		id: { control: { type: 'text' } },
		name: { control: { type: 'text' } },
		className: { control: { type: 'text' } },
		placeholder: { control: { type: 'text' } },
		autoComplete: { control: { type: 'text' } },
		ariaDescribedby: { control: { type: 'text' } },
		ariaLabelledby: { control: { type: 'text' } },
		ariaLabel: { control: { type: 'text' } },
		list: {
			table: {
				type: {
					summary: 'Array',
					detail: `['Foo 1', 'Foo 2', ...]`,
				},
			},
		},
		title: { control: { type: 'text' } },
		multiple: { control: { type: 'boolean' } },

		component: { control: { type: 'inline-radio' }, table: { category: 'Mask' } },
		mask: { table: { category: 'Mask' } },
		format: { table: { category: 'Mask' } },

		isTouched: { table: { category: 'Validation' } },
		isValid: { table: { category: 'Validation' } },
		invalidFeedback: { table: { category: 'Validation' } },
		validFeedback: { table: { category: 'Validation' } },
		isValidMessage: { table: { category: 'Validation' } },
		isTooltipFeedback: { table: { category: 'Validation' } },

		onBlur: { table: { category: 'functions' } },
		onChange: { table: { category: 'functions' } },
		onFocus: { table: { category: 'functions' } },
		onInput: { table: { category: 'functions' } },
		onInvalid: { table: { category: 'functions' } },
		onSelect: { table: { category: 'functions' } },
	},
	args: {
		id: 'example',
	},
};

const Template = (args) => {
	useEffect(() => {
		// eslint-disable-next-line react/destructuring-assignment
		formik.setFieldValue('example', args.value);
		// eslint-disable-next-line react/destructuring-assignment, react-hooks/exhaustive-deps
	}, [args.value]);

	const formik = useFormik({
		initialValues: {
			// eslint-disable-next-line react/destructuring-assignment
			example: args.value,
		},
		onSubmit: (values) => {
			// eslint-disable-next-line no-alert
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<Input
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...args}
			onChange={formik.handleChange}
			value={formik.values.example}
		/>
	);
};

export const Default = Template.bind({});
Default.args = {
	value: 'Change value',
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
	placeholder: 'Placeholder',
};

export const Disabled = Template.bind({});
Disabled.args = {
	value: 'Disabled input',
	disabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
	value: 'Read only input',
	readOnly: true,
};

export const PlainText = Template.bind({});
PlainText.args = {
	value: 'Plain text input',
	readOnly: 'plaintext',
};

export const AutoComplete = Template.bind({});
AutoComplete.args = {
	autoComplete: 'cc-number',
	placeholder: 'Credit Card Digit Numbers',
};

export const WithList = Template.bind({});
WithList.args = {
	placeholder: 'State',
	list: ['San Francisco', 'New York', 'Seattle', 'Los Angeles', 'Chicago'],
};

export const Multiple = Template.bind({});
Multiple.args = {
	type: 'email',
	placeholder: 'Email addresses',
	multiple: true,
	value: 'mail@example.com, mail2@example.com, mail3@example.com',
};

export const Small = Template.bind({});
Small.args = {
	size: 'sm',
	placeholder: 'Small input',
};

export const Large = Template.bind({});
Large.args = {
	size: 'lg',
	placeholder: 'Large input',
};

export const Range = Template.bind({});
Range.args = {
	type: 'range',
	min: 0,
	max: 100,
};
