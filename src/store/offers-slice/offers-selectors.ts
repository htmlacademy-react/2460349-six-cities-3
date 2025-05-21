import { RootState } from '../../store';
import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OfferDto } from '../../types/offer-dto';

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

export const selectNearbyDataLoading = (state: RootState) => state[NameSpace.Offers].isNearbyDataLoading;

export const selectCurrentOffer = (state: RootState) => state[NameSpace.Offers].currentOffer;

export const selectNearbyOffers = (state: RootState) => state[NameSpace.Offers].nearby;

export const selectOffersErrorStatus = (state: RootState): boolean => state[NameSpace.Offers].hasError;

export const selectFavoriteOffers = (state: RootState) => state[NameSpace.Offers].favorites;

export const selectFavoriteOffersCount = (state: RootState) => state[NameSpace.Offers].favorites.length;

export const selectFavoritesByCity = createSelector(
  [selectFavoriteOffers],
  (favorites) => favorites.reduce<Record<string, OfferDto[]>>((acc, offer) => {
    const city = offer.city.name;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(offer);
    return acc;
  }, {})
);
