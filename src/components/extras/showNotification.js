import { Store } from 'react-notifications-component';

const _settings = {
	insert: 'top',
	container: 'top-right',
	animationIn: ['animate__animated', 'animate__fadeIn'],
	animationOut: ['animate__animated', 'animate__fadeOut'],
	dismiss: {
		duration: 5000,
		pauseOnHover: true,
		onScreen: true,
		showIcon: true,
		waitForAnimation: true,
	},
};

const showNotification = (title, message, type = 'default') => {
	Store.addNotification({
		title,
		message,
		type,
		..._settings,
	});
};

export default showNotification;
