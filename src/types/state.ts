import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { CommentDto, OfferDetailsDto, OfferDto } from './types';
import { UserData } from './user-data';

export interface MainState {
  city: string;
  offers: OfferDto[];
  authorizationStatus: AuthorizationStatus;
  isDataLoading: boolean;
  user: UserData | null;
}

export interface OfferState {
  currentOffer: OfferDetailsDto | null;
  nearbyOffers: OfferDto[];
  comments: CommentDto[];
  isDataLoading: boolean;
}


export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
