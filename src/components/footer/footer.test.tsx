import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './footer';

describe('Component: Footer', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const logo = screen.getByAltText(/6 cities logo/i);
    expect(logo).toBeInTheDocument();

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
  });
});
