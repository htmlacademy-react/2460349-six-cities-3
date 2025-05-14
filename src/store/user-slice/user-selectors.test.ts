import { describe, it, expect } from 'vitest';
import {
  selectUserData,
  selectUserEmail,
  selectAuthorizationStatus,
} from './user-selectors';
import { RootState } from '../../types/state';
import { AuthorizationStatus, NameSpace } from '../../const';

const mockUser = {
  name: 'Valer',
  avatarUrl: '/img/avatar.jpg',
  isPro: true,
  email: 'valer@example.com',
  token: 'secret-token',
};

const mockState = {
  [NameSpace.User]: {
    user: mockUser,
    authorizationStatus: AuthorizationStatus.Auth,
  },
} as unknown as RootState;

describe('User selectors', () => {
  it('selectUserData returns full user object', () => {
    expect(selectUserData(mockState)).toEqual(mockUser);
  });

  it('selectUserEmail returns user email', () => {
    expect(selectUserEmail(mockState)).toBe('valer@example.com');
  });

  it('selectAuthorizationStatus returns current status', () => {
    expect(selectAuthorizationStatus(mockState)).toBe('AUTH');
  });

  it('selectUserEmail returns undefined if no user', () => {
    const stateWithoutUser = {
      [NameSpace.User]: {
        user: null,
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
    } as unknown as RootState;

    expect(selectUserEmail(stateWithoutUser)).toBeUndefined();
  });
});
