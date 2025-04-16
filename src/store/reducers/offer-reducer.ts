import { createReducer } from '@reduxjs/toolkit';
import { setCurrentOffer, setNearbyOffers, setComments } from '../action';
import { OfferState } from '../../types/state';

const initialOfferState: OfferState = {
  currentOffer: null,
  nearbyOffers: [],
  comments: [],
};

export const offerReducer = createReducer(initialOfferState, (builder) => {
  builder
    .addCase(setCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    });
});
