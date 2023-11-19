import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import DataTable from '../../components/DataTable/DataTable';
import Filters from '../../components/Filters/Filters';
import { filterHelper } from '../../helpers/filterHelper';
import useGetContacts from '../../helpers/useGetContacts';
import { Contact } from '../../types/Contact';
import { FiltersType } from '../../types/FiltersType';
import './Contacts.scss';

const Contacts = () => {
  const {
    data: contacts,
    error,
    isLoading,
  } = useGetContacts();

  const [filters, setFilters] = useState<FiltersType>();
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);

  const navigate = useNavigate();

  const handleFilterClick = (filters: FiltersType) => {
    setFilters(filters);
  };

  useEffect(() => {
    if (!contacts) return;
    setFilteredContacts(filterHelper(contacts, filters));
  }, [contacts, filters]);

  const handleOnContactSelect = (contactId: string) => {
    navigate(`/contact/${contactId}`);
  };


  if (isLoading) return <div>Fetching contacts...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  if (contacts) {
    return (
      <>
        <Filters contacts={contacts} onFilterClick={handleFilterClick}></Filters>
        <section className="contacts-wrapper">
          <div className="table-wrapper">
            <DataTable contacts={filteredContacts} onContactSelect={handleOnContactSelect}/>
          </div>
          <div className="router-wrapper">
            <Outlet />
          </div>
        </section>
      </>
    );
  }
};

export default Contacts;
