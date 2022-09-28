import { configureStore } from "@reduxjs/toolkit";
import socketReducer from "./slices/socket";
import userReducer from "./slices/user";

export const store = configureStore({
  reducer: {
    user: userReducer,
    socket: socketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
