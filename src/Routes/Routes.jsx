import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HomePage from "../Pages/HomePage";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import DisplayPage from "../Pages/DisplayPage";

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomePage />}>
        <Route index element={<DisplayPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Routes;
