import { render, screen } from '@testing-library/react';
import OfferImage from './offer-image';

describe('Component: OfferImage', () => {
  it('should render correctly', () => {
    const testImage = '/test-image.jpg';
    render(<OfferImage image={testImage} />);

    const img = screen.getByAltText(/photo studio/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', testImage);
  });
});
