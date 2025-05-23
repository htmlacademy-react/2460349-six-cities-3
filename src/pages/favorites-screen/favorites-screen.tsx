import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { fetchFavoriteOffers } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../store';
import FavoritesList from './components/favorites-list';
import { selectFavoriteOffersCount } from '../../store/offers-slice/offers-selectors';
import FavoritesEmpty from './components/favorites-empty';
import clsx from 'clsx';


function FavoritesScreen() {
  const dispatch = useAppDispatch();
  const favoritesCount = useAppSelector(selectFavoriteOffersCount);
  const isEmpty = favoritesCount === 0;

  useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>6 Cities Favorites</title>
      </Helmet>
      <main
        className={clsx(
          'page__main',
          'page__main--favorites',
          { 'page__main--favorites-empty': isEmpty }
        )}
      >
        <div className="page__favorites-container container">
          {isEmpty ? <FavoritesEmpty /> : <FavoritesList />}
        </div>
      </main >
    </>
  );
}

export default FavoritesScreen;
