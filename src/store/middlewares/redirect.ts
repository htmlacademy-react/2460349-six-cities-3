import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { rootReducer } from '..';
import browserHistory from '../../browser-history';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
() =>
  (next) =>
    (action: PayloadAction<string>) => {
      if (action.type === 'sixCities/redirectToRoute') {
        browserHistory.push(action.payload);
      }
      return next(action);
    };
