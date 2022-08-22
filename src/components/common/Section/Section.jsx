import PropTypes from 'prop-types';
import { Title } from 'components/common';
import styles from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <Title title={title} />
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};
