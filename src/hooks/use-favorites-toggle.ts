import { useAppDispatch, useAppSelector } from '../store';
import { toggleFavoriteStatusAction, fetchFavoritesData, fetchOffersAction, fetchOfferData } from '../store/api-actions';
import { redirectToRoute } from '../store/action';
import { AuthorizationStatus, AppRoute } from '../const';
import { FavoritesData } from '../types/favorites-data';
import { selectAuthorizationStatus } from '../store/user-slice/user-selectors';

type Context = 'offer' | 'favorites' | 'main';

export const useFavoritesToggle = (context: Context) => {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(selectAuthorizationStatus);
  const isAuth = authStatus === AuthorizationStatus.Auth;

  const handleToggle = async (data: FavoritesData) => {
    if (!isAuth && context !== 'favorites') {
      dispatch(redirectToRoute(AppRoute.Login));
      return;
    }

    await dispatch(toggleFavoriteStatusAction(data));

    switch (context) {
      case 'offer':
        dispatch(fetchOfferData(data.id));
        break;
      case 'favorites':
        dispatch(fetchFavoritesData());
        break;
    }

    dispatch(fetchOffersAction());
  };

  return handleToggle;
};
