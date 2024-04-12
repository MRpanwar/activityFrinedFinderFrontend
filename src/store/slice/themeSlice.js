import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    resetThemeMode: (state) => {
      state.mode = "light";
    },
  },
});

export const { setMode, resetThemeMode } = themeSlice.actions;
export default themeSlice.reducer;
