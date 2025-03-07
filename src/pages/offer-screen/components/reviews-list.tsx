import { CommentDto } from '../../../types/types';
import ReviewsItem from './reviews-item';

interface Props {
  offerComments: CommentDto[];
}

function ReviewsList({ offerComments }: Props) {
  return (
    <>
      {offerComments.map((offerComment) => <ReviewsItem key={offerComment.id} offerComment={offerComment} />)}
    </>
  );
}

export default ReviewsList;
