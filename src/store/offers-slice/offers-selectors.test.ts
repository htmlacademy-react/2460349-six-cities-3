import { describe, it, expect } from 'vitest';
import {
  selectCurrentCityName,
  selectAllOffers,
  selectCurrentCity,
  selectOffersByCity,
  selectFavoriteOffers,
  selectFavoriteOffersCount,
  selectFavoritesByCity,
} from './offers-selectors';
import { RootState } from '../../types/state';
import { NameSpace } from '../../const';
import { mockOffers } from '../../mock/test-data';

const mockState = {
  [NameSpace.Offers]: {
    city: 'Paris',
    offers: mockOffers,
    isOffersDataLoading: false,
    isOfferDataLoading: false,
    isFavoritesDataLoading: false,
    currentOffer: null,
    nearbyOffers: [],
    hasError: false,
    favorites: mockOffers.filter((o) => o.isFavorite),
  },
} as unknown as RootState;

describe('Offer selectors', () => {
  it('selectCurrentCityName returns correct city name', () => {
    expect(selectCurrentCityName(mockState)).toBe('Paris');
  });

  it('selectAllOffers returns all offers', () => {
    expect(selectAllOffers(mockState)).toEqual(mockOffers);
  });

  it('selectCurrentCity returns city object from current city name', () => {
    expect(selectCurrentCity(mockState)).toEqual(mockOffers[0].city);
  });

  it('selectOffersByCity returns only offers from selected city', () => {
    const result = selectOffersByCity(mockState);
    expect(result).toHaveLength(1);
    expect(result[0].city.name).toBe('Paris');
  });

  it('selectFavoriteOffers returns only favorite offers', () => {
    const result = selectFavoriteOffers(mockState);
    expect(result.every((o) => o.isFavorite)).toBe(true);
  });

  it('selectFavoriteOffersCount returns correct count', () => {
    expect(selectFavoriteOffersCount(mockState)).toBe(1);
  });

  it('selectFavoritesByCity groups favorites by city', () => {
    const result = selectFavoritesByCity(mockState);
    expect(result).toHaveProperty('Paris');
    expect(result['Paris']).toHaveLength(1);
  });
});
