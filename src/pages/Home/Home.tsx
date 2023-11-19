import { useEffect, useState } from 'react';
import DataTable from '../../components/DataTable/DataTable';
import Filters from '../../components/Filters/Filters';
import UserCard from '../../components/UserCard/UserCard';
import { filterHelper } from '../../helpers/filterHelper';
import useGetContacts from '../../helpers/getContacts';
import { Contact } from '../../types/Contact';
import { FiltersType } from '../../types/FiltersType';
import './Home.scss';

function Home() {
  const {
    data: contacts,
    error,
    isLoading,
  } = useGetContacts();

  const [filters, setFilters] = useState<FiltersType>();
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);

  const handleFilterClick = (filters: FiltersType) => {
    setFilters(filters);
  };

  useEffect(() => {
    if (!contacts) return;
    setFilteredContacts(filterHelper(contacts, filters));
  }, [contacts, filters]);
  

  if (isLoading) return <div>Fetching contacts...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  if (contacts) {
    return (
      <>
        <Filters contacts={contacts} onFilterClick={handleFilterClick}></Filters>
        <section className="data-content">
          <div className="table-wrapper">
            <DataTable contacts={filteredContacts}/>
          </div>
          <div className="selected-user">
            <UserCard />
          </div>
        </section>
      </>
    );
  }
}

export default Home;
