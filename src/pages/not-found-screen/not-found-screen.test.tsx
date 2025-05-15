import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import NotFoundPage from './not-found-screen';

describe('Component: NotFoundPage', () => {
  it('should render correctly', () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <NotFoundPage />
        </MemoryRouter>
      </HelmetProvider>
    );

    expect(screen.getByText(/404 \/ Page Not Found/i)).toBeInTheDocument();
    expect(screen.getByText(/the page you are looking for does not exist/i)).toBeInTheDocument();
    expect(screen.getByText(/Go to Main/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /yes/i })).toBeInTheDocument();
  });
});
