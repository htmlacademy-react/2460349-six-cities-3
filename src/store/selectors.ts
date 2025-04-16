import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../types/state';

export const selectCityName = (state: RootState) => state.city;

export const selectCity = (state: RootState) =>
  state.offers.find((offer) => offer.city.name === state.city)?.city ?? null;

export const selectAllOffers = (state: RootState) => state.offers;

export const selectFilteredOffers = createSelector(
  [selectCityName, selectAllOffers],
  (city, offers) => offers.filter((offer) => offer.city.name === city)
);

export const selectUserEmail = (state: RootState) => state.user?.email;

export const selectAuthorizationStatus = (state: RootState) => state.authorizationStatus;

export const selectIsLoading = (state: RootState) => state.isDataLoading;
