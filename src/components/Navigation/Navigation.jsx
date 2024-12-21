import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';
import Logo from '../Logo/Logo.jsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.isActive);
};

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <Logo />
      <ul className={css.navList}>
        <li>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" className={buildLinkClass}>
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
