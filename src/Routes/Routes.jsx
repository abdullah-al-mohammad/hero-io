import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import AllApps from '../pages/AllApps/AllApps';
import AppDetails from '../pages/AppDetails/AppDetails';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import MyInstallation from '../pages/MyInstallation/MyInstallation';

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    Component: Root,
    children: [
      {
        path: '/',
        index: true,
        Component: Home,
      },
      {
        path: 'details/:id',
        loader: async () => {
          const res = await fetch('/data.json');
          const data = await res.json();
          return data;
        },
        Component: AppDetails,
      },
      {
        path: 'allApps',
        Component: AllApps,
      },
      {
        path: 'installed',
        Component: MyInstallation,
      },
    ],
  },
]);
