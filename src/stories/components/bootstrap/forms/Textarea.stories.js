import React, { useEffect } from 'react';

import { useFormik } from 'formik';
import Textarea from '../../../../components/bootstrap/forms/Textarea';

export default {
	title: 'Forms/<Textarea>',
	component: Textarea,
	argTypes: {
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
		<Textarea
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
