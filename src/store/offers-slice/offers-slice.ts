import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OffersState } from '../../types/state';
import { fetchOfferData, fetchOffersAction } from '../api-actions';
import { OfferDetailsDto, OfferDto } from '../../types/types';

const initialState: OffersState = {
  currentOffer: null,
  nearbyOffers: [],
  isOfferDataLoading: false,
  city: 'Paris',
  offers: [],
  isDataLoading: false,
};

export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setCurrentOffer: (state, action: PayloadAction<OfferDetailsDto | null>) => {
      state.currentOffer = action.payload;
    },
    setNearbyOffers: (state, action: PayloadAction<OfferDto[]>) => {
      state.nearbyOffers = action.payload;
    },
    setOfferDataLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isOfferDataLoading = action.payload;
    },
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setOffers: (state, action: PayloadAction<OfferDto[]>) => {
      state.offers = action.payload;
    },
    setDataLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isDataLoading = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferData.pending, (state) => {
        state.isOfferDataLoading = true;
      })
      .addCase(fetchOfferData.fulfilled, (state, action) => {
        state.currentOffer = action.payload.offer;
        state.nearbyOffers = action.payload.nearby;

        state.isOfferDataLoading = false;
      })
      .addCase(fetchOfferData.rejected, (state) => {
        state.isOfferDataLoading = false;
      })
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action: PayloadAction<OfferDto[]>) => {
        state.offers = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isDataLoading = false;
      });
  },
});

export const { setCurrentOffer, setNearbyOffers, setOfferDataLoadingStatus, changeCity, setOffers, setDataLoadingStatus } = offersSlice.actions;

export default offersSlice;
