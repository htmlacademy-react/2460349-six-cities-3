import { CommentDto } from '../../../types/comment-dto';
import { RATING_MULTIPLIER } from '../../../const';
import { formatterDate } from '../../../utils';

interface Props {
  offerComment: CommentDto;
}

function ReviewsItem({ offerComment }: Props) {
  const {date, user, comment, rating} = offerComment;
  const {name, avatarUrl } = user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating * RATING_MULTIPLIER}% ` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{formatterDate.format(new Date(date))}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
