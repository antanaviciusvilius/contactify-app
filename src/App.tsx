import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.scss';
import TopBar from './components/TopBar/TopBar';
import customTheme from './helpers/customTheme';
import Home from './pages/Home/Home';


function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={customTheme}>
        <div className="app-container">
          <TopBar></TopBar>
          <main className='main-content'>
            <Home />
          </main>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
