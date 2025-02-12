import { CITIES } from '../../../const';
import { Link } from 'react-router-dom';

function Tabs() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city)=>(
            <li className="locations__item" key={city}>
              <Link className="locations__item-link tabs__item" to="#">
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
