import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import AllApps from '../pages/AllApps/AllApps';
import AppDetails from '../pages/AppDetails/AppDetails';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: '/',
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
    ],
  },
]);
