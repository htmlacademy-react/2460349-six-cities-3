import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { CITIES } from '../../../const';

type City = typeof CITIES[number];

interface Props {
  city: City;
  isActive: boolean;
  onClick: (city: City) => void;
}

const CityTab = ({ city, isActive, onClick }: Props) => (
  <li className="locations__item">
    <Link
      className={clsx(
        'locations__item-link',
        'tabs__item',
        { 'tabs__item--active': isActive }
      )}
      onClick={() => onClick(city)} to="#"
    >
      <span>{city}</span>
    </Link>
  </li>
);

export default CityTab;
