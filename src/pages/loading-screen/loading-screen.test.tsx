import { render, screen } from '@testing-library/react';
import LoadingScreen from './loading-screen';

describe('Component: LoadingScreen', () => {
  it('should render correctly', () => {
    render(<LoadingScreen />);

    const text = screen.getByText(/Loading, please wait.../i);
    expect(text).toBeInTheDocument();
  });
});
