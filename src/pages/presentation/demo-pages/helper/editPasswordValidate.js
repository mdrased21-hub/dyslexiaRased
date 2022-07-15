const editPasswordValidate = (values) => {
	const errors = {};
	if (values.currentPassword) {
		if (!values.newPassword) {
			errors.newPassword = 'Please provide a valid password.';
		} else {
			errors.newPassword = '';

			if (values.newPassword.length < 8 || values.newPassword.length > 32) {
				errors.newPassword +=
					'The password must be at least 8 characters long, but no more than 32. ';
			}
			if (!/[0-9]/g.test(values.newPassword)) {
				errors.newPassword +=
					'Require that at least one digit appear anywhere in the string. ';
			}
			if (!/[a-z]/g.test(values.newPassword)) {
				errors.newPassword +=
					'Require that at least one lowercase letter appear anywhere in the string. ';
			}
			if (!/[A-Z]/g.test(values.newPassword)) {
				errors.newPassword +=
					'Require that at least one uppercase letter appear anywhere in the string. ';
			}
			if (!/[!@#$%^&*)(+=._-]+$/g.test(values.newPassword)) {
				errors.newPassword +=
					'Require that at least one special character appear anywhere in the string. ';
			}
		}

		if (!values.confirmPassword) {
			errors.confirmPassword = 'Please provide a valid password.';
		} else if (values.newPassword !== values.confirmPassword) {
			errors.confirmPassword = 'Passwords do not match.';
		}
	}

	return errors;
};

export default editPasswordValidate;
