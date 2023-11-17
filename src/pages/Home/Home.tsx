import DataTable from '../../components/DataTable/DataTable';
import Filters from '../../components/Filters/Filters';
import UserCard from '../../components/UserCard/UserCard';
import useGetContacts from '../../helpers/getContacts';
import './Home.scss';

function Home() {
  const {
    data: contacts,
    error,
    isLoading,
  } = useGetContacts();

  if (isLoading) return <div>Fetching contacts...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  if (contacts) {
    return (
      <>
        <Filters></Filters>
        <section className="data-content">
          <div className="table-wrapper">
            <DataTable contacts={contacts}/>
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
