import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OffersState } from '../../types/state';
import { fetchFavoriteOffers, fetchNearby, fetchOffer, fetchOffers } from '../api-actions';
import { OfferDetailsDto, OfferDto } from '../../types/offer-dto';

const initialState: OffersState = {
  currentOffer: null,
  nearby: [],
  isOfferDataLoading: false,
  city: 'Paris',
  offers: [],
  isOffersDataLoading: false,
  hasError: false,
  favorites: [],
  isFavoritesDataLoading: false,
  isNearbyDataLoading: false,
};

export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setCurrentOffer: (state, action: PayloadAction<OfferDetailsDto | null>) => {
      state.currentOffer = action.payload;
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
      .addCase(fetchOffer.pending, (state) => {
        state.isOfferDataLoading = true;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.currentOffer = action.payload.offer;

        state.isOfferDataLoading = false;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.isOfferDataLoading = false;
      })
      .addCase(fetchNearby.pending, (state) => {
        state.isNearbyDataLoading = true;
      })
      .addCase(fetchNearby.fulfilled, (state, action) => {
        state.nearby = action.payload.nearby;

        state.isNearbyDataLoading = false;
      })
      .addCase(fetchNearby.rejected, (state) => {
        state.isNearbyDataLoading = false;
      })
      .addCase(fetchOffers.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffers.fulfilled, (state, action: PayloadAction<OfferDto[]>) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchFavoriteOffers.pending, (state) => {
        state.isFavoritesDataLoading = true;
      })
      .addCase(fetchFavoriteOffers.fulfilled, (state, action: PayloadAction<OfferDto[]>) => {
        state.favorites = action.payload;
        state.isFavoritesDataLoading = false;
      })
      .addCase(fetchFavoriteOffers.rejected, (state) => {
        state.isFavoritesDataLoading = false;
      });
  },
});

export const { setCurrentOffer, setOfferDataLoadingStatus, setCity, setOffers } = offersSlice.actions;

export default offersSlice;
