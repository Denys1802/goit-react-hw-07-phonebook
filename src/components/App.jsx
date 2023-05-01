import Contacts from '../components/contacts/ContactsList';
import UserForm from '../components/userForm/UserForm';
import { Filter } from '../components/filter/Filter';
import { Section } from './section/Section';

const App = () => {
  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <UserForm />
        <h2>Contacts</h2>
        <Filter />
        <Contacts />
      </Section>
    </>
  );
};

export default App;
