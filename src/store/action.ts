import { createAction } from '@reduxjs/toolkit';
import { OfferDto } from '../types/types';

export const changeCity = createAction<string>('city/changeCity');
export const setOffers = createAction<OfferDto[]>('offers/setOffers');
