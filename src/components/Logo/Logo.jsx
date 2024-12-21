import { Link } from 'react-router-dom';
import sprite from '../../assets/icons/sprite.svg';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <Link to="/" className={css.logo} aria-label="Go to Home Page">
      <svg className={css.logoIcon} width={136} height={16}>
        <use href={`${sprite}#logo`}></use>
      </svg>
    </Link>
  );
};

export default Logo;
