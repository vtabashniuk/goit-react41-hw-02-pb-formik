import PropTypes from 'prop-types';
import { labelID } from 'utils/labels';
import styles from './Filter.module.css';

export const Filter = ({ onChange, value }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={labelID.filter}>
        Find contacs by name
      </label>
      <input
        className={styles.input}
        type="text"
        name="filter"
        id={labelID.filter}
        onChange={e => {
          onChange(e);
        }}
        value={value}
      />
    </div>
  );
};

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
