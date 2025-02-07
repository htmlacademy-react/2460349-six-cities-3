import MainScreen from '../../pages/main-screen/main-screen';
// import OfferScreen from '../../pages/offer-screen/offer-screen';
// import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
// import LoginScreen from '../../pages/login-screen/login-screen';
import { MainScreenProps } from '../../pages/main-screen/main-screen';

type AppScreenProps = MainScreenProps;

function App({placesCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen placesCount={placesCount} />
    // <OfferScreen />
    // <FavoritesScreen />
    // <LoginScreen />
  );
}

export default App;
