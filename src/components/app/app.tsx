import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { HelmetProvider } from 'react-helmet-async';
import MainScreen from '../../pages/main-screen/main-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import { useInitAuth } from '../../hooks/useInitAuth';
import HistoryRouter from '../history-route';
import browserHistory from '../../browser-history';

function App() {
  useInitAuth();

  return (
    <HelmetProvider>
      <HistoryRouter history = {browserHistory}>
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
                  <FavoritesScreen />
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
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
