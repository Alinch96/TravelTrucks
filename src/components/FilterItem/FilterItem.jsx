import clsx from 'clsx';
import css from './FilterItem.module.css';
import sprite from '../../assets/icons/sprite.svg';

const FilterItem = ({ item: { id, name, icon, selected }, handleClick }) => {
  return (
    <button
      type="button"
      className={clsx(css.btnFilter, selected && css.isSelected)}
      onClick={() => handleClick(id)}
      aria-label={`select ${name}`}
    >
      <svg className={css.icon} width={32} height={32}>
        <use href={`${sprite}#${icon}`} />
      </svg>
      {name}
    </button>
  );
};

export default FilterItem;
