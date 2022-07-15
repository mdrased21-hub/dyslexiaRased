import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [],
};

export const studentSlice = createSlice({
	name: 'students',
	initialState,
	reducers: {
		setStudents: (state, action) => {
			state.data = action.payload;
		},
	},
});

export const { setStudents } = studentSlice.actions;

export default studentSlice.reducer;
