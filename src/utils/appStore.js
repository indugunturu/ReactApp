import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import loginlogout from './login';

const appStore = configureStore({
    reducer: {
      cart: cartReducer,
      loginlogout: loginlogout
    },
  });


export default appStore;