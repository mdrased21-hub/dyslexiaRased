import React, { useEffect } from 'react';

import { useFormik } from 'formik';
import Checks, { ChecksGroup } from '../../../../components/bootstrap/forms/Checks';

export default {
	title: 'Forms/<Checks>/Sup Component/<ChecksGroup>',
	component: ChecksGroup,
	argTypes: {},
	args: {},
};

// eslint-disable-next-line react/prop-types
const Template = ({ children, ...args }) => {
	// eslint-disable-next-line react/destructuring-assignment
	useEffect(() => {
		formik.setFieldValue('example', args.checked);
		// eslint-disable-next-line react/destructuring-assignment, react-hooks/exhaustive-deps
	}, [args.checked]);

	const formik = useFormik({
		initialValues: {},
		onSubmit: (values) => {
			// eslint-disable-next-line no-alert
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<ChecksGroup {...args}>
			{/* eslint-disable-next-line react/prop-types */}
			{children.map((item) => (
				// eslint-disable-next-line react/jsx-props-no-spreading
				<Checks {...item} onChange={formik.handleChange} checked={formik.values[item.id]} />
			))}
		</ChecksGroup>
	);
};

export const Default = Template.bind({});
Default.args = {
	children: [
		{ id: 'checksOne', label: 'One (inline)', isInline: true },
		{ id: 'checksTwo', label: 'Two (inline)', isInline: true },
		{ id: 'checksThree', label: 'Three' },
	],
};
