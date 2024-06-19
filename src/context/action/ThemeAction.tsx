import { createSlice } from "@reduxjs/toolkit";
interface ThemeState {
    value: boolean;
}
const initialState: ThemeState = {
    value: false,
};
const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        handleTheme(state) {
            state.value = !state.value;
        }
    }
});

export default themeSlice.reducer;
export const { handleTheme } = themeSlice.actions;
