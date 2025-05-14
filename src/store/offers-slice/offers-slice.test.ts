import { describe, it, expect } from 'vitest';
import offersSlice, {
  setCity,
  setCurrentOffer,
  setNearbyOffers,
  setOfferDataLoadingStatus,
  setOffers,
} from './offers-slice';
import { OfferDetailsDto, OfferDto } from '../../types/offer-dto';
import { fetchOffers, fetchOfferWithNearby, fetchFavoriteOffers } from '../api-actions';

const mockOffer: OfferDto = {
  id: '1',
  title: 'Test Offer',
  type: 'apartment',
  price: 100,
  city: { name: 'Paris', location: { latitude: 0, longitude: 0, zoom: 10 } },
  location: { latitude: 0, longitude: 0, zoom: 10 },
  isFavorite: false,
  isPremium: false,
  rating: 4,
  previewImage: '/img.jpg',
};

const mockDetails: OfferDetailsDto = {
  ...mockOffer,
  description: 'Details',
  bedrooms: 2,
  goods: ['Wi-Fi'],
  host: { name: 'Host', avatarUrl: '/img.jpg', isPro: true },
  images: [],
  maxAdults: 3,
};

describe('offersSlice', () => {
  it('should set city', () => {
    const state = offersSlice.reducer(undefined, setCity('Amsterdam'));
    expect(state.city).toBe('Amsterdam');
  });

  it('should set current offer', () => {
    const state = offersSlice.reducer(undefined, setCurrentOffer(mockDetails));
    expect(state.currentOffer).toEqual(mockDetails);
  });

  it('should set nearby offers', () => {
    const state = offersSlice.reducer(undefined, setNearbyOffers([mockOffer]));
    expect(state.nearbyOffers).toEqual([mockOffer]);
  });

  it('should set offer loading status', () => {
    const state = offersSlice.reducer(undefined, setOfferDataLoadingStatus(true));
    expect(state.isOfferDataLoading).toBe(true);
  });

  it('should set offers list', () => {
    const state = offersSlice.reducer(undefined, setOffers([mockOffer]));
    expect(state.offers).toEqual([mockOffer]);
  });

  it('should handle fetchOfferWithNearby.pending', () => {
    const state = offersSlice.reducer(undefined, { type: fetchOfferWithNearby.pending.type });
    expect(state.isOfferDataLoading).toBe(true);
  });

  it('should handle fetchOfferWithNearby.fulfilled', () => {
    const payload = { offer: mockDetails, nearby: [mockOffer] };
    const state = offersSlice.reducer(undefined, {
      type: fetchOfferWithNearby.fulfilled.type,
      payload,
    });
    expect(state.currentOffer).toEqual(mockDetails);
    expect(state.nearbyOffers).toEqual([mockOffer]);
    expect(state.isOfferDataLoading).toBe(false);
  });

  it('should handle fetchOffers.rejected', () => {
    const state = offersSlice.reducer(undefined, { type: fetchOffers.rejected.type });
    expect(state.hasError).toBe(true);
    expect(state.isOffersDataLoading).toBe(false);
  });

  it('should handle fetchFavoriteOffers.fulfilled', () => {
    const state = offersSlice.reducer(undefined, {
      type: fetchFavoriteOffers.fulfilled.type,
      payload: [mockOffer],
    });
    expect(state.favorites).toEqual([mockOffer]);
    expect(state.isFavoritesDataLoading).toBe(false);
  });
});
