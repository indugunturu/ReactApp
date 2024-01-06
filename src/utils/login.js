import { createSlice, current } from "@reduxjs/toolkit";

const loginlogout = createSlice({
  name: "login",
  initialState: {
    items: 'login',
  },
  reducers: {
    loginout: (state, action) => {
      // Redux Toolkit uses immer BTS
      state.items = action.payload;
    }
  },
});

export const { loginout } = loginlogout.actions;

export default loginlogout.reducer;
