import * as yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import css from './BookingForm.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ErrorMessage, Field, Formik, Form } from 'formik';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  date: yup.date().required('Booking date is required'),
});

const INITIAL_VALUES = {
  name: '',
  email: '',
  date: null,
  comment: '',
};

const toastOptions = {
  className: css.toast,
  duration: 7000,
  style: {
    background: 'var(--border)',
  },
  success: {
    className: css.toastSuccess,
    iconTheme: {
      primary: '#6bc16b',
      secondary: 'var(--Gray)',
    },
  },
};

const BookingForm = () => {
  const handleSubmit = (values, actions) => {
    toast.success(
      `Dear customer, thank you for your request! Please check your mailbox for booking confirmation`
    );
    actions.resetForm();
  };

  console.log(css.toast);

  return (
    <div className={css.formWrapper}>
      <div className={css.formHeader}>
        <h3 className={css.formTitle}>Book your campervan now</h3>
        <p className={css.formText}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, errors }) => (
          <Form>
            <div className={css.formContent}>
              <label
                className={values.name && errors.name ? css.fieldWithError : ''}
              >
                <Field
                  className={css.formInput}
                  type="text"
                  name="name"
                  placeholder="Name*"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className={css.errorMessage}
                />
              </label>

              <label>
                <Field
                  className={css.formInput}
                  type="text"
                  name="email"
                  placeholder="Email*"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className={css.errorMessage}
                />
              </label>

              <label>
                <DatePicker
                  selected={values.date}
                  shouldCloseOnSelect={true}
                  onChange={inputDate => {
                    setFieldValue('date', inputDate);
                  }}
                  dateFormat="dd.MM.yyyy"
                  placeholderText="Booking date*"
                  className={css.formInput}
                />
                <ErrorMessage
                  name="date"
                  component="p"
                  className={css.errorMessage}
                />
              </label>

              <label>
                <Field
                  as="textarea"
                  className={css.formTextArea}
                  name="comment"
                  placeholder="Comment"
                />
              </label>
            </div>

            <button type="submit" className={css.btn} aria-label="Send button">
              Send
            </button>
          </Form>
        )}
      </Formik>
      <Toaster toastOptions={toastOptions} />
    </div>
  );
};

export default BookingForm;
