import { createSlice, Slice, SliceCaseReducers } from "@reduxjs/toolkit";
import type { PayloadAction, AnyAction } from "@reduxjs/toolkit";
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
const initialState: User = {
  _id: "LOL",
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
  initialState,
  reducers: {
    setUser: (state: User, action: PayloadAction<User>): User => {
      state = {
        ...state,
        ...action.payload,
      };
      return state;
    },
    removeUser: (state: User): User => {
      state = initialState;
      return state;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;
