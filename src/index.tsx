import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { mockOffers } from './components/mock/mock-offers';
import { mockOffersDetails } from './components/mock/mock-offers-details';
import { mockComments } from './components/mock/mock-comments';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={mockOffers} offersDetails={mockOffersDetails} comments={mockComments} />
    </Provider>
  </React.StrictMode>
);
