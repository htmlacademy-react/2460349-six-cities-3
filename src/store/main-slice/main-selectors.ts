import { RootState } from '../../store';
import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

export const selectCurrentCityName = (state: RootState) => state[NameSpace.Main].city;

export const selectCurrentCity = (state: RootState) =>
  state[NameSpace.Main].offers.find((offer) => offer.city.name === state[NameSpace.Main].city)?.city ?? null;

export const selectAllOffers = (state: RootState) => state[NameSpace.Main].offers;

export const selectOffersByCity = createSelector(
  [selectCurrentCityName, selectAllOffers],
  (city, offers) => offers.filter((offer) => offer.city.name === city)
);

export const selectAppLoading = (state: RootState) => state[NameSpace.Main].isDataLoading;
