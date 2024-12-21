import { Link } from 'react-router-dom';
import css from './Button.module.css';

const Button = ({ children, to, ariaLabel }) => {
  return (
    <Link to={to} className={css.btn} aria-label={ariaLabel}>
      {children}
    </Link>
  );
};

export default Button;
