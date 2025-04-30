import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { CommentDto, OfferDetailsDto, OfferDto } from './types';
import { UserData } from './user-data';

export interface MainState {
  city: string;
  offers: OfferDto[];
  isDataLoading: boolean;
}

export interface OfferState {
  currentOffer: OfferDetailsDto | null;
  nearbyOffers: OfferDto[];
  comments: CommentDto[];
  isDataLoading: boolean;
  isCommentSending: boolean;
}

export interface UserState {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
}

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
