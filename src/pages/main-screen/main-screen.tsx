import Tabs from './components/tabs';
import { Helmet } from 'react-helmet-async';
import PlacesSorting from './components/places-sorting';
import { OfferDto } from '../../components/mock/mock-offers';
import OffersList from '../../components/offers-list/offers-list';

export interface MainScreenProps {
  offersCount: number;
  offers: OfferDto[];
}

function MainScreen({ offersCount, offers }: MainScreenProps) {
  return (
    <>
      <Helmet>
        <title>6 Cities Main</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in Amsterdam</b>
              <PlacesSorting />
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={offers} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainScreen;
