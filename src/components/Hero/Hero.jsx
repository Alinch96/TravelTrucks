import css from './Hero.module.css';
import Button from '../Button/Button.jsx';

const Hero = () => {
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <div className={css.contentWrapper}>
          <div className={css.textWrapper}>
            <h1 className={css.title}>Campers of your dreams</h1>
            <p className={css.text}>
              You can find everything you want in our catalog
            </p>
          </div>
          <Button to="/catalog" ariaLabel="Go to catalog page">
            View Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
