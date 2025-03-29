import { useEffect, useState } from 'react';
import { Sorting } from '../../../const';
import clsx from 'clsx';

interface Props {
  sortType: Sorting;
  setSortType: (sorting: Sorting) => void;
}

function PlacesSorting({ sortType, setSortType }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = () => {
        setIsOpen(false);
        document.removeEventListener('click', handleClickOutside);
      };

      setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 0);
    }
  }, [isOpen]);

  const handleSortClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSortSelect = (item: Sorting) => {
    setSortType(item);
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortClick}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpen &&
        <ul className="places__options places__options--custom places__options--opened">
          {Object.values(Sorting).map((item) => (
            <li className={clsx(
              'places__option',
              { 'places__option--active': sortType === item }
            )}
            key={item}
            tabIndex={0}
            onClick={() => handleSortSelect(item)}
            >{item}
            </li>
          ))}
        </ul>}
    </form>
  );
}

export default PlacesSorting;
