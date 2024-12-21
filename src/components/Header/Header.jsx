import css from './Header.module.css';
import Container from '../Container/Container.jsx';
import Navigation from '../Navigation/Navigation.jsx';

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
