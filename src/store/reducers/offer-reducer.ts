import { createReducer } from '@reduxjs/toolkit';
import { setCurrentOffer, setNearbyOffers, setComments, setOfferDataLoadingStatus } from '../action';
import { OfferState } from '../../types/state';

const initialOfferState: OfferState = {
  currentOffer: null,
  nearbyOffers: [],
  comments: [],
  isDataLoading: false
};

export const offerReducer = createReducer(initialOfferState, (builder) => {
  builder
    .addCase(setCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    });
});
