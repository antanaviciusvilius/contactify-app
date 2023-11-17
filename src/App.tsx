import { ThemeProvider } from '@mui/material';
import './App.scss';
import DataTable from './components/DataTable/DataTable';
import Filters from './components/Filters/Filters';
import TopBar from './components/TopBar/TopBar';
import UserCard from './components/UserCard/UserCard';
import customTheme from './helpers/customTheme';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="app-container">
        <TopBar></TopBar>
        <main className='main-content'>
          <Filters></Filters>
          <section className="data-content">
            <div className="table-wrapper">
              <DataTable />
            </div>
            <div className="selected-user">
              <UserCard />
            </div>
          </section>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
