import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../types/state';
import { createAPI } from '../services/api';
import { redirect } from './middlewares/redirect';
import mainSlice from './main-slice/main-slice';
import offerSlice from './offer-slice/offer-slice';
import { NameSpace } from '../const';
import { userSlice } from './user-slice/user-slice';

export const api = createAPI();

export const rootReducer = combineReducers({
  [NameSpace.Main]: mainSlice.reducer,
  [NameSpace.Offer]: offerSlice.reducer,
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

