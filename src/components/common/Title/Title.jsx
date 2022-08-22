import PropTypes from 'prop-types';
import styles from './Title.module.css';

export const Title = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
