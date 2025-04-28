
import clsx from 'clsx';
import styles from './reviews-form.module.css';
import { ChangeEvent, memo } from 'react';
import { STAR_RATINGS } from '../../../const';

interface Props {
  rating: number;
  onRatingChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function RatingStarsImpl({ rating, onRatingChange }: Props) {
  return (
    <>
      {STAR_RATINGS.map((star) => (
        <div key={star}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={star}
            id={`${star}-stars`}
            type="radio"
            checked={rating === star}
            onChange={onRatingChange}
          />
          <label htmlFor={`${star}-stars`} className="reviews__rating-label form__rating-label">
            <svg
              className={clsx(
                styles.formStarImage,
                rating >= star && styles.filled
              )}
              width={37}
              height={33}
            >
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </div>
      ))}
    </>
  );
}

const RatingStars = memo(RatingStarsImpl);

export default RatingStars;
