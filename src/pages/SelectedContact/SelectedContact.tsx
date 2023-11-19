import { useParams } from 'react-router-dom';
import UserCard from '../../components/UserCard/UserCard';
import useGetContactById from '../../helpers/useGetContactById';

const SelectedContact = () => {
  const { contactId } = useParams();
  
  const {
    data: contact,
    error,
    isLoading,
  } = useGetContactById(contactId!);

  if (isLoading) return <div>Fetching selected contact...</div>;

  if (error) return <div>An error occurred: {error.message}</div>;

  if (!contact) return <p>User not found</p>;
  
  if (contact) return <UserCard contact={contact!}/>;
};

export default SelectedContact;
