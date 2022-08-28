import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'components/common';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import * as yup from 'yup';
import { ERROR_MESSAGE, INITIAL_FORM_VALUE, REGEXPES } from 'constantsValues';

const schema = yup.object().shape({
  name: yup.string().matches(REGEXPES.name, ERROR_MESSAGE.name).required(),
  number: yup
    .string()
    .matches(REGEXPES.number, ERROR_MESSAGE.number)
    .required(),
});

export const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, actions) => {
    addContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_FORM_VALUE}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off" className={styles.form}>
        <div className={styles.inputWrapper}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <Field type="text" name="name" className={styles.input} />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="number" className={styles.label}>
            Number
          </label>
          <Field type="text" name="number" className={styles.input} />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />
        </div>
        <div className={styles.buttonWrapper}>
          <Button type="submit" label="Add Contact"></Button>
        </div>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
