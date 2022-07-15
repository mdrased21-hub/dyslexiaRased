import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [],
};

export const quizzesSlice = createSlice({
	name: 'quizzes',
	initialState,
	reducers: {
		setQuizzes: (state, action) => {
			state.data = action.payload;
		},
	},
});

export const { setQuizzes } = quizzesSlice.actions;

export default quizzesSlice.reducer;
