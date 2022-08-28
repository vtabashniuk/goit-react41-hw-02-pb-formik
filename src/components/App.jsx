import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './common';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    if (!this.duplicationCheck(name)) {
      const id = nanoid(4);
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { id, name, number }],
      }));
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts.filter(item => item.id !== id)],
    }));
  };

  duplicationCheck = checkName => {
    const isDuplicate = false;
    const { contacts } = this.state;
    if (contacts.length > 0) {
      const name = Boolean(contacts.find(item => item.name === checkName));
      if (name) {
        alert(`${checkName} is already in contacts.`);
        return !isDuplicate;
      }
    }
    return isDuplicate;
  };

  filterContacts = e => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;
    this.setState({ [key]: value });
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = contacts.filter(item =>
      item.name.includes(filter)
    );

    return (
      <>
        <Section title="Phonebook">
          <ContactForm addContact={this.addContact} />
        </Section>
        {contacts.length > 0 && (
          <Section title="Contacts">
            <Filter onChange={this.filterContacts} value={filter} />
            <ContactList
              contacts={filteredContacts}
              deleteContact={this.deleteContact}
            />
          </Section>
        )}
      </>
    );
  }
}
