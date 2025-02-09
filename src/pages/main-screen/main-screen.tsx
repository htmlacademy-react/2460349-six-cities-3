import Header from '../../components/header/header';
import Tabs from './components/tabs';
import PlacesSorting from './components/places-sorting';
import { mockCards } from '../../components/mock/mock-cards';
import PlaceCard from '../../components/place-card/place-card';

export type MainScreenProps = {
  placesCount: number;
}

function MainScreen({placesCount}: MainScreenProps) {
  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesCount} places to stay in Amsterdam</b>
              <PlacesSorting/>
              <div className="cities__places-list places__list tabs__content">
                {mockCards.map((mockCard)=> (
                  <PlaceCard key={mockCard.id} card={mockCard} />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
