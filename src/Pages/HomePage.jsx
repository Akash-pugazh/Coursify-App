import React from "react";
import { Outlet } from "react-router-dom";

import AppBar from "../Components/AppBar";

const HomePage = () => {
  return (
    <div className="px-2 pt-2 h-screen w-screen">
      <div className="h-[10%]">
        <AppBar />
      </div>
      <div className="h-[80%]">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
