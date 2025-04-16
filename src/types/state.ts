import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { OfferDto } from './types';
import { UserData } from './user-data';

export interface State {
  city: string;
  offers: OfferDto[];
  authorizationStatus: AuthorizationStatus;
  isDataLoading: boolean;
  user: UserData | null;
}

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
