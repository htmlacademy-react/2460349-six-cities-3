import { useEffect } from 'react';
import { useAppDispatch } from '../store';
import { getToken } from '../services/token';
import { requireAuthorization } from '../store/action';
import { AuthorizationStatus } from '../const';
import { fetchUserData } from '../store/api-actions';

export const useInitAuth = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getToken();

    if (!token) {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      return;
    }

    dispatch(fetchUserData());

  }, [dispatch]);
};
