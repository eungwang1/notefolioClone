import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../slices";
import { createWrapper } from "next-redux-wrapper";
const dev = process.env.NODE_ENV === "development";

export const store = configureStore({
  reducer: rootReducer,
});

const wrapper = createWrapper(() => store, {
  debug: dev,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default wrapper;
