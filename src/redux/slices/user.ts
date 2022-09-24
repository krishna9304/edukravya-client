import {
  AnyAction,
  createSlice,
  Slice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Reducer } from "react";

export interface User {
  _id?: string;
  name?: string;
  email?: string;
  phone?: string;
  bio?: string;
  userType?: "student" | "educator";
  avatar?: string;
  emailVerified?: boolean;
  phoneVerified?: boolean;
}

const initialUser: User = {
  _id: undefined,
  name: undefined,
  email: undefined,
  phone: undefined,
  bio: undefined,
  userType: undefined,
  avatar: undefined,
  emailVerified: undefined,
  phoneVerified: undefined,
};

export const userSlice: Slice<
  User,
  SliceCaseReducers<User>,
  string
> = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    setUser: (state: User, action: PayloadAction<User>): User => {
      state = {
        ...state,
        ...action.payload,
      };
      return state;
    },
    removeUser: (state: User): User => {
      state = initialUser;
      return state;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

const userReducer: Reducer<User, AnyAction> = userSlice.reducer;
export default userReducer;
