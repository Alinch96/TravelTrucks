import { useDispatch, useSelector } from 'react-redux';
import css from './Favorites.module.css';
import { selectFavoritesList } from '../../redux/favorites/selectors.js';
import { FaRegTrashAlt } from 'react-icons/fa';
import { removeFavorite } from '../../redux/favorites/slice.js';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const favoritesList = useSelector(selectFavoritesList);
  const dispatch = useDispatch();
  const handleClick = id => {
    dispatch(removeFavorite(id));
  };
  return (
    <>
      {favoritesList.length > 0 && (
        <>
          <h3 className={css.favTitle}>List of Favorites</h3>
          <ul className={css.favList}>
            {favoritesList.map(({ id, name }) => (
              <li key={id} className={css.favListItem}>
                <Link className={css.favLink} to={`/catalog/${id}/features`}>
                  {name}
                </Link>
                <button
                  type="button"
                  className={css.btnRemoveFav}
                  onClick={() => handleClick(id)}
                  aria-label="Remove from favorites"
                >
                  <FaRegTrashAlt size="20px" />
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Favorites;
