import { Suspense } from 'react';
import Header from '../../components/Header/Header.jsx';
import Loader from '../../components/Loader/Loader.jsx';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
    </>
  );
};

export default Layout;
