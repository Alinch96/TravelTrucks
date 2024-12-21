import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';
import { FaHome } from 'react-icons/fa';
import Container from '../Container/Container';

const NotFoundPage = () => {
  return (
    <section className={css.notFoundSection}>
      <Container>
        <div className={css.innerContainer}>
          <h2 className={css.title}>404 - Page Not Found</h2>
          <p className={css.message}>
            Oops! The page you are looking for does not exist.
          </p>
          <Link to="/" className={css.homeLink}>
            <FaHome className={css.homeIcon} /> Go to Home
          </Link>
        </div>
        `
      </Container>
    </section>
  );
};

export default NotFoundPage;
