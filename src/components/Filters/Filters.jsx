import css from './Filters.module.css';
import Location from '../Location/Location.jsx';
import FiltersList from '../FiltersList/FiltersList.jsx';
import Favorites from '../Favorites/Favorites.jsx';

const Filters = () => {
  return (
    <aside className={css.asideFilters}>
      <Location />
      <h3 className={css.title}>Filters</h3>
      <FiltersList type="equipment" />
      <FiltersList type="type" />
      <Favorites />
    </aside>
  );
};

export default Filters;
