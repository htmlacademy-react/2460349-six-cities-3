import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OfferState } from '../../types/state';
import { fetchOfferData, sendCommentAction } from '../api-actions';
import { CommentDto, OfferDetailsDto, OfferDto } from '../../types/types';

const initialState: OfferState = {
  currentOffer: null,
  nearbyOffers: [],
  comments: [],
  isDataLoading: false,
  isCommentSending: false,
};

export const offerSlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    setCurrentOffer: (state, action: PayloadAction<OfferDetailsDto | null>) => {
      state.currentOffer = action.payload;
    },
    setNearbyOffers: (state, action: PayloadAction<OfferDto[]>) => {
      state.nearbyOffers = action.payload;
    },
    setOfferDataLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isDataLoading = action.payload;
    },
    setComments: (state, action: PayloadAction<CommentDto[]>) => {
      state.comments = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferData.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchOfferData.fulfilled, (state, action) => {
        state.currentOffer = action.payload.offer;
        state.nearbyOffers = action.payload.nearby;
        state.comments = action.payload.comments;

        state.isDataLoading = false;
      })
      .addCase(fetchOfferData.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(sendCommentAction.pending, (state) => {
        state.isCommentSending = true;
      })
      .addCase(sendCommentAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isCommentSending = false;
      })
      .addCase(sendCommentAction.rejected, (state) => {
        state.isCommentSending = false;
      });
  },
});

export const { setCurrentOffer, setNearbyOffers, setOfferDataLoadingStatus, setComments} = offerSlice.actions;

export default offerSlice;
