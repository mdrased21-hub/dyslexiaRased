const validate = (values) => {
	const errors = {};

	if (!values.img) {
		errors.img = 'Required';
	}

	if (!values.name) {
		errors.name = 'Required';
	}

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

	if (!values.studentNo) {
		errors.studentNo = 'Required';
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

	// if (values.currentPassword) {
	// 	if (!values.newPassword) {
	// 		errors.newPassword = 'Please provide a valid password.';
	// 	} else {
	// 		errors.newPassword = '';

	// 		if (values.newPassword.length < 8 || values.newPassword.length > 32) {
	// 			errors.newPassword +=
	// 				'The password must be at least 8 characters long, but no more than 32. ';
	// 		}
	// 		if (!/[0-9]/g.test(values.newPassword)) {
	// 			errors.newPassword +=
	// 				'Require that at least one digit appear anywhere in the string. ';
	// 		}
	// 		if (!/[a-z]/g.test(values.newPassword)) {
	// 			errors.newPassword +=
	// 				'Require that at least one lowercase letter appear anywhere in the string. ';
	// 		}
	// 		if (!/[A-Z]/g.test(values.newPassword)) {
	// 			errors.newPassword +=
	// 				'Require that at least one uppercase letter appear anywhere in the string. ';
	// 		}
	// 		if (!/[!@#$%^&*)(+=._-]+$/g.test(values.newPassword)) {
	// 			errors.newPassword +=
	// 				'Require that at least one special character appear anywhere in the string. ';
	// 		}
	// 	}

	// 	if (!values.confirmPassword) {
	// 		errors.confirmPassword = 'Please provide a valid password.';
	// 	} else if (values.newPassword !== values.confirmPassword) {
	// 		errors.confirmPassword = 'Passwords do not match.';
	// 	}
	// }

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
