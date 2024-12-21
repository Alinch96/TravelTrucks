import { useSelector, useDispatch } from 'react-redux';
import sprite from '../../assets/icons/sprite.svg';
import { selectFavoritesIds } from '../../redux/favorites/selectors.js';
import css from './CamperItem.module.css';
import { toggleFavorite } from '../../redux/favorites/slice.js';
import clsx from 'clsx';
import Button from '../Button/Button.jsx';
import FacilitiesList from '../FacilitiesList/FacilitiesList.jsx';

const CamperItem = ({ camper }) => {
  const { id, gallery, name, price, rating, reviews, location, description } =
    camper;
  const dispatch = useDispatch();
  const favoritesIds = useSelector(selectFavoritesIds);
  const isFavorite = favoritesIds.includes(id);

  const handleClick = () => {
    dispatch(toggleFavorite(camper));
  };

  return (
    <>
      <img
        className={css.photo}
        src={gallery[0].original}
        alt={name}
        width="292"
        height="320"
      />
      <div>
        <div className={css.contentWrapper}>
          <h2 className={css.title}>{name}</h2>
          <div className={css.wrapperItemContent}>
            <p className={css.price}>{`€${price.toFixed(2)}`}</p>
            <button
              type="button"
              className={clsx(css.btnHeart, isFavorite && css.active)}
              onClick={handleClick}
              aria-label="Add to favorites"
            >
              <svg width={24} height={24} className={css.icon}>
                <use href={`${sprite}#heart`} />
              </svg>
            </button>
          </div>
        </div>
        <div className={css.wrapperItem}>
          <div className={css.item}>
            <svg width={16} height={16} aria-label="Rating">
              <use href={`${sprite}#icon-star`} />
            </svg>
            <p>{`${rating}(${reviews.length} Reviews)`}</p>
          </div>
          <div className={css.itemLocation}>
            <svg
              width={16}
              height={16}
              aria-label="Location"
              className={css.icon}
            >
              <use href={`${sprite}#map`} />
            </svg>
            <p>{location}</p>
          </div>
        </div>
        <p className={css.description}>{description}</p>
        <FacilitiesList camper={camper} />

        <Button
          to={`/catalog/${id}/features`}
          ariaLabel="Show more information on the camper"
        >
          Show more
        </Button>
      </div>
    </>
  );
};

export default CamperItem;
