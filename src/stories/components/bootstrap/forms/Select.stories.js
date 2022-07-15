import React, { useEffect } from 'react';

import { useFormik } from 'formik';
import Select from '../../../../components/bootstrap/forms/Select';
import Option, { Options } from '../../../../components/bootstrap/Option';

export default {
	title: 'Forms/<Select>',
	component: Select,
	subcomponents: { Options, Option },
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
		value: '',
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
		<Select
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...args}
			onChange={formik.handleChange}
			value={formik.values.example}
		/>
	);
};

export const Default = Template.bind({});
Default.args = {
	list: [
		{ value: 1, text: 'One' },
		{ value: 2, text: 'Two' },
		{ value: 3, text: 'Three' },
		{ value: 4, text: 'Four' },
		{ value: 5, text: 'Five' },
		{ value: 6, text: 'Six' },
	],
};

export const SecondWay = Template.bind({});
SecondWay.args = {
	children: (
		<Options
			list={[
				{ value: 1, text: 'One' },
				{ value: 2, text: 'Two' },
				{ value: 3, text: 'Three' },
				{ value: 4, text: 'Four' },
				{ value: 5, text: 'Five' },
				{ value: 6, text: 'Six' },
			]}
		/>
	),
};

export const ThirdWay = Template.bind({});
ThirdWay.args = {
	children: [
		<Option value={1}>One</Option>,
		<Option value={2}>Two</Option>,
		<Option value={3}>Three</Option>,
		<Option value={4}>Four</Option>,
		<Option value={5}>Five</Option>,
		<Option value={6}>Six</Option>,
	],
};
