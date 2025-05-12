import { useEffect } from 'react';
import { useAppDispatch } from '../store';
import { getToken } from '../services/token';
import { checkAuthAction } from '../store/api-actions';

export const useInitAuth = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getToken();

    if (token) {
      dispatch(checkAuthAction());
    }

  }, [dispatch]);
};
