import { useAppDispatch, useAppSelector } from '../store';
import { toggleFavoriteStatus, fetchFavoriteOffers, fetchOffers, fetchOffer, fetchNearby } from '../store/api-actions';
import { selectCurrentOffer } from '../store/offers-slice/offers-selectors';
import { FavoritesData } from '../types/favorites-data';

type Context = 'offer' | 'favorites' | 'main' | 'nearby';

export const useFavoritesToggle = (context: Context) => {
  const dispatch = useAppDispatch();
  const offerId = useAppSelector((state) => selectCurrentOffer(state)?.id);

  const handleToggle = async (data: FavoritesData) => {
    await dispatch(toggleFavoriteStatus(data));

    switch (context) {
      case 'offer':
        dispatch(fetchOffer(data.id));
        break;
      case 'favorites':
        dispatch(fetchFavoriteOffers());
        break;
      case 'main':
        dispatch(fetchOffers());
        break;
      case 'nearby':
        if (offerId) {
          dispatch(fetchNearby(offerId));
        }
        break;
    }
  };

  return handleToggle;
};
