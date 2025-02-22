import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { ComponentProps } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import MainScreen from '../../pages/main-screen/main-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import { OfferDetailsDto } from '../mock/mock-offers-details';
import { CommentDto } from '../mock/mock-comments';


type AppScreenProps = ComponentProps<typeof MainScreen>&{
  offersDetails: OfferDetailsDto[];
  comments: CommentDto[];
}

function App({ offersCount, offers, offersDetails, comments }: AppScreenProps) {
  const authorizationStatus = AuthorizationStatus.Auth;
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout authorizationStatus={authorizationStatus} />}>
            <Route
              index
              element={<MainScreen offersCount={offersCount} offers={offers}/>}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute
                  authorizationStatus={authorizationStatus}
                >
                  <FavoritesScreen offers={offers}/>
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Offer}
              element={<OfferScreen offersDetails={offersDetails} comments={comments} authorizationStatus={authorizationStatus} offers={offers}/>}
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
