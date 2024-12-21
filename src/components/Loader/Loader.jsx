import { FidgetSpinner } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="fidget-spinner-loading"
        wrapperStyle={{}}
        wrapperClass="fidget-spinner-wrapper"
        backgroundColor="#e44848"
        ballColors={['#6C717B', '#6C717B', '#6C717B']}
      />
    </div>
  );
};

export default Loader;
