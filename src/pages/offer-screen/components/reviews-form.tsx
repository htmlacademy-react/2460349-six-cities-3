import { useState } from 'react';
import { STAR_RATINGS } from '../../../const';

function ReviewsForm() {
  const [review, setReview] = useState({
    comment: '',
    rating: 0
  });

  const handleCommentChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview((prev) => ({ ...prev, comment: evt.target.value }));
  };

  const handleRatingChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setReview((prev) => ({ ...prev, rating: Number(evt.target.value) }));
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {STAR_RATINGS.map((star) => (
          <div key={star}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={star}
              id={`${star}-stars`}
              type="radio"
              checked={review.rating === star}
              onChange={handleRatingChange}
            />
            <label htmlFor={`${star}-stars`} className="reviews__rating-label form__rating-label" >
              <svg className="form__star-image" width={37} height={33} style={{ fill: review.rating >= star ? '#ff9000' : '#ccc' }}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </div>
        ))}
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
        <button className="reviews__submit form__submit button" type="submit" disabled={review.comment.length < 50 || review.comment.length > 300 || review.rating === 0}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
