const validate = (values) => {
	const errors = {};

	if (!values.myKidNo) {
		errors.myKidNo = 'Required';
	}

	if (!values.gender) {
		errors.gender = 'Required';
	}

	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}

	if (!values.year) {
		errors.year = 'Required';
	}

	if (!values.className) {
		errors.className = 'Required';
	}

	if (!values.phoneNo) {
		errors.phoneNo = 'Required';
	}

	if (!values.parentGuardianName) {
		errors.parentGuardianName = 'Required';
	}

	if (!values.parentGuardianPhoneNo) {
		errors.parentGuardianPhoneNo = 'Required';
	}

	if (!values.postalCode) {
		errors.postalCode = 'Required';
	}

	if (!values.addressLineOne) {
		errors.addressLineOne = 'Required';
	}

	if (!values.addressLineTwo) {
		errors.addressLineTwo = 'Required';
	}

	if (!values.city) {
		errors.city = 'Required';
	}

	if (!values.state) {
		errors.state = 'Required';
	}

	return errors;
};

export default validate;
