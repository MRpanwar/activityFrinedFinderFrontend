import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: null,
  loggedInTime: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    signIn: (state, action) => {
      //console.log(action.payload);
      localStorage.removeItem("persist:root");
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loggedInTime = action.payload.loggedInTime;
    },
    signOut: (state) => {
      localStorage.removeItem("persist:root");
      state.user = {};
      state.token = null;
      state.loggedInTime = null;
    },
    updateloggedInTime: (state) => {
      //localStorage.removeItem("persist:root");
      //console.log(action.payload);
      //   console.log({ ...state, loggedInTime: action.payload });
      //   return { ...state, loggedInTime: action.payload };
      //console.log(state.loggedInTime);
      state.loggedInTime = state.loggedInTime + 5000;
      //console.log(state, action.payload);
    },
  },
});

export const { signIn, signOut, updateloggedInTime } = userSlice.actions;
export default userSlice.reducer;
