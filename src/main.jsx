import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from 'react-router';
import RootLayout from './Layout/RootLayout';
import Apps from './pages/Apps/Apps';
import InstallApps from './pages/InstallApps/InstallApps';
import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
   children: [
    {
      path: "/",
      element: <HomePage/>,
      loader: () => fetch("/data.json")
    },
    {
      path: "/apps",
      element: <Apps/>,
    },
    {
      path: "/installedApps",
      element: <InstallApps/>
    },
   ],
   errorElement: <ErrorPage/>
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
