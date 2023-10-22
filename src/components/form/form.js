import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  ContactLabel,
  StyledInput,
  ErrorForm,
  ContactBtn,
} from './form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addNumber } from 'redux/operations';

const FormSchema = Yup.object().shape({
   name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(
      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
     .required('Required'),
   number: Yup.string()
     .min(9, '9 digits required!')
     .max(19, 'Less than 16 symbols!')
      .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
     .required('Required'),

 });

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmitForm = (values, action) => {
    const isInContacts = contacts.some(
      ({ name, number }) =>
        name.toLowerCase() === values.name.toLowerCase() ||
        number === values.number
    );

    if (isInContacts) {
      return alert(`${values.name} or ${values.number}is already in contacts.`);
    }

    dispatch(addNumber(values));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={FormSchema}
      onSubmit={handleSubmitForm}
    >
      <StyledForm>
        <h1>Phonebook</h1>
        <ContactLabel>
          Name
          <StyledInput type="text" name="name" />
          <ErrorForm name="name" component="div" />
        </ContactLabel>

        <ContactLabel>
          Number
          <StyledInput type="tel" name="number" />
          <ErrorForm name="number" component="div" />
        </ContactLabel>

        <ContactBtn type="submit">Add Contact</ContactBtn>
      </StyledForm>
    </Formik>
  );
};