import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { mainReducer } from './reducers/main-reducer';
import { offerReducer } from './reducers/offer-reducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../types/state';
import { createAPI } from '../services/api';

export const api = createAPI();

const rootReducer = combineReducers({
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
    })
});

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
