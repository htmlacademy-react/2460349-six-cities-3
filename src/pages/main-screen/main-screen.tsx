import ErrorScreen from '../../components/error-screen/error-screen';
import { useAppSelector } from '../../store';
import { selectErrorStatus } from '../../store/offers-slice/offers-selectors';
import OffersWithMap from './components/offers-with-map';
import Tabs from './components/tabs';
import { Helmet } from 'react-helmet-async';

function MainScreen() {
  const hasError = useAppSelector(selectErrorStatus);

  return (
    <>
      <Helmet>
        <title>6 Cities Main</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        {hasError ? <ErrorScreen /> : <OffersWithMap />}
      </main>
    </>
  );
}

export default MainScreen;
