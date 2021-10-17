import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
	value: boolean;
}

const initialState: ThemeState = {
	value: false,
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setAutoDarkMode: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value = !state.value;
		},
        setManualDarkMode: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload
        }
	},
});

// Action creators are generated for each case reducer function
export const { setAutoDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
