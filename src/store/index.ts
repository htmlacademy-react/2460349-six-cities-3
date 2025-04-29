import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { mainReducer } from './reducers/main-reducer';
import { offerReducer } from './reducers/offer-reducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../types/state';
import { createAPI } from '../services/api';
import { redirect } from './middlewares/redirect';

export const api = createAPI();

export const rootReducer = combineReducers({
  main: mainReducer,
  offer: offerReducer,
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
