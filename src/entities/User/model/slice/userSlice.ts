import { createSlice } from '@reduxjs/toolkit';

import { UserSchema } from '../types/UserSchema.ts';

const initialState: UserSchema = {
  isAuth: false,
};

const userSlice = createSlice({
  name: 'user',
  reducers: {},
  initialState,
});

export const { reducer: userReducer, actions: userActions } = userSlice;
