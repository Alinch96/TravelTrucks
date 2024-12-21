import Container from '../components/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Loader from '../components/Loader/Loader';
import CamperDetailsItem from '../components/CamperDetails/CamperDetails';
import NavigationDetails from '../components/NavigationDetails/NavigationDetails';
import {
  selectCurrentCamper,
  selectError,
  selectIsLoading,
} from '../redux/campers/selectors';
import { getCamperById } from '../redux/campers/operations';
import NoCampers from '../components/NoCampers/NoCampers';

const CamperDetailsPage = () => {
  const dispatch = useDispatch();
  const camper = useSelector(selectCurrentCamper);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [dispatch, id]);

  return (
    <Container>
      {isLoading && <Loader />}
      {error && <NoCampers />}
      {camper && (
        <>
          <CamperDetailsItem />
          <NavigationDetails />
          <Outlet />
        </>
      )}
    </Container>
  );
};

export default CamperDetailsPage;
