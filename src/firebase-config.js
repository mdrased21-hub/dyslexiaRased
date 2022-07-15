import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCeIKrvJ2dVt43baZCPgRh-xFJApgUxEHY',
	authDomain: 'dyslexia-monitoring-system.firebaseapp.com',
	projectId: 'dyslexia-monitoring-system',
	storageBucket: 'dyslexia-monitoring-system.appspot.com',
	messagingSenderId: '638749129799',
	appId: '1:638749129799:web:175f5740ff5e2727ae0562',
	measurementId: 'G-ZBM2PBVZJS',
};

const app = initializeApp(firebaseConfig);
const secondaryApp = initializeApp(firebaseConfig, 'Secondary');

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const secondaryAuth = getAuth(secondaryApp);
