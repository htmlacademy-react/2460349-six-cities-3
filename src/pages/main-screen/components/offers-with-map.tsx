import PlacesSorting from './places-sorting';
import OffersList from '../../../components/offers-list/offers-list';
import Map from '../../../components/map/map';
import { useState } from 'react';
import { useAppSelector } from '../../../store';
import { Sorting } from '../../../const';
import { selectCurrentCity, selectOffersByCity, selectOffersLoading } from '../../../store/offers-slice/offers-selectors';
import LoadingScreen from '../../loading-screen/loading-screen';

function OffersWithMap() {
  const isOffersLoading = useAppSelector(selectOffersLoading);

  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const [sortType, setSortType] = useState<Sorting>(Sorting.Default);
  const currentCity = useAppSelector(selectCurrentCity);
  const offersByCity = useAppSelector(selectOffersByCity);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersByCity.length} places to stay in {currentCity?.name}</b>
          <PlacesSorting sortType={sortType} setSortType={setSortType} />
          {isOffersLoading && <LoadingScreen />}
          <div className="cities__places-list places__list tabs__content">
            <OffersList offers={offersByCity} setActiveOfferId={setActiveOfferId} sortType={sortType} />
          </div>
        </section>
        <div className="cities__right-section">
          {currentCity && < Map city={currentCity} offers={offersByCity} activeOfferId={activeOfferId} pageMain />}
        </div>
      </div>
    </div>
  );
}

export default OffersWithMap;
