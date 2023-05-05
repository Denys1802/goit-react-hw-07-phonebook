import { useDispatch, useSelector } from 'react-redux';
import { List, Item, ContactsBtn, TitleList } from './ContactsList.styled';
import { deleteContact } from 'redux/operations';
import { selectFilteredContact } from 'redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const filterContacts = useSelector(selectFilteredContact);

  const handleDelete = id => dispatch(deleteContact(id));

  return filterContacts.length ? (
    <>
      <List>
        {filterContacts.map(contact => (
          <Item key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <ContactsBtn
              type="button"
              onClick={() => handleDelete(contact.id)}
              id={contact.id}
            >
              Delete
            </ContactsBtn>
          </Item>
        ))}
      </List>
    </>
  ) : (
    <TitleList>No contacts</TitleList>
  );
};

export default Contacts;

// return filterContacts.map(contact => (
//   <List key={contact.id}>
//     <Item>
//       <p>
//         {contact.name}: {contact.number}
//       </p>
//       <ContactsBtn
//         type="button"
//         onClick={() => deleteContact(contact.id)}
//         id={contact.id}
//       >
//         Delete
//       </ContactsBtn>
//     </Item>
//   </List>
// ));
