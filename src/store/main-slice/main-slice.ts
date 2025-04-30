import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MainState } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchOffersAction } from '../api-actions';
import { OfferDto } from '../../types/types';

const initialState: MainState = {
  city: 'Paris',
  offers: [],
  isDataLoading: false,
};

export const mainSlice = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
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

export const { changeCity, setOffers, setDataLoadingStatus } = mainSlice.actions;

export default mainSlice;
