import { createSlice } from "@reduxjs/toolkit";

const dataSlide = createSlice({
  name: "data",
  initialState: {
    totalUser: 0,
    totalOrder: 0,
    revenue: 0,
    avangeRevenue: 0,
    transaction: [],
  },
  reducers: {
    onLoad(state, action) {
      state.totalUser = action.payload.totalUser;
      state.totalOrder = action.payload.totalOrder;
      state.revenue = action.payload.revenue;
      state.avangeRevenue = action.payload.avangeRevenue;
      state.transaction = action.payload.transaction;
    },
  },
});
export const dataActions = dataSlide.actions;
export default dataSlide.reducer;
