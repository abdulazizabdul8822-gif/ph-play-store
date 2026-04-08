import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import HomePage from "../pages/HomePage/HomePage";
import Apps from "../pages/Apps/Apps";
import InstallApps from "../pages/InstallApps/InstallApps";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AppDetails from "../pages/AppDetails/AppDetails";
import Dashboard from "../pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
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
        path: "/apps/:id",
        element: <AppDetails/>
    },
    {
      path: "/installedApps",
      element: <InstallApps/>
    },
    {
      path: "/dashboard",
      element: <Dashboard/>
    },
   ],
   errorElement: <ErrorPage/>
  },
  
]);