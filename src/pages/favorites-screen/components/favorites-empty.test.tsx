import { render, screen } from '@testing-library/react';
import FavoritesEmpty from './favorites-empty';

describe('Component: FavoritesEmpty', () => {
  it('should render correctly', () => {
    render(<FavoritesEmpty />);

    const text = screen.getByText(/Nothing yet saved./i);
    const moreText = screen.getByText(/Save properties to narrow down search or plan your future trips./i);
    expect(text).toBeInTheDocument();
    expect(moreText).toBeInTheDocument();
  });
});
