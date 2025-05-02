import { CITIES } from '../../../const';
import { useDispatch, useSelector } from 'react-redux';
import CityTab from './city-tab';
import { selectCurrentCityName } from '../../../store/offers-slice/offers-selectors';
import { changeCity } from '../../../store/offers-slice/offers-slice';

function Tabs() {
  const dispatch = useDispatch();
  const currentCity = useSelector(selectCurrentCityName);

  const handleCityClick = (city: string) => {
    dispatch(changeCity(city));
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
