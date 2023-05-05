import Contacts from '../components/contacts/ContactsList';
import UserForm from '../components/userForm/UserForm';
import { Filter } from '../components/filter/Filter';
import { Section } from './section/Section';
import { Loader } from './loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';
const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <UserForm />

        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <Loader heightLoader={35} widthLoader={35} />}
        <Contacts />
      </Section>
    </>
  );
};

export default App;
