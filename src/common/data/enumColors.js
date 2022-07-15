const COLORS = {
	PRIMARY: {
		name: 'primary',
		code: process.env.REACT_APP_PRIMARY_COLOR,
	},
	SECONDARY: {
		name: 'secondary',
		code: process.env.REACT_APP_SECONDARY_COLOR,
	},
	SUCCESS: {
		name: 'success',
		code: process.env.REACT_APP_SUCCESS_COLOR,
	},
	INFO: {
		name: 'info',
		code: process.env.REACT_APP_INFO_COLOR,
	},
	WARNING: {
		name: 'warning',
		code: process.env.REACT_APP_WARNING_COLOR,
	},
	DANGER: {
		name: 'danger',
		code: process.env.REACT_APP_DANGER_COLOR,
	},
	DARK: {
		name: 'dark',
		code: process.env.REACT_APP_DARK_COLOR,
	},
	LIGHT: {
		name: 'light',
		code: process.env.REACT_APP_LIGHT_COLOR,
	},
};

export function getColorNameWithIndex(index) {
	/*
	 * The size has been reduced by one so that the LIGHT color does not come out.
	 */
	return COLORS[Object.keys(COLORS)[index % (Object.keys(COLORS).length - 1)]].name;
}

export default COLORS;
