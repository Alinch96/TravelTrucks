import css from './PageWrapper.module.css';

const PageWrapper = ({ children }) => {
  return <div className={css.pageWrapper}>{children}</div>;
};

export default PageWrapper;
