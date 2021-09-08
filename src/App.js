//import { useEffect, useState } from 'react';
//import { v4 as uuidv4 } from 'uuid';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/ContactList/Filter';
import Section from './components/Section/Section';

import './App.css';



function App() {

  return (
    <div className="App">
      <Section title="Phonebook">
        <ContactForm
          //onFormSubmit={formSubmitHandler}
          //onNewContactAdd={addNewContact}
        />
      </Section>

      <Section title="Contacts">
        <Filter
          message="Find contacts by name"
        />

        <ContactList />
      </Section>
    </div>
  );
}

export default App;

//===============hooks=======
// const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const storedContacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(storedContacts);
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   //console.log('comp upd', this.state.contacts);

  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // // hook updated
  // const handleChangeFilter = event => {
  //   setFilter(event.currentTarget.value);
  // };

  // // const formSubmitHandler = data => {
  // //   console.log('formSubmitHandler data:', data);
  // // };

  // const addNewContact = (newName, newNumber) => {
  //   const isNew = contacts.some(({ name }) => name === newName);
  //   if (isNew) {
  //     alert(`${newName} is already in contacts.`);
  //     return;
  //   }

  //   if (newName && newNumber) {
  //     const newContact = { id: uuidv4(), name: newName, number: newNumber };
  //     setContacts(prevState => [newContact, ...prevState]);
  //   }
  //   // console.log('newName, newNumber', newName, newNumber);
  // };

  // const getFilteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  // const deleteContactHandler = contactId => {
  //   //console.log('id called: ', contactId);
  //   setContacts(contacts => contacts.filter(({ id }) => id !== contactId));
  // };

  // console.log('uuidv4():',uuidv4());
  // console.log('this.state.name:',this.state.name);
  // console.log('this.state.number:',this.state.number);



//===classes====================================================================
/*function App() {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.any.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
    filter: PropTypes.string,
  };

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storedContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('comp upd', this.state.contacts);
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleChangeFilter = event => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  formSubmitHandler = data => {
    console.log('formSubmitHandler data:', data);
  };

  addNewContact = (newName, newNumber) => {
    const isNew = this.state.contacts.some(({ name }) => name === newName);
    if (isNew) {
      alert(`${newName} is already in contacts.`);
      return;
    }

    if (newName && newNumber) {
      const newContact = { id: uuidv4(), name: newName, number: newNumber };
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
    // console.log('newName, newNumber', newName, newNumber);
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContactHandler = contactId => {
    console.log('id called: ', contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    // console.log('uuidv4():',uuidv4());
    // console.log('this.state.name:',this.state.name);
    // console.log('this.state.number:',this.state.number);

    return (
      <div className="App">
        <Section title="Phonebook">
          <ContactForm
            onFormSubmit={this.formSubmitHandler}
            onNewContactAdd={this.addNewContact}
          />
        </Section>

        <Section title="Contacts">
          <Filter
            message="Find contacts by name"
            filter={this.state.filter}
            onChange={this.handleChangeFilter}
          />

          <ContactList
            contacts={this.getFilteredContacts()}
            onDeleteCont={this.deleteContactHandler}
          />
        </Section>
      </div>
    );
  }
} */
