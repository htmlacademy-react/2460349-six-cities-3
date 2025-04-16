import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, requireAuthorization, setDataLoadingStatus, setOffers, setUserData } from '../action';
import { MainState } from '../../types/state';
import { AuthorizationStatus } from '../../const';

const initialState: MainState = {
  city: 'Paris',
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoading: false,
  user: null,
};

export const mainReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    });
});

