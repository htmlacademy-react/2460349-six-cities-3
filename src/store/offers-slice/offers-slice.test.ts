import { describe, it, expect } from 'vitest';
import offersSlice, {
  setCity,
  setCurrentOffer,
  setNearbyOffers,
  setOfferDataLoadingStatus,
  setOffers,
} from './offers-slice';
import { fetchOffers, fetchOfferWithNearby, fetchFavoriteOffers } from '../api-actions';
import { mockDetails, mockOffers } from '../../mock/test-data';

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
    const state = offersSlice.reducer(undefined, setNearbyOffers(mockOffers));
    expect(state.nearbyOffers).toEqual(mockOffers);
  });

  it('should set offer loading status', () => {
    const state = offersSlice.reducer(undefined, setOfferDataLoadingStatus(true));
    expect(state.isOfferDataLoading).toBe(true);
  });

  it('should set offers list', () => {
    const state = offersSlice.reducer(undefined, setOffers(mockOffers));
    expect(state.offers).toEqual(mockOffers);
  });

  it('should handle fetchOfferWithNearby.pending', () => {
    const state = offersSlice.reducer(undefined, { type: fetchOfferWithNearby.pending.type });
    expect(state.isOfferDataLoading).toBe(true);
  });

  it('should handle fetchOfferWithNearby.fulfilled', () => {
    const payload = { offer: mockDetails, nearby: mockOffers };
    const state = offersSlice.reducer(undefined, {
      type: fetchOfferWithNearby.fulfilled.type,
      payload,
    });
    expect(state.currentOffer).toEqual(mockDetails);
    expect(state.nearbyOffers).toEqual(mockOffers);
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
      payload: mockOffers,
    });
    expect(state.favorites).toEqual(mockOffers);
    expect(state.isFavoritesDataLoading).toBe(false);
  });
});
