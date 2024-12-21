import { NavLink } from 'react-router-dom';
import css from './NavigationDetails.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.isActive);
};

const NavigationDetails = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li>
          <NavLink to="features" className={buildLinkClass}>
            Features
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={buildLinkClass}>
            Reviews
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationDetails;
