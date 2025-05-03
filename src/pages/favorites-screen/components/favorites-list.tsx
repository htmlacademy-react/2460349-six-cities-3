import { useAppSelector } from '../../../store';
import { selectFavoritesLoading, selectFavoritesOffers } from '../../../store/offers-slice/offers-selectors';
import { OfferDto } from '../../../types/types';
import LoadingScreen from '../../loading-screen/loading-screen';
import FavoritesOffer from './favorites-offer';

function FavoritesList() {
  const isLoading = useAppSelector(selectFavoritesLoading);
  const favoritesOffers = useAppSelector(selectFavoritesOffers);

  const offersByCity = favoritesOffers.reduce<Record<string, OfferDto[]>>((acc, offer) => {
    const city = offer.city.name;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(offer);
    return acc;
  }, {});

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        <ul className="favorites__list">
          {isLoading && <LoadingScreen />}
          {Object.entries(offersByCity).map(([city, cityOffers]) => (
            <li key={city} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{city}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {cityOffers.map((offer) => (
                  <FavoritesOffer key={offer.id} offer={offer} />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </ul>
    </section>
  );
}

export default FavoritesList;
