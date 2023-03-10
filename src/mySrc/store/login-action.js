import { createSlice } from "@reduxjs/toolkit";
const loginSlide = createSlice({
  name: "login",
  initialState: {
    userName: "",
    id: "",
    isLogin: false,
  },
  reducers: {
    onLogin(state, action) {
      state.userName = action.payload.userName;
      state.id = action.payload.id;
      state.isLogin = true;
    },
    onLogOut(state) {
      state.userName = "";
      state.id = "";
      state.isLogin = false;
    },
  },
});
export const loginActions = loginSlide.actions;
export default loginSlide.reducer;
