import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "./features/counter/counterSlice";
import postsReducer from "./features/Posts/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
