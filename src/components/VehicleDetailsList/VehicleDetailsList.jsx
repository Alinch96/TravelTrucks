import { FORM_TYPES } from '../../constants/constants.js';
import css from './VehicleDetailsList.module.css';

const VehicleDetailsList = ({ camper }) => {
  const { form, length, width, height, tank, consumption } = camper;

  return (
    <ul className={css.list}>
      <li className={css.listItem}>
        <p>Form</p>
        <p>{FORM_TYPES[form]}</p>
      </li>
      <li className={css.listItem}>
        <p>Length</p>
        <p>{parseFloat(length) + ' m'}</p>
      </li>
      <li className={css.listItem}>
        <p>Width</p>
        <p>{parseFloat(width) + ' m'}</p>
      </li>
      <li className={css.listItem}>
        <p>Height</p>
        <p>{parseFloat(height) + ' m'}</p>
      </li>
      <li className={css.listItem}>
        <p>Tank</p>
        <p>{parseFloat(tank) + ' l'}</p>
      </li>
      <li className={css.listItem}>
        <p>Consumption</p>
        <p>{consumption}</p>
      </li>
    </ul>
  );
};

export default VehicleDetailsList;
