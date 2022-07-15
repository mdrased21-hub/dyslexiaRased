import React, { useEffect } from 'react';

import { useFormik } from 'formik';
import Checks from '../../../../components/bootstrap/forms/Checks';

export default {
	title: 'Forms/<Checks>',
	component: Checks,
	argTypes: {},
	args: {
		id: 'example',
		name: 'example',
	},
};

const Template = (args) => {
	useEffect(() => {
		// eslint-disable-next-line react/destructuring-assignment
		formik.setFieldValue('example', args.checked);
		// eslint-disable-next-line react/destructuring-assignment, react-hooks/exhaustive-deps
	}, [args.checked]);

	const formik = useFormik({
		initialValues: {
			// eslint-disable-next-line react/destructuring-assignment
			example: args.checked,
		},
		onSubmit: (values) => {
			// eslint-disable-next-line no-alert
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<Checks
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...args}
			onChange={formik.handleChange}
			checked={formik.values.example}
		/>
	);
};

export const Checkbox = Template.bind({});
Checkbox.args = {
	checked: true,
	label: 'Checkbox',
};

export const Switch = Template.bind({});
Switch.args = {
	checked: true,
	label: 'Switch',
	type: 'switch',
};

export const Radio = Template.bind({});
Radio.args = {
	value: 'radio value',
	checked: 'radio value',
	label: 'Radio',
	type: 'radio',
};
