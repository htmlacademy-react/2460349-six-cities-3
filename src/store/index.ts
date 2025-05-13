import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../types/state';
import { createAPI } from '../services/api';
import { redirect } from './middlewares/redirect';
import reviewsSlice from './reviews-slice/reviews-slice';
import offersSlice from './offers-slice/offers-slice';
import { NameSpace } from '../const';
import { userSlice } from './user-slice/user-slice';

export const api = createAPI();

export const rootReducer = combineReducers({
  [NameSpace.Reviews]: reviewsSlice.reducer,
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    }).concat(redirect)
});

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type { RootState };
