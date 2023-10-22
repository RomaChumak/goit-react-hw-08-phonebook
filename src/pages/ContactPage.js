import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/form/form';
import { Loader } from 'components/Loader/Loader';
import { Filter } from 'components/Filter/Filter';
import { Wrapper } from 'components/ContactList/ContactList.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
          </Helmet>
          <Wrapper>
      <ContactForm />
      <Filter />
      <div>{isLoading && Loader}</div>
              <ContactList />
          </Wrapper>
    </>
  );
}