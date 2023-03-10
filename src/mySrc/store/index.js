import { configureStore } from "@reduxjs/toolkit";
import loginSlide from "./login-action";
import dataSlide from "./data-action";
const store = configureStore({
  reducer: {
    login: loginSlide,
    data: dataSlide,
  },
});
export default store;
