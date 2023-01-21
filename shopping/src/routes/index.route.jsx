import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import AuthLayout from "../pages/auth/components/AuthLayout/AuthLayout";
import Welcome from "../pages/landing/pages/Welcome/Welcome";
import AboutUs from "../pages/landing/pages/AboutUs/AboutUs";
import Login from "../pages/auth/pages/Login/Login";
import Signup from "../pages/auth/pages/Signup/Signup";
import MemberLayout from "../pages/member/components/MemberLayout/MemberLayout";
import Dashboard from "../pages/member/pages/Dashboard/Dashboard";
import Finances from "../pages/member/pages/Finances/Finances";
import Settings from "../pages/member/pages/Settings/Settings";
import { authRoutesLoader } from "../loaders/auth.loader";
import { protectedRoutesLoader } from "../loaders/protected.loader";
import Products from "../pages/member/pages/Product/Products";
import ShoppingCart from "../pages/member/pages/Product/components/createcart/shopingCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />,
      },

      {
        path: "/auth",
        loader: authRoutesLoader,
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: "/auth/login",
            element: <Login />,
          },
          {
            path: "/auth/signup",
            element: <Signup />,
          },
        ],
      },
      {
        path: "/member",
        element: <MemberLayout />,
        loader: protectedRoutesLoader,
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: "/member/products",
            element: <Products />,
          },
          {
            path: "/member/shoping-cart",
            element: <ShoppingCart />,
          },
        ],
      },
    ],
  },
]);
