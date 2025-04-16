import { CITIES } from '../../../const';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { changeCity } from '../../../store/action';
import { Link } from 'react-router-dom';
import { selectCurrentCityName } from '../../../store/selectors';

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
            <li className="locations__item" key={city}>
              <Link
                className={clsx(
                  'locations__item-link',
                  'tabs__item',
                  { 'tabs__item--active': currentCity === city }
                )}
                onClick={() => handleCityClick(city)} to='#'
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
