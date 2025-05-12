import { AuthorizationStatus } from '../../../const';
import { useAppSelector } from '../../../store';
import { selectVisibleComments } from '../../../store/reviews-slice/reviews-selectors';
import { selectAuthorizationStatus } from '../../../store/user-slice/user-selectors';
import ReviewsForm from './reviews-form';
import ReviewsList from './reviews-list';

function OfferReviews() {
  const comments = useAppSelector(selectVisibleComments);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        <ReviewsList offerComments={comments} />
      </ul>
      {isAuth && <ReviewsForm />}
    </section>
  );
}

export default OfferReviews;
