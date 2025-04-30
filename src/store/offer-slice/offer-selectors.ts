import { RootState } from '../../store';
import { NameSpace } from '../../const';

export const selectCurrentOffer = (state: RootState) => state[NameSpace.Offer].currentOffer;

export const selectComments = (state: RootState) => state[NameSpace.Offer].comments;

export const selectNearbyOffers = (state: RootState) => state[NameSpace.Offer].nearbyOffers;

export const selectOfferLoading = (state: RootState) => state[NameSpace.Offer].isDataLoading;
