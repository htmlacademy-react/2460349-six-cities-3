import OffersWithMap from './components/offers-with-map';
import Tabs from './components/tabs';
import { Helmet } from 'react-helmet-async';

function MainScreen() {
  return (
    <>
      <Helmet>
        <title>6 Cities Main</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <OffersWithMap />
      </main>
    </>
  );
}

export default MainScreen;
