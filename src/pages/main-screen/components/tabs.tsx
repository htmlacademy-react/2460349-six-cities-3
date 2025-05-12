import { CITIES } from '../../../const';
import CityTab from './city-tab';
import { 	selectOffersErrorStatus, selectCurrentCityName, selectOffersLoading } from '../../../store/offers-slice/offers-selectors';

import { useAppDispatch, useAppSelector } from '../../../store';
import { fetchOffersAction } from '../../../store/api-actions';
import { setCity } from '../../../store/offers-slice/offers-slice';

function Tabs() {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(selectCurrentCityName);
  const hasError = useAppSelector(	selectOffersErrorStatus);
  const isLoading = useAppSelector(selectOffersLoading);

  const handleCityClick = (city: string) => {
    dispatch(setCity(city));

    if(hasError && !isLoading) {
      dispatch(fetchOffersAction());
    }
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <CityTab
              key={city}
              city={city}
              isActive={currentCity === city}
              onClick={handleCityClick}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
