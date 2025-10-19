import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/category/:id",
          element: <CategoryNews />,
        loader: () => fetch("/news.json")
      },
    ],
  },
  {
    path: "/auth",
      element: <AuthLayout />,
      children: [
          {
              path: "/auth/login",
              element: <LogIn />
        },
          {
              path: "/auth/register",
              element: <Register />
        },
    ]
  },
  {
    path: "/news",
    element: <h2>News Layout</h2>,
  },
  {
    path: "/*",
    element: <h2>Error 404</h2>,
  },
]);

export default router;
