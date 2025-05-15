import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './app';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { AuthorizationStatus } from '../../const';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

const renderWithRouter = (initialRoute: string) => {
  const store = mockStore({
    USER: { authorizationStatus: AuthorizationStatus.NoAuth, user: null },
    OFFERS: { offers: [], isOffersDataLoading: false },
    FAVORITES: [],
  });

  return render(
    <HelmetProvider>
      <Provider store={store}>
        <MemoryRouter initialEntries={[initialRoute]}>
          <App />
        </MemoryRouter>
      </Provider>
    </HelmetProvider>
  );
};

describe('App routing', () => {
  it('should render "MainScreen" when user navigates to "/"', () => {
    renderWithRouter('/');
    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
  });

  it('should render "LoginScreen" when user navigates to "/login"', () => {
    renderWithRouter('/login');
    expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigates to unknown route', () => {
    renderWithRouter('/unknown-route');
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });

  it('should render "FavoritesScreen" when user is authorized and navigates to "/favorites"', () => {
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.Auth, user: { email: 'test@example.com' } },
      OFFERS: { offers: [], isOffersDataLoading: false },
      FAVORITES: [],
    });

    render(
      <HelmetProvider>
        <Provider store={store}>
          <MemoryRouter initialEntries={['/favorites']}>
            <App />
          </MemoryRouter>
        </Provider>
      </HelmetProvider>
    );

    expect(screen.getByText(/Favorites/i)).toBeInTheDocument();
  });
});
