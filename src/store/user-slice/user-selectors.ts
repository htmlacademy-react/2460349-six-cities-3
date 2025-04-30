import { RootState } from '../../store';
import { NameSpace } from '../../const';

export const selectUserData = (state: RootState) => state[NameSpace.User].user;

export const selectUserEmail = (state: RootState) => state[NameSpace.User].user?.email;

export const selectAuthorizationStatus = (state: RootState) => state[NameSpace.User].authorizationStatus;
