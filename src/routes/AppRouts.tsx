import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppLayout from '@/components/AppLayout';
import { lazy } from 'react';
const Home = lazy(() => import('@/pages/Home'));
const Projects = lazy(() => import('@/pages/Projects'));
const ContactReq = lazy(() => import('@/pages/ContactReq'));
const Error = lazy(() => import('@/pages/Error'));
const EditProjectsPage = lazy(() => import('@/pages/EditProjectsPage'));
const NewProjectPage = lazy(() => import('@/pages/NewProjectPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/contact-request',
        element: <ContactReq />
      },
      {
        path: '/projects/edit/:id',
        element: <EditProjectsPage />
      },
      {
        path: '/projects/new',
        element: <NewProjectPage />
      }
    ]
  }
]);

function AppRouts() {
  return <RouterProvider router={router} />;
}

export default AppRouts;
