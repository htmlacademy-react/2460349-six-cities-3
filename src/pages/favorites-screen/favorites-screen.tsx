import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesPlaceCard from './components/favorites-place-card';

function FavoritesScreen() {
  return (
    <div className="page">
      <Helmet>
        <title>6 Cities Favorites</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <FavoritesPlaceCard/>
                  <FavoritesPlaceCard/>
                </div>
              </li>
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <FavoritesPlaceCard/>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      < Footer/>
    </div>
  );
}

export default FavoritesScreen;
