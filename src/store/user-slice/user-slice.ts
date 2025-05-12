import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus } from '../../const';
import { checkAuth, login, logout } from '../api-actions';
import { UserState } from '../../types/state';
import { UserData } from '../../types/user-data';

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null
};

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuth.fulfilled, (state, action: PayloadAction<UserData>) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});

export default userSlice;
