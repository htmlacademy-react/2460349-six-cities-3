import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setOffers } from './action';
import { State } from '../types/state';

const initialState: State = {
  city: 'Paris',
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
