import OfferImage from './components/offer-image';
import { Helmet } from 'react-helmet-async';
import OffersList from '../../components/offers-list/offers-list';
import OfferInsideItem from './components/offer-inside-item';
import OfferHost from './components/offer-host';
import ReviewsList from './components/reviews-list';
import ReviewsForm from './components/reviews-form';
import { AuthorizationStatus, NEARBY_OFFERS_COUNT, RATING_MULTIPLIER } from '../../const';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import { CommentDto, OfferDetailsDto, OfferDto } from '../../types/types';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Map from '../../components/map/map';

interface Props {
  offersDetails: OfferDetailsDto[];
  comments: CommentDto[];
  authorizationStatus: AuthorizationStatus;
  offers: OfferDto[];
}

function OfferScreen({ offersDetails, comments, authorizationStatus, offers }: Props) {
  const { id } = useParams();
  const offer = offersDetails.find((item) => item.id === id);
  const offerComments = comments.filter((item) => item.id === id) || [];
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  if (!offer) {
    return <NotFoundScreen />;
  }

  const { title, type, price, isFavorite, isPremium, rating, description, bedrooms, goods, host, images, maxAdults } = offer;
  return (
    <>
      <Helmet>
        <title>6 Cities Offer</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((img) => <OfferImage key={crypto.randomUUID()} image={img} />)}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
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
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews · <span className="reviews__amount">{offerComments.length}</span></h2>
                <ul className="reviews__list">
                  <ReviewsList offerComments={offerComments}/>
                </ul>
                {isAuth && <ReviewsForm />}
              </section>
            </div>
          </div>
          < Map city={offer.city} offers={offers} activeOfferId={offer.id} pageMain={false}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList offers={offers.slice(0, NEARBY_OFFERS_COUNT)} />
            </div>
          </section>
        </div>
      </main>
    </>

  );
}

export default OfferScreen;
