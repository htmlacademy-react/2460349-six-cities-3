import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../types/state';

export const selectCurrentCityName = (state: RootState) => state.main.city;

export const selectCurrentCity = (state: RootState) =>
  state.main.offers.find((offer) => offer.city.name === state.main.city)?.city ?? null;

export const selectAllOffers = (state: RootState) => state.main.offers;

export const selectOffersByCity = createSelector(
  [selectCurrentCityName, selectAllOffers],
  (city, offers) => offers.filter((offer) => offer.city.name === city)
);

export const selectUserEmail = (state: RootState) => state.main.user?.email;

export const selectAuthorizationStatus = (state: RootState) => state.main.authorizationStatus;

export const selectAppLoading = (state: RootState) => state.main.isDataLoading;

export const selectCurrentOffer = (state: RootState) => state.offer.currentOffer;

export const selectComments = (state: RootState) => state.offer.comments;

export const selectNearbyOffers = (state: RootState) => state.offer.nearbyOffers;

export const selectUserData = (state: RootState) => state.main.user;
