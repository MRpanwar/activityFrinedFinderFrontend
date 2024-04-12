import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import themeReducer from "./themeSlice";

export default combineReducers({
  theme: themeReducer,
  user: userReducer,
});
