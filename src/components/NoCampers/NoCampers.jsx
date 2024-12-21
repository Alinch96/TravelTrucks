import css from './NoCampers.module.css';
import { TfiFaceSad } from 'react-icons/tfi';

const NoCampers = () => {
  return (
    <div className={css.container}>
      <TfiFaceSad size={140} className={css.icon} />
      <h2 className={css.title}>No Campers Found</h2>
      <div className={css.textWrapper}>
        <p className={css.text}>No results matching your criteria</p>
        <p className={css.text}> Please, try again</p>
      </div>
    </div>
  );
};

export default NoCampers;
