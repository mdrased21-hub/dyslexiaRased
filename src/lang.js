const LANG = {
	EN: {
		text: 'English',
		lng: 'en-US',
		icon: 'CustomUsa',
	},
	DE: {
		text: 'Deutsche',
		lng: 'de-DE',
		icon: 'CustomGermany',
	},
	FR: {
		text: 'Français',
		lng: 'fr-FR',
		icon: 'CustomFrance',
	},
	TR: {
		text: 'Türkçe',
		lng: 'tr-TR',
		icon: 'CustomTurkey',
	},
};

export const getLangWithKey = (key) => {
	return LANG[Object.keys(LANG).filter((f) => LANG[f].lng === key)];
};

export default LANG;
