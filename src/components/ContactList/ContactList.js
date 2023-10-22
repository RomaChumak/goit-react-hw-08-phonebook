import { useDispatch, useSelector } from 'react-redux';
import {
  ContactItem,
  ContactName,
  ContactNumber,
  DeleteBtn,
} from './ContactList.styled';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <div>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ContactName>{name}:</ContactName>{' '}
          <ContactNumber>{number}</ContactNumber>
          <DeleteBtn onClick={() => dispatch(deleteContact(id))}>
            Delete
          </DeleteBtn>
        </ContactItem>
      ))}
    </div>
  );
};