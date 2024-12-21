import css from './CampersList.module.css';
import CamperItem from '../CamperItem/CamperItem.jsx';
import Loader from '../Loader/Loader.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCampers,
  selectError,
  selectHasNextPage,
  selectIsLoading,
} from '../../redux/campers/selectors';
import { incrementPage } from '../../redux/campers/slice';
import NoCampers from '../NoCampers/NoCampers.jsx';

const CampersList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const hasNextPage = useSelector(selectHasNextPage);

  const handleClick = () => {
    dispatch(incrementPage());
  };

  return (
    <>
      {error && <NoCampers />}
      {campers && (
        <section className={css.campersListSection}>
          <ul className={css.campersList}>
            {campers.map(camper => {
              return (
                <li key={camper.id} className={css.campersListItem}>
                  {<CamperItem camper={camper} />}
                </li>
              );
            })}
          </ul>
          {isLoading && <Loader />}
          {hasNextPage && !isLoading && (
            <button
              className={css.btnNext}
              type="button"
              disabled={isLoading}
              onClick={handleClick}
            >
              Load more
            </button>
          )}
        </section>
      )}
    </>
  );
};

export default CampersList;
