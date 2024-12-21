import { useSelector } from 'react-redux';
import css from './CamperFeatures.module.css';
import VehicleDetailsList from '../VehicleDetailsList/VehicleDetailsList';
import FacilitiesList from '../FacilitiesList/FacilitiesList';
import BookingForm from '../BookingForm/BookingForm';
import { selectCurrentCamper } from '../../redux/campers/selectors';

const CamperFeatures = () => {
  const camper = useSelector(selectCurrentCamper);

  return (
    <section className={css.featuresSection}>
      <div className={css.container}>
        <div className={css.contentWrapper}>
          <div className={css.facilitiesListWrapper}>
            <FacilitiesList camper={camper} />
          </div>
          <div className={css.detailsListWrapper}>
            <h3 className={css.title}>Vehicle details</h3>
            <VehicleDetailsList camper={camper} />
          </div>
        </div>
        <BookingForm />
      </div>
    </section>
  );
};

export default CamperFeatures;
