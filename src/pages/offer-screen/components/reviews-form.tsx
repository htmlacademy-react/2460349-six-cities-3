import { useCallback, useState } from 'react';
import { useAppDispatch } from '../../../store';
import { useParams } from 'react-router-dom';
import { sendComment } from '../../../store/api-actions';
import { toast } from 'react-toastify';
import styles from './reviews-form.module.css';
import RatingStars from './rating-stars';

function ReviewsForm() {
  const { id: offerId } = useParams();

  const [review, setReview] = useState({
    comment: '',
    rating: 0
  });

  const [isSending, setIsSending] = useState(false);
  const dispatch = useAppDispatch();

  const handleCommentChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview((prev) => ({ ...prev, comment: evt.target.value }));
  };

  const handleRatingChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    setReview((prev) => ({ ...prev, rating: Number(evt.target.value) }));
  }, []);

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();

    if (!offerId) {
      return;
    }
    setIsSending(true);
    try {
      await dispatch(sendComment({
        comment: review.comment,
        rating: review.rating,
        id: offerId,
      })).unwrap();

      setReview({ comment: '', rating: 0 });
    } catch (error) {
      toast.error('Failed to send comment. Try again later.');
    } finally {
      setIsSending(false);
    }
  };

  const isSubmitDisabled: boolean = review.comment.length < 50 || review.comment.length > 300 || review.rating === 0;

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        handleSubmit(evt);
      }}
    >
      <fieldset disabled={isSending} className={styles.formFieldset}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <RatingStars rating={review.rating} onRatingChange={handleRatingChange} />
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          value={review.comment}
          onChange={handleCommentChange}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitDisabled}>
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
}

export default ReviewsForm;
