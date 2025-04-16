import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { HelmetProvider } from 'react-helmet-async';
import MainScreen from '../../pages/main-screen/main-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import { OfferDto } from '../../types/types';
import { useAppSelector } from '../../store';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { useInitAuth } from '../../hooks/useInitAuth';
import { selectAppLoading } from '../../store/selectors';


type AppScreenProps = {
  offers: OfferDto[];
}

function App({ offers }: AppScreenProps) {
  useInitAuth();
  const isDataLoading = useAppSelector(selectAppLoading);

  if(isDataLoading){
    return (
      <LoadingScreen/>
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />}>
            <Route
              index
              element={<MainScreen />}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute>
                  <FavoritesScreen offers={offers}/>
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Offer}
              element={<OfferScreen />}
            />
            <Route
              path={AppRoute.Login}
              element={<LoginScreen />}
            />
          </Route>
          <Route
            path={AppRoute.NotFound}
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
