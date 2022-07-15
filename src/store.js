import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import studentsReducer from './studentsSlice';
import quizzesReducer from './quizzesSlice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
	reducer: {
		user: userReducer,
		students: studentsReducer,
		quizzes: quizzesReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
