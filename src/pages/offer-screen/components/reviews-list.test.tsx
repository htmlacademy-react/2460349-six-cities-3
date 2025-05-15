import { render, screen } from '@testing-library/react';
import ReviewsList from './reviews-list';
import { CommentDto } from '../../../types/comment-dto';

const mockComments: CommentDto[] = [
  {
    id: '1',
    comment: 'Nice stay',
    date: '2024-01-01T12:00:00Z',
    rating: 4,
    user: {
      name: 'Bob',
      avatarUrl: '/bob.jpg',
      isPro: false,
    },
  },
  {
    id: '2',
    comment: 'Loved it',
    date: '2024-02-01T12:00:00Z',
    rating: 5,
    user: {
      name: 'Anna',
      avatarUrl: '/anna.jpg',
      isPro: true,
    },
  },
];

describe('Component: ReviewsList', () => {
  it('should render correctly', () => {
    render(<ReviewsList offerComments={mockComments} />);

    expect(screen.getByText(/Nice stay/i)).toBeInTheDocument();
    expect(screen.getByText(/Bob/i)).toBeInTheDocument();
    expect(screen.getByText(/Loved it/i)).toBeInTheDocument();
    expect(screen.getByText(/Anna/i)).toBeInTheDocument();
  });
});
