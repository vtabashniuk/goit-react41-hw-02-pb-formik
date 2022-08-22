import PropTypes from 'prop-types';
import { Button } from 'components/common';
import styles from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(item => (
        <li key={item.id} className={styles.contactItem}>
          {`${item.name}: ${item.number}`}
          <Button
            type="button"
            label="Delete"
            onClick={() => deleteContact(item.id)}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  deleteContact: PropTypes.func,
};
