import { Helmet } from 'react-helmet-async';
import { OfferDto } from '../../components/mock/mock-offers';
import FavoritesOffer from './components/favorites-offer';

interface Props {
  offers: OfferDto[];
}

function FavoritesScreen({ offers }: Props) {

  const offersByCity = offers.reduce<Record<string, OfferDto[]>>((acc, offer) => {
    const city = offer.city.name;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(offer);
    return acc;
  }, {});

  return (
    <>
      <Helmet>
        <title>6 Cities Favorites</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <ul className="favorites__list">
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
        </div>
      </main>
    </>
  );
}

export default FavoritesScreen;
