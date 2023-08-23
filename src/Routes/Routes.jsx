import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HomePage from "../Pages/HomePage";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import DisplayPage from "../Pages/DisplayPage";
import NotFoundPage from "../Pages/NotFoundPage";

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />}>
          <Route index element={<DisplayPage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default Routes;
