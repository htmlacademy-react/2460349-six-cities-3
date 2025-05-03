import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OffersState } from '../../types/state';
import { fetchFavoritesData, fetchOfferData, fetchOffersAction } from '../api-actions';
import { OfferDetailsDto, OfferDto } from '../../types/types';

const initialState: OffersState = {
  currentOffer: null,
  nearbyOffers: [],
  isOfferDataLoading: false,
  city: 'Paris',
  offers: [],
  isOffersDataLoading: false,
  hasError: false,
  favorites: [],
  isFavoritesDataLoading: false,
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
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setOffers: (state, action: PayloadAction<OfferDto[]>) => {
      state.offers = action.payload;
    }
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
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action: PayloadAction<OfferDto[]>) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchFavoritesData.pending, (state) => {
        state.isFavoritesDataLoading = true;
      })
      .addCase(fetchFavoritesData.fulfilled, (state, action: PayloadAction<OfferDto[]>) => {
        state.favorites = action.payload;
        state.isFavoritesDataLoading = false;
      })
      .addCase(fetchFavoritesData.rejected, (state) => {
        state.isFavoritesDataLoading = false;
      });
  },
});

export const { setCurrentOffer, setNearbyOffers, setOfferDataLoadingStatus, setCity, setOffers } = offersSlice.actions;

export default offersSlice;
