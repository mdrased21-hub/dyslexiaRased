const validateAddress = (values) => {
	const errors = {};
	if (!values.addressLine) {
		errors.addressLine = 'Required';
	} else if (values.addressLine.length < 10) {
		errors.addressLine = 'Must be 10 characters or more';
	} else if (values.addressLine.length > 50) {
		errors.addressLine = 'Must be 50 characters or less';
	}

	if (!values.city) {
		errors.city = 'Required';
	} else if (values.city.length < 3) {
		errors.city = 'Must be 3 characters or more';
	} else if (values.city.length > 20) {
		errors.city = 'Must be 20 characters or less';
	}

	if (!values.state) {
		errors.state = 'Required';
	} else if (values.state.length < 3) {
		errors.state = 'Must be 3 characters or more';
	} else if (values.state.length > 20) {
		errors.state = 'Must be 20 characters or less';
	}

	if (!values.zip) {
		errors.zip = 'Required';
	} else if (values.zip.length < 5) {
		errors.zip = 'Must be 5 characters or more';
	} else if (values.zip.length > 8) {
		errors.zip = 'Must be 8 characters or less';
	}

	return errors;
};

export default validateAddress;
