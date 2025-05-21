import { render, screen } from '@testing-library/react';
import ReviewsItem from './reviews-item';
import { CommentDto } from '../../../types/comment-dto';

const mockComment: CommentDto = {
  id: '1',
  comment: 'Very nice place!',
  date: '2024-04-01T12:00:00Z',
  rating: 5,
  user: {
    name: 'Alice',
    avatarUrl: '/avatar.jpg',
    isPro: false,
  },
};

describe('Component: ReviewsItem', () => {
  it('should render correctly', () => {
    render(<ReviewsItem offerComment={mockComment} />);

    expect(screen.getByAltText(/Reviews avatar/i)).toBeInTheDocument();
    expect(screen.getByText(/Alice/i)).toBeInTheDocument();
    expect(screen.getByText(/Very nice place!/i)).toBeInTheDocument();
    expect(screen.getByText(/Rating/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', mockComment.user.avatarUrl);
  });
});
