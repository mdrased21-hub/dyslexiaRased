const surfing = {
	name: 'Surfing',
	icon: 'Surfing',
	color: 'info',
};
const kiteSurfing = {
	name: 'Kite Surfing',
	icon: 'Kitesurfing',
	color: 'danger',
};
const tennis = {
	name: 'Tennis',
	icon: 'SportsTennis',
	color: 'success',
};
const kayaking = {
	name: 'Kayaking',
	icon: 'Kayaking',
	color: 'info',
};
const handball = {
	name: 'Handball',
	icon: 'SportsHandball',
	color: 'warning',
};
const iceSkating = {
	name: 'Ice Skating',
	icon: 'IceSkating',
	color: 'info',
};
const snowboarding = {
	name: 'Snowboarding',
	icon: 'Snowboarding',
	color: 'warning',
};
const volleyball = {
	name: 'Volleyball',
	icon: 'SportsVolleyball',
	color: 'warning',
};
const cricket = {
	name: 'Cricket',
	icon: 'SportsCricket',
	color: 'success',
};
const yoga = {
	name: 'Yoga',
	icon: 'SelfImprovement',
	color: 'success',
};
const hiking = {
	name: 'Hiking',
	icon: 'Hiking',
	color: 'danger',
};
const football = {
	name: 'Football',
	icon: 'SportsFootball',
	color: 'success',
};

const SERVICES = {
	SURFING: surfing,
	KITE_SURFING: kiteSurfing,
	TENNIS: tennis,
	KAYAKING: kayaking,
	HANDBALL: handball,
	ICE_SKATING: iceSkating,
	SNOWBOARDING: snowboarding,
	VOLLEYBALL: volleyball,
	CRICKET: cricket,
	YOGA: yoga,
	HIKING: hiking,
	FOOTBALL: football,
};

export function getServiceDataWithServiceName(serviceName) {
	return SERVICES[
		Object.keys(SERVICES).filter((f) => SERVICES[f].name.toString() === serviceName)
	];
}

export default SERVICES;
