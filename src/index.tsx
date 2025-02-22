import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { mockOffers } from './components/mock/mock-offers';
import { mockOffersDetails } from './components/mock/mock-offers-details';
import { mockComments } from './components/mock/mock-comments';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersCount={mockOffers.length} offers={mockOffers} offersDetails={mockOffersDetails} comments={mockComments}/>
  </React.StrictMode>
);
