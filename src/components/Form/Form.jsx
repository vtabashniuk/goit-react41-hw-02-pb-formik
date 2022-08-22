import { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/common';
import { labelID } from 'utils/labels';
import styles from './Form.module.css';

const INITIAL_STATE_VALUE = {
  name: '',
  number: '',
};

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangeHandler = e => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;
    this.setState({ [key]: value });
  };

  resetForm = () => {
    this.setState({ ...INITIAL_STATE_VALUE });
  };

  render() {
    const { name, number } = this.state;
    const { onSubmit } = this.props;

    return (
      <form
        className={styles.form}
        onSubmit={e => {
          onSubmit(e, { name, number });
          this.resetForm();
        }}
      >
        <div className={styles.inputWrapper}>
          <label htmlFor={labelID.name} className={styles.label}>
            Name
          </label>
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.onChangeHandler}
            value={name}
            id={labelID.name}
            required
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor={labelID.number} className={styles.label}>
            Number
          </label>
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.onChangeHandler}
            value={number}
            id={labelID.number}
            required
          />
        </div>
        <div className={styles.buttonWrapper}>
          <Button type="submit" label="Add Contact"></Button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
