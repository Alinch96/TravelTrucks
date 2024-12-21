import css from './CamperDetails.module.css';
import sprite from '../../assets/icons/sprite.svg';
import { useSelector } from 'react-redux';
import { selectCurrentCamper } from '../../redux/campers/selectors.js';

const CamperDetailsItem = () => {
  const camper = useSelector(selectCurrentCamper);
  const { name, rating, reviews, location, price, gallery, description } =
    camper;

  return (
    <section className={css.camperSection}>
      <h2 className={css.title}>{name}</h2>
      <div className={css.wrapper}>
        <div className={css.item}>
          <svg width={16} height={16} aria-label="Rating">
            <use href={`${sprite}#icon-star`} />
          </svg>
          <p>{`${rating}(${reviews.length} Reviews)`}</p>
        </div>
        <div className={css.item}>
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
      <p className={css.price}>{`€${price.toFixed(2)}`}</p>
      <ul className={css.gallery}>
        {gallery.map((item, index) => (
          <li className={css.galleryItem} key={index}>
            <img
              className={css.img}
              src={item.original}
              width={292}
              height={312}
              alt={name}
            />
          </li>
        ))}
      </ul>
      <p className={css.description}>{description}</p>
    </section>
  );
};

export default CamperDetailsItem;
