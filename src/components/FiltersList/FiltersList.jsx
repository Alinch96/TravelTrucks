import { useDispatch, useSelector } from 'react-redux';
import { setEquipment, setType } from '../../redux/filters/slice.js';
import {
  selectEquipmentFilters,
  selectTypeFilters,
} from '../../redux/filters/selectors.js';
import css from './FiltersList.module.css';
import FilterItem from '../FilterItem/FilterItem.jsx';
import { resetPage } from '../../redux/campers/slice.js';

const FiltersList = ({ type }) => {
  const dispatch = useDispatch();
  const typeFilters = useSelector(selectTypeFilters);
  const equipmentFilters = useSelector(selectEquipmentFilters);

  return (
    <>
      {type === 'equipment' && (
        <>
          <h3 className={css.filterTitle}>Vehicle equipment</h3>
          <ul className={css.filterList}>
            {equipmentFilters.map(item => (
              <li className={css.filterListItem} key={item.id}>
                <FilterItem
                  item={item}
                  handleClick={id => {
                    dispatch(resetPage());
                    dispatch(setEquipment(id));
                  }}
                />
              </li>
            ))}
          </ul>
        </>
      )}
      {type === 'type' && (
        <>
          <h3 className={css.filterTitle}>Vehicle type</h3>
          <ul className={css.filterList}>
            {typeFilters.map(item => (
              <li className={css.filterListItem} key={item.id}>
                <FilterItem
                  item={item}
                  handleClick={id => {
                    dispatch(resetPage());
                    dispatch(setType(id));
                  }}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default FiltersList;
