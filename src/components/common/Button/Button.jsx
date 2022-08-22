import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({ label, onClick, type }) => {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
