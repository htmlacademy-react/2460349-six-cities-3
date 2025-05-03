import { RootState } from '../../store';
import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

export const selectCurrentCityName = (state: RootState) => state[NameSpace.Offers].city;

export const selectAllOffers = (state: RootState) => state[NameSpace.Offers].offers;

export const selectCurrentCity = (state: RootState) =>
  state[NameSpace.Offers].offers.find((offer) => offer.city.name === state[NameSpace.Offers].city)?.city ?? null;

export const selectOffersByCity = createSelector(
  [selectCurrentCityName, selectAllOffers],
  (city, offers) => offers.filter((offer) => offer.city.name === city)
);

export const selectOffersLoading = (state: RootState) => state[NameSpace.Offers].isOffersDataLoading;

export const selectOfferLoading = (state: RootState) => state[NameSpace.Offers].isOfferDataLoading;

export const selectFavoritesLoading = (state: RootState) => state[NameSpace.Offers].isFavoritesDataLoading;

export const selectCurrentOffer = (state: RootState) => state[NameSpace.Offers].currentOffer;

export const selectNearbyOffers = (state: RootState) => state[NameSpace.Offers].nearbyOffers;

export const selectErrorStatus = (state: RootState): boolean => state[NameSpace.Offers].hasError;

export const selectFavoritesOffers = (state: RootState) => state[NameSpace.Offers].favorites;

export const selectFavoritesOffersLength = (state: RootState) => state[NameSpace.Offers].offers.filter((offer) => offer.isFavorite).length;
