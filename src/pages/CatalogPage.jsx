import CampersList from '../components/CampersList/CampersList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllCampers } from '../redux/campers/operations.js';
import {
  selectCampers,
  selectLimit,
  selectPage,
} from '../redux/campers/selectors.js';
import { selectFiltersObj } from '../redux/filters/selectors.js';
import Container from '../components/Container/Container.jsx';
import Filters from '../components/Filters/Filters.jsx';
import PageWrapper from '../components/PageWrapper/PageWrapper.jsx';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const limit = useSelector(selectLimit);
  const filtersObj = useSelector(selectFiltersObj);
  const page = useSelector(selectPage);
  const campers = useSelector(selectCampers);

  useEffect(() => {
    const filters = {
      page,
      limit,
      ...filtersObj,
    };
    dispatch(getAllCampers(filters));
  }, [dispatch, page, limit, filtersObj]);

  useEffect(() => {
    if (page === 1) return;
    window.scrollBy({
      top: 500,
      behavior: 'smooth',
    });
  }, [campers]);

  return (
    <Container>
      <PageWrapper>
        <Filters />
        <CampersList />
      </PageWrapper>
    </Container>
  );
};

export default CatalogPage;
