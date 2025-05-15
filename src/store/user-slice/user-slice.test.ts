import userSlice from './user-slice';
import { checkAuth, login, logout } from '../api-actions';
import { AuthorizationStatus } from '../../const';
import { mockUser } from '../../mock/test-data';

describe('userSlice', () => {
  it('should return initial state by default', () => {
    const state = userSlice.reducer(undefined, { type: 'UNKNOWN_ACTION' });
    expect(state).toEqual(userSlice.getInitialState());
  });

  it('should set user and authorizationStatus=Auth on checkAuth.fulfilled', () => {
    const state = userSlice.reducer(undefined, {
      type: checkAuth.fulfilled.type,
      payload: mockUser,
    });
    expect(state.user).toEqual(mockUser);
    expect(state.authorizationStatus).toBe(AuthorizationStatus.Auth);
  });

  it('should clear user and set authorizationStatus=NoAuth on checkAuth.rejected', () => {
    const state = userSlice.reducer(undefined, { type: checkAuth.rejected.type });
    expect(state.user).toBe(null);
    expect(state.authorizationStatus).toBe(AuthorizationStatus.NoAuth);
  });

  it('should set user and authorizationStatus=Auth on login.fulfilled', () => {
    const state = userSlice.reducer(undefined, {
      type: login.fulfilled.type,
      payload: mockUser,
    });
    expect(state.user).toEqual(mockUser);
    expect(state.authorizationStatus).toBe(AuthorizationStatus.Auth);
  });

  it('should set authorizationStatus=NoAuth on login.rejected', () => {
    const state = userSlice.reducer(undefined, { type: login.rejected.type });
    expect(state.authorizationStatus).toBe(AuthorizationStatus.NoAuth);
  });

  it('should set authorizationStatus=NoAuth on logout.fulfilled', () => {
    const state = userSlice.reducer(undefined, { type: logout.fulfilled.type });
    expect(state.authorizationStatus).toBe(AuthorizationStatus.NoAuth);
  });
});
