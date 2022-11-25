import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IThemeSlice {
  darkMode: boolean;
}

const initialState: IThemeSlice = {
  darkMode: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toogleDarkMode: (state) => {
      console.log("reached");
      console.log(state.darkMode);
      state.darkMode = !state.darkMode;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toogleDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
