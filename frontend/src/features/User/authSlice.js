import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: null, isAuthenticated: false, user: null },
  reducers: {
    setToken(state, action) {
      state.token = action.payload[0];
      state.user = action.payload[1];
      state.isAuthenticated = true;
    },
    clearToken(state) {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
