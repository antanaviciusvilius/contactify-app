import { Outlet } from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import './Root.scss';

function Root() {
  return (
    <>
      <div className="root-container">
        <TopBar></TopBar>
        <main className='main-content'>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Root;
