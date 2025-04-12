import { createAction } from '@reduxjs/toolkit';
import { OfferDto } from '../types/types';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction<string>('city/changeCity');
export const setOffers = createAction<OfferDto[]>('offers/setOffers');
export const loadOffers = createAction<OfferDto[]>('data/loadOffers');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('game/setError');
export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');
