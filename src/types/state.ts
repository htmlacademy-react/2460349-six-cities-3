import { store } from '../store';
import { OfferDto } from './types';

export interface State {
  city: string;
  offers: OfferDto[];
}

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
