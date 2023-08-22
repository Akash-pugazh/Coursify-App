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
import AdminDisplay from "../Components/AdminDisplay";
import UserDisplay from "../Components/UserDisplay";

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomePage />}>
        <Route index element={<DisplayPage />} />
        <Route path="admin">
          <Route index element={<AdminDisplay />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
        <Route path="user">
          <Route index element={<UserDisplay />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Routes;
