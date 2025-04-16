import { createAction } from '@reduxjs/toolkit';
import { CommentDto, OfferDetailsDto, OfferDto } from '../types/types';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';

export const changeCity = createAction<string>('city/changeCity');
export const setOffers = createAction<OfferDto[]>('offers/setOffers');
export const loadOffers = createAction<OfferDto[]>('data/loadOffers');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');
export const setUserData = createAction<UserData>('data/userData');

export const setCurrentOffer = createAction<OfferDetailsDto>('data/currentOffer');
export const setNearbyOffers = createAction<OfferDto[]>('data/nearbyOffers');
export const setComments = createAction<CommentDto[]>('data/comments');

