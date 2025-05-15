import { render, screen } from '@testing-library/react';
import OfferInsideItem from './offer-inside-item';

describe('Component: OfferInsideItem', () => {
  it('should render correctly', () => {
    const testGood = 'Wi-Fi';
    render(<OfferInsideItem good={testGood} />);

    const listItem = screen.getByText(testGood);
    expect(listItem).toBeInTheDocument();
    expect(listItem.tagName.toLowerCase()).toBe('li');
  });
});
