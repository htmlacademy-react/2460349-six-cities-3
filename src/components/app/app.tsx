import MainScreen from '../../pages/main-screen/main-screen';
import { ComponentProps } from 'react';
// import OfferScreen from '../../pages/offer-screen/offer-screen';
// import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
// import LoginScreen from '../../pages/login-screen/login-screen';

type AppScreenProps = ComponentProps<typeof MainScreen>

function App({placesCount}: AppScreenProps) {
  return (
    <MainScreen placesCount={placesCount} />
    // <OfferScreen />
    // <FavoritesScreen />
    // <LoginScreen />
  );
}

export default App;
