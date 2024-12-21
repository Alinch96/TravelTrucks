import { useSelector } from 'react-redux';
import sprite from '../../assets/icons/sprite.svg';
import css from './CamperReviews.module.css';
import BookingForm from '../BookingForm/BookingForm.jsx';
import { selectCurrentCamper } from '../../redux/campers/selectors.js';

const CamperReviews = () => {
  const camper = useSelector(selectCurrentCamper);
  return (
    <div className={css.reviewsWrapper}>
      <ul className={css.reviewsList}>
        {camper.reviews.map((review, index) => (
          <li className={css.reviewItem} key={index}>
            <div className={css.reviewHeader}>
              <h2 className={css.reviewIcon}>{review.reviewer_name[0]}</h2>
              <div className={css.reviewHeaderContent}>
                <p className={css.reviewName}>{review.reviewer_name}</p>
                <ul className={css.starsList}>
                  {[1, 2, 3, 4, 5].map((star, index) => (
                    <li key={index} className={css.starListItem}>
                      <svg
                        width={16}
                        height={16}
                        className={
                          star <= review.reviewer_rating
                            ? css.starFilled
                            : css.starEmpty
                        }
                      >
                        <use href={`${sprite}#star`} />
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className={css.reviewComment}>{review.comment}</p>
          </li>
        ))}
      </ul>
      <BookingForm />
    </div>
  );
};

export default CamperReviews;
