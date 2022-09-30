import { configureStore } from "@reduxjs/toolkit";
import lectureReducer from "./slices/liveLecture";
import userReducer from "./slices/user";

export const store = configureStore({
  reducer: {
    user: userReducer,
    lecture: lectureReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
