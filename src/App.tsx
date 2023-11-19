import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import customTheme from './helpers/customTheme';
import Contacts from './pages/Contacts/Contacts';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Root from './pages/Root/Root';
import SelectedContact from './pages/SelectedContact/SelectedContact';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Contacts />,
          children: [
            {
              path: "contact/:contactId",
              element: <SelectedContact />,
            }
          ]
        },
      ],
    },
  ]);
  
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={customTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
