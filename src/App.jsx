import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './components/Layout/Layout.jsx';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage.jsx'));
const CamperDetailsPage = lazy(() => import('./pages/CamperDetailsPage.jsx'));
const CamperFeatures = lazy(() =>
  import('./components/CamperFeatures/CamperFeatures.jsx')
);
const CamperReviews = lazy(() =>
  import('./components/CamperReviews/CamperReviews.jsx')
);

const NotFoundPage = lazy(() =>
  import('./components/NotFoundPage/NotFoundPage.jsx')
);

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailsPage />}>
            <Route path="features" element={<CamperFeatures />} />
            <Route path="reviews" element={<CamperReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
