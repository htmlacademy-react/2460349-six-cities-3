import Header from '../../components/header/header';
import OfferImage from './components/offer-image';
import { mockAmenities, mockImages, mockCards } from '../../components/mock/mock-cards';
import OfferInsideItem from './components/offer-inside-item';
import OfferHost from './components/offer-host';
import ReviewsItem from './components/reviews-item';
import ReviewsForm from './components/reviews-form';
import PlaceCard from '../../components/place-card/place-card';

function OfferScreen(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {mockImages.map((img) => <OfferImage key={img} mockImage={img} />)}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  Beautiful &amp; luxurious studio at great location
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: '80%' }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">4.8</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  Apartment
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€120</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {mockAmenities.map((amenity) => <OfferInsideItem key={amenity} amenity={amenity} />)}
                </ul>
              </div>
              <OfferHost />
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews · <span className="reviews__amount">1</span></h2>
                <ul className="reviews__list">
                  <ReviewsItem />
                </ul>
                <ReviewsForm/>
              </section>
            </div>
          </div>
          <section className="offer__map map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {mockCards.slice(0, 3).map((mockCard) => (
                <PlaceCard
                  key={mockCard.id}
                  title={mockCard.title}
                  type={mockCard.type}
                  price={mockCard.price}
                  isFavorite={mockCard.isFavorite}
                  isPremium={mockCard.isPremium}
                  rating={mockCard.rating}
                  previewImage={mockCard.previewImage}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
