import { useEffect } from 'react';
import NoOffersScreen from '../../components/no-offers-screen/no-offers-screen';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchOffers } from '../../store/api-actions';
import { selectOffersErrorStatus } from '../../store/offers-slice/offers-selectors';
import OffersWithMap from './components/offers-with-map';
import Tabs from './components/tabs';
import { Helmet } from 'react-helmet-async';

function MainScreen() {
  const hasError = useAppSelector(selectOffersErrorStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>6 Cities Main</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        {hasError ? <NoOffersScreen /> : <OffersWithMap />}
      </main>
    </>
  );
}

export default MainScreen;
