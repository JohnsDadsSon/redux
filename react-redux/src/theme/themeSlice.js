import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const themeSlice = createSlice({
  name: "theme",
  initialState: { purpleTheme: false },
  reducers: {
    toggleTheme: (state) => {
      state.purpleTheme = !state.purpleTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
