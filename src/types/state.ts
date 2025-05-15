import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { CommentDto } from './comment-dto';
import { OfferDetailsDto, OfferDto } from './offer-dto';
import { UserData } from './user-data';

export interface ReviewsState {
  isCommentSending: boolean;
  comments: CommentDto[];
  isDataLoading: boolean;
}

export interface OffersState {
  currentOffer: OfferDetailsDto | null;
  nearbyOffers: OfferDto[];
  isOfferDataLoading: boolean;
  city: string;
  offers: OfferDto[];
  isOffersDataLoading: boolean;
  hasError: boolean;
  favorites: OfferDto[];
  isFavoritesDataLoading: boolean;
}

export interface UserState {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
}

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
