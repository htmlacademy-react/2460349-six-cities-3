import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { mockCards } from './components/mock/mock-cards';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesCount={mockCards.length}/>
  </React.StrictMode>
);
