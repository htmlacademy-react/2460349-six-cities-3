import clsx from 'clsx';
import { RATING_MULTIPLIER } from '../../../const';
import { useAppSelector } from '../../../store';
import { selectCurrentOffer } from '../../../store/selectors';
import OfferInsideItem from './offer-inside-item';
import OfferHost from './offer-host';

function OfferInfo() {
  const offer = useAppSelector(selectCurrentOffer);

  if (!offer) {
    return null;
  }

  const { title, type, price, isFavorite, isPremium, rating, bedrooms, goods, maxAdults, description, host, } = offer;
  return (
    <>
      {isPremium && (
        <div className="offer__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="offer__name-wrapper">
        <h1 className="offer__name">
          {title}
        </h1>
        <button
          className={clsx(
            'offer__bookmark-button',
            'button',
            { 'offer__bookmark-button--active': isFavorite }
          )}
          type="button"
        >
          <svg className="offer__bookmark-icon" width={31} height={33}>
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="offer__rating rating">
        <div className="offer__stars rating__stars">
          <span style={{ width: `${rating * RATING_MULTIPLIER}% ` }} />
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="offer__rating-value rating__value">{rating}</span>
      </div>
      <ul className="offer__features">
        <li className="offer__feature offer__feature--entire">
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </li>
        <li className="offer__feature offer__feature--bedrooms">
          {bedrooms} Bedrooms
        </li>
        <li className="offer__feature offer__feature--adults">
          Max {maxAdults} adults
        </li>
      </ul>
      <div className="offer__price">
        <b className="offer__price-value">&euro;{price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>
      <div className="offer__inside">
        <h2 className="offer__inside-title">What&apos;s inside</h2>
        <ul className="offer__inside-list">
          {goods.map((good) => <OfferInsideItem key={good} good={good} />)}
        </ul>
      </div>
      <OfferHost description={description} host={host} />
    </>
  );
}


export default OfferInfo;
