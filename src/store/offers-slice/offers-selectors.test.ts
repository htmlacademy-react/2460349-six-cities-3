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
import { OfferDetailsDto, OfferDto } from '../../types/offer-dto';
import { NameSpace } from '../../const';

export const mockOffers: OfferDto[] = [
  {
    id: '1',
    title: 'Charming Studio in Paris',
    type: 'apartment',
    price: 100,
    city: {
      name: 'Paris',
      location: { latitude: 48.8566, longitude: 2.3522, zoom: 10 },
    },
    location: { latitude: 48.857, longitude: 2.353, zoom: 10 },
    isFavorite: true,
    isPremium: false,
    rating: 4.2,
    previewImage: '/images/studio.jpg',
  },
  {
    id: '2',
    title: 'Modern Loft in Cologne',
    type: 'loft',
    price: 150,
    city: {
      name: 'Cologne',
      location: { latitude: 50.9375, longitude: 6.9603, zoom: 10 },
    },
    location: { latitude: 50.938, longitude: 6.961, zoom: 10 },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    previewImage: '/images/loft.jpg',
  },
];

export const mockOfferDetails: OfferDetailsDto = {
  id: '1',
  title: 'Charming Studio in Paris',
  type: 'apartment',
  price: 100,
  city: {
    name: 'Paris',
    location: { latitude: 48.8566, longitude: 2.3522, zoom: 10 },
  },
  location: { latitude: 48.857, longitude: 2.353, zoom: 10 },
  isFavorite: true,
  isPremium: false,
  rating: 4.2,
  description: 'Cozy and bright studio in the heart of Paris, perfect for couples.',
  bedrooms: 1,
  goods: ['Wi-Fi', 'Heating', 'Kitchen'],
  host: {
    name: 'Alice',
    avatarUrl: '/img/host.jpg',
    isPro: true,
  },
  images: ['/images/studio1.jpg', '/images/studio2.jpg'],
  maxAdults: 2,
};

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
