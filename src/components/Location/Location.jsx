import css from './Location.module.css';
import sprite from '../../assets/icons/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectLocation } from '../../redux/filters/selectors';
import { setLocation } from '../../redux/filters/slice';
import { LOCATIONS } from '../../constants/constants.js';
import { resetPage } from '../../redux/campers/slice.js';

const Location = () => {
  const dispatch = useDispatch();
  const selectedLocation = useSelector(selectLocation);

  const handleChange = e => {
    dispatch(resetPage());
    dispatch(setLocation(e.target.value));
  };

  return (
    <div className={css.selectContainer}>
      <label className={css.label} htmlFor="location-select">
        Location
      </label>
      <div className={css.selectWrapper}>
        <svg className={css.icon} width={20} height={20}>
          <use href={`${sprite}#map`} />
        </svg>
        <select
          className={css.customSelect}
          id="location-select"
          value={selectedLocation}
          onChange={handleChange}
        >
          <option value="">City</option>
          {LOCATIONS.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Location;
