import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Register from "./Register/Register";
import SignInEmail from "./components/Header/SignInEmail/SignInEmail";
import AuthProvider from "./Provider/AuthProvider";
import AddCoffee from "./components/AddCoffee";
import AllCoffee from "./components/AllCoffee";
import UpdateCoffee from "./components/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/signin",
        element: <SignInEmail />,
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/coffee",
        element: <AllCoffee />,
        loader: () => fetch('http://localhost:3000/coffee')
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({params}) => fetch(`http://localhost:3000/coffee/${params.id}`)
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
