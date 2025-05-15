import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuth, fetchOffers } from './store/api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import browserHistory from './browser-history';
import HistoryRouter from './components/history-route/history-route';

store.dispatch(fetchOffers());
store.dispatch(checkAuth());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HistoryRouter history={browserHistory}>
      <Provider store={store}>
        <ToastContainer />
        <App />
      </Provider>
    </HistoryRouter>
  </React.StrictMode>
);
