import { useAppDispatch } from '../store';
import { toggleFavoriteStatus, fetchFavoriteOffers, fetchOffers, fetchOfferWithNearby } from '../store/api-actions';
import { FavoritesData } from '../types/favorites-data';

type Context = 'offer' | 'favorites' | 'main';

export const useFavoritesToggle = (context: Context) => {
  const dispatch = useAppDispatch();
  const handleToggle = async (data: FavoritesData) => {
    await dispatch(toggleFavoriteStatus(data));

    switch (context) {
      case 'offer':
        dispatch(fetchOfferWithNearby(data.id));
        break;
      case 'favorites':
        dispatch(fetchFavoriteOffers());
        break;
      case 'main':
        dispatch(fetchOffers());
        break;
    }
  };

  return handleToggle;
};
