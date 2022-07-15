import UserImage from '../../assets/img/wanna/wanna1.png';
import UserImageWebp from '../../assets/img/wanna/wanna1.webp';
import UserImage2 from '../../assets/img/wanna/wanna2.png';
import UserImage2Webp from '../../assets/img/wanna/wanna2.webp';
import UserImage3 from '../../assets/img/wanna/wanna3.png';
import UserImage3Webp from '../../assets/img/wanna/wanna3.webp';
import UserImage4 from '../../assets/img/wanna/wanna4.png';
import UserImage4Webp from '../../assets/img/wanna/wanna4.webp';
import UserImage5 from '../../assets/img/wanna/wanna5.png';
import UserImage5Webp from '../../assets/img/wanna/wanna5.webp';
import UserImage6 from '../../assets/img/wanna/wanna6.png';
import UserImage6Webp from '../../assets/img/wanna/wanna6.webp';
import UserImage7 from '../../assets/img/wanna/wanna7.png';
import UserImage7Webp from '../../assets/img/wanna/wanna7.webp';
import SERVICES from './serviceDummyData';

import User7Landing from '../../assets/img/wanna/landing1.png';

const john = {
	id: 1,
	username: 'john',
	name: 'John',
	surname: 'Doe',
	position: 'CEO, Founder',
	src: UserImage,
	srcSet: UserImageWebp,
	isOnline: true,
	isReply: true,
	color: 'primary',
	services: [SERVICES.SURFING, SERVICES.KITE_SURFING, SERVICES.TENNIS],
};

const grace = {
	id: 2,
	username: 'grace',
	name: 'Grace',
	surname: 'Buckland',
	position: 'Staff',
	src: UserImage2,
	srcSet: UserImage2Webp,
	isOnline: true,
	color: 'warning',
	services: [SERVICES.SNOWBOARDING, SERVICES.ICE_SKATING, SERVICES.KITE_SURFING],
};

const jane = {
	id: 3,
	username: 'jane',
	name: 'Jane',
	surname: 'Lee',
	position: 'Staff',
	src: UserImage3,
	srcSet: UserImage3Webp,
	isOnline: true,
	color: 'secondary',
	services: [SERVICES.YOGA, SERVICES.HANDBALL, SERVICES.CRICKET],
};

const ryan = {
	id: 4,
	username: 'ryan',
	name: 'Ryan',
	surname: 'McGrath',
	position: 'Worker',
	src: UserImage4,
	srcSet: UserImage4Webp,
	isOnline: false,
	color: 'info',
	services: [SERVICES.HIKING, SERVICES.FOOTBALL, SERVICES.HANDBALL],
};

const ella = {
	id: 5,
	username: 'ella',
	name: 'Ella',
	surname: 'Oliver',
	position: 'Worker',
	src: UserImage5,
	srcSet: UserImage5Webp,
	isOnline: false,
	color: 'success',
	services: [SERVICES.ICE_SKATING, SERVICES.TENNIS, SERVICES.SNOWBOARDING, SERVICES.YOGA],
};

const chloe = {
	id: 6,
	username: 'chloe',
	name: 'Chloe',
	surname: 'Walker',
	position: 'Staff',
	src: UserImage6,
	srcSet: UserImage6Webp,
	isOnline: true,
	color: 'warning',
	services: [SERVICES.VOLLEYBALL, SERVICES.CRICKET],
};

const sam = {
	id: 7,
	username: 'sam',
	name: 'Sam',
	surname: 'Roberts',
	position: 'Worker',
	src: UserImage7,
	srcSet: UserImage7Webp,
	isOnline: false,
	color: 'danger',
	fullImage: User7Landing,
};

const USERS = {
	JOHN: john,
	GRACE: grace,
	JANE: jane,
	RYAN: ryan,
	ELLA: ella,
	CHLOE: chloe,
	SAM: sam,
};

export function getUserDataWithUsername(username) {
	return USERS[Object.keys(USERS).filter((f) => USERS[f].username.toString() === username)];
}

export function getUserDataWithId(id) {
	return USERS[Object.keys(USERS).filter((f) => USERS[f].id.toString() === id.toString())];
}

export default USERS;
