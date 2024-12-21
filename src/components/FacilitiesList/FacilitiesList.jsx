import css from './FacilitiesList.module.css';
import { FACILITIES } from '../../constants/constants.js';
import FacilityItem from '../FacilityItem/FacilityItem.jsx';

const valuesArray = [
  'automatic',
  'petrol',
  'panelTruck',
  'alcove',
  'fullyIntegrated',
];

const FacilitiesList = ({ camper }) => {
  const facilitiesKeys = Object.keys(camper).reduce((acc, key) => {
    if (valuesArray.includes(camper[key])) {
      return [...acc, camper[key]];
    }
    if (camper[key] === true) {
      return [...acc, key];
    }
    return acc;
  }, []);

  const facilities = facilitiesKeys.map(facility => FACILITIES[facility]);

  return (
    <ul className={css.facilitiesList}>
      {facilities.map(({ id, text, icon }) => (
        <li key={id} className={css.facilitiesListItem}>
          <FacilityItem text={text} icon={icon} />
        </li>
      ))}
    </ul>
  );
};

export default FacilitiesList;
