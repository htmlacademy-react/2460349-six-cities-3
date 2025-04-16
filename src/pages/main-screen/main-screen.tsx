import Tabs from './components/tabs';
import { Helmet } from 'react-helmet-async';
import PlacesSorting from './components/places-sorting';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import { useState } from 'react';
import { selectCurrentCity, selectOffersByCity } from '../../store/selectors';
import { useAppSelector } from '../../store';
import { Sorting } from '../../const';

function MainScreen() {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const [sortType, setSortType] = useState<Sorting>(Sorting.Default);
  const currentCity = useAppSelector(selectCurrentCity);
  const offersByCity = useAppSelector(selectOffersByCity);

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
              <b className="places__found">{offersByCity.length} places to stay in {currentCity?.name}</b>
              <PlacesSorting sortType={sortType} setSortType={setSortType}/>
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={offersByCity} setActiveOfferId={setActiveOfferId} sortType={sortType}/>
              </div>
            </section>
            <div className="cities__right-section">
              {currentCity && < Map city={currentCity} offers={offersByCity} activeOfferId={activeOfferId} pageMain />}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainScreen;
